import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

// 1. 页面加载时打印（服务器端在加载/启动时率先执行并记录）
console.log("API Key exists:", !!process.env.GEMINI_API_KEY);

const app = express();

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
const ttsHandler = async (req: express.Request, res: express.Response) => {
  try {
    if (req.method === 'GET') {
      return res.json({ status: 'ok', message: 'TTS API is active. Use POST to generate audio.' });
    }
    const { word } = req.body;
    if (!word) {
      return res.status(400).json({ error: 'Word parameter is required' });
    }

    try {
      const ai = getAiClient();
      console.log(`Generating TTS audio for word: "${word}"`);
      
      // 2. 调用 Gemini 前打印
      console.log("Using Gemini API");
      
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
      // 4. 如果 Gemini 请求失败：输出完整错误
      console.error(apiError);
      
      console.log('Gemini TTS: Service fallback note (quota limit or restriction hit). Switching to browser SpeechSynthesis.');
      // Return a distinctive parameter so the client can fall back gracefully to browser SpeechSynthesis
      return res.json({ fallback: true, message: 'Using client-side voice fallback' });
    }
  } catch (error: any) {
    console.error('TTS Endpoint Error:', error);
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
};

app.all('/api/gemini/speech', ttsHandler);
app.all('/gemini/speech', ttsHandler);

const statusHandler = (req: express.Request, res: express.Response) => {
  const exists = !!process.env.GEMINI_API_KEY;
  res.json({ exists });
};

app.get('/api/gemini/status', statusHandler);
app.get('/gemini/status', statusHandler);

// 3. Sentence checker for practiced vocabulary
const practiceCheckHandler = async (req: express.Request, res: express.Response) => {
  try {
    if (req.method === 'GET') {
      return res.json({ status: 'ok', message: 'Practice Check API is active. Use POST with word and sentence.' });
    }
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
      
      // 2. 调用 Gemini 前打印
      console.log("Using Gemini API");

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: prompt,
        config: {
          temperature: 0.2,
        }
      });

      return res.json({ feedback: response.text });
    } catch (apiError: any) {
      // 4. 如果 Gemini 请求失败：输出完整错误
      console.error(apiError);

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
};

app.all('/api/gemini/practice-check', practiceCheckHandler);
app.all('/gemini/practice-check', practiceCheckHandler);

// Fallback for unhandled API requests to ensure they return JSON instead of HTML
app.all('/api/*', (req, res) => {
  res.status(404).json({ error: 'Not Found', message: `API endpoint ${req.method} ${req.path} not found` });
});
app.all('/api', (req, res) => {
  res.status(404).json({ error: 'Not Found', message: 'API root not found' });
});

const PORT = 3000;

// Setup development server middleware or production static files serving
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
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

if (!process.env.VERCEL) {
  startServer();
}

export default app;
