
const { getRelevantDocs } = require("../services/retrievalService");
const { askLLM } = require("../services/llmService");

exports.askQuestion = async (req, res) => {
  const { question } = req.body;

  const docs = await getRelevantDocs(question);

  const context = docs.map(d => d.content).join("\n");

  const result = await askLLM(context, question);

  res.json(JSON.parse(result));
};