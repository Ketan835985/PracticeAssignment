const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        length : 16
    },
    balance : {
        type : Number,
        default : 100
    },
    address : String,
    age : Number,
    gender : String,
    isFreeAppUser : {
        type : Boolean,
        default : false
    }
}, {timestamps : true})

module.exports = mongoose.model('AssignUser', userSchema)