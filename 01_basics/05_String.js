const FirstName = "Anshul"
const LastName = " raturi"
// console.log(typeof FirstName);//String

console.log("My name is "+FirstName+LastName);//old method

console.log(`Hello my name is ${FirstName} ${LastName} .`); // Modern way and best way known as string interpolation and to use this add backtics (alt + 96) then with dollar sign to use variables

//another way to decalre String :
const gameName = new String('battleGroundIndia')//it gives object as we are using new .
console.log(gameName.length)
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
console.log(gameName.toUpperCase());
console.log("ANSHUL".toLowerCase());
let user1 = "       BagadBilla       "
user1 = user1.trim();
console.log(user1);
console.log(gameName.slice(6,12));
console.log(gameName.includes('Ground'))
/**
 JavaScript strings have many useful functions (methods). Here are some commonly used ones:

- `.length` — Returns the length of the string  
- `.charAt(index)` — Returns the character at the specified index  
- `.indexOf(substring)` — Returns the index of the first occurrence of a substring  
- `.toUpperCase()` — Converts the string to uppercase  
- `.toLowerCase()` — Converts the string to lowercase  
- `.slice(start, end)` — Extracts a section of the string  
- `.substring(start, end)` — Similar to slice, but doesn’t accept negative indexes  
- `.replace(search, replacement)` — Replaces part of the string  
- `.includes(substring)` — Checks if the string contains a substring  
- `.split(separator)` — Splits the string into an array  
- `.trim()` — Removes whitespace from both ends  
- `.startsWith(substring)` — Checks if the string starts with a substring  
- `.endsWith(substring)` — Checks if the string ends with a substring  
- `.concat(string2)` — Combines two or more strings  

 */





