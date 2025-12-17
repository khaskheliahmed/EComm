import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,   // ✅ bcrypt hash is STRING
      required: true,
    },

    cartData: {        // (cardData → cartData recommended)
      type: Object,
      default: {},
    },
  },
  {
    minimize: false,
    timestamps: true,
  }
);

// ✅ Correct model creation (ESM safe)
const userModel =
  mongoose.models.User || mongoose.model("User", userSchema);

export default userModel;
