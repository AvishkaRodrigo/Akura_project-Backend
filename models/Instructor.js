const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const instructorSchema = new Schema({

    insfname : {
        type : String,
        required : true,
    },
    inslname : {
        type : String,
        required : true,
    },  
    inssubject : {
        type : String,
        required : true,
    },
    inscontact : {
        type : String,
        required : true,
    },
    insemail : {
        type : String,
        required : true,
    },
    insgender : {
        type : String,
        required : true
    },
    insnic : {
        type : String,
        required : true,
    },
    insaccountno : {
        type : String,
        required : true,
    },
    // inspassword : {
    //     type : String,
    //     // required : true
    // },
})

const Instructor = mongoose.model("Instructor",instructorSchema);

module.exports = Instructor ;