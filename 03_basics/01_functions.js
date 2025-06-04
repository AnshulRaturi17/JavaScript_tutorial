//function in js
function hello(){
    //console.log("hello World")
}
hello()

//fun() to add two numbers
function addTwoNumbers(a,b){ //these a,b are parameters
    return a+b
}
console.log(addTwoNumbers(2,3)) //this 2,3 are arguments

//how to handle many parameters like in cart
function cartbill(...num){ // Rest operator (...) it makes a array of all the values
    return num
}
console.log(cartbill(122,233,244,122.1))

// object ko pass karna 
let username = {
    name:"sam",
    age:23
}
function userdetails(anyobje){
    console.log(`hey there ${anyobje.name} , your age is ${anyobje.age}`)
}
userdetails(username)

//passing array in fun()

function secondElement(getArray){
    return getArray[1]
}
console.log(secondElement([100 , 2000 , 3000 ,400]))