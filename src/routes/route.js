const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const commonFile = require('./common')
const {welcome} = require('../logger/logger')
const { printDate, printMonth, getBatchInfo } = require('../util/helper')
const {trim, changeToLowerCase, changeToUpperCase } = require('../validator/formatter')
const { chunkArray, fromPairsArray, tailArray, unionArray } = require('../lodash/lodash') 

router.get('/test-me', function (req, res) {

    const {batchName,week, day, topic } = req.body
    welcome("KeTan")
    printDate()
    printMonth()
    getBatchInfo(batchName, week, day, topic)
    trim("          functionUp        ")
    changeToLowerCase("FUNctionUP")
    changeToUpperCase("hi my name is function")

    res.send('This should be working!')
});

router.get('/lodash', function(req, res) {
    chunkArray(["jan", "feb", "mar", "apr", "may", "jun", "july","aug", "sep", "oct", "nov", "dec"],4)
    tailArray([1,2,3,4,5,6,7,8,9,10])
    fromPairsArray([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]])
    unionArray([1,2,3],[2,5,9,56,7],[52,65,1,2,3,5,80],[45,5,6,7,8])
    res.send("lodash operation is done")
});

router.get('/test-you', function (req, res) {
    console.log('This is the constant I created', commonFile.name)
    res.send('Hello there, welcome to this application!')
});


module.exports = router;