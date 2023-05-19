const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

/*
  Read all the comments multiple times to understand why we are doing what we are doing in login api and getUserData api
*/
// const createUser = async function (abcd, xyz) {
//   //You can name the req, res objects anything.
//   //but the first parameter is always the request 
//   //the second parameter is always the response
//   let data = abcd.body;
//   let savedData = await userModel.create(data);
//   console.log(abcd.newAtribute);
//   xyz.send({ msg: savedData });
// };

// const loginUser = async function (req, res) {
//   let userName = req.body.emailId;
//   let password = req.body.password;

//   let user = await userModel.findOne({ emailId: userName, password: password });
//   if (!user)
//     return res.send({
//       status: false,
//       msg: "username or the password is not corerct",
//     });

//   // Once the login is successful, create the jwt token with sign function
//   // Sign function has 2 inputs:
//   // Input 1 is the payload or the object containing data to be set in token
//   // The decision about what data to put in token depends on the business requirement
//   // Input 2 is the secret (This is basically a fixed value only set at the server. This value should be hard to guess)
//   // The same secret will be used to decode tokens 
//   let token = jwt.sign(
//     {
//       userId: user._id.toString(),
//       batch: "thorium",
//       organisation: "FunctionUp",
//     },
//     "functionup-plutonium-very-very-secret-key"
//   );
//   res.setHeader("x-auth-token", token);
//   res.send({ status: true, token: token });
// };

// const getUserData = async function (req, res) {
//   let token = req.headers["x-Auth-token"];
//   if (!token) token = req.headers["x-auth-token"];

//   //If no token is present in the request header return error. This means the user is not logged in.
//   if (!token) return res.send({ status: false, msg: "token must be present" });

//   console.log(token);

//   // If a token is present then decode the token with verify function
//   // verify takes two inputs:
//   // Input 1 is the token to be decoded
//   // Input 2 is the same secret with which the token was generated
//   // Check the value of the decoded token yourself

//   // Decoding requires the secret again. 
//   // A token can only be decoded successfully if the same secret was used to create(sign) that token.
//   // And because this token is only known to the server, it can be assumed that if a token is decoded at server then this token must have been issued by the same server in past.
//   let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
//   if (!decodedToken)
//     return res.send({ status: false, msg: "token is invalid" });

//   let userId = req.params.userId;
//   let userDetails = await userModel.findById(userId);
//   if (!userDetails)
//     return res.send({ status: false, msg: "No such user exists" });

//   res.send({ status: true, data: userDetails });
//   // Note: Try to see what happens if we change the secret while decoding the token
// };

// const updateUser = async function (req, res) {
//   // Do the same steps here:
//   // Check if the token is present
//   // Check if the token present is a valid token
//   // Return a different error message in both these cases

//   let userId = req.params.userId;
//   let user = await userModel.findById(userId);
//   //Return an error if no user with the given id exists in the db
//   if (!user) {
//     return res.send("No such user exists");
//   }

//   let userData = req.body;
//   let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
//   res.send({ status: updatedUser, data: updatedUser });
// };


const createUser = async function (req, res) {
  try {
    if (!req.body) return res.status(400).send({ msg: "please provide a user details" });
    const user = await userModel.create(req.body)
    res.status(201).send({ msg: user })
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
}

const loginUser = async function (req, res) {
  try {
    if (!req.body) return res.status(400).send({ msg: "please provide a user Login details" });
    else {
      const user = await userModel.findOne({ emailId: req.body.emailId, password: req.body.password })
      if (!user) return res.status(403).send({ msg: "user not found" });
      const token = jwt.sign({ _id: user._id }, "KeTan-Assignment")
      res.status(200).send({ msg: token, status: true });
    }
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
}

/* - Write a **GET api /users/:userId** to fetch user details. Pass the userId as path param in the url. Check that request must contain **x-auth-token** header. If absent, return a suitable error.
If present, check that the token is valid.
- Write a **PUT api /users/:userId** to update user details. Pass the userId as path param in the url and update the attributes received in the request body. Check that request must contain **x-auth-token** header. If absent, return a suitable error.
- Write a **DELETE api /users/:userId** that takes the userId in the path params and marks the isDeleted attribute for a user as true. Check that request must contain **x-auth-token** header. If absent, return a suitable error.
- Once, all the apis are working fine, move the authentication related code in a middleware called auth.js
- Add this middleware at route level in the routes where applicable.*/

const getUserData = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.userId)
    res.status(200).send({ msg: user, token: req.token, status: true });
  }
  catch (error) {

  }
}

const updateUserData = async (req, res) => {
  try {
    if (!req.params.userId) return res.status(400).send({ msg: 'User id is required' })
    const user = await userModel.findByIdAndUpdate(req.params.userId, {$set : req.body}, {new: true})
    res.status(200).send({ msg: user});
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
}

const deleteUserData = async (req,res) => {
  try {
    if (!req.params.userId) return res.status(400).send({ msg: 'User id is required' })
    const user = await userModel.findByIdAndUpdate(req.params.userId, { $set : {isDeleted: true}}, {new: true})
    res.status(200).send({ msg: user});
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
}


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUserData = updateUserData;
module.exports.loginUser = loginUser;
module.exports.deleteUserData = deleteUserData;
