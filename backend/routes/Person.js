//import express
const express = require('express');
//import database scehama models
const Person = require("../models/Person")

//give access to requesting function over express router
const router = express.Router();

//Save / create 
router.post("/Person/save",(req,res)=>{
    let newPerson = new Person(req.body);

    newPerson.save((err)=>{

        if(err){
            return res.status(400).json(
                {error:err}
            );
        }
        return res.status(200).json({
            success:"Person details saved successfully"
        });
    });
});

//Get all
router.get('/allPeople',(req,res)=>{
    Person.find().exec((err,allPeople)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingData:allPeople
        });
    });
});


module.exports=router;