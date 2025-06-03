/*
const prevents reassignment of the variable itself.
For objects/arrays, you can change their contents, but not reassign the variable.
For primitives or objects like a, you cannot reassign the variable at all.
*/


const marvel_heroes = ["thor","spiderman","Ironman"]
console.log(marvel_heroes);

const dc_heroes = ["flsah","batman","superman"]
console.log(dc_heroes)
// marvel_heroes.push(dc_heroes) // it will add this entire array in last of marvel_heroes array
// console.log(marvel_heroes);

//concat 
const new_heros = marvel_heroes.concat(dc_heroes) // to concat to arrays
console.log(new_heros);

//The spread operator in JavaScript is written as ... and is used to "spread" the elements of an array or properties of an object into another array or object.
const heroes2 = [...marvel_heroes,...dc_heroes] //spread in array ,, ek ek value individual ho gya t
console.log(heroes2); //

console.log(Array.isArray(marvel_heroes)) //isArray return true or false  // true
let a = Array.of(100,2000,300) // return a new Arrray from given elements [ 100, 2000, 300 ]
console.log(a);
console.log(Array.from("anshul")) //[ 'a', 'n', 's', 'h', 'u', 'l' ] return a iterable array







