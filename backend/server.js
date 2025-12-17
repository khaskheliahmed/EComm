import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/moongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import UserRouter from "./routes/userRoute.js";
dotenv.config();


//api config 
const app = express();
connectDB();
connectCloudinary()

//middlewares

app.use(cors());
app.use(express.json());

// api endpoints
app.use('/api/user',UserRouter)

app.get("/", (req, res) => {
  res.send("Backend is hello");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 server started on PORT : ${PORT}`);
});
