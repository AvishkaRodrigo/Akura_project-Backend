const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const parentSchema = new Schema({

    parfname : {
        type : String,
        required : true,
    },
    parlname : {
        type : String,
        required : true,
    },
    paremail : {
        type : String,
        required : true,
    },
    parmobileno : {
        type : Number,
        required : true,
    },
    pargender : {
        type : String,
        required : true
    },
    paraddress : {
        type : String,
        required : true
    },
    parpassword1 : {
        type : String,
        required : true
    },
    parpassword2 : {
        type : String,
        required : true
    },
    
    // parpassword : {
    //     type : String,
    //     required : true
    // }
    
    })

const Parent = mongoose.model("Parent",parentSchema);

module.exports = Parent ;