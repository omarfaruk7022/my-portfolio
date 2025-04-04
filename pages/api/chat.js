// import { OpenAI } from "openai";

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// export default async function handler(req, res) {
//   if (req.method !== "POST")
//     return res.status(405).json({ error: "Method not allowed" });

//   try {
//     const { message } = req.body;

//     if (!message) return res.status(400).json({ error: "Message is required" });

//     const aiResponse = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: message }],
//     });

//     res.status(200).json({ reply: aiResponse.choices[0].message.content });
//   } catch (error) {
//     console.error("OpenAI API Error:", error);
//     res.status(500).json({ error: error.message });
//   }
// }
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    const { message } = req.body;

    if (!message) return res.status(400).json({ error: "Message is required" });

    // Use "chat-bison-001" since "gemini-pro-1" is not available
    const model = genAI.getGenerativeModel({ model: "chat-bison-001" });
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ reply: text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: error.message });
  }
}
