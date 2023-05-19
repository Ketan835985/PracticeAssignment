const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController");
const { checkUser } = require('../middleware/midControl');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",checkUser ,userController.getUserData)

router.put("/users/:userId",checkUser ,userController.updateUserData)

router.delete("/users/:userId",checkUser ,userController.deleteUserData)

module.exports = router;