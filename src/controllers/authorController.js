const authorModel = require('../models/authorModel')


const createAuthor = async (req,res) => {
    try {
        if(!req.body) return res.status(400).send({ message: 'Please provide author details' })
        const author = await authorModel.create(req.body)
        res.status(200).send({author : author}) 
    } catch (error) {
        res.status(500).send({error : error.message})
    }
}


const authorList = async (req,res) => {
    try {
        const authorList = await authorModel.find()
        res.status(200).send({authorList : authorList})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

module.exports = { createAuthor, authorList}