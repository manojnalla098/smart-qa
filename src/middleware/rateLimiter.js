const rateLimit = require("express-rate-limit");

const askLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10,             // 10 requests per user
  message: "Too many requests, please try again later"
});

module.exports = askLimiter;