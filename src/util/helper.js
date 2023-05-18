/*Module 2 : src/util/helper.js

- printDate() : prints the current date
- printMonth() : prints the current month
- getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Californium, W3D4, the topic for today is Nodejs module system’
	
	Call all these functions in route.js inside the test-me route handler
*/

const date = new Date();
const month = ["jan", "feb", "mar", "apr", "may", "jun", "july","aug", "sep", "oct", "nov", "dec"]

function printDate() {
    console.log(date.getDate())
    console.log(date.toDateString())
    console.log(date.toISOString())
    console.log(date.toLocaleString())
    console.log(date.toLocaleTimeString())
    console.log(date.toLocaleDateString())
    console.log(date.toString())
 /*18
Thu May 18 2023
2023-05-18T11:58:08.632Z
18/5/2023, 5:28:08 pm
5:28:08 pm
18/5/2023
Thu May 18 2023 17:28:08 GMT+0530 (India Standard Time)
*/
}

function printMonth() {
    console.log(month[date.getMonth()]);
}

function getBatchInfo(batchName, week, day, topic) {
    console.log(`${batchName}, W${week}D${day}, ${topic}`)
}

module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
module.exports.getBatchInfo = getBatchInfo;