let score = 23;
let a = "anshul";

let NumberFromString = Number(score);
// console.log(typeof NumberFromString);
// console.log(NumberFromString);

/*when you are performing type conversion don't rely as
you can also get as 
"23" => 23
"23abc" => NaN (Not a number)
"abc" => NaN 
null => 0
undefined => NaN
true => 1, false => 0
these all are converted to number datatype but there
values are changed!!!
*/

let LoggedIn = undefined;
let IsLoggedIn = Boolean(LoggedIn);
// console.log(IsLoggedIn);

/* if you are converting to boolean than
 all +ve and -ve number => true
 0 => false
 "" => empty string false degi , "abc" => true dega
 null => false, undefined => false
 */

//************operations************* */
/* convert during operations
=>if string is written first then convert all after it to string:
              "2" + 2 + 2 = 222
               "1" + 2 = 12
=>if string comes after then the conversion occurs at last 
               2 + 2 + "2" = 42
               1 + 1 + "2" + 2 + 1  = 2221
*/
console.log(null >= 0); //here in >,<,>=,<= conversion they convert null to number -> 0 so this is true
console.log(null < 0); //false

console.log(null==0); // == not convert null to number so false
console.log("");
console.log(undefined >= 0); //all these gives false undefined convert to NaN
console.log(undefined < 0);
console.log(undefined == 0);


