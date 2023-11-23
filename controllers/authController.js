import { comparePassword, hashPassword } from "../helpers/authHepler.js";
import bookingModel from "../models/bookingModel.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

 export const registerController = async (req,res) => {
    try{
        const {name,email,password,phone,address,answer} = req.body
        // validation
        if(!name){
            return res.send({message:'Name is Requires'})
        }
        if(!email){
            return res.send({message:'Email is Requires'})
        }
        if(!password){
            return res.send({message:'Password is Requires'})
        }
        if(!phone){
            return res.send({message:'Phone is Requires'})
        }
        if(!address){
            return res.send({message:'Address is Requires'})
        }
        if(!address){
          return res.send({message:'Answer is Requires'})
      }

        // check user 
        const existingUser = await userModel.findOne({email})
        // existing user
        if(existingUser){
            return res.status(200).send({
                success:false,
                message:'Already Register please login',
            })
        }
        // register user
        const hashedPassword = await hashPassword(password);

        // save
        const user = await new userModel({
            name,
            email,
            phone,
            address,
            password:hashedPassword,
            answer
        }).save();

        res.status(201).send({
            success:true,
            message:'User Register Sucessfully',
            user,
        });
    } catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in Registration',
            error,
        });
    }
 };

 // BOOKING
 export const bookingController = async (req,res) => {
  try{
      const {purpose,category,where_from,where_to,date,numb} = req.body
      // validation
      if(!purpose){
          return res.send({message:'Name is Requires'})
      }
      if(!category){
          return res.send({message:'Email is Requires'})
      }
      if(!where_from){
          return res.send({message:'Password is Requires'})
      }
      if(!where_to){
          return res.send({message:'Phone is Requires'})
      }
      if(!date){
          return res.send({message:'Address is Requires'})
      }
      if(!numb){
        return res.send({message:'Answer is Requires'})
    }

      
      
      // save
      const user = await new bookingModel({
          purpose,
          category,
          where_from,
          where_to,
          date,
          numb
      }).save();

      res.status(201).send({
          success:true,
          message:'User Book Sucessfully',
          user,
      });
  } catch(error){
      console.log(error);
      res.status(500).send({
          success:false,
          message:'Error in Booking',
          error,
      });
  }
};


 // POST LOGIN
 export const loginController = async (req,res) => {
    try{
      const {email,password} = req.body
      // validation
      if(!email || !password){
        return  res.status(404).send({
            success:false,
            message:'Invalid email or password',
        });
      }
      // check user
      const user = await userModel.findOne({email})
      if(!user){
        return res.status(404).send({
            success:false,
            message:'Email is not register',
        });
      }
      const match = await comparePassword(password,user.password)
      // password match
      if(!match){
        return res.status(200).send({
            success:false,
            message:'Invlid password',
        });
    }

    // token
    const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET, {
        expiresIn:"7d",
    });
    res.status(200).send({
        success:true,
        message:'Login Sucessfully',
        user:{
            _id: user._id,
            name:user.name,
            email:user.email,
            phone:user.phone,
            address:user.address,
            role:user.role,
                },
                token,
    });
    
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in Login',
            error,
        });
    }
 };

 //forgotPasswordController

export const forgotPasswordController = async (req, res) => {
    try {
      const { email, answer, newPassword } = req.body;
      if (!email) {
        res.status(400).send({ message: "Emai is required" });
      }
      if (!answer) {
        res.status(400).send({ message: "answer is required" });
      }
      if (!newPassword) {
        res.status(400).send({ message: "New Password is required" });
      }
      //check
      const user = await userModel.findOne({ email, answer });
      //validation
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Wrong Email Or Answer",
        });
      }
      const hashed = await hashPassword(newPassword);
      await userModel.findByIdAndUpdate(user._id, { password: hashed });
      res.status(200).send({
        success: true,
        message: "Password Reset Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Something went wrong",
        error,
      });
    }
  };
  
  //test controller
  export const testController = (req, res) => {
    try {
      res.send("Protected Routes");
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  };
  
  //update prfole
  export const updateProfileController = async (req, res) => {
    try {
      const { name, email, password, address, phone } = req.body;
      const user = await userModel.findById(req.user._id);
      //password
      if (password && password.length < 6) {
        return res.json({ error: "Passsword is required and 6 character long" });
      }
      const hashedPassword = password ? await hashPassword(password) : undefined;
      const updatedUser = await userModel.findByIdAndUpdate(
        req.user._id,
        {
          name: name || user.name,
          password: hashedPassword || user.password,
          phone: phone || user.phone,
          address: address || user.address,
        },
        { new: true }
      );
      res.status(200).send({
        success: true,
        message: "Profile Updated SUccessfully",
        updatedUser,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        success: false,
        message: "Error WHile Update profile",
        error,
      });
    }
  };
  
  