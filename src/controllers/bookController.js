const bookModel = require('../models/bookModel')


const createBook = async function (req,res){
    try {
        const data = req.body
        if(! data) return res.status(400).send({ message: "please provide a book data" })
        const book = await bookModel.create(data)
        res.status(200).send({ message: book, status:true })
        
    } catch (error) {
        res.status(500).send({ message: error.message})
    }
}


const getBooks = async function (req,res){
    try {
        const allBook = await bookModel.find()
        res.status(200).send({ message: allBook})
    } catch (error) {
        res.status(500).send({ message: error.message}) 
    }
}


module.exports = {getBooks, createBook}