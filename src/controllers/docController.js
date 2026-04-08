
const Doc = require("../models/Doc");

exports.getDocs = async (req, res) => {
  const docs = await Doc.find();
  res.json(docs);
};