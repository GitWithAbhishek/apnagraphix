const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

dotenv.config();

const app = express();


// MongoDB
connectDB();


// CORS FIX
const allowedOrigins = [
  "http://localhost:3000",
  "https://apnagraphix.vercel.app",
  "https://apnagraphix.com",
  "https://www.apnagraphix.com"
];


app.use(
  cors({
    origin: function(origin, callback){

      // allow Postman / server requests
      if(!origin){
        return callback(null,true);
      }

      if(allowedOrigins.includes(origin)){
        return callback(null,true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    methods:[
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "OPTIONS"
    ],
    allowedHeaders:[
      "Content-Type",
      "Authorization"
    ],
    credentials:true
  })
);


// IMPORTANT FOR PREFLIGHT
app.options(/.*/, cors());


app.use(express.json());


// Routes
app.use("/api/contact", contactRoutes);


// Test routes
app.get("/",(req,res)=>{
    res.send("Backend is running");
});


app.get("/api/health",(req,res)=>{
    res.json({
        success:true,
        message:"API working"
    });
});



const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});
