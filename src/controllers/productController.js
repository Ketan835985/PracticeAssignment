const productModel = require('../models/productModel')


const createProduct = async (req,res) => {
    try {
        if(!req.body) return res.status(400).send({ message: 'Please provide a product details'})
        const product = await productModel.create(req.body)
        res.status(201).send({product: product})
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}


module.exports = {createProduct}