export default async function handler(req, res) {
  const rawKey = process.env.GEMINI_API_KEY;

  if (!rawKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY Environment Variable is missing in Vercel' });
  }

  // Trim whitespace which easily happens when pasting into Vercel
  const apiKey = rawKey.trim();

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
