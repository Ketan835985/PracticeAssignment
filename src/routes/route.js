const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const { createBook, bookList, getRandomBooks, getINRBooks, getBooksInYear, getParticularBooks }= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", createBook  )

router.get("/bookList", bookList)

router.get('/getRandomBooks', getRandomBooks)

router.get('/getINRbooks' , getINRBooks)

router.post('/getBookInYear', getBooksInYear)

router.post("/getParticularBooks", getParticularBooks)

module.exports = router;