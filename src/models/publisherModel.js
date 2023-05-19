const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
    name : String,
    headQuaTer : {
        type : String,
        required : true
    },
},{timestamps: true })

module.exports = mongoose.model('newPublisher', publisherSchema)