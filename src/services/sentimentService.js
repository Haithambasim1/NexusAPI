/**
 * Analyzes sentiment of provided text
 * @param {string} text - Text to analyze
 * @returns {object} Sentiment analysis results
 */
const analyzeSentiment = (text) => {
  // Create more extensive word lists for better analysis
  const positiveWords = [
    // English
    'good',
    'great',
    'excellent',
    'awesome',
    'amazing',
    'love',
    'best',
    'happy',
    'wonderful',
    'fantastic',
    'superb',
    'outstanding',
    'brilliant',
    'terrific',
    'delightful',
    'pleasant',
    'enjoy',
    'appreciate',
    'impressive',
    'satisfied',
    'perfect',
    'positive',
    'nice',
    'remarkable',
    'exceptional',
    'grateful',
    'hapippy',
    'joyful',
    'cheerful',
    'radiant',
    'enthusiastic',
    'optimistic',
    'hopeful',
    'blissful',
    'ecstatic',
    'thrilled',
    'exhilarated',
    'content',
    'euphoric',
    'victorious',
    'jubilant',
    'prosperous',
    'glorious',
    'elated',
    'splendid',
    'sensational',
    'stunning',
    'fabulous',
    'heartwarming',
    'uplifting',
    'inspiring',
    'breathtaking',
    'marvelous',
    'proud',
    'spectacular',
    'charming',
    'glad',
    'graceful',

    // Arabic (Transliterated)
    'جميل',
    'رائع',
    'ممتاز',
    'مذهل',
    'مبهر',
    'سعيد',
    'ناجح',
    'محظوظ',
    'متحمس',
    'ملهم',

    // Spanish
    'bueno',
    'genial',
    'excelente',
    'asombroso',
    'increíble',
    'feliz',
    'fantástico',
    'maravilloso',
    'impresionante',
    'hermoso',
    'encantador',
    'positivo',
    'contento',
    'espléndido',
    'triunfante',

    // French
    'bon',
    'génial',
    'excellent',
    'formidable',
    'merveilleux',
    'heureux',
    'splendide',
    'magnifique',
    'fantastique',
    'charmant',
    'étonnant',
    'positif',
    'triomphant',

    // German
    'gut',
    'großartig',
    'exzellent',
    'wunderbar',
    'fantastisch',
    'glücklich',
    'erfolgreich',
    'wunderschön',
    'strahlend',
    'inspirierend',
    'außergewöhnlich',

    // Italian
    'buono',
    'fantastico',
    'meraviglioso',
    'felice',
    'splendido',
    'eccellente',
    'radioso',
    'positivo',
    'mozzafiato',
    'ispiratore',
    'trionfante',

    // Portuguese
    'bom',
    'ótimo',
    'excelente',
    'incrível',
    'feliz',
    'maravilhoso',
    'esplêndido',
    'triunfante',
    'inspirador',

    // Japanese (Romanji)
    'sugoi',
    'subarashii',
    'ureshii',
    'kanpeki',
    'kagayaku',
    'yutaka',

    // Chinese (Pinyin)
    'hǎo',
    'jīngcǎi',
    'xiǎngshòu',
    'chāojí',
    'xìngyùn',
    'guāngcǎi',

    // Russian (Transliterated)
    'khoroshiy',
    'otlichnyy',
    'prekrasnyy',
    'schastlivyy',
    'vpechatlyayushchiy',

    // Hindi (Transliterated)
    'accha',
    'mahaan',
    'uttam',
    'sundar',
    'sukh',
    'anand',

    // Turkish
    'iyi',
    'harika',
    'mükemmel',
    'mutlu',
    'şahane',
    'müthiş',
    'coşkulu',

    // Korean (Romanized)
    'jota',
    'meotjida',
    'haengbokhada',
    'hwansangjeogin',
    'nollaun',

    // Hebrew (Transliterated)
    'tov',
    'nifla',
    'meule',
    'mazal tov',
    'mefuzar',
  ];

  const negativeWords = [
    // English

    'bad',
    'fuck',
    'fuck you',
    'dick',
    'dickhead',
    'dick suck',
    'dick suck',
    'dick suck',
    'dick suck',
    'dick suck',

    'terrible',
    'awful',
    'worst',
    'hate',
    'disappointed',
    'poor',
    'angry',
    'horrible',
    'dreadful',
    'frustrating',
    'mediocre',
    'annoying',
    'miserable',
    'unpleasant',
    'sad',
    'failure',
    'failed',
    'disappointing',
    'useless',
    'inferior',
    'negative',
    'complaint',
    'problematic',
    'inadequate',
    'dislike',

    // Arabic (Transliterated)
    'qabih', // قبيح - ugly
    'saqit', // ساقط - fallen
    'muzlim', // مظلم - dark
    'khasir', // خاسر - loser
    'muhzin', // محزن - sad

    // Spanish
    'malo',
    'terrible',
    'horrible',
    'pésimo',
    'odio',
    'decepcionado',
    'pobre',
    'enojado',
    'frustrante',
    'mediocre',
    'molesto',
    'miserable',
    'desagradable',
    'triste',
    'fallido',
    'inútil',
    'inferior',
    'negativo',
    'problemático',

    // French
    'mauvais',
    'terrible',
    'horrible',
    'détestable',
    'déçu',
    'pauvre',
    'fâché',
    'frustrant',
    'médiocre',
    'ennuyeux',
    'misérable',
    'désagréable',
    'triste',
    'raté',
    'inutile',
    'inférieur',
    'négatif',
    'problématique',

    // German
    'schlecht',
    'schrecklich',
    'furchtbar',
    'hasslich',
    'enttäuscht',
    'arm',
    'wütend',
    'frustrierend',
    'mittelmäßig',
    'ärgerlich',
    'elend',
    'unangenehm',
    'traurig',
    'gescheitert',
    'nutzlos',
    'minderwertig',
    'negativ',
    'problematisch',

    // Italian
    'cattivo',
    'terribile',
    'orribile',
    'odioso',
    'deluso',
    'povero',
    'arrabbiato',
    'frustrante',
    'mediocre',
    'fastidioso',
    'miserabile',
    'sgradevole',
    'triste',
    'fallito',
    'inutile',
    'inferiore',
    'negativo',
    'problematico',

    // Portuguese
    'ruim',
    'terrível',
    'horrível',
    'odioso',
    'decepcionado',
    'pobre',
    'irritado',
    'frustrante',
    'medíocre',
    'irritante',
    'miserável',
    'desagradável',
    'triste',
    'falho',
    'inútil',
    'inferior',
    'negativo',
    'problemático',

    // Japanese (Romanji)
    'warui', // 悪い - bad
    'hidoi', // 酷い - terrible
    'nikui', // 憎い - hateful
    'zannen', // 残念 - disappointing
    'mazui', // まずい - poor

    // Chinese (Pinyin)
    'huài', // 坏 - bad
    'kěpà', // 可怕 - terrible
    'zāogāo', // 糟糕 - awful
    'shīwàng', // 失望 - disappointed
    'kùnán', // 困难 - difficult

    // Russian (Transliterated)
    'plokhoy', // плохой - bad
    'uzhasnyy', // ужасный - terrible
    'nenavistnyy', // ненавистный - hateful
    'razocharovannyy', // разочарованный - disappointed
    'bednyy', // бедный - poor

    // Hindi (Transliterated)
    'bura', // बुरा - bad
    'bhayanak', // भयानक - terrible
    'ghrina', // घृणा - hate
    'niraash', // निराश - disappointed
    'garib', // गरीब - poor

    // Turkish
    'kötü',
    'berbat',
    'korkunç',
    'nefret',
    'hayal kırıklığı',
    'fakir',
    'kızgın',
    'sinir bozucu',
    'vasat',
    'rahatsız edici',
    'sefil',
    'hoş olmayan',
    'üzgün',
    'başarısız',
    'işe yaramaz',
    'aşağı',
    'olumsuz',
    'sorunlu',

    // Korean (Romanized)
    'nappeun', // 나쁜 - bad
    'museoun', // 무서운 - terrible
    'sireoun', // 싫은 - hateful
    'silmang', // 실망 - disappointment
    'buhan', // 불한 - unfortunate

    // Hebrew (Transliterated)
    'ra', // רע - bad
    'nora', // נורא - terrible
    'sone', // שונא - hate
    'mevushal', // מבושל - disappointed
    'ani', // עני - poor
  ];

  // Add neutral words for more nuanced analysis
  const neutralWords = [
    'okay',
    'ok',
    'fine',
    'average',
    'neutral',
    'decent',
    'fair',
    'acceptable',
    'moderate',
    'standard',
    'usual',
    'common',
  ];

  const words = text
    .toLowerCase()
    .split(/\W+/)
    .filter((word) => word.length > 0);

  let positiveCount = 0;
  let negativeCount = 0;
  let neutralCount = 0;

  // Create arrays to store the actual words found
  const positiveFound = [];
  const negativeFound = [];
  const neutralFound = [];

  words.forEach((word) => {
    if (positiveWords.includes(word)) {
      positiveCount++;
      if (!positiveFound.includes(word)) positiveFound.push(word);
    }
    if (negativeWords.includes(word)) {
      negativeCount++;
      if (!negativeFound.includes(word)) negativeFound.push(word);
    }
    if (neutralWords.includes(word)) {
      neutralCount++;
      if (!neutralFound.includes(word)) neutralFound.push(word);
    }
  });

  // Apply weighting for more nuanced scoring
  // Consider intensity modifiers (very, extremely, etc.)
  let intensityModifier = 1.0;
  const intensifiers = ['very', 'extremely', 'really', 'truly', 'absolutely', 'completely'];
  const negators = ['not', "don't", 'never', 'no', 'cannot', "can't", 'neither', 'nor'];

  let negationPresent = false;
  for (let i = 0; i < words.length; i++) {
    if (intensifiers.includes(words[i]) && i < words.length - 1) {
      intensityModifier = 1.5;
    }

    if (negators.includes(words[i])) {
      negationPresent = true;
    }
  }

  // Apply negation effect
  if (negationPresent) {
    // Swap positive and negative counts if negation is present
    [positiveCount, negativeCount] = [negativeCount, positiveCount];
  }

  // Apply intensity modifier
  positiveCount = positiveCount * intensityModifier;
  negativeCount = negativeCount * intensityModifier;

  // Calculate final score
  const totalEmotionalWords = positiveCount + negativeCount + neutralCount * 0.5;
  let score = 0;

  if (totalEmotionalWords > 0) {
    // Calculate weighted score
    score = (positiveCount - negativeCount) / totalEmotionalWords;
  }

  // Normalize to range of -1 to 1
  const normalizedScore = Math.max(Math.min(score, 1), -1);

  // Determine sentiment label with more granularity
  let sentiment;
  if (normalizedScore > 0.6) sentiment = 'very positive';
  else if (normalizedScore > 0.2) sentiment = 'positive';
  else if (normalizedScore > -0.2) sentiment = 'neutral';
  else if (normalizedScore > -0.6) sentiment = 'negative';
  else sentiment = 'very negative';

  // Calculate confidence based on amount of emotional content and sample size
  const emotionalRatio = totalEmotionalWords / words.length;
  const sampleSizeConfidence = Math.min(words.length / 20, 1); // More words = more confidence, up to a point
  const confidence = Math.abs(normalizedScore) * 0.7 + emotionalRatio * 0.3 * sampleSizeConfidence;

  return {
    text,
    sentiment,
    score: parseFloat(normalizedScore.toFixed(2)),
    confidence: parseFloat(confidence.toFixed(2)),
    details: {
      positive_words: positiveCount,
      negative_words: negativeCount,
      neutral_words: neutralCount,
      total_words: words.length,
      found_positive: positiveFound,
      found_negative: negativeFound,
      found_neutral: neutralFound,
      negation_detected: negationPresent,
      intensity_modifier: parseFloat(intensityModifier.toFixed(1)),
    },
  };
};

module.exports = {
  analyzeSentiment,
};
