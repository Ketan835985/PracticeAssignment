const { default: mongoose } = require("mongoose")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")
const ObjectId = mongoose.Types.ObjectId
// 3. Write a POST api that creates a book from the details in the request body. The api takes both the author and publisher from the request body. 
// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}

/* 

In this api, you have to write a logic that validates the following :
The authorId is present in the request body. If absent send an error message that this detail is required
If present, make sure the authorId is a valid ObjectId in the author collection. A valid ObjectId in author collection means that a document must exist with this id. If not then send an error message that the author is not present.
The publisherId is present in the request body. If absent send an error message that this detail is required
If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then send an error message that the publisher is not present.
4. Write a GET api that fetches all the books along with their author details (you have to populate for this) as well the publisher details (you have to populate for this) 
*/

const createBook = async function (req, res) {
    try {
      if(!req.body) return res.status(400).send({message: 'Please provide book details'})
      else {
        if(!(ObjectId.isValid(req.body.author)&& ObjectId.isValid(req.body.publisher))) return res.status(400).send({message: 'please provide valid ObjectId of the author or publisher'})
        else {
            const author = await authorModel.find()
            const publisher = await publisherModel.find()
            if(!(author.find(x=>x._id == req.body.author) && publisher.find(x=>x._id == req.body.publisher))) return res.status(400).send({message: 'entered author or publisher is not valid'})
            const book = await bookModel.create(req.body)
            res.status(201).send({book: book})
        }
    }
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

const getBooksData = async function (req, res) {
    try {
        const book = await bookModel.find().populate('author').populate('publisher')
        res.status(200).send({books: book})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
