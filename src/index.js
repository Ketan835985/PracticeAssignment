const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use(
    function (req, res, next) {
        //2010-08-19 14:00:00 , 123.459.898.734 , /createUser
        try {
            const date = new Date();
            const ip = req.ip
            const url = req.url
            console.log(`${date.toLocalString()}, ${ip}, ${url}`)
            next();
        }
        catch (err) {
            res.status(400).send({ message: err.message })
        }
    }
);

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
