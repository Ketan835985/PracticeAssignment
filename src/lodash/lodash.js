/*Problem 4
Using the package ‘lodash’ solve below problems(Write all this in route.js in /test-me route handler)
- Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays on console.
- Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.
- Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique values and print them on console
- Use the function fromPairs to create an object containing key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]


NOTE: You can write the login in any route of your choice. You can keep one single route for all of these questions or separate ones for each question.
*/

const myLodash = require('lodash')

function chunkArray(arr,n) {
    console.log('chunkArray: ', myLodash.chunk(arr,n))
}

function tailArray(arr) {
    console.log('tailArray: ', myLodash.tail(arr))
}


function unionArray(...arr) { 
    console.log('unionArray: ', myLodash.union(...arr))
}

function fromPairsArray(arr) { 
console.log('fromPairs: ', myLodash.fromPairs(arr))
}

module.exports = {unionArray, chunkArray, tailArray, fromPairsArray}