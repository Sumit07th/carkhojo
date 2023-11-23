import express from "express";
import {
    registerController,
    loginController,
    testController,
    forgotPasswordController,
    bookingController,
    
} from '../controllers/authController.js';
import { isAdmin,requireSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router()

// routing
// Register  || Method Post
router.post('/register',registerController);

// Booking  || Method Post
router.post('/booking',bookingController);

// LOGIN || POST
router.post('/login',loginController);

// Forgot password || Post
router.post('/forgot-password',forgotPasswordController);


// Test Routes
router.get('/test',requireSignIn,isAdmin,testController); 

// protected route auth
router.get('/user-auth',requireSignIn, (req,res) =>{
    res.status(200).send({ ok: true });
});

//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
  });

  

  

export default router;