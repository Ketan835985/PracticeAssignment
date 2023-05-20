const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController");
const { authenticate } = require('../middleware/auth');


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",authenticate ,userController.getUserData)
// router.post("/users/:userId/posts", userController.postMessage)

router.put("/users/:userId",authenticate, userController.updatedUser)
router.delete('/users/:userId',authenticate, userController.deleteUser)

module.exports = router;