//Write a POST api to create a user that takes user details from the request body. If the header **isFreeAppUser** is not present terminate the request response cycle with an error message that the request is missing a mandatory header. The value of field isFreeAppUser is determined by **isFreeAppUser** request header.
const user2Model = require('../models/user2Model.js');
const productModel = require('../models/productModel.js')
const checkHeader = async (req, res, next) => {
    try {
        if(! req.headers) return res.status(400).send({message : "Missing required header"})
        next()
    } catch (error) {
        res.status(400).send({message : error.message})
    }
}


/* If the header is present the control goes to the request handler. Perform the user and product validation. Check if the user exists as well as whether the product exists. Return an error with a suitable error message if either of these validations fail*/

const userCheck = async (req, res, next) => {
    try {
        if(! (req.body.userId)) return res.status(400).send({message : "please provide a userId"})
        else{
            const userId = req.body.userId
            const user = await user2Model.findById(req.body.userId)
            if(!user) return res.status(400).send({message : "please provide a valid userId"})
            res.userId = userId
            next()
        }
    } catch (error) {
        res.status(400).send({message : error.message})
    }
}

const productCheck = async (req, res, next) => {
    try {
        if(!req.body.productId) return res.status(400).send({message : "please provide a productId"})
        else{
            const productId = req.body.productId
            const products = await productModel.findById(productId)
            if(! products) return res.status(400).send({message : "please provide a valid productId"})
            res.productId = productId
            next()
        }
    } catch (error) {
        res.status(400).send({message : error.message})
    }
}


module.exports = { userCheck, productCheck, checkHeader}