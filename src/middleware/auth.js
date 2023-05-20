const jwt = require('jsonwebtoken');

const authenticate = function(req, res, next) {
    try {
        if(!req.headers) return res.status(401).send({error: "please provide a header"})
        else{
            token = req.headers["x-auth-token"]
            userId= req.params.userId
            decodedToken = jwt.verify(token , "KeTan-TechneTium")
            if(userId != decodedToken.userId) return res.status(401).send({error: "Unauthorized  user"})
            req.userId = userId
            next()
        }
        
    } catch (error) {
        res.status(400).send({ error : error.message })
    }

}


module.exports = {authenticate}