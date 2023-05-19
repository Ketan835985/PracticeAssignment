const mongoose = require('mongoose');


const authorSchema = new mongoose.Schema( {
   authorName : {
    type : String,
    required : true
   },
   age : Number,
   address : String,
   rating : Number

}, { timestamps: true });

module.exports = mongoose.model('newAuthor', authorSchema)
