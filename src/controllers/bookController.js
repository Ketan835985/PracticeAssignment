const BookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")
const createBook = async function (req, res) {
    let data = req.body

    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )

//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )

//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE

/*Write create APIs for both books and authors ---> If author_id is not available then do not accept the entry(in neither the author collection nor the books collection)
List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )
find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)
Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 
bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG
bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) loop and get all the authorName corresponding to the authorId’s ( by querying authorModel)
 */

const cheTanBook = async (req, res) => {
    try {
        const authorId = (await authorModel.findOne({ author_name: "Chetan Bhagat" })).author_id;
        const book = await BookModel.find({ author_id: authorId })
        res.status(200).send({ books: book });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const findTwoStates = async (req, res) => {
    try {
        const book = await BookModel.findOneAndUpdate({ name: "Two states" }, { $set: { price: 100 } }, { new: true })
        const author = (await authorModel.findOne({ author_id: book.author_id })).author_name
        res.status(200).send({ book: book, author: author})
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const filterBook = async (req, res) => {
    try {
        const book = await BookModel.find({price : {$gte:50 , $lte: 100}}).select({author_id : 1, _id : 0})
        const author = await authorModel.find()
        const allBooksAuthor = book.map(x=>{
            const newAuthor =  (author.find(y=>y.author_id === x.author_id)).author_name
            return newAuthor
        })
        res.status(200).send({ book: allBooksAuthor})
    } catch (error) {
        res.status(500).send({error: error.message});
    }
}


module.exports = { cheTanBook, filterBook, findTwoStates, createBook }

