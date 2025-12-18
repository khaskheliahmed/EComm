import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/moongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import UserRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import multer from "multer";


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
app.use('/api/product',productRouter)
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
  next(err);
});
app.get("/", (req, res) => {
  res.send("Backend is hello000000000");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 server started on PORT : ${PORT}`);
});
