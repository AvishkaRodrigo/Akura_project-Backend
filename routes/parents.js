let Parent = require("../models/Parent");
const router = require('express').Router();

router.route("/addParent").post((req,res)=>{
    
    const parfname = req.body.parfname;
    const parlname = req.body.parlname;
    const paremail = req.body.paremail;
    const parmobileno = Number(req.body.parcontact);
    const pargender = req.body.pargender;
    const paraddress = req.body.paraddress;
    const parpassword1 = String(req.body.parpassword1);
    const parpassword2 = String(req.body.parpassword2);
    // const parpassword = String(req.body.parpassword);

    const newParent = new Parent({
        parfname,
        parlname,
        paremail,
        parmobileno,
        pargender,
        paraddress,
        parpassword1,
        parpassword2
        // parpassword
    })

    newParent.save().then(()=>{
        res.json("Parent Added!");
    }).catch ((err)=> {
        console.log(err);
    })
})
router.route("/retrive").get((req, res)=>{
    Parent.find().then((parents)=>{
        res.json(parents);
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req, res)=>{
    let userID = req.params.id;
    const {name,age,gender} = req.body;

    const updateParent = {
        // name,
        // age,
        // gender
    }

    const update = await Parent.findByIdAndUpdate(userID,updateParent).then(()=>{
        res.status(200).send({status : "user updated!" }) // success
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "error while updating data!!", error : err.message}); // server err
    })

})

router.route("/delete/:id").delete(async (req, res) => {
    let userID = req.params.id;
    await Parent.findByIdAndDelete(userID).then(()=>{
        res.status(200).send({status : "user deleted!"});
    }).catch((err)=>{
        res.status(500).send({status : "error while deleting user", error : err.message});
    })
})

router.route("/retrive/:id").get(async (req, res) => {
    let userID = req.params.id;
    const user = await Parent.findById(userID).then((parent)=> {
        res.status(200).send({status : "user fetched", user : parent});
    }).catch((err)=>{
        res.status(500).send({status : "error while fetching", error : err.message});
    })

})


module.exports = router;