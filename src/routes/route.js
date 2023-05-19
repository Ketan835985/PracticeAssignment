const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares");
const { createUser } = require('../controllers/user2Controller');
const { createProduct } = require('../controllers/productController');
const { createOrder } = require('../controllers/orderController');
const { checkHeader, userCheck, productCheck } = require('../middlewares/controllerMidWr');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", commonMW.abc, BookController.createBook  )

router.post('/createUser',checkHeader, createUser)

router.post('/createProduct', createProduct)

router.post('/createOrder',checkHeader,userCheck, productCheck ,createOrder)

module.exports = router;