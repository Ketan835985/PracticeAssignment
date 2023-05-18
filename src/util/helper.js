/*Module 2 : src/util/helper.js

- printDate() : prints the current date
- printMonth() : prints the current month
- getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Californium, W3D4, the topic for today is Nodejs module system’
	
	Call all these functions in route.js inside the test-me route handler
*/

const date = new Date();
const month = ["jan", "feb", "mar", "apr", "may", "jun", "july","aug", "sep", "oct", "nov", "dec"]

function printDate() {
    console.log(month[date.getDate()]);
}

function printMonth() {
    console.log(date.getMonth())
}

function getBatchInfo(batchName, week, day, topic) {
    console.log(`${batchName}, W${week}D${day}, ${topic}`)
}

module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
module.exports.getBatchInfo = getBatchInfo;