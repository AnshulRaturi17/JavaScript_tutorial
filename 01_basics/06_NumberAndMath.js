var number = 23
// console.log(number);

let balance = new Number(23);
// console.log(balance)
// console.log(`type of ${balance} is ${typeof balance}`);

// console.log(balance.toString()) // return a string 
// console.log(balance.toFixed(9)) // gives a string of fixed number

const rupees = 100000
// console.log(rupees.toLocaleString('en-In')) //Converts a number to a string by using the current or specified locale.

var num = Number.MAX_VALUE;
// console.log(num)

//++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Math is a library in js having many functions
console.log(Math.floor(4.22)) // lower value
console.log(Math.ceil(4.22))  // upper value
console.log(Math.round(4.62)) // round off value
console.log(Math.floor((Math.random()*10)+1)) // gives random value between 1 to 10 
// random() => gives value between 0 to 1

const min = 40;
const max = 50;

console.log(Math.floor(Math.random()*(max-min)+min)) // gives random integer between 40 and 50 => Math.random()*(max-min)+min formula



