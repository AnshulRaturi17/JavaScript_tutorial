// Immediately invoked function expression
// this is function type which is used to immediately  invoked a function and preventing from global scope pollution
/*
Why is it used?

To execute code immediately.
To create a private scope and avoid polluting the global scope (variables inside the IIFE are not accessible outside).
*/
let a = 12;
(()=>{
    console.log(a)
})();
// Variables declared inside the IIFE (with var, let, or const) do not pollute the global scope.
// if you have to write two iife function together then use sholud use ; to stop one iife and then start 2nd. The ; ensures that the previous statement ends, so the next IIFE (or any statement) starts correctly. It prevents errors when chaining or stacking IIFEs.
(function chai(){
    console.log("welcome chai aur code!");
    
})();
( () => console.log("welcome chai aur dudh!")) ()