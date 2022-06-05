let Instructor = require("../models/Instructor");
const router = require('express').Router();

router.route("/addInstructor").post(( req , res)=>{
    
    const insfname = req.body.insfname;
    const inslname = req.body.inslname;
    const inssubject = req.body.inssubject;
    const inscontact = Number(req.body.inscontact);
    const insemail = req.body.insemail;
    const insgender = req.body.insgender;
    const insnic = req.body.insnic;
    const insaccountno = req.body.insaccountno;
    // const inspassword = String(req.body.inspassword);


    const newInstructor = new Instructor({
        insfname,
        inslname,
        inssubject,
        inscontact,
        insemail,
        insgender,
        insnic,
        insaccountno,
        // inspassword,
    })

    newInstructor.save().then(()=>{
        res.json("Instructor Added!");
    }).catch ((err)=> {
        console.log(err);
    })
})
router.route("/retrive").get((req, res)=>{
    Instructor.find().then((instructor)=>{
        res.json(instructor);
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req, res)=>{
    let userID = req.params.id;
    const {name,age,gender} = req.body;

    const updateInstructor = {
        // name,
        // age,
        // gender
    }

    const update = await Instructor.findByIdAndUpdate(userID,updateInstructor).then(()=>{
        res.status(200).send({status : "user updated!" }) // success
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "error while updating data!!", error : err.message}); // server err
    })

})

router.route("/delete/:id").delete(async (req, res) => {
    let userID = req.params.id;
    await Instructor.findByIdAndDelete(userID).then(()=>{
        res.status(200).send({status : "user deleted!"});
    }).catch((err)=>{
        res.status(500).send({status : "error while deleting user", error : err.message});
    })
})

router.route("/retrive/:id").get(async (req, res) => {
    let userID = req.params.id;
    const user = await Instructor.findById(userID).then((instructor)=> {
        res.status(200).send({status : "user fetched", user : instructor});
    }).catch((err)=>{
        res.status(500).send({status : "error while fetching", error : err.message});
    })

})


module.exports = router;