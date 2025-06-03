//object in js are like key : value pair
// we can make objects in two types
//1. by using literal 👇 in this way there is non singleton object made i.e singelton means only one instance is made
//2. other way is by using constructor
const obj = new Object()
// console.log(obj);


let mykey = Symbol() //how to use symbol as a key in object
const jsUser = {
    name:"Anshul",
    email:"anshul@google.com",
    rollno:25,
    section:"d2",
    subjects:["CN","CD","WebD"],
    [mykey]:"123@321" // in this way you can use symbol as a key in object
}
// how to access
//1. by using . dot operator
console.log(jsUser.subjects)
console.log(jsUser.email)
//2. by using [""] brackets
console.log(jsUser["email"],jsUser["rollno"])

// how to change
jsUser.email = "anshul@adobe.com"
//how to freeze -> we can't modify the object and it's values
//Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
// Object.freeze(jsUser)
// jsUser.rollno = 52 
console.log(jsUser)

//function in js
jsUser.greeting = function(){
    console.log("hello JsUSer")
}

jsUser.greetingTwo = function () {
    console.log(`hey ${this["name"]} welcome to your pc , this is your id -> ${this[mykey]} and roll no is ${this["rollno"]}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())





