//Two types 
// primitive
/**
 Number,String,Boolean,Bigint,null,Undefined
  */
let a = 10;
// console.log(a)
let name = "Anshul"
// console.log(name);
// console.log(typeof name)
 
//2nd type => Non Primitive ya Refrence
// array , object , function
let arr = ["anshul","is","good","boy"]
console.log(arr)
console.log(typeof arr) // object
let obj = {1:2,2:3}
console.log(obj)
console.log(typeof obj) //object
let fun = function() { console.log("hello world"); }
console.log(typeof fun) //function

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Two types of memory location 
// Stack (Primitive Datatypes are stored) -> a copy is made pass by value
// Heap (Non-primitive are stored) -> original memory is shared , pass by refrence

let Rollno20 = "Anshul"
let Rollno21 = Rollno20 // a copy is given to Rollno21 
Rollno21 = "Shubhanshi"
console.log(Rollno20);
console.log(Rollno21);

let user1 = {
    email:"anshul@google.com",
    id:22121
}
let user2 = user1;
user2.email = "ratti@jnv.com" // both user1 and user2 point to same location
console.log(user1.email);
console.log(user2.email)


