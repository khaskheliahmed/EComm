import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ✅ MIDDLEWARES (order matters)
app.use(cors());
app.use(express.json());

// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend is heloo");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server started on PORT : ${PORT}`);
});
