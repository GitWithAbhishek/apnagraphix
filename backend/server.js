const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

dotenv.config();

const app = express();


// CORS
const allowedOrigins = [
  "http://localhost:3000",
  "https://apnagraphix.vercel.app",
  "https://apnagraphix.com",
  "https://www.apnagraphix.com"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(null, false);
    },
    credentials: true,
    methods: [
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "OPTIONS"
    ],
    allowedHeaders: [
      "Content-Type",
      "Authorization"
    ]
  })
);


// Body parser
app.use(express.json());


// Database
connectDB();


// Routes
app.use("/api/contact", contactRoutes);


// Test routes
app.get("/", (req, res) => {
  res.send("Backend is running...");
});


app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "API is working"
  });
});


// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
