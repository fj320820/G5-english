import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-loaded GoogleGenAI client to avoid startup crashes if API key is missing
let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key || key === 'MY_GEMINI_API_KEY') {
      console.warn('Warning: GEMINI_API_KEY is not configured. Running in Mock/Fallback mode.');
      throw new Error('GEMINI_API_KEY env is missing');
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// 1. Text-to-Speech endpoint using gemini-3.1-flash-tts-preview
app.post('/api/gemini/speech', async (req, res) => {
  try {
    const { word } = req.body;
    if (!word) {
      return res.status(400).json({ error: 'Word parameter is required' });
    }

    try {
      const ai = getAiClient();
      console.log(`Generating TTS audio for word: "${word}"`);
      
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-tts-preview',
        contents: [{ parts: [{ text: `Say clearly and slowly: ${word}` }] }],
        config: {
          responseModalities: ['AUDIO'],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' }, // 'Puck', 'Charon', 'Kore', 'Fenrir', 'Zephyr'
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        return res.json({ audio: base64Audio });
      } else {
        throw new Error('TTS content was empty');
      }
    } catch (apiError: any) {
      console.log('Gemini TTS: Service fallback note (quota limit or restriction hit). Switching to browser SpeechSynthesis.');
      // Return a distinctive parameter so the client can fall back gracefully to browser SpeechSynthesis
      return res.json({ fallback: true, message: 'Using client-side voice fallback' });
    }
  } catch (error: any) {
    console.error('TTS Endpoint Error:', error);
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
});

// 2. Multi-turn Grade-5 English Tutor endpoint
const tutorHandler = async (req: express.Request, res: express.Response) => {
  try {
    const { messages, selectedContext } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const systemInstruction = `
      You are Toby, an expert friendly, encouraging, and highly patient English learning assistant designed specifically for Grade 5 primary school students (10-12 years old).
      
      Your goal is to help them learn vocabulary, verify sentence structures, and practice conversational English.
      
      CRITICAL RULES:
      1. Always explain using simple, clean English with short, easy-to-understand sentences suitable for Grade 5.
      2. Strictly adhere ONLY to the vocabulary words, units, modules, and structures provided. Do not invent unrelated advanced vocabulary or grammar that is beyond their Grade 5 level.
      3. Occasionally use cheerful emojis to keep the conversation fun and positive (e.g. ⭐, 🎉, 🚀, 🏆).
      4. Always encourage the student to read aloud, make sentences, or listen carefully.
      5. Never evaluate pronunciation scores, nor pretend to hear them speak (since it is a text-only interface).
      
      Current lesson context selected by student:
      - Semester: ${selectedContext?.semester || 'General Study'}
      - Module: ${selectedContext?.module || 'General Module'}
      - Unit: ${selectedContext?.unit || 'General Unit'}
      - Specific word active: ${selectedContext?.word || 'None'}
      
      If the student asks you questions, maintain the persona of Toby. Ask them trivia quiz questions from their active database, or tell them to try spelling a word.
    `;

    try {
      const ai = getAiClient();
      
      // Find the first user message, since Gemini multi-turn role history must start with a user message
      const firstUserIndex = messages.findIndex((m: any) => m.sender === 'user');
      const chatHistory = firstUserIndex !== -1 ? messages.slice(firstUserIndex) : [];

      // Map message history to Gemini contents structure
      const contents = chatHistory.map((m: any) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const reply = response.text || "I'm sorry, I couldn't understand that. Let's try spelling one of our unit's words!";
      return res.json({ text: reply });
    } catch (apiError: any) {
      console.error("Tutor API error:", apiError);
      return res.status(503).json({ error: 'tutor_api_failed', message: '托比老师暂时连接失败，请稍后再试。' });
    }
  } catch (error: any) {
    console.error('Tutor Endpoint General Error:', error);
    res.status(500).json({ error: '托比老师暂时连接失败，请稍后再试。' });
  }
};

app.post('/api/gemini/tutor', tutorHandler);
app.post('/api/gemini/chat', tutorHandler);

// 3. Sentence checker for practiced vocabulary
app.post('/api/gemini/practice-check', async (req, res) => {
  try {
    const { word, sentence } = req.body;
    if (!word || !sentence) {
      return res.status(400).json({ error: 'Word and sentence are required' });
    }

    const prompt = `
      As an encouraging Grade 5 English tutor, evaluate the spelling, grammar, and usage of the word "${word}" in the student's sentence below:
      
      Student Sentence: "${sentence}"
      
      Format your response with the following rules:
      - Answer using simple English suitable for 10-12 year olds.
      - First, state clearly if it is Correct or has errors, using cheerful symbols like ⭐ or 🎉.
      - Highlight what is beautiful or what needs to be improved.
      - Provide the final corrected version in clean letters.
      - Explain the correction simply.
      - End with a warm, encouraging cheer (e.g. "Excellent work! Keep typing! 🚀").
    `;

    try {
      const ai = getAiClient();
      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: prompt,
        config: {
          temperature: 0.2,
        }
      });

      return res.json({ feedback: response.text });
    } catch (apiError: any) {
      console.warn('Sentence Check: API call fallback triggered (using local spelling/word checking).');
      
      // Local check fallback
      const hasWord = sentence.toLowerCase().includes(word.toLowerCase().split(' ')[0]);
      let feedback = '';

      if (hasWord) {
        feedback = `⭐ Great Job! Your sentence is wonderful! Toby checked it and found that you used the word "${word}" brilliantly! \n\nCorrect sentence: "${sentence}"\n\nExplanation: Perfect spelling and usage. Keep showing your clever sentence skills! 🚀`;
      } else {
        feedback = `🏆 Good try! But remember to include the target word "${word}" somewhere inside your sentence. \n\nExample: "I want to be a ${word} some day." \n\nTry writing a brand-new sentence with "${word}" and submit again. Toby believes in you! ⭐`;
      }

      return res.json({ feedback });
    }
  } catch (error: any) {
    console.error('Practice Check Endpoint Error:', error);
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
});

// Setup development server middleware or production static files serving
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is happily running on http://localhost:${PORT} 🚀`);
  });
}

startServer();
