const PublisherModel = require('../models/publisherModel')
//2. Write a POST api that creates a publisher from the details in the request body
const createPublisher = async (req,res)=>{
    try {
        if(! req.body) return res.status(400).send({message: 'please provide a publisher details'})
        const publisher = await PublisherModel.create(req.body)
        res.status(200).send({publisher : publisher})
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}


module.exports ={createPublisher}