import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("⏳ Connecting to MongoDB...");

    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "e-commerce",
    });

    console.log("✅ MongoDB Connected:", conn.connection.host);
  } catch (error) {
    console.error("❌ MongoDB Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;


// import mongoose from "mongoose";

// const connectDB =async () =>{

//     mongoose.connection.on('connected', () =>{
//         console.log("DB Connected");

//     })
//     await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce `)
// }

// export default connectDB