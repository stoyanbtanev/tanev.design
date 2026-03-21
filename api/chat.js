export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { contents } = req.body;
  const rawKey = process.env.GEMINI_API_KEY;

  if (!rawKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY Environment Variable is missing in Vercel' });
  }

  // Trim whitespace which easily happens when pasting into Vercel
  const apiKey = rawKey.trim();

  // Gemini API STRICT REQUIREMENT: The first message in the history MUST be from the "user".
  // Since our frontend pushes the AI's greeting first, we must prepend a dummy user message to satisfy Google.
  let validContents = contents || [];
  if (validContents.length > 0 && validContents[0].role === 'model') {
    validContents.unshift({ role: "user", parts: [{ text: "Hello!" }] });
  }

  try {
    // Reverting to gemini-1.5-flash. The 2.0 model currently throws billing requirement errors in some EU free-tier projects.
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: "You are the AI Assistant for tanev.design, an independent web developer named Stoyan Tanev. Your job is to answer visitor questions and convince them to hire Stoyan. Emphasize his advantages: lightning-fast websites (90+ PageSpeed), no bloated agency overhead (better prices, direct communication), mobile-first designs, and fast delivery speeds (3-10 days). Be incredibly polite, conversational, and concise. Reply in the same language the user speaks (English or Bulgarian). Periodically suggest they use the contact form at the bottom of the page or email stoyanbtanev@gmail.com. Never invent fake prices; his prices start at €200 for a landing page and €500 for a redesign. Keep your responses short (1-3 sentences max)." }]
        },
        contents: validContents
      })
    });
    
    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error connecting to Gemini API' });
  }
}
