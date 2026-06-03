export interface WordItem {
  semester: 'First Semester' | 'Second Semester';
  module: string;
  unit: string;
  word: string;
  meaning: string;
  phonetic: string;
  phonics: string;
  example: string;
  translation: string;
  memoryTip: string;
}

export const VOCABULARY_LIST: WordItem[] = [
  // === FIRST SEMESTER ===
  {
    semester: 'First Semester',
    module: 'Getting to Know Each Other',
    unit: 'My Future',
    word: 'want',
    meaning: '想要',
    phonetic: '/wɒnt/',
    phonics: 'want',
    example: 'I want to be a pilot.',
    translation: '我想成为一名飞行员。',
    memoryTip: 'Think of something you really hope to get or do!'
  },
  {
    semester: 'First Semester',
    module: 'Getting to Know Each Other',
    unit: 'My Future',
    word: 'pilot',
    meaning: '飞行员',
    phonetic: '/ˈpaɪlət/',
    phonics: 'pi-lot',
    example: 'I want to be a pilot.',
    translation: '我想成为一名飞行员。',
    memoryTip: 'Think of a brave person flying a big airplane in the blue sky.'
  },
  {
    semester: 'First Semester',
    module: 'Getting to Know Each Other',
    unit: 'My Future',
    word: 'teach',
    meaning: '教',
    phonetic: '/tiːtʃ/',
    phonics: 'teach',
    example: 'I want to teach English.',
    translation: '我想教英语。',
    memoryTip: 'Like a teacher standing by the blackboard showing you new words.'
  },
  {
    semester: 'First Semester',
    module: 'Getting to Know Each Other',
    unit: 'My Future',
    word: 'cook',
    meaning: '厨师；烹饪',
    phonetic: '/kʊk/',
    phonics: 'cook',
    example: 'I want to be a cook.',
    translation: '我想成为一名厨师。',
    memoryTip: 'Picture a person with a tall white hat making delicious meals.'
  },
  {
    semester: 'First Semester',
    module: 'Getting to Know Each Other',
    unit: 'My Future',
    word: 'taxi driver',
    meaning: '出租车司机',
    phonetic: '/ˈtæksi ˈdraɪvə(r)/',
    phonics: 'tax-i driv-er',
    example: 'My uncle is a taxi driver.',
    translation: '我的叔叔是一名出租车司机。',
    memoryTip: 'Think of a car driver taking people around the busy city.'
  },
  {
    semester: 'First Semester',
    module: 'Getting to Know Each Other',
    unit: 'My Future',
    word: 'job',
    meaning: '工作',
    phonetic: '/dʒɒb/',
    phonics: 'job',
    example: 'He likes his new job.',
    translation: '他喜欢他的新工作。',
    memoryTip: 'An activity you do to help others and earn pocket money.'
  },
  {
    semester: 'First Semester',
    module: 'Getting to Know Each Other',
    unit: 'My Future',
    word: 'become',
    meaning: '成为',
    phonetic: '/bɪˈkʌm/',
    phonics: 'be-come',
    example: 'Froggy becomes a lifeguard.',
    translation: 'Froggy成为了一名救生员。',
    memoryTip: 'Change from one thing into something else, like a tadpole to a frog.'
  },
  {
    semester: 'First Semester',
    module: 'Getting to Know Each Other',
    unit: 'Going to School',
    word: 'by',
    meaning: '乘坐；通过',
    phonetic: '/baɪ/',
    phonics: 'by',
    example: 'I come to school by bus.',
    translation: '我坐公交来学校。',
    memoryTip: 'Short word we put before transit tools: by bus, by train, by car.'
  },
  {
    semester: 'First Semester',
    module: 'Getting to Know Each Other',
    unit: 'Going to School',
    word: 'walk',
    meaning: '步行',
    phonetic: '/wɔːk/',
    phonics: 'walk',
    example: 'I walk to school.',
    translation: '我步行去学校。',
    memoryTip: 'Using your left and right feet to travel together without wheels.'
  },
  {
    semester: 'First Semester',
    module: 'Getting to Know Each Other',
    unit: 'Going to School',
    word: 'underground',
    meaning: '地铁',
    phonetic: '/ˈʌndəɡraʊnd/',
    phonics: 'un-der-ground',
    example: 'I go to school by underground.',
    translation: '我坐地铁去学校。',
    memoryTip: 'A fast train that travels underground! Under + Ground.'
  },
  {
    semester: 'First Semester',
    module: 'Getting to Know Each Other',
    unit: 'Going to School',
    word: 'take',
    meaning: '乘坐；拿',
    phonetic: '/teɪk/',
    phonics: 'take',
    example: 'She takes the train.',
    translation: '她乘坐火车。',
    memoryTip: 'An active verb for boarding a vehicle, like taking a bus.'
  },
  {
    semester: 'First Semester',
    module: 'Getting to Know Each Other',
    unit: 'Going to School',
    word: 'after',
    meaning: '在……之后',
    phonetic: '/ˈɑːftə(r)/',
    phonics: 'af-ter',
    example: 'After half an hour, she gets off.',
    translation: '半小时后，她下车。',
    memoryTip: 'The opposite of before. Follows something in time.'
  },
  {
    semester: 'First Semester',
    module: 'Getting to Know Each Other',
    unit: 'Going to School',
    word: 'hour',
    meaning: '小时',
    phonetic: '/ˈaʊə(r)/',
    phonics: 'hour',
    example: 'It takes half an hour.',
    translation: '这花费半小时。',
    memoryTip: 'A block of 60 minutes. The giant hand on the clock turns once.'
  },
  {
    semester: 'First Semester',
    module: 'Getting to Know Each Other',
    unit: 'My Birthday',
    word: 'party',
    meaning: '聚会',
    phonetic: '/ˈpɑːti/',
    phonics: 'par-ty',
    example: 'Please come to my birthday party.',
    translation: '请来参加我的生日聚会。',
    memoryTip: 'Balloons, sweet cakes, and happy games with lots of your school friends.'
  },
  {
    semester: 'First Semester',
    module: 'Getting to Know Each Other',
    unit: 'My Birthday',
    word: 'when',
    meaning: '什么时候',
    phonetic: '/wen/',
    phonics: 'when',
    example: 'When\'s your birthday?',
    translation: '你的生日是什么时候？',
    memoryTip: 'Question word for asking about time, dates, or days.'
  },
  {
    semester: 'First Semester',
    module: 'Getting to Know Each Other',
    unit: 'My Birthday',
    word: 'begin',
    meaning: '开始',
    phonetic: '/bɪˈɡɪn/',
    phonics: 'be-gin',
    example: 'The party begins at two o\'clock.',
    translation: '聚会两点开始。',
    memoryTip: 'Press the start button! The first step of any game.'
  },
  {
    semester: 'First Semester',
    module: 'Getting to Know Each Other',
    unit: 'My Birthday',
    word: 'bring',
    meaning: '带来',
    phonetic: '/brɪŋ/',
    phonics: 'bring',
    example: 'Can you bring some orange things?',
    translation: '你能带一些橙色的东西吗？',
    memoryTip: 'Carry a gift or a toy with you to a friend\'s house.'
  },
  {
    semester: 'First Semester',
    module: 'Getting to Know Each Other',
    unit: 'My Birthday',
    word: 'thing',
    meaning: '东西',
    phonetic: '/θɪŋ/',
    phonics: 'thing',
    example: 'I have an orange thing.',
    translation: '我有一个橙色的东西。',
    memoryTip: 'Any object, toy, tool, or gift you can physically hold.'
  },
  {
    semester: 'First Semester',
    module: 'Getting to Know Each Other',
    unit: 'My Birthday',
    word: 'favourite',
    meaning: '最喜欢的',
    phonetic: '/ˈfeɪvərɪt/',
    phonics: 'fa-vour-ite',
    example: 'Orange is my favourite colour.',
    translation: '橙色是我最喜欢的颜色。',
    memoryTip: 'Your number one choice of food, color, or game! None other beats it.'
  },
  {
    semester: 'First Semester',
    module: 'Getting to Know Each Other',
    unit: 'My Birthday',
    word: 'interesting',
    meaning: '有趣的',
    phonetic: '/ˈɪntrəstɪŋ/',
    phonics: 'in-ter-est-ing',
    example: 'That sounds interesting.',
    translation: '那听起来很有趣。',
    memoryTip: 'Something so cool or exciting that you want to see or read it again.'
  },
  {
    semester: 'First Semester',
    module: 'Getting to Know Each Other',
    unit: 'My Birthday',
    word: 'hat',
    meaning: '帽子',
    phonetic: '/hæt/',
    phonics: 'hat',
    example: 'I have an orange hat.',
    translation: '我有一顶橙色的帽子。',
    memoryTip: 'A clothing item you wear on your head to block the bright hot sun.'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Grandparents',
    word: 'usually',
    meaning: '通常',
    phonetic: '/ˈjuːʒuəli/',
    phonics: 'u-su-al-ly',
    example: 'I usually play chess with my grandpa.',
    translation: '我通常和爷爷下棋。',
    memoryTip: 'Something you do almost every day or most of the time (about 80%).'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Grandparents',
    word: 'often',
    meaning: '经常',
    phonetic: '/ˈɒfn/',
    phonics: 'of-ten',
    example: 'I often visit my grandparents.',
    translation: '我经常看看我的祖父母。',
    memoryTip: 'Something you do many times, very frequently (about 60%).'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Grandparents',
    word: 'visit',
    meaning: '看望；参观',
    phonetic: '/ˈvɪzɪt/',
    phonics: 'vis-it',
    example: 'I visit them at the weekend.',
    translation: '我周末去看望他们。',
    memoryTip: 'Going to spend happy time with your relatives or see a lovely museum.'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Grandparents',
    word: 'sometimes',
    meaning: '有时',
    phonetic: '/ˈsʌmtaɪmz/',
    phonics: 'some-times',
    example: 'I sometimes play table tennis.',
    translation: '我有时打乒乓球。',
    memoryTip: 'Not very often, maybe once or twice a week (about 30%).'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Grandparents',
    word: 'always',
    meaning: '总是',
    phonetic: '/ˈɔːlweɪz/',
    phonics: 'al-ways',
    example: 'She is always kind.',
    translation: '她总是很友善。',
    memoryTip: 'Every single time! 100% of the time, without missing any day.'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Grandparents',
    word: 'never',
    meaning: '从不',
    phonetic: '/ˈnevə(r)/',
    phonics: 'nev-er',
    example: 'Grandma is never late.',
    translation: '奶奶从不迟到。',
    memoryTip: '0% of the time. It has not happened at all and will not.'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Friends',
    word: 'clever',
    meaning: '聪明的',
    phonetic: '/ˈklevə(r)/',
    phonics: 'clev-er',
    example: 'Alice is clever.',
    translation: 'Alice很聪明。',
    memoryTip: 'A clever classmate quickly solves math puzzles and learns words fast.'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Friends',
    word: 'same',
    meaning: '相同的',
    phonetic: '/seɪm/',
    phonics: 'same',
    example: 'We\'re in the same class.',
    translation: '我们在同一个班。',
    memoryTip: 'Two things are exactly like each other. Spot no differences.'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Friends',
    word: 'class',
    meaning: '班级',
    phonetic: '/klɑːs/',
    phonics: 'class',
    example: 'We are in the same class.',
    translation: '我们在同一个班。',
    memoryTip: 'A big group of pupils who study together with the same teacher.'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Friends',
    word: 'both',
    meaning: '两者都',
    phonetic: '/bəʊθ/',
    phonics: 'both',
    example: 'We both like sport.',
    translation: '我们都喜欢运动。',
    memoryTip: 'Refer to TWO people or things together. You and your best friend.'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Friends',
    word: 'heavy',
    meaning: '重的',
    phonetic: '/ˈhevi/',
    phonics: 'heav-y',
    example: 'The bag is heavy.',
    translation: '这个包很重。',
    memoryTip: 'Something difficult to lift. An elephant is heavy, a flower is light.'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Friends',
    word: 'different',
    meaning: '不同的',
    phonetic: '/ˈdɪfrənt/',
    phonics: 'dif-fer-ent',
    example: 'We like different subjects.',
    translation: '我们喜欢不同的科目。',
    memoryTip: 'The opposite of same. Not alike; having unique traits.'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Friends',
    word: 'word',
    meaning: '单词',
    phonetic: '/wɜːd/',
    phonics: 'word',
    example: 'This word is easy.',
    translation: '这个单词很容易。',
    memoryTip: 'A block of letters that has a tidy meaning, like cat or pilot.'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Friends',
    word: 'easy',
    meaning: '容易的',
    phonetic: '/ˈeːzi/',
    phonics: 'ea-sy',
    example: 'The game is easy.',
    translation: '这个游戏很容易。',
    memoryTip: 'The opposite of hard. Standard homework that needs very little worry!'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Friends',
    word: 'say',
    meaning: '说',
    phonetic: '/seɪ/',
    phonics: 'say',
    example: 'Can you say this word?',
    translation: '你会说这个单词吗？',
    memoryTip: 'Open your mouth and let out words so people can hear your voice.'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Friends',
    word: 'ask',
    meaning: '问',
    phonetic: '/ɑːsk/',
    phonics: 'ask',
    example: 'Can I ask a question?',
    translation: '我能问一个问题吗？',
    memoryTip: 'When you are curious about something, raise your hand and speak!'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Friends',
    word: 'answer',
    meaning: '回答',
    phonetic: '/ˈɑːnsə(r)/',
    phonics: 'an-swer',
    example: 'Please answer the question.',
    translation: '请回答这个问题。',
    memoryTip: 'The smart solution or reply to a question from your tutor.'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Family Life',
    word: 'living room',
    meaning: '客厅',
    phonetic: '/ˈlɪvɪŋ ruːm/',
    phonics: 'liv-ing room',
    example: 'Dad is in the living room.',
    translation: '爸爸在客厅里。',
    memoryTip: 'The warm room with a comfortable sofa and the TV.'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Family Life',
    word: 'bedroom',
    meaning: '卧室',
    phonetic: '/ˈbedruːm/',
    phonics: 'bed-room',
    example: 'I am in my bedroom.',
    translation: '我在我的卧室里。',
    memoryTip: 'Your cozy room with a soft bed for sweet dreams. Bed + Room.'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Family Life',
    word: 'kitchen',
    meaning: '厨房',
    phonetic: '/ˈkɪtʃɪn/',
    phonics: 'kitch-en',
    example: 'Mum is cooking in the kitchen.',
    translation: '妈妈正在厨房做饭。',
    memoryTip: 'Where pots, pans, ovens, and tasty ingredients live together.'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Family Life',
    word: 'bathroom',
    meaning: '浴室',
    phonetic: '/ˈɑːθruːm/',
    phonics: 'bath-room',
    example: 'The bathroom is clean.',
    translation: '浴室很干净。',
    memoryTip: 'The room where you take a warm bath and brush teeth. Bath + Room.'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Family Life',
    word: 'their',
    meaning: '他们的',
    phonetic: '/ðeə(r)/',
    phonics: 'their',
    example: 'This is their home.',
    translation: '这是他们的家。',
    memoryTip: 'Belongs to them (the group of classmates or friends).'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Family Life',
    word: 'light',
    meaning: '灯；光',
    phonetic: '/laɪt/',
    phonics: 'light',
    example: 'Turn off the light.',
    translation: '关灯。',
    memoryTip: 'The glowing lamp that helps you study at night.'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Family Life',
    word: 'watch',
    meaning: '观看',
    phonetic: '/wɒtʃ/',
    phonics: 'watch',
    example: 'Dad is watching TV.',
    translation: '爸爸正在看电视。',
    memoryTip: 'Keep your eyes on something active, like a football match.'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Family Life',
    word: 'TV',
    meaning: '电视',
    phonetic: '/ˌtiː ˈviː/',
    phonics: 'T-V',
    example: 'I watch TV before bedtime.',
    translation: '我睡前看电视。',
    memoryTip: 'Short for Television. A screen with moving cartoons and quiz shows.'
  },
  {
    semester: 'First Semester',
    module: 'Relationships',
    unit: 'Family Life',
    word: 'before',
    meaning: '在……之前',
    phonetic: '/bɪˈfɔː(r)/',
    phonics: 'be-fore',
    example: 'I brush my teeth before bed.',
    translation: '我睡前刷牙。',
    memoryTip: 'Happening prior to an event. Eat soup before dessert!'
  },
  {
    semester: 'First Semester',
    module: 'Out and About',
    unit: 'At the Beach',
    word: 'beach',
    meaning: '海滩',
    phonetic: '/biːtʃ/',
    phonics: 'beach',
    example: 'We are at the beach.',
    translation: '我们在海滩上。',
    memoryTip: 'Soft golden sand and cool sea waves where you build sandcastles.'
  },
  {
    semester: 'First Semester',
    module: 'Out and About',
    unit: 'At the Beach',
    word: 'enjoy',
    meaning: '享受；喜欢',
    phonetic: '/ɪnˈdʒɔɪ/',
    phonics: 'en-joy',
    example: 'They enjoy the sunshine.',
    translation: '他们享受阳光。',
    memoryTip: 'Feel very happy when doing an activity, like eating sweet ice cream.'
  },
  {
    semester: 'First Semester',
    module: 'Out and About',
    unit: 'At the Beach',
    word: 'collect',
    meaning: '收集',
    phonetic: '/kəˈlekt/',
    phonics: 'col-lect',
    example: 'Paul is collecting shells.',
    translation: 'Paul正在收集贝壳。',
    memoryTip: 'Pick up many pieces of cool things like shell coins or red stamps.'
  },
  {
    semester: 'First Semester',
    module: 'Out and About',
    unit: 'At the Beach',
    word: 'sea',
    meaning: '海',
    phonetic: '/siː/',
    phonics: 'sea',
    example: 'The sea is blue.',
    translation: '大海是蓝色的。',
    memoryTip: 'A giant body of salty water with fishes, boats, and blue waves.'
  },
  {
    semester: 'First Semester',
    module: 'Out and About',
    unit: 'At the Beach',
    word: 'letter',
    meaning: '信；字母',
    phonetic: '/ˈletə(r)/',
    phonics: 'let-ter',
    example: 'I put the letter in the bottle.',
    translation: '我把信放进瓶子里。',
    memoryTip: 'A written paper note to a friend, or an ABC building block.'
  },
  {
    semester: 'First Semester',
    module: 'Out and About',
    unit: 'At the Beach',
    word: 'put',
    meaning: '放',
    phonetic: '/pʊt/',
    phonics: 'put',
    example: 'Put the letter in the box.',
    translation: '把信放进盒子里。',
    memoryTip: 'Move an object into a tidy position, like putting crayons inside a bag.'
  },
  {
    semester: 'First Semester',
    module: 'Out and About',
    unit: 'At the Beach',
    word: 'know',
    meaning: '知道',
    phonetic: '/nəʊ/',
    phonics: 'know',
    example: 'Do you know the answer?',
    translation: '你知道答案吗？',
    memoryTip: 'When information is kept warm inside your clever brain.'
  },
  {
    semester: 'First Semester',
    module: 'Out and About',
    unit: 'At the Beach',
    word: 'year',
    meaning: '年',
    phonetic: '/jɪə(r)/',
    phonics: 'year',
    example: 'This year is special.',
    translation: '今年很特别。',
    memoryTip: 'A long block of 365 days; the time between birthdays.'
  },
  {
    semester: 'First Semester',
    module: 'Out and About',
    unit: 'An Outing',
    word: 'map',
    meaning: '地图',
    phonetic: '/mæp/',
    phonics: 'map',
    example: 'I\'m reading the map.',
    translation: '我正在看地图。',
    memoryTip: 'A helpful paper drawing that shows you where roads and rivers go.'
  },
  {
    semester: 'First Semester',
    module: 'Out and About',
    unit: 'An Outing',
    word: 'hill',
    meaning: '小山',
    phonetic: '/hɪl/',
    phonics: 'hill',
    example: 'There is a hill near the lake.',
    translation: '湖边有一座小山。',
    memoryTip: 'A bump of green earth. Lower than a mountain and easier to climb!'
  },
  {
    semester: 'First Semester',
    module: 'Out and About',
    unit: 'An Outing',
    word: 'find',
    meaning: '找到',
    phonetic: '/faɪnd/',
    phonics: 'find',
    example: 'Can you find another lake?',
    translation: '你能找到另一个湖吗？',
    memoryTip: 'Look around closely and discover where a hidden object is.'
  },
  {
    semester: 'First Semester',
    module: 'Out and About',
    unit: 'An Outing',
    word: 'another',
    meaning: '另一个',
    phonetic: '/əˈnʌðə(r)/',
    phonics: 'a-noth-er',
    example: 'Find another lake.',
    translation: '找另一个湖。',
    memoryTip: 'One more different object of the same type. Another candy!'
  },
  {
    semester: 'First Semester',
    module: 'Out and About',
    unit: 'An Outing',
    word: 'lake',
    meaning: '湖',
    phonetic: '/leɪk/',
    phonics: 'lake',
    example: 'The lake is beautiful.',
    translation: '这个湖很漂亮。',
    memoryTip: 'A ring of green land filled with sweet, calm blue water.'
  },
  {
    semester: 'First Semester',
    module: 'Out and About',
    unit: 'An Outing',
    word: 'key',
    meaning: '钥匙',
    phonetic: '/kiː/',
    phonics: 'key',
    example: 'Alice finds a key.',
    translation: 'Alice找到了一把钥匙。',
    memoryTip: 'A little metal tool that unlocks a secret door or treasure box.'
  },
  {
    semester: 'First Semester',
    module: 'Out and About',
    unit: 'An Outing',
    word: 'think',
    meaning: '思考；认为',
    phonetic: '/θɪŋk/',
    phonics: 'think',
    example: 'What do you think?',
    translation: '你怎么想？',
    memoryTip: 'Sit quietly and let ideas run around inside your brain.'
  },
  {
    semester: 'First Semester',
    module: 'Out and About',
    unit: 'Around the City',
    word: 'post office',
    meaning: '邮局',
    phonetic: '/ˈpəʊst ˌɒfɪs/',
    phonics: 'post of-fice',
    example: 'How do I get to the post office?',
    translation: '我怎么去邮局？',
    memoryTip: 'The public building to mail heavy parcels and letter stamps.'
  },
  {
    semester: 'First Semester',
    module: 'Out and About',
    unit: 'Around the City',
    word: 'quite',
    meaning: '相当；十分',
    phonetic: '/kwaɪt/',
    phonics: 'quite',
    example: 'It is quite near.',
    translation: '它相当近。',
    memoryTip: 'A word meaning "very" but a bit softer. Quite easy, quite near.'
  },
  {
    semester: 'First Semester',
    module: 'Out and About',
    unit: 'Around the City',
    word: 'along',
    meaning: '沿着',
    phonetic: '/əˈlɒŋ/',
    phonics: 'a-long',
    example: 'Walk along Winter Street.',
    translation: '沿着Winter Street走。',
    memoryTip: 'Moving forward parallel to a street or a long river.'
  },
  {
    semester: 'First Semester',
    module: 'Out and About',
    unit: 'Around the City',
    word: 'turn',
    meaning: '转向',
    phonetic: '/tɜːn/',
    phonics: 'turn',
    example: 'Turn left at Spring Street.',
    translation: '在Spring Street左转。',
    memoryTip: 'Change your direction at the corner, like spinning top!'
  },
  {
    semester: 'First Semester',
    module: 'Out and About',
    unit: 'Around the City',
    word: 'left',
    meaning: '左边',
    phonetic: '/left/',
    phonics: 'left',
    example: 'Turn left.',
    translation: '向向左转。',
    memoryTip: 'Make an L-shape with your left index finger and thumb to check!'
  },
  {
    semester: 'First Semester',
    module: 'Out and About',
    unit: 'Around the City',
    word: 'right',
    meaning: '右边；正确的',
    phonetic: '/raɪt/',
    phonics: 'right',
    example: 'It\'s on your right.',
    translation: '它在你的右边。',
    memoryTip: 'The hand you usually write or draw with is on your right.'
  },
  {
    semester: 'First Semester',
    module: 'Out and About',
    unit: 'Around the City',
    word: 'between',
    meaning: '在……之间',
    phonetic: '/bɪˈtwiːn/',
    phonics: 'be-tween',
    example: 'It is between the hospital and the toy shop.',
    translation: '它在医院和玩具店之间。',
    memoryTip: 'In the middle spacer. The nose is right between two eyes.'
  },
  {
    semester: 'First Semester',
    module: 'Out and About',
    unit: 'Around the City',
    word: 'flower shop',
    meaning: '花店',
    phonetic: '/ˈflaʊə ʃɒp/',
    phonics: 'flow-er shop',
    example: 'The flower shop is near the hospital.',
    translation: '花店在医院附近。',
    memoryTip: 'The colorful shop filled with sweet-smelling red roses and lilies.'
  },
  {
    semester: 'First Semester',
    module: 'Out and About',
    unit: 'Around the City',
    word: 'hospital',
    meaning: '医院',
    phonetic: '/ˈhɒspɪtl/',
    phonics: 'hos-pi-tal',
    example: 'The hospital is on your left.',
    translation: '医院在你的左边。',
    memoryTip: 'Where kind doctors and busy nurses help sick people get strong.'
  },
  {
    semester: 'First Semester',
    module: 'Out and About',
    unit: 'Around the City',
    word: 'toy shop',
    meaning: '玩具店',
    phonetic: '/tɔɪ ʃɒp/',
    phonics: 'toy shop',
    example: 'The toy shop is next to the hospital.',
    translation: '玩具店在医院旁边。',
    memoryTip: 'The most exciting store with teddy bears, toy cars, and board games!'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Wind',
    word: 'blow',
    meaning: '吹',
    phonetic: '/bləʊ/',
    phonics: 'blow',
    example: 'The wind is blowing.',
    translation: '风正在吹。',
    memoryTip: 'Puff out your cheeks and push air out of your mouth!'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Wind',
    word: 'gently',
    meaning: '轻轻地',
    phonetic: '/ˈdʒentli/',
    phonics: 'gen-tly',
    example: 'The wind blows gently.',
    translation: '风轻轻地吹。',
    memoryTip: 'In a soft and sweet way, like stroking a tiny sleeping kitten.'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Wind',
    word: 'softly',
    meaning: '柔和地',
    phonetic: '/ˈsɒftli/',
    phonics: 'soft-ly',
    example: 'The wind blows softly.',
    translation: '风柔和地吹。',
    memoryTip: 'Quietly and gently. Speak softly so you do not wake your baby brother.'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Wind',
    word: 'strongly',
    meaning: '强烈地',
    phonetic: '/ˈstrɒŋli/',
    phonics: 'strong-ly',
    example: 'The wind is blowing strongly.',
    translation: '风刮得很大。',
    memoryTip: 'With huge power! A scary storm wind blowing leaves off branches.'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Wind',
    word: 'happily',
    meaning: '开心地',
    phonetic: '/ˈhæpɪli/',
    phonics: 'hap-pi-ly',
    example: 'The children are flying kites happily.',
    translation: '孩子们正在开心地放风筝。',
    memoryTip: 'With a big warm smile on your face and a joyful heart.'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Wind',
    word: 'move',
    meaning: '移动',
    phonetic: '/muːv/',
    phonics: 'move',
    example: 'The paper moves quickly.',
    translation: '纸快速地移动。',
    memoryTip: 'Go from one spot to another. Don\'t stay completely still!'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Wind',
    word: 'slowly',
    meaning: '慢慢地',
    phonetic: '/ˈsləʊli/',
    phonics: 'slow-ly',
    example: 'Move slowly, please.',
    translation: '请慢慢移动。',
    memoryTip: 'Like a little green snail crawling on a long wet leaf.'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Wind',
    word: 'quickly',
    meaning: '快速地',
    phonetic: '/ˈkwɪkli/',
    phonics: 'quick-ly',
    example: 'The paper moves quickly.',
    translation: '纸快速地移动。',
    memoryTip: 'Like a golden cheetah running very fast across fields!'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Wind',
    word: 'sound',
    meaning: '声音',
    phonetic: '/saʊnd/',
    phonics: 'sound',
    example: 'I can hear the sound of the wind.',
    translation: '我能听见风的声音。',
    memoryTip: 'Something you capture with your ears, like songs and bird whistles.'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Wind',
    word: 'paper',
    meaning: '纸',
    phonetic: '/ˈpeɪpə(r)/',
    phonics: 'pa-per',
    example: 'The paper is moving.',
    translation: '纸正在移动。',
    memoryTip: 'White sheet from a notebook that you draw stories on.'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Wind',
    word: 'quiet',
    meaning: '安静的',
    phonetic: '/ˈkwaɪət/',
    phonics: 'qui-et',
    example: 'The room is quiet.',
    translation: '房间很安静。',
    memoryTip: 'No loud noises at all. Shh... like a library room during reading.'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Water',
    word: 'use',
    meaning: '使用',
    phonetic: '/juːz/',
    phonics: 'use',
    example: 'We use water to wash our hands.',
    translation: '我们用水洗手。',
    memoryTip: 'Perform an action with a tool, like using a black pen to write.'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Water',
    word: 'clothes',
    meaning: '衣服',
    phonetic: '/kləʊðz/',
    phonics: 'clothes',
    example: 'We use water to wash clothes.',
    translation: '我们用水洗衣服。',
    memoryTip: 'The shirts, sweaters, and trousers you wear every day.'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Water',
    word: 'farmer',
    meaning: '农夫',
    phonetic: '/ˈfɑːmə(r)/',
    phonics: 'farm-er',
    example: 'Farmers use water to grow crops.',
    translation: '农民用水种庄稼。',
    memoryTip: 'A hard-working person who lives in a village growing rice and wheat.'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Water',
    word: 'useful',
    meaning: '有用的',
    phonetic: '/ˈjuːsfl/',
    phonics: 'use-ful',
    example: 'Water is useful.',
    translation: '水是有用的。',
    memoryTip: 'Something that helps you do a task. Use + ful = full of help!'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Water',
    word: 'up',
    meaning: '向上',
    phonetic: '/ʌp/',
    phonics: 'up',
    example: 'The sun shines and water goes up.',
    translation: '太阳照耀，水升上去。',
    memoryTip: 'Look at the sky! The opposite of down.'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Water',
    word: 'shine',
    meaning: '照耀',
    phonetic: '/ʃaɪn/',
    phonics: 'shine',
    example: 'The sun shines.',
    translation: '太阳照耀。',
    memoryTip: 'The bright glowing light of the yellow sun or sparkling stars.'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Water',
    word: 'over',
    meaning: '在……上方',
    phonetic: '/ˈəʊvə(r)/',
    phonics: 'o-ver',
    example: 'Clouds move over the mountains.',
    translation: '云在山上方移动。',
    memoryTip: 'Positional word meaning above or higher than something.'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Water',
    word: 'tree',
    meaning: '树',
    phonetic: '/triː/',
    phonics: 'tree',
    example: 'Trees need water.',
    translation: '树需要水。',
    memoryTip: 'A tall wooden plant with green leaves, brown branches and strong roots.'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Water',
    word: 'ground',
    meaning: '地面',
    phonetic: '/ɡraʊnd/',
    phonics: 'ground',
    example: 'Water falls to the ground.',
    translation: '水落到地面上。',
    memoryTip: 'The dirt or tiles under your feet that you stand on.'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Fire',
    word: 'fire',
    meaning: '火',
    phonetic: '/ˈfaɪə(r)/',
    phonics: 'fire',
    example: 'We must be careful with fire.',
    translation: '我们必须小心火。',
    memoryTip: 'Bright, hot dancing red flame used for cooking but dangerous to touch.'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Fire',
    word: 'hurt',
    meaning: '伤害',
    phonetic: '/hɜːt/',
    phonics: 'hurt',
    example: 'Fire can hurt people.',
    translation: '火会伤害人。',
    memoryTip: 'To bring pain or damage. Walk carefully to not bump your knee!'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Fire',
    word: 'must',
    meaning: '必须',
    phonetic: '/mʌst/',
    phonics: 'must',
    example: 'We must be careful.',
    translation: '我们必须小心。',
    memoryTip: 'Something you are strictly required to do! It\'s a rules requirement.'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Fire',
    word: 'careful',
    meaning: '小心的',
    phonetic: '/ˈkeəfl/',
    phonics: 'care-ful',
    example: 'We must be careful with fire.',
    translation: '我们必须小心火。',
    memoryTip: 'Paying smart attention to avoid dangers. Care + ful.'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Fire',
    word: 'smoke',
    meaning: '吸烟；烟',
    phonetic: '/sməʊk/',
    phonics: 'smoke',
    example: 'We mustn\'t smoke in the forest.',
    translation: '我们不能在森林里吸烟。',
    memoryTip: 'The gray puffy cloud that rises from a hot campfire.'
  },
  {
    semester: 'First Semester',
    module: 'The Natural World',
    unit: 'Fire',
    word: 'hate',
    meaning: '讨厌',
    phonetic: '/heɪt/',
    phonics: 'hate',
    example: 'I hate smoke.',
    translation: '我讨厌烟。',
    memoryTip: 'The opposite of love. To really dislike something very much.'
  },

  // === SECOND SEMESTER ===
  {
    semester: 'Second Semester',
    module: 'Changes and Differences',
    unit: 'Tidy up!',
    word: 'tidy',
    meaning: '整理；干净的',
    phonetic: '/ˈtaɪdi/',
    phonics: 'ti-dy',
    example: 'You must tidy your bedroom.',
    translation: '你必须整理你的卧室。',
    memoryTip: 'Think of placing books and clothes in their correct boxes or folders!'
  },
  {
    semester: 'Second Semester',
    module: 'Changes and Differences',
    unit: 'Tidy up!',
    word: 'sock',
    meaning: '短袜',
    phonetic: '/sɒk/',
    phonics: 'sock',
    example: 'The blue sock is on the bed.',
    translation: '蓝色的袜子在床上。',
    memoryTip: 'A soft knit tube you slide onto your foot before wearing shoes.'
  },
  {
    semester: 'Second Semester',
    module: 'Changes and Differences',
    unit: 'Tidy up!',
    word: 'cap',
    meaning: '便帽；帽子',
    phonetic: '/kæp/',
    phonics: 'cap',
    example: 'Put on your cap before going out.',
    translation: '出门前戴上帽子。',
    memoryTip: 'A light hat with a curved peak/fold in front, like a baseball hat.'
  },
  {
    semester: 'Second Semester',
    module: 'Changes and Differences',
    unit: 'Tidy up!',
    word: 'crayon',
    meaning: '彩色蜡笔',
    phonetic: '/ˈkreɪən/',
    phonics: 'cray-on',
    example: 'I draw a tree with a green crayon.',
    translation: '我用绿色蜡笔画了一棵树。',
    memoryTip: 'A wax colorful pencil tube used in art class to draw beautiful trees.'
  },
  {
    semester: 'Second Semester',
    module: 'Changes and Differences',
    unit: 'Tidy up!',
    word: 'umbrella',
    meaning: '雨伞',
    phonetic: '/ʌmˈbrelə/',
    phonics: 'um-brel-la',
    example: 'Bring an umbrella on a rainy day.',
    translation: '下雨天带把伞。',
    memoryTip: 'A portable canopy that opens like a giant mushroom during storms.'
  },
  {
    semester: 'Second Semester',
    module: 'Changes and Differences',
    unit: 'Tidy up!',
    word: 'mine',
    meaning: '我的（名词性物主代词）',
    phonetic: '/maɪn/',
    phonics: 'mine',
    example: 'This red schoolbag is mine.',
    translation: '这个红书包是我的。',
    memoryTip: 'Pronoun for "my thing". That green book belongs to ME; it is mine!'
  },
  {
    semester: 'Second Semester',
    module: 'Changes and Differences',
    unit: 'Tidy up!',
    word: 'yours',
    meaning: '你的；你们的（名词性物主代词）',
    phonetic: '/jɔːz/',
    phonics: 'yours',
    example: 'Is this tidy bedroom yours?',
    translation: '这个干净的卧室是你的吗？',
    memoryTip: 'Pronoun for "your thing". It belongs to YOU.'
  },
  {
    semester: 'Second Semester',
    module: 'Changes and Differences',
    unit: 'Tidy up!',
    word: 'hers',
    meaning: '她的（名词性物主代词）',
    phonetic: '/hɜːz/',
    phonics: 'hers',
    example: 'The beautiful dress is hers.',
    translation: '那件漂亮的连衣裙是她的。',
    memoryTip: 'Pronoun for "her thing". It belongs to HER.'
  },
  {
    semester: 'Second Semester',
    module: 'Changes and Differences',
    unit: 'Tidy up!',
    word: 'theirs',
    meaning: '他们的（名词性物主代词）',
    phonetic: '/ðeəz/',
    phonics: 'theirs',
    example: 'The big kitchen is theirs.',
    translation: '那个大厨房是他们的。',
    memoryTip: 'Pronoun for "their thing". It belongs to THEM.'
  },
  {
    semester: 'Second Semester',
    module: 'Changes and Differences',
    unit: 'Our New Home',
    word: 'why',
    meaning: '为什么',
    phonetic: '/waɪ/',
    phonics: 'why',
    example: 'Why do you like the study?',
    translation: '你为什么喜欢书房？',
    memoryTip: 'Question helper for asking for a reason. Why? Because!'
  },
  {
    semester: 'Second Semester',
    module: 'Changes and Differences',
    unit: 'Our New Home',
    word: 'because',
    meaning: '因为',
    phonetic: '/bɪˈkɒz/',
    phonics: 'be-cause',
    example: 'I like it because it is quiet.',
    translation: '我喜欢它因为它很安静。',
    memoryTip: 'The bridge word you use to give a clever reason after asking why.'
  },
  {
    semester: 'Second Semester',
    module: 'Changes and Differences',
    unit: 'Our New Home',
    word: 'study',
    meaning: '书房；学习',
    phonetic: '/ˈstʌdi/',
    phonics: 'stud-y',
    example: 'Dad is reading a book in the study.',
    translation: '爸爸正在书房里读书。',
    memoryTip: 'A quiet, peaceful room with book bookshelves reserved for studying.'
  },
  {
    semester: 'Second Semester',
    module: 'Changes and Differences',
    unit: 'Our New Home',
    word: 'dining room',
    meaning: '餐厅',
    phonetic: '/ˈdaɪnɪŋ ruːm/',
    phonics: 'din-ing room',
    example: 'We have dinner in the dining room.',
    translation: '我们在餐厅里吃晚餐。',
    memoryTip: 'The room in a home where the table sits and family eats meals together.'
  },
  {
    semester: 'Second Semester',
    module: 'Changes and Differences',
    unit: 'Our New Home',
    word: 'change',
    meaning: '改变；变化',
    phonetic: '/tʃeɪndʒ/',
    phonics: 'change',
    example: 'Our life will change in the future.',
    translation: '我们的生活在未来将会改变。',
    memoryTip: 'Make something different or watch it evolve as seasons fly.'
  },
  {
    semester: 'Second Semester',
    module: 'Changes and Differences',
    unit: 'Our New Home',
    word: 'place',
    meaning: '地方；位置',
    phonetic: '/pleɪs/',
    phonics: 'place',
    example: 'This is a wonderful place.',
    translation: '这是一个奇妙的地方。',
    memoryTip: 'A spot, city, or house location where events occur.'
  },
  {
    semester: 'Second Semester',
    module: 'Changes and Differences',
    unit: 'Our New Home',
    word: 'every',
    meaning: '每个；所有的',
    phonetic: '/ˈevri/',
    phonics: 'ev-ery',
    example: 'I exercise every day.',
    translation: '我每天都运动。',
    memoryTip: 'All members of a group: every student, every day.'
  },
  {
    semester: 'Second Semester',
    module: 'Changes and Differences',
    unit: 'Our New Home',
    word: 'then',
    meaning: '然后；那时',
    phonetic: '/ðen/',
    phonics: 'then',
    example: 'First tidy up, then watch TV.',
    translation: '先整理，然后再看电视。',
    memoryTip: 'After that, next in sequence or at that specific moment.'
  },
  {
    semester: 'Second Semester',
    module: 'Changes and Differences',
    unit: 'In the Future',
    word: 'future',
    meaning: '未来',
    phonetic: '/ˈfjuːtʃə(r)/',
    phonics: 'fu-ture',
    example: 'What will you be in the future?',
    translation: '你未来想成为什么？',
    memoryTip: 'The time yet to arrive. Next week, next year, or in 2030!'
  },
  {
    semester: 'Second Semester',
    module: 'Changes and Differences',
    unit: 'In the Future',
    word: 'stand',
    meaning: '站立；起立',
    phonetic: '/stænd/',
    phonics: 'stand',
    example: 'Robot, stand up please.',
    translation: '机器人，请站起来。',
    memoryTip: 'Get onto your feet, upright. Stand up when greetings are spoken.'
  },
  {
    semester: 'Second Semester',
    module: 'Changes and Differences',
    unit: 'In the Future',
    word: 'machine',
    meaning: '机器',
    phonetic: '/məˈʃiːn/',
    phonics: 'ma-chine',
    example: 'This machine can wash clothes.',
    translation: '这台机器能洗衣服。',
    memoryTip: 'A mechanical setup with moving parts. Robots and computers are machines.'
  },
  {
    semester: 'Second Semester',
    module: 'Changes and Differences',
    unit: 'In the Future',
    word: 'will',
    meaning: '将；将会',
    phonetic: '/wɪl/',
    phonics: 'will',
    example: 'I will go to high school next year.',
    translation: '我明年将上中学。',
    memoryTip: 'Auxiliary word pointing helper to future plans. Future prediction indicator.'
  },
  {
    semester: 'Second Semester',
    module: 'Changes and Differences',
    unit: 'In the Future',
    word: 'exercise',
    meaning: '锻炼；练习',
    phonetic: '/ˈeksəsaɪz/',
    phonics: 'ex-er-cise',
    example: 'We should exercise every day.',
    translation: '我们应该每天锻炼。',
    memoryTip: 'Running, jump jumping, or climbing to make body muscles healthy.'
  },
  {
    semester: 'Second Semester',
    module: 'Changes and Differences',
    unit: 'In the Future',
    word: 'early',
    meaning: '早的；提早',
    phonetic: '/ˈɜːli/',
    phonics: 'ear-ly',
    example: 'I get up early in the morning.',
    translation: '我早上起得早。',
    memoryTip: 'Rising before usual. Ready to greet the bright rising morning sun.'
  },
  {
    semester: 'Second Semester',
    module: 'Changes and Differences',
    unit: 'In the Future',
    word: 'hard',
    meaning: '努力的；坚硬的',
    phonetic: '/hɑːd/',
    phonics: 'hard',
    example: 'We must study hard.',
    translation: '我们必须努力学习。',
    memoryTip: 'Putting in huge effort (study hard) or tough like concrete stones.'
  },
  {
    semester: 'Second Semester',
    module: 'Work and Play',
    unit: 'Reading is Fun',
    word: 'story',
    meaning: '故事',
    phonetic: '/ˈstɔːri/',
    phonics: 'sto-ry',
    example: 'Tell me an interesting story.',
    translation: '给我讲一个有趣的故事。',
    memoryTip: 'A tale with adventures, princesses, or clever animals.'
  },
  {
    semester: 'Second Semester',
    module: 'Work and Play',
    unit: 'Reading is Fun',
    word: 'storybook',
    meaning: '故事书',
    phonetic: '/ˈstɔːribʊk/',
    phonics: 'sto-ry-book',
    example: 'I have a new storybook.',
    translation: '我有一本新故事书。',
    memoryTip: 'A magical thick book packed with colorful tall tales and pictures. Story + Book.'
  },
  {
    semester: 'Second Semester',
    module: 'Work and Play',
    unit: 'Reading is Fun',
    word: 'dictionary',
    meaning: '词典；字典',
    phonetic: '/ˈdɪkʃənri/',
    phonics: 'dic-tion-ar-y',
    example: 'I use a dictionary to find new words.',
    translation: '我用词典查找生词。',
    memoryTip: 'A bulky guide book listing items alphabetically with meanings.'
  },
  {
    semester: 'Second Semester',
    module: 'Work and Play',
    unit: 'Reading is Fun',
    word: 'magazine',
    meaning: '杂志',
    phonetic: '/ˌmæɡəˈziːn/',
    phonics: 'mag-a-zine',
    example: 'She likes reading this fashion magazine.',
    translation: '她喜欢读这本时尚杂志。',
    memoryTip: 'A thin, weekly glossy periodical book covering games or science themes.'
  },
  {
    semester: 'Second Semester',
    module: 'Work and Play',
    unit: 'Reading is Fun',
    word: 'newspaper',
    meaning: '报纸',
    phonetic: '/ˈnjuːzpeɪpə(r)/',
    phonics: 'news-pa-per',
    example: 'My grandpa reads a newspaper every morning.',
    translation: '我的爷爷每天早上看报纸。',
    memoryTip: 'Large folded gray sheets filled with current news events. News + Paper.'
  },
  {
    semester: 'Second Semester',
    module: 'Work and Play',
    unit: 'Reading is Fun',
    word: 'student',
    meaning: '学生',
    phonetic: '/ˈstjuːdnt/',
    phonics: 'stu-dent',
    example: 'I am a grade five student.',
    translation: '我是一个五年级学生。',
    memoryTip: 'A pupil who goes to school to grab and absorb healthy smart ideas.'
  },
  {
    semester: 'Second Semester',
    module: 'Work and Play',
    unit: 'Reading is Fun',
    word: 'every day',
    meaning: '每天',
    phonetic: '/ˈevri deɪ/',
    phonics: 'ev-ery day',
    example: 'Read English books every day.',
    translation: '每天读英语书。',
    memoryTip: 'Seven times a week! Never missing a sunrise. Every + Day.'
  },
  {
    semester: 'Second Semester',
    module: 'Work and Play',
    unit: 'Reading is Fun',
    word: 'going to',
    meaning: '打算；将要',
    phonetic: '/ˈɡəʊɪŋ tuː/',
    phonics: 'go-ing to',
    example: 'We are going to visit the library.',
    translation: '我们打算去参观图书馆。',
    memoryTip: 'Helper showing layout plans of what you are arranging to do.'
  },
  {
    semester: 'Second Semester',
    module: 'Work and Play',
    unit: 'At the Weekend',
    word: 'weekend',
    meaning: '周末',
    phonetic: '/ˌwiːkˈend/',
    phonics: 'week-end',
    example: 'What do you do at the weekend?',
    translation: '你周末做什么？',
    memoryTip: 'The happy peaceful end of the week: Saturday and Sunday! Week + End.'
  },
  {
    semester: 'Second Semester',
    module: 'Work and Play',
    unit: 'At the Weekend',
    word: 'boat',
    meaning: '小船',
    phonetic: '/bəʊt/',
    phonics: 'boat',
    example: 'Let\'s row a boat on the lake.',
    translation: '我们在湖上划船吧。',
    memoryTip: 'A hollow wooden structure used to paddle across water surfaces safely.'
  },
  {
    semester: 'Second Semester',
    module: 'Work and Play',
    unit: 'At the Weekend',
    word: 'row',
    meaning: '划（船）',
    phonetic: '/rəʊ/',
    phonics: 'row',
    example: 'I love to row a boat.',
    translation: '我喜欢划小船。',
    memoryTip: 'Pulling oars back and forth in rhythmic patterns.'
  },
  {
    semester: 'Second Semester',
    module: 'Work and Play',
    unit: 'At the Weekend',
    word: 'fly a kite',
    meaning: '放风筝',
    phonetic: '/flaɪ ə kaɪt/',
    phonics: 'fly a kite',
    example: 'Let\'s fly a kite in the park.',
    translation: '让我们在公园放风筝吧。',
    memoryTip: 'Launching a lightweight paper wings animal model high into windy skies.'
  },
  {
    semester: 'Second Semester',
    module: 'Work and Play',
    unit: 'At the Weekend',
    word: 'see a film',
    meaning: '看电影',
    phonetic: '/siː ə fɪlm/',
    phonics: 'see a film',
    example: 'I am going to see a film with my mum.',
    translation: '我打算和妈妈去看电影。',
    memoryTip: 'Going to the dark cinema theater with sweet popcorn to watch screens.'
  },
  {
    semester: 'Second Semester',
    module: 'Work and Play',
    unit: 'At the Weekend',
    word: 'stay',
    meaning: '停留；待在',
    phonetic: '/steɪ/',
    phonics: 'stay',
    example: 'I will stay at home today.',
    translation: '我今天将待在家里。',
    memoryTip: 'Remain stationary, in one safe, warm place. Opposite of leave.'
  },
  {
    semester: 'Second Semester',
    module: 'Work and Play',
    unit: 'At the Weekend',
    word: 'visit',
    meaning: '看望；参观（重叠词词库，与第一学期同）',
    phonetic: '/ˈvɪzɪt/',
    phonics: 'vis-it',
    example: 'We want to visit our busy uncle.',
    translation: '我们想去看望我们忙碌的叔叔。',
    memoryTip: 'Travel over to greet people you miss or browse around nice parks.'
  },
  {
    semester: 'Second Semester',
    module: 'Work and Play',
    unit: 'Holidays',
    word: 'holiday',
    meaning: '假期；节日',
    phonetic: '/ˈhɒlədeɪ/',
    phonics: 'hol-i-day',
    example: 'Where are you going for your holiday?',
    translation: '你假期打算去哪儿？',
    memoryTip: 'A glorious sunny break without classes, like Summer holiday.'
  },
  {
    semester: 'Second Semester',
    module: 'Work and Play',
    unit: 'Holidays',
    word: 'hotel',
    meaning: '旅馆；酒店',
    phonetic: '/həʊˈtel/',
    phonics: 'ho-tel',
    example: 'We are staying in a hotel near the sea.',
    translation: '我们住在海边的一家旅馆里。',
    memoryTip: 'A clean temporary lodging place you stay when traveling away.'
  },
  {
    semester: 'Second Semester',
    module: 'Work and Play',
    unit: 'Holidays',
    word: 'island',
    meaning: '岛；岛屿',
    phonetic: '/ˈaɪlənd/',
    phonics: 'is-land',
    example: 'Sanya is a beautiful island.',
    translation: '三亚是一个美丽的岛屿。',
    memoryTip: 'A cluster of earth entirely encircled by deep blue seawater.'
  },
  {
    semester: 'Second Semester',
    module: 'Work and Play',
    unit: 'Holidays',
    word: 'seafood',
    meaning: '海鲜',
    phonetic: '/ˈsɪːfuːd/',
    phonics: 'sea-food',
    example: 'We eat delicious seafood there.',
    translation: '我们在那里吃美味的海鲜。',
    memoryTip: 'Yummy fishes, shrimps, and crabs caught straight from ocean waves. Sea + Food.'
  },
  {
    semester: 'Second Semester',
    module: 'Work and Play',
    unit: 'Holidays',
    word: 'clear',
    meaning: '清澈的；明亮的',
    phonetic: '/klɪə(r)/',
    phonics: 'clear',
    example: 'The water in the lake is very clear.',
    translation: '湖水非常清澈。',
    memoryTip: 'Transparent like clean glass; easy to spot small fish swimming underneath.'
  },
  {
    semester: 'Second Semester',
    module: 'Work and Play',
    unit: 'Holidays',
    word: 'how long',
    meaning: '多久',
    phonetic: '/haʊ lɒŋ/',
    phonics: 'how long',
    example: 'How long will you stay in Beijing?',
    translation: '你将在北京待多久？',
    memoryTip: 'Asking about counts of days, hours, or lengths of lines.'
  },
  {
    semester: 'Second Semester',
    module: 'Work and Play',
    unit: 'Holidays',
    word: 'will',
    meaning: '将；会（助动词词库，与前同）',
    phonetic: '/wɪl/',
    phonics: 'will',
    example: 'My family will fly to Sanya.',
    translation: '我们家将飞往三亚。',
    memoryTip: 'Future plans action carrier. Example: I will study tomorrow.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Open Day',
    word: 'meet',
    meaning: '见面；遇见',
    phonetic: '/miːt/',
    phonics: 'meet',
    example: 'Please meet me at the gate at nine o\'clock.',
    translation: '请九点在门口和我碰面。',
    memoryTip: 'Gather with a group of friends or say hello to parents.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Open Day',
    word: 'school gate',
    meaning: '学校大门',
    phonetic: '/skuːl ɡeɪt/',
    phonics: 'school gate',
    example: 'Let\'s meet at the school gate.',
    translation: '让我们在学校大门碰头吧。',
    memoryTip: 'The main tall metal doors at the front entrance where guards stand. School + Gate.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Open Day',
    word: 'art room',
    meaning: '美术教室',
    phonetic: '/ɑːt ruːm/',
    phonics: 'art room',
    example: 'Students paint in the art room.',
    translation: '学生们在美术教室画画。',
    memoryTip: 'The school paint studio full of colorful paintings. Art + Room.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Open Day',
    word: 'hall',
    meaning: '大厅；礼堂',
    phonetic: '/hɔːl/',
    phonics: 'hall',
    example: 'The principal welcomes parents in the hall.',
    translation: '校长在礼堂里欢迎家长。',
    memoryTip: 'A gigantic wide room upstairs designed for all students during assemblies.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Open Day',
    word: 'finally',
    meaning: '最后样',
    phonetic: '/ˈfaɪnəli/',
    phonics: 'fi-nal-ly',
    example: 'Finally, they go to the library.',
    translation: '最后，他们去了图书馆。',
    memoryTip: 'At the ultimate end of sequential steps. Step 1, Step 2... Finally!'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Open Day',
    word: 'meeting room',
    meaning: '会议室',
    phonetic: '/ˈmiːtɪŋ ruːm/',
    phonics: 'meet-ing room',
    example: 'Teachers are having a talk in the meeting room.',
    translation: '老师们正在会议室谈话。',
    memoryTip: 'A quiet room where teachers sit on tidy chairs to discuss lesson details. Meeting + Room.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Open Day',
    word: 'show',
    meaning: '展示；带领……参观',
    phonetic: '/ʃəʊ/',
    phonics: 'show',
    example: 'Show your parents around our school.',
    translation: '带领你的父母参观我们的学校。',
    memoryTip: 'Presenting a cool object to open view or guiding visitors on pathways!'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Buying Clothes',
    word: 'dress',
    meaning: '连衣裙',
    phonetic: '/dres/',
    phonics: 'dress',
    example: 'The pink dress is very pretty.',
    translation: '这条粉色连衣裙很漂亮。',
    memoryTip: 'A single flowing piece of clothing worn mostly by girls.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Buying Clothes',
    word: 'trousers',
    meaning: '裤子',
    phonetic: '/ˈtraʊzəz/',
    phonics: 'trou-sers',
    example: 'He bought a pair of black trousers.',
    translation: '他买了一条黑裤子。',
    memoryTip: 'A long clothing segment designed for your two legs.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Buying Clothes',
    word: 'sweater',
    meaning: '毛衣',
    phonetic: '/ˈswetə(r)/',
    phonics: 'sweat-er',
    example: 'I wear a warm sweater in winter.',
    translation: '我在冬天穿一件温暖的毛衣。',
    memoryTip: 'A cozy knitted wool top worn when freezing winter winds blow.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Buying Clothes',
    word: 'coat',
    meaning: '外套；大衣',
    phonetic: '/kəʊt/',
    phonics: 'coat',
    example: 'Put on your warm coat.',
    translation: '穿上你的暖和大衣。',
    memoryTip: 'Heavy outer garment you put above your regular sweater when outings start!'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Buying Clothes',
    word: 'shoe',
    meaning: '鞋',
    phonetic: '/ʃuː/',
    phonics: 'shoe',
    example: 'These shoes are too small for me.',
    translation: '这些鞋子对我来说太小了。',
    memoryTip: 'Solid footwear used to guard your soft socks from city floor dirt.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Buying Clothes',
    word: 'only',
    meaning: '只有；仅仅',
    phonetic: '/ˈəʊnli/',
    phonics: 'on-ly',
    example: 'I have only eighty yuan.',
    translation: '我只有八十元钱。',
    memoryTip: 'Just this one count, nothing more exists outside.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Buying Clothes',
    word: 'smile',
    meaning: '微笑',
    phonetic: '/smaɪl/',
    phonics: 'smile',
    example: 'Our teacher says hello with a warm smile.',
    translation: '我们的老师面带温暖的微笑打招呼。',
    memoryTip: 'Curving mouth corners upward to show positive joy!'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Buying Clothes',
    word: 'money',
    meaning: '钱',
    phonetic: '/ˈmʌni/',
    phonics: 'mon-ey',
    example: 'We need some money to buy a computer.',
    translation: '我们需要一些钱来买电脑。',
    memoryTip: 'Paper cash or round coins stored in purses used to purchase toys.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Buying Clothes',
    word: 'keep',
    meaning: '保持；保存',
    phonetic: '/kiːp/',
    phonics: 'keep',
    example: 'Please keep your room clean.',
    translation: '请保持房间干净。',
    memoryTip: 'Preserve in a stable state. Keep books neat!'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Buying Clothes',
    word: 'laugh',
    meaning: '大笑；嘲笑',
    phonetic: '/lɑːf/',
    phonics: 'laugh',
    example: 'Don\'t laugh at other people.',
    translation: '不要嘲笑别人。',
    memoryTip: 'Open mouth widely uttering a "haha" sound of pure cheer.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Seeing the Doctor',
    word: 'ill',
    meaning: '生病的',
    phonetic: '/ɪl/',
    phonics: 'ill',
    example: 'I feel ill, so I must see a doctor.',
    translation: '我感觉病了，所以必须看医生。',
    memoryTip: 'Feeling weak, coughing, with no physical strength to run.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Seeing the Doctor',
    word: 'headache',
    meaning: '头痛',
    phonetic: '/ˈhedeɪk/',
    phonics: 'head-ache',
    example: 'Grandpa has a headache today.',
    translation: '爷爷今天有些头痛。',
    memoryTip: 'Pain inside your forehead territory. Head + Ache.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Seeing the Doctor',
    word: 'fever',
    meaning: '发烧',
    phonetic: '/ˈfiːvə(r)/',
    phonics: 'fe-ver',
    example: 'Drink more water if you have a fever.',
    translation: '如果你发烧的话，多喝水。',
    memoryTip: 'When your body temperature rises very high and your cheeks feel burning.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Seeing the Doctor',
    word: 'should',
    meaning: '应该',
    phonetic: '/ʃʊd/',
    phonics: 'should',
    example: 'You should have a good rest.',
    translation: '你应该好好休息。',
    memoryTip: 'A helpful word pointing towards best recommendations: you should exercise.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Seeing the Doctor',
    word: 'medicine',
    meaning: '药',
    phonetic: '/ˈmedsn/',
    phonics: 'med-i-cine',
    example: 'Take this medicine three times a day.',
    translation: '一天吃三次这种药。',
    memoryTip: 'Pills or liquid mixtures swallowed carefully to drive illness away.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Seeing the Doctor',
    word: 'rest',
    meaning: '休息',
    phonetic: '/rest/',
    phonics: 'rest',
    example: 'Take a good rest on the sofa.',
    translation: '在沙发上好好休息一下。',
    memoryTip: 'Lay down flat, or relax under tree shades without any homework duties.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Seeing the Doctor',
    word: 'toothache',
    meaning: '牙痛',
    phonetic: '/ˈtuːθeɪk/',
    phonics: 'tooth-ache',
    example: 'If you have a toothache, visit a dentist.',
    translation: '如果你牙痛，看牙医。',
    memoryTip: 'Sharp pain in the white chew tooth. Tooth + Ache.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Seeing the Doctor',
    word: 'present',
    meaning: '礼物；现在的',
    phonetic: '/ˈpreznt/',
    phonics: 'pres-ent',
    example: 'Dad bought a birthday present for mom.',
    translation: '爸爸给妈妈买了一份生日礼物。',
    memoryTip: 'A nice cardboard box wrapped in silky ribbons on special event mornings.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Do',
    unit: 'Seeing the Doctor',
    word: 'world',
    meaning: '世界',
    phonetic: '/wɜːld/',
    phonics: 'world',
    example: 'English is widely spoken in the world.',
    translation: '英语在世界上被广泛使用。',
    memoryTip: 'Our giant spherical home planet where all cities reside under the sky.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Enjoy',
    unit: 'Great Inventions',
    word: 'invention',
    meaning: '发明',
    phonetic: '/bɪˈɡɪn/',
    phonics: 'in-ven-tion',
    example: 'The camera is a wonderful invention.',
    translation: '相机是一项美妙的发明。',
    memoryTip: 'A brand-new device created by smart minds, like lightbulbs.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Enjoy',
    unit: 'Great Inventions',
    word: 'watch',
    meaning: '手表；手表（重叠词词库）',
    phonetic: '/wɒtʃ/',
    phonics: 'watch',
    example: 'This watch is a gift from my uncle.',
    translation: '这块手表是叔叔送的礼物。',
    memoryTip: 'A miniature dynamic clock worn snugly around your wrist.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Enjoy',
    unit: 'Great Inventions',
    word: 'anywhere',
    meaning: '任何地方',
    phonetic: '/ˈeniweə(r)/',
    phonics: 'an-y-where',
    example: 'You can travel anywhere with a train.',
    translation: '坐火车你可以去任何地方。',
    memoryTip: 'Any random location you prefer. Anyone can walk anywhere. Any + Where.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Enjoy',
    unit: 'Great Inventions',
    word: 'travel',
    meaning: '旅行；旅游',
    phonetic: '/ˈtrævl/',
    phonics: 'trav-el',
    example: 'I want to travel around the world.',
    translation: '我想周游世界。',
    memoryTip: 'Booking tickets to boarding trains to check foreign cultures!'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Enjoy',
    unit: 'Great Inventions',
    word: 'invent',
    meaning: '发明（动词）',
    phonetic: '/ɪnˈvent/',
    phonics: 'in-vent',
    example: 'Can you invent a flying car?',
    translation: '你能发明一辆会飞的车吗？',
    memoryTip: 'Craft some helper setup that was never ever seen before.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Enjoy',
    unit: 'Great Inventions',
    word: 'camera',
    meaning: '照相机',
    phonetic: '/ˈæmrə/',
    phonics: 'cam-er-a',
    example: 'She took a photo of me with her camera.',
    translation: '她用相机给我拍了照片。',
    memoryTip: 'A tool that freezes beautiful visual smiles onto small glossy photos.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Enjoy',
    unit: 'Great Inventions',
    word: 'parcel',
    meaning: '包裹',
    phonetic: '/ˈpɑːsl/',
    phonics: 'par-cel',
    example: 'I got a big parcel from my aunt.',
    translation: '我收到了姨妈寄来的大包裹。',
    memoryTip: 'A heavy brown carton package delivered by post messengers.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Enjoy',
    unit: 'Great Inventions',
    word: 'sell',
    meaning: '卖；招售',
    phonetic: '/sel/',
    phonics: 'sell',
    example: 'They sell fresh vegetables in the market.',
    translation: '他们在市场卖新鲜蔬菜。',
    memoryTip: 'Hand over an object to get coins back. Opposite of buy.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Enjoy',
    unit: 'Chinese Festivals',
    word: 'festival',
    meaning: '节日',
    phonetic: '/ˈfestɪvl/',
    phonics: 'fes-ti-val',
    example: 'Spring Festival is coming soon.',
    translation: '春节很快就要到了。',
    memoryTip: 'A special day when the country cheers, celebrating ancient tales with food.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Enjoy',
    unit: 'Chinese Festivals',
    word: 'important',
    meaning: '重要的',
    phonetic: '/ɪmˈpɔːtnt/',
    phonics: 'im-por-tant',
    example: 'Food is very important for animals.',
    translation: '食物对动物非常重要。',
    memoryTip: 'Value item that needs strict worry. Clean air is important.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Enjoy',
    unit: 'Chinese Festivals',
    word: 'call',
    meaning: '称呼；大喊',
    phonetic: '/kɔːl/',
    phonics: 'call',
    example: 'We call the Double Ninth Festival "Chongyang".',
    translation: '我们把重阳节叫做"Chongyang"。',
    memoryTip: 'Giving a tag name, or dialing phone pads to talk.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Enjoy',
    unit: 'Chinese Festivals',
    word: 'end',
    meaning: '结束；末尾',
    phonetic: '/end/',
    phonics: 'end',
    example: 'The holiday will end this Sunday.',
    translation: '假期这周日就结束了。',
    memoryTip: 'The extreme boundary. The end point of a slide.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Enjoy',
    unit: 'Chinese Festivals',
    word: 'village',
    meaning: '村庄；村子',
    phonetic: '/ˈvɪlɪdʒ/',
    phonics: 'vil-la-ge',
    example: 'My grandparents live in a small village.',
    translation: '我的祖父母住在一个小村庄里。',
    memoryTip: 'A quiet, cute cluster of farmhouses nested in green hills.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Enjoy',
    unit: 'Chinese Festivals',
    word: 'last',
    meaning: '持续；最后的',
    phonetic: '/lɑːst/',
    phonics: 'last',
    example: 'The festival lasts for fifteen days.',
    translation: '节日持续了十五天。',
    memoryTip: 'To keep going through some duration, or the final pupil in a line.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Enjoy',
    unit: 'The Giant’s Garden',
    word: 'wall',
    meaning: '墙',
    phonetic: '/wɔːl/',
    phonics: 'wall',
    example: 'The giant built a tall wall around his garden.',
    translation: '巨人围着他的花园建了高墙。',
    memoryTip: 'Solid upright structures made of grey brick enclosing rooms or parks.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Enjoy',
    unit: 'The Giant’s Garden',
    word: 'kind',
    meaning: '善良的；种类',
    phonetic: '/kaɪnd/',
    phonics: 'kind',
    example: 'Be kind to children.',
    translation: '对孩子们要友善。',
    memoryTip: 'Warm ears, caring hearts, ready to share sweets. Generous character.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Enjoy',
    unit: 'The Giant’s Garden',
    word: 'through',
    meaning: '穿过；穿透',
    phonetic: '/θruː/',
    phonics: 'through',
    example: 'The children crawled through the gap.',
    translation: '孩子们钻过了那条缝隙。',
    memoryTip: 'Moving straight from side A, entering inside, then coming off side B.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Enjoy',
    unit: 'The Giant’s Garden',
    word: 'garden',
    meaning: '花园',
    phonetic: '/ˈɡɑːdn/',
    phonics: 'gar-den',
    example: 'There are beautiful flowers in the garden.',
    translation: '花园里有美丽的花儿。',
    memoryTip: 'An open field with butterflies, tall grass, red roses and fruit trees.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Enjoy',
    unit: 'The Giant’s Garden',
    word: 'plant',
    meaning: '种植；植物',
    phonetic: '/plɑːnt/',
    phonics: 'plant',
    example: 'Let\'s plant some sunflower seeds.',
    translation: '让我们种些向日葵种子吧。',
    memoryTip: 'Pushing dark soil open to drop shiny seeds so fresh leaves sprout.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Enjoy',
    unit: 'The Giant’s Garden',
    word: 'grow',
    meaning: '生长；种植(变大)',
    phonetic: '/ɡrəʊ/',
    phonics: 'grow',
    example: 'Tall trees grow in the giant\'s forest.',
    translation: '巨人的森林里长着高大的树木。',
    memoryTip: 'Gradually reaching high and wider, like babies becoming adults.'
  },
  {
    semester: 'Second Semester',
    module: 'Things We Enjoy',
    unit: 'The Giant’s Garden',
    word: 'water',
    meaning: '给……浇水；水（重合词）',
    phonetic: '/ˈwɔːtə(r)/',
    phonics: 'wa-ter',
    example: 'Water the flowers every morning.',
    translation: '每天早上给花浇水。',
    memoryTip: 'Pouring clear dynamic water over flowers to keep them cheerful!'
  }
];

export const GRAMMAR_RULES: Record<string, {
  grammarPoint: string;
  rule: string;
  explanation: string;
  examples: string[];
  commonMistakes: { wrong: string; right: string; explanation: string }[];
  miniPractice: { question: string; options: string[]; answer: number; reason: string };
}> = {
  'My Future': {
    grammarPoint: 'want to be',
    rule: 'Use "want to be" + [a/an job] to talk about future career dreams.',
    explanation: 'When people ask you what job you wish to do when you grow up, use this pattern. Remember "to be" is essential before the job name.',
    examples: [
      'I want to be a pilot.',
      'Danny wants to be a professional cook.'
    ],
    commonMistakes: [
      {
        wrong: 'I want be a pilot.',
        right: 'I want to be a pilot.',
        explanation: 'Do not forget "to". "Want" needs "to be" to express becoming a career in the future.'
      }
    ],
    miniPractice: {
      question: 'Which sentence is completely correct?',
      options: [
        'He wants be a pilot.',
        'He wants to be a pilot.',
        'He wanting to is a pilot.'
      ],
      answer: 1,
      reason: 'Use "He wants" (with singular s) followed by "to be" and the career!'
    }
  },
  'Going to School': {
    grammarPoint: 'by [vehicle] & walk to [place]',
    rule: 'Use "by" followed immediately by a transit noun (no "a" or "the"), or use "walk to [place]".',
    explanation: 'Tell teachers how you travel to school. Say "by bus", "by underground", "by train", BUT say "walk to school" (no "by walk").',
    examples: [
      'I come to school by bus.',
      'We walk to school every morning.'
    ],
    commonMistakes: [
      {
        wrong: 'I go to school by walk.',
        right: 'I walk to school. / I go to school on foot.',
        explanation: '"Walk" is already an active travel verb. Do not match it with "by".'
      }
    ],
    miniPractice: {
      question: 'Fill in: "She goes to Shang Hai ______ train."',
      options: [
        'by a',
        'by',
        'by the'
      ],
      answer: 1,
      reason: 'We use "by" + vehicle name directly: "by train", "by bus", "by bike"!'
    }
  },
  'My Birthday': {
    grammarPoint: 'When structure & Time prepositions',
    rule: 'Ask when an event happens with "When is..." and locate exact time points with "at".',
    explanation: 'Ask "When\'s your birthday?" to inquire about special dates. Say "begins at two o\'clock" for specific times.',
    examples: [
      'When\'s your birthday?',
      'The party begins at two o\'clock.'
    ],
    commonMistakes: [
      {
        wrong: 'The interesting birthday party begins on two o\'clock.',
        right: 'The interesting birthday party begins at two o\'clock.',
        explanation: 'We always use "at" for exact clock times, e.g. at 2:00, at 5:30.'
      }
    ],
    miniPractice: {
      question: 'Fill in: "The class begins ______ nine o\'clock."',
      options: [
        'in',
        'on',
        'at'
      ],
      answer: 2,
      reason: 'Use "at" before clocks!'
    }
  },
  'Grandparents': {
    grammarPoint: 'Adverbs of Frequency',
    rule: 'Use words like: always, usually, often, sometimes, never to show how frequently actions show up.',
    explanation: 'These helpful keys go BEFORE standard verbs, but AFTER "be" verbs (am, is, are).',
    examples: [
      'I usually play chess with my grandpa.',
      'She is always very kind.'
    ],
    commonMistakes: [
      {
        wrong: 'I play usually table tennis on weekends.',
        right: 'I usually play table tennis on weekends.',
        explanation: 'Put frequency helpers (usually, often) BEFORE standard verbs (play, visit).'
      }
    ],
    miniPractice: {
      question: 'Where should "often" sit? "We [1] visit [2] our grandparents [3]."',
      options: [
        'Position [1]',
        'Position [2]',
        'Position [3]'
      ],
      answer: 0,
      reason: 'Adverbs of frequency sit before standard verbs: "We often visit...".'
    }
  },
  'Friends': {
    grammarPoint: 'both & same vs different',
    rule: 'Use "both" to link two matching elements; use "same" with "the" before nouns.',
    explanation: 'Say "We both like sport" and "We study in the same class", but "We like different subjects" (no the).',
    examples: [
      'We are in the same class.',
      'We both enjoy reading clever storybooks.'
    ],
    commonMistakes: [
      {
        wrong: 'We are in same class.',
        right: 'We are in the same class.',
        explanation: 'The word "same" always needs the helper "the" in front.'
      }
    ],
    miniPractice: {
      question: 'Complete: "They ______ enjoy painting."',
      options: [
        'both',
        'same',
        'different'
      ],
      answer: 0,
      reason: '"both" means two individuals are doing the same action together.'
    }
  },
  'Family Life': {
    grammarPoint: 'Present Continuous Tense',
    rule: 'Subject + Be verb (am/is/are) + Verb-ing to describe current working routines.',
    explanation: 'Tell others what your family members are doing inside bedrooms, kitchens, or living rooms right now.',
    examples: [
      'Dad is watching TV in the living room.',
      'Mum is cooking inside the kitchen.'
    ],
    commonMistakes: [
      {
        wrong: 'I watching TV before bed.',
        right: 'I am watching TV before bed.',
        explanation: 'Never skip the helper be verb (am/is/are) before the verb ending in "-ing".'
      }
    ],
    miniPractice: {
      question: 'Complete: "They _______ playing chess now."',
      options: [
        'is',
        'am',
        'are'
      ],
      answer: 2,
      reason: 'Use "are" with plural subjects like "They"!'
    }
  },
  'At the Beach': {
    grammarPoint: 'enjoy doing something',
    rule: 'Use "enjoy" + verb ending with "-ing" to show you like an action.',
    explanation: '"Enjoy" stands as a very active emotion builder. If another active action follows, add "-ing" to it.',
    examples: [
      'They enjoy collecting shells at the beach.',
      'Do you enjoy swimming in the deep blue sea?'
    ],
    commonMistakes: [
      {
        wrong: 'I enjoy collect shells on the yellow sand.',
        right: 'I enjoy collecting shells on the yellow sand.',
        explanation: "After standard 'enjoy', dynamic verbs must carry the '-ing' hook."
      }
    ],
    miniPractice: {
      question: 'Complete: "Do you enjoy _______ books?"',
      options: [
        'read',
        'reading',
        'reads'
      ],
      answer: 1,
      reason: "Pair 'enjoy' with the '-ing' verb: 'enjoy reading'!"
    }
  },
  'An Outing': {
    grammarPoint: 'another & directional search phrase',
    rule: 'Use "another" + singular noun to describe "one more option of the same kind."',
    explanation: 'When Alice finishes checking one gorgeous lake, she finds *another* lake to explore.',
    examples: [
      'Can you show me another neat map?',
      'Let\'s climb another lovely hill.'
    ],
    commonMistakes: [
      {
        wrong: 'We find another lakes near our school.',
        right: 'We find another lake near our school.',
        explanation: '"Another" always couples with a singular noun ("lake").'
      }
    ],
    miniPractice: {
      question: 'Fill in: "Let\'s buy ________ apple."',
      options: [
        'another',
        'other',
        'others'
      ],
      answer: 0,
      reason: 'Use "another" + singular noun ("apple").'
    }
  },
  'Around the City': {
    grammarPoint: 'giving directions',
    rule: 'Use: "Walk along...", "Turn left/right at...", and "It is on your left/right".',
    explanation: 'Tell visitors how to walk down winter streets or locate handy blocks using path prepositions like "between" and "next to".',
    examples: [
      'Walk along Winter Street.',
      'Turn left at the next street; the toy shop is on your right.'
    ],
    commonMistakes: [
      {
        wrong: 'Turn on your left at the post office.',
        right: 'Turn left at the post office. / It is on your left.',
        explanation: 'We say "Turn left" directly, and "It is on your left" to state a layout spot.'
      }
    ],
    miniPractice: {
      question: 'Fill in: "The hospital is ______ the post office and the toy shop."',
      options: [
        'between',
        'along',
        'next'
      ],
      answer: 0,
      reason: "Use 'between A and B' to show what is in the middle!"
    }
  },
  'Wind': {
    grammarPoint: 'Adverbs of Manner',
    rule: 'Add "-ly" to many adjectives to turn them into adverbs describing HOW an action happens.',
    explanation: 'They modify verbs. E.g. how does wind blow? It blows gently, softly, or strongly.',
    examples: [
      'The wind is blowing strongly outside.',
      'The happy children are flying paper kites happily in the park.'
    ],
    commonMistakes: [
      {
        wrong: 'The cold wind is blowing strong.',
        right: 'The cold wind is blowing strongly.',
        explanation: 'Use the adverb form "strongly" to describe the action verb "blowing".'
      }
    ],
    miniPractice: {
      question: 'Complete: "The children are playing ________ in the garden."',
      options: [
        'happy',
        'happily',
        'happier'
      ],
      answer: 1,
      reason: 'Use the adverb "happily" to describe how they "play"!'
    }
  },
  'Water': {
    grammarPoint: 'use ... to do ...',
    rule: 'Use the shape: "use [noun] to [base verb]" to designate tools or materials.',
    explanation: 'Tell what tasks you solve using materials. Farmers use fresh river water to grow tasty crops.',
    examples: [
      'We use water to wash our hands.',
      'Catherina uses crayons to draw green trees.'
    ],
    commonMistakes: [
      {
        wrong: 'We use water washing clean clothes.',
        right: 'We use water to wash clean clothes.',
        explanation: 'Make sure you put "to" + standard base verb after the tool noun.'
      }
    ],
    miniPractice: {
      question: 'Complete: "He uses a map _______ the lake."',
      options: [
        'find',
        'to find',
        'finding'
      ],
      answer: 1,
      reason: 'The correct structural mold is "use [something] to do [something]".'
    }
  },
  'Fire': {
    grammarPoint: 'must & mustn\'t',
    rule: 'Use "must" + base verb for strong commands; use "mustn\'t" for rigid restrictions.',
    explanation: 'They are helper modal parameters: they never change spellings (no s ending) and must join with a blank base verb.',
    examples: [
      'We must be careful with open campfire sparks.',
      'We mustn\'t smoke or play with sparks inside forests.'
    ],
    commonMistakes: [
      {
        wrong: 'We must to be careful.',
        right: 'We must be careful.',
        explanation: 'Do not place "to" after the modal word "must".'
      }
    ],
    miniPractice: {
      question: 'Complete: "You ________ play with matches in the bedroom!"',
      options: [
        'must',
        'mustn\'t',
        'need'
      ],
      answer: 1,
      reason: 'Use "mustn\'t" because playing with fire inside bedrooms is highly dangerous!'
    }
  },
  'Tidy up!': {
    grammarPoint: 'Possessive Pronouns',
    rule: 'Use mine, yours, hers, theirs as nouns replacing [possessive adj + item].',
    explanation: 'Instead of stating "This is my green crayon", we say "This green crayon is mine". No noun follows these helpers.',
    examples: [
      'This tidy blue cap is mine.',
      'The colorful umbrellas on the table are theirs.'
    ],
    commonMistakes: [
      {
        wrong: 'This is mine crayon.',
        right: 'This crayon is mine. / This is my crayon.',
        explanation: 'Never follow a possessive pronoun ("mine") with a physical noun.'
      }
    ],
    miniPractice: {
      question: 'Complete: "That tidy kitchen is not ours. It is _________ (their kitchen)."',
      options: [
        'their',
        'theirs',
        'them'
      ],
      answer: 1,
      reason: 'Use the possessive pronoun "theirs" to represent "their kitchen".'
    }
  },
  'Our New Home': {
    grammarPoint: 'why & because',
    rule: 'When asking questions with "Why...", reply using a reason with "Because...".',
    explanation: 'Tutors ask students why they enjoy a study or a dining room, and they explain reasons.',
    examples: [
      'Why do you like the study?',
      'Because it is quiet and full of dictionaries.'
    ],
    commonMistakes: [
      {
        wrong: 'Why you like the dining room?',
        right: 'Why do you like the dining room?',
        explanation: 'Do not forget the question helper "do/does" after the question word "why".'
      }
    ],
    miniPractice: {
      question: 'Complete conversation: "______ do you exercise?" - "______ I want to be healthy."',
      options: [
        'What / Because',
        'Why / Because',
        'Why / So'
      ],
      answer: 1,
      reason: 'Standard QA set is "Why" for the question, "Because" for the reason!'
    }
  },
  'In the Future': {
    grammarPoint: 'simple future tense with "will"',
    rule: 'Use "Subject + will + base verb" to state predictions about life to come.',
    explanation: 'Tell friends what machines might do or what exercises you will arrange tomorrow. "Will" does not change with subjects.',
    examples: [
      'Machines will do hard work in the future.',
      'I will rise early and exercise tomorrow.'
    ],
    commonMistakes: [
      {
        wrong: 'In the future, robots will doing all study tasks.',
        right: 'In the future, robots will do all study tasks.',
        explanation: 'Always pair "will" with a plain base verb (no "-ing" or "-ed").'
      }
    ],
    miniPractice: {
      question: 'Complete: "We believe we ________ stand on the moon soon."',
      options: [
        'will',
        'are',
        'going'
      ],
      answer: 0,
      reason: 'Use "will" + base verb "stand" to refer to future predictions!'
    }
  },
  'Reading is Fun': {
    grammarPoint: 'be going to',
    rule: 'Use "Subject + am/is/are + going to + base verb" to express planned future tasks.',
    explanation: '"Be going to" acts like "will". Apply "is" for He/She/It and "are" for We/You/They.',
    examples: [
      'I am going to read a storybook today.',
      'They are going to buy dictionaries tomorrow.'
    ],
    commonMistakes: [
      {
        wrong: 'They going to read a magazine after class.',
        right: 'They are going to read a magazine after class.',
        explanation: 'You must include the active be verb "are" before the "going to" helper!'
      }
    ],
    miniPractice: {
      question: 'Complete sentence: "She _______ going to see a film with her friends."',
      options: [
        'am',
        'is',
        'are'
      ],
      answer: 1,
      reason: 'Use "is" with third-person singular subjects like "She"!'
    }
  },
  'At the Weekend': {
    grammarPoint: 'weekend activities structure',
    rule: 'Describe actions using plain present or future tense plans for Saturday & Sunday.',
    explanation: 'Include weekend verbs nicely: row a boat, fly a kite, see a film, visit grandpa at the weekend.',
    examples: [
      'We often fly a kite at the weekend.',
      'What are you going to do this weekend?'
    ],
    commonMistakes: [
      {
        wrong: 'Let\'s go to see film at the weekend.',
        right: 'Let\'s see a film at the weekend.',
        explanation: 'Use the correct idiom "see a film" with the helper "a".'
      }
    ],
    miniPractice: {
      question: 'Choose the correct phrasing:',
      options: [
        'Let\'s row boat with friends.',
        'Let\'s row a boat with friends.',
        'Let\'s row the to boat.'
      ],
      answer: 1,
      reason: 'The correct standard pattern is "row a boat".'
    }
  },
  'Holidays': {
    grammarPoint: 'how long & future stay',
    rule: 'Use "How long will..." to ask about counts of duration days during vacation.',
    explanation: 'When friends plan to visit Sanya island or stay in seaside hotels, ask them about durations!',
    examples: [
      'How long will you stay in that sea hotel?',
      'We will stay on Sanya island for five days.'
    ],
    commonMistakes: [
      {
        wrong: 'How long are you stay in Sanya hotel?',
        right: 'How long will you stay in Sanya hotel? / How long are you going to stay?',
        explanation: 'Avoid mixing "are" with base verb "stay" directly. Choose either "will" or "are going to".'
      }
    ],
    miniPractice: {
      question: 'Complete: "______ will they stay?" - "For ten days."',
      options: [
        'How many',
        'How long',
        'When'
      ],
      answer: 1,
      reason: "Use 'How long' to ask about durations of stay!"
    }
  },
  'Open Day': {
    grammarPoint: 'sequential adverbs (first, next, then, finally)',
    rule: 'Use transition guides to show visitors paths sequentially through school gates to classrooms.',
    explanation: 'Place commas inside sentence starts: "First, meet at the school gate. Next, check art rooms. Finally, join meetings in hall room."',
    examples: [
      'First, meet our parents at the school gate.',
      'Finally, show them our beautiful art rooms.'
    ],
    commonMistakes: [
      {
        wrong: 'Finally we go home.',
        right: 'Finally, we go home.',
        explanation: 'Add a small comma after sequential guide starters (first, next, next, finally).'
      }
    ],
    miniPractice: {
      question: 'Which word starts the ultimate stage of a sequence?',
      options: [
        'First',
        'Next',
        'Finally'
      ],
      answer: 2,
      reason: 'Use "Finally" to mark the absolute end step of any tour guide!'
    }
  },
  'Buying Clothes': {
    grammarPoint: 'buying expressions & measurements',
    rule: 'Talk about cash, coats, sweaters, and pants with sizes and pricing values.',
    explanation: 'Utilize "only" to describe small costs, and ask pricing details with "How much is...".',
    examples: [
      'The black trousers are only eighty yuan.',
      'Do you have enough money to buy that warm coat?'
    ],
    commonMistakes: [
      {
        wrong: 'How much are this trousers?',
        right: 'How much are these trousers?',
        explanation: '"Trousers" has two legs and is always treated as plural; use "these" and "are".'
      }
    ],
    miniPractice: {
      question: 'Complete: "How much ______ that warm pink dress?"',
      options: [
        'is',
        'are',
        'am'
      ],
      answer: 0,
      reason: "Pair singular clothing sets ('dress') with 'is'!"
    }
  },
  'Seeing the Doctor': {
    grammarPoint: 'advice with should / shouldn\'t',
    rule: 'Use "should / shouldn\'t" + base verb to give strong healthy suggestions to patients.',
    explanation: 'If a friend feels ill, has a headache, fever, or toothache, suggest they take medicine or have lots of rest.',
    examples: [
      'You should see a doctor and take medicine.',
      'You shouldn\'t eat cold ice cream and sweets when you have toothaches.'
    ],
    commonMistakes: [
      {
        wrong: 'He has fever. He should to stay in bed.',
        right: 'He has active fever. He should stay in bed.',
        explanation: 'Avoid adding "to" after the advising modal helper "should".'
      }
    ],
    miniPractice: {
      question: 'Complete: "You have a bad toothache. You ______ eat sweet cake."',
      options: [
        'should',
        'shouldn\'t',
        'must'
      ],
      answer: 1,
      reason: 'Eating sweets when toothache hits is bad; you shouldn\'t do it!'
    }
  },
  'Great Inventions': {
    grammarPoint: 'anywhere & action abilities',
    rule: 'Use "anywhere" to mean "any location at all" without exceptions.',
    explanation: 'Smart inventions like cameras or trains enable students to travel anywhere or take photo prints easily.',
    examples: [
      'With a watch, you can check the time anywhere.',
      'Smart inventors invent cool cameras to keep beautiful memories.'
    ],
    commonMistakes: [
      {
        wrong: 'I can travel to anywhere you like.',
        right: 'I can travel anywhere you like.',
        explanation: '"Anywhere" is an adverb. Do not add the preposition "to" right before it.'
      }
    ],
    miniPractice: {
      question: 'Complete: "We can travel _______ in the city with handy trains."',
      options: [
        'anywhere',
        'somewhere',
        'where'
      ],
      answer: 0,
      reason: '"anywhere" means any place in the city at all.'
    }
  },
  'Chinese Festivals': {
    grammarPoint: 'lasts for [duration]',
    rule: 'Use "last" or "lasts for" + [duration] to explain length of festival cycles.',
    explanation: '"Last" means to continue in time. E.g. "The active spring celebrations last for fifteen days."',
    examples: [
      'The Spring Festival lasts for about fifteen days.',
      'What do you call this important harvest festival?'
    ],
    commonMistakes: [
      {
        wrong: 'The interesting celebration last inside ten days.',
        right: 'The interesting celebration lasts for ten days.',
        explanation: 'Use "lasts for" to describe the length of duration. Add "s" if singular.'
      }
    ],
    miniPractice: {
      question: 'Complete: "The holiday _________ for three weeks."',
      options: [
        'last',
        'lasts',
        'lasting'
      ],
      answer: 1,
      reason: '"Holiday" is third-person singular, so the active verb "last" takes the suffix "s".'
    }
  },
  'The Giant’s Garden': {
    grammarPoint: 'grow & plant action verbs',
    rule: 'Use "plant" for placing seeds, "water" for pouring drops, and "grow" for describing expansion.',
    explanation: 'Talk about giants, walls, kind hearts, and how gorgeous children crawl through wall gaps to make gardens green.',
    examples: [
      'The children go through the wall and make green plants grow.',
      'The giant is kind now, so he waters the garden every morning.'
    ],
    commonMistakes: [
      {
        wrong: 'The giant is very kindly.',
        right: 'The giant is very kind.',
        explanation: '"Kind" is the correct adjective form. "Kindly" is an adverb.'
      }
    ],
    miniPractice: {
      question: 'Complete: "He likes to _______ flowers in his beautiful garden."',
      options: [
        'wall',
        'plant',
        'through'
      ],
      answer: 1,
      reason: 'Use the active verb "plant" to mean putting flowers into the ground.'
    }
  }
};
