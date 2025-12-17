import userModel from "../models/userModel";
import validator from "validator"



//route for user login

const  loginUser = async (req, res) =>{



}



//route for user register

const registerUser = async (req, res) => {

    try {

        const {name , email, password} = req.body;

        // checking user already exists or not 
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({success:false, message:"User already exists "})
        }

        //validating email format & stromg password

        if(!validator.isEmail(email)){
                    return res.json({success:false, message: "please enter a valid email"})
        }
        if(password.length < 8){
            return res.json ({success:false, message:"please enter a strong password"})

        }
        
    } catch (error) {
        
    }

}
//route for admin login

const adminLogin = async (req, res) =>{

}
export {loginUser, registerUser, adminLogin}