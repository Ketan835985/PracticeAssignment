const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        required: true
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    age: Number,
    posts: {type: [], default: []},
    isDeleted:{
        type : Boolean,
        default : false
    }
}, { timestamps: true });

module.exports = mongoose.model('AuthorizedUser', userSchema)


/*
Data
database - sql vs No-sql : scalable, rationality,requires join, format store, rigid/flexibility, schema type,_id, examples
mongoDb - open source D-oriented database , schema less, no sql
mongoose - odm module,
datatypes - string, Number, array, object, boolean, mixed, ObjectId
validation - unique, required , default
mongoDb -NodeJs connection 
Schema - 
model
crud operations 
queries - find, findOne, findById, insertOne, insertMany, create, save, updateOne, updateMany, findByIdAndUpdate, findOneAndUpdate, findOneAndReplace, findByIdAndRemove, findOneAndRemove, deleteMany, DeleteOne
query method to find particular record query - count, select, sort, limit, skip,
Operations operators - $gt, $gte, $lt, $lte, $ne, $eq, $or, $and, $in, $nin, $set, $upsert
regex operations - /^[a-zA-Z]/g/
async await 
populate and referencing
Middleware functions
middleware functions types - Global middleware functions , route level middleware functions
authentication, authorization
*/