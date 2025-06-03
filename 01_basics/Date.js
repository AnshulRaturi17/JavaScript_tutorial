//Date is a native object in js just like Math,Number,String
let myDate = new Date()
console.log(myDate)
console.log(myDate.toString()) //Tue Jun 03 2025 14:25:03 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleDateString()) //3/6/2025
console.log(myDate.toLocaleTimeString()) //2:25:03 pm

console.log(myDate.toLocaleString()) //3/6/2025, 2:25:03 pm
console.log(myDate.toJSON())
console.log(myDate.toISOString())
console.log(`today's date is ${myDate.toLocaleDateString()} and time is ${myDate.toLocaleTimeString()}`)


/*
// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
const myDate = new Date();
console.log(myDate) //Output : 2023-10-09T14:38:09.847Z
// We can use various methods to convert this date into more readable value.
console.log(myDate.toString()) //Output : Mon Oct 09 2023 07:39:18 GMT-0700 (Pacific Daylight Time)

console.log(myDate.toLocaleString()) // Output : 10/9/2023, 7:44:20 AM
console.log(myDate.toLocaleDateString()) //Output : 10/9/2023
console.log(myDate.toLocaleTimeString()) // Output : 7:45:31 AM

console.log(myDate.toDateString()) //Output : Mon Oct 09 2023
console.log(myDate.toTimeString()) // Output : 07:46:40 GMT-0700 (Pacific Daylight Time)

console.log(myDate.toISOString()) // Output : 2023-10-09T14:43:39.337Z
console.log(myDate.toJSON()) //Output : 2023-10-09T14:40:58.495Z
*/



