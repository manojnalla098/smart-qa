
require("dotenv").config();
const express = require("express");
const app = express();



// 1. Body parser
app.use(express.json());


// 2. Logging middleware 
app.use((req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const time = Date.now() - start;
    console.log({
      user: req.user?.id,  
      path: req.path,
      time
    });
  });

  next();
});


// 3. Routes
const askRoutes = require("./routes/askRoutes");
const docRoutes = require("./routes/docRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api", askRoutes);
app.use("/api/docs", docRoutes);
app.use("/api/auth", authRoutes);


// 4. 404 handler (optional but good)
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});


// 5. Error handler (ALWAYS LAST)
app.use((err, req, res, next) => {
  console.error(err); // log internally

  res.status(500).json({
    message: "Something went wrong"
  });
});

module.exports = app;