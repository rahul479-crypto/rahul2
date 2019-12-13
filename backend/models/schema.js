// install and import mongoose
const mongoose=require("mongoose")
const Schema=mongoose.Schema
const SchemaObj=new Schema({

    FirstName:{
        type:String,
        required:true


    },
    LastName:{
        type:String,
        required:true

    },
    username:{
        type:String,
        required:true

    },
    MobileNumber:{
        type:Number,
        required:true

    },
    Gender:{
        type:String,
required:true
    },
   
    password:{
        type:String,
        required:true
    },
  
 






})

// import and install model
module.exports=mongoose.model('student',SchemaObj)