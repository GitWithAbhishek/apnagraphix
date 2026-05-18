const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  })
);
app.use(express.json());
app.use("/api/contact", contactRoutes);
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "API is working"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});