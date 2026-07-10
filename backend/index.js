import dotenv from "dotenv";
dotenv.config()

import express from "express"
import dbConnect from "src/config/dbConnect.js";
import route from "src/routes/route.js";
import cookieParser from "cookie-parser";

const app=express()

// Middleware
app.use(express.json())

// Cookie Setup
app.use(cookieParser())

// Database Connection
dbConnect()

// Routes
app.use("/auth",route)

 app.listen(process.env.PORT,()=>console.log("Server Running..."));