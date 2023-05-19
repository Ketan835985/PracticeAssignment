const user2Model = require('../models/user2Model')


const createUser = async function (req, res, next) {
    try {
        if (!req.body) return res.status(400).send({ message: 'please provide a body' })
        const user = await user2Model.create(req.body)
        res.status(201).send({user: user})
    } catch (error) {
        res.status(500).send({message : error.message})
    }
}

module.exports = {createUser}