/*Problem 1
Module1 : src/logger/logger.js containing the following exported function

- welcome() -> prints ‘Welcome to my application. I am <name> and a part of FunctionUp Californium cohort.’ on console



Call welcome in route.js inside the test-me handler
*/
function welcome(name) {
    console.log(`Welcome to my application. I am ${name} and a part of FunctionUp Technetium cohort.`);
}

module.exports.welcome = welcome;