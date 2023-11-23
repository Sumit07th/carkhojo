import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    
    purpose:{
        type:String,
        required:true,
    
    },
    category:{
        type:String,
        required:true,
    },
    where_from:{
        type:String,
        required:true,
    },
    where_to:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    numb:{
        type:Number,
        required:true,
    },
},{timestamps:true})

export default mongoose.model('booking',bookingSchema)