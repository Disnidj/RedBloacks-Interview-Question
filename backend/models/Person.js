//import mongoose
const mongoose = require("mongoose");
//make database schema
const PersonSchema= new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },

    NIC:{
        type:String,
        required:true
    },

    Gender:{
        type:String,
        required:true
    }
});
//pass the schema
module.exports=mongoose.model("Person",PersonSchema);