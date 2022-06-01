const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({

    fname : {
        type : String,
        required : true,
    },
    lname : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    mobileno : {
        type : Number,
        required : true,
    },
    gender : {
        type : String,
        required : true
    },
    password1 : {
        type : String,
        required : true
    },
    password2 : {
        type : String,
        required : true
    },

})

const Student = mongoose.model("Student",studentSchema);

module.exports = Student ;