// routes/askRoutes.js
const router = require("express").Router();
const { askQuestion } = require("../controllers/askController");
const auth = require("../middleware/auth");
const askLimiter = require("../middleware/rateLimiter");

router.post("/ask", auth, askLimiter, askQuestion);

module.exports = router;