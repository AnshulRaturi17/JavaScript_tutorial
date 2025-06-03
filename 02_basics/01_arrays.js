//Arrays
let myArr = [0,1,2,3,4,5];
console.log(myArr)
console.log(typeof myArr) // type -> object

let newArr = new Array("pizza","burger")
console.log(newArr[0]) //pizza
//1.if we access other than this index than we got "undefined" not an error!!!!!
//2. array in js are dynamic in size i.e we can add elements in array just like arraylist in java

//methos in array
myArr.push(6); //add element to the last of array
myArr.pop() // remove element from last of array

myArr.unshift(6) // add element to the first of array and shift all other elements
myArr.shift() // remove element from starting if array

console.log(myArr.includes("ramu")); // this gives us boolean result .inclues()
 
let Str = myArr.join() //return a string of the array 
console.log(myArr);
console.log(`type of Str is ${typeof Str} , ${Str}`); 

let myArr2 = myArr
// myArr2.push(10);
console.log(`myArr : ${myArr} / myArr2 : ${myArr2}`) // both myArr and MyArr2 point to same location as array is refrence type

// console.log(myArr.indexOf(1))

//slice and splice 

console.log(myArr.slice(1,3)); // gives a part of array in the range excluding , but no change in original array
console.log(myArr);
console.log(myArr.splice(1,3)); //return the deleted elements from array in given range and also delete them from memory
console.log(myArr)

/*
SUMMARRY:

1. Array is written in brackets [  ].
2.Array data type is an object.
3.Array can contain different data types . i.e string,number,boolean,array etc.
4. Array is zero based indexing. It starts with zero.
5. Once changed its original value will also change beacause it is non primitive (refrence) type.

ARRAY METHODs :

1.Push = adds value to last of an array.
2. Pop = removes last value of an array.
3. Unshift = adds value at first of an array.
4.Shift = removes first value of an array.
5. Includes = checks true or false.
6. IndexOf = checks the position of value in number form.
7.Join = converts to string.
8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array
*/
