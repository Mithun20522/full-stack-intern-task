import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    hobby:{
        type:String,
        required:true
    }
},{timestamps: true});

const Form = mongoose.model('Form', dataSchema);

export default Form;