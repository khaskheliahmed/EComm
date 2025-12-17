import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: ture,
    },
      email:{
        type:String,
        required:ture,
        unique: ture,
    },
      password:{
        type:Number,
        required:ture
    },
      cardData:{
        type:Object,
        required:ture,
        default: {}
    }

},{minimize:false})


const userModel = mongoose.model.user || mongoose.model('user' , userSchema);

export default userModel