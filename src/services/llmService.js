
const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.askLLM = async (context, question) => {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini", 
    messages: [
      {
        role: "system",
        content: "Answer only from given context. If not found, say not found."
      },
      {
        role: "user",
        content: `Context:\n${context}\n\nQuestion:\n${question}`
      }
    ],
    response_format: { type: "json_object" }
  });

  return response.choices[0].message.content;
};