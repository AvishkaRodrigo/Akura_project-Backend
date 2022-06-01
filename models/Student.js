const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({

    stufname : {
        type : String,
        required : true,
    },
    stulname : {
        type : String,
        required : true,
    },
    stuemail : {
        type : String,
        required : true,
    },
    stumobileno : {
        type : Number,
        required : true,
    },
    stugender : {
        type : String,
        required : true
    },
    stupassword1 : {
        type : String,
        required : true
    },
    stupassword2 : {
        type : String,
        required : true
    },

})

const Student = mongoose.model("Student",studentSchema);

module.exports = Student ;