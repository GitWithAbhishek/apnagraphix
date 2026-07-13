const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

dotenv.config();

const app = express();


// ===============================
// CORS CONFIGURATION
// ===============================
const allowedOrigins = [
  "http://localhost:3000",
  "https://apnagraphix.vercel.app",
  "https://apnagraphix.com",
  "https://www.apnagraphix.com"
];

app.use(
  cors({
    origin: function (origin, callback) {

      // Allow requests without origin
      // (Postman, server-to-server requests)
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(
        new Error("Not allowed by CORS")
      );
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


// Handle browser preflight requests
app.options("*", cors());


// ===============================
// MIDDLEWARE
// ===============================
app.use(express.json());


// ===============================
// DATABASE CONNECTION
// ===============================
connectDB();


// ===============================
// ROUTES
// ===============================
app.use("/api/contact", contactRoutes);


// ===============================
// HEALTH CHECK
// ===============================
app.get("/", (req, res) => {
  res.send("Backend is running...");
});


app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "API is working"
  });
});


// ===============================
// SERVER START
// ===============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




/*const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://apnagraphix.vercel.app"
    ],
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
});*/
