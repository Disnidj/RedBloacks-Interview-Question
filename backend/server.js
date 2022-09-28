//import mongoose
const mongoose= require('mongoose')

//import cors
const cors=require('cors')

//import express
const express =require ("express");

//import body-parser to convert json format in to server object
const bodyparser=require('body-parser')

//invoke express
const app= express();

//middleware
app.use(bodyparser.json())
//remove the cors policy that dont allow these backend and front end to run together
app.use(cors())

//import routes
const Person= require('./routes/Person')

//use for server to comminucation (when we get requests from front end, its first hit to this)
app.use(Person); 


//port declarig
const PORT=8000;

//app listening
app.listen(PORT,()=>{
    console.log("App is running in port ",PORT)
})

//connect db
const DB_URL="mongodb+srv://Test123:Test123@clustertest.2qyidmh.mongodb.net/Test1?retryWrites=true&w=majority"

//connect mongoose and mongodb and see if the connection is successful

mongoose.connect(DB_URL).then (()=>{
    console.log("DB connected");
}).catch((err)=>
console.log("DB connection failed",err));

