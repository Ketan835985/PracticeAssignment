const mongoose = require("mongoose")


const authorSchema = new mongoose.Schema({
    author_id : {
        type : Number,
        required : true,
        unique : true
    },
    author_name : { type : String, required : true},
    age : Number,
    address : String
},{timestamps : true})

module.exports = mongoose.model("author",authorSchema)