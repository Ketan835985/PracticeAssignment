const jwt = require("jsonwebtoken")

const checkUser = async (req, res, next) => {
    try {
        if(!req.headers) return res.status(400).send({ error: "provided headers are missing" })
        else{
            const token  = req.headers["x-auth-token"]
            jwt.verify(token, "KeTan-Assignment")
            req.headers = token
            next()
        }
    } catch (error) {
        res.status(400).send({ error : error.message })
    }
}

module.exports = {checkUser}