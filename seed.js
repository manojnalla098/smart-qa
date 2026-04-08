// seed.js
const mongoose = require("mongoose");
const Doc = require("./src/models/Doc");

mongoose.connect(process.env.MONGO_URI);

const docs = [
  {
    title: "Refund Policy",
    content: "Refunds are processed within 5-7 business days.",
    tags: ["refund", "payment"]
  },
  {
    title: "Shipping Policy",
    content: "Shipping takes 3-5 business days.",
    tags: ["shipping"]
  }
];

(async () => {
  await Doc.deleteMany();
  await Doc.insertMany(docs);
  console.log("Seeded");
  process.exit();
})();