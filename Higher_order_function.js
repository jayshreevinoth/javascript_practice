/*
A function that accepts or returns another function is called higher order function.

With functions in JavaScript, you can

Store them as variables
Use them in arrays
Assign them as object properties (methods)
Pass them as arguments
Return them from other functions

*/

let result;
//Strings are data
let str = (x) => 'Hi '+ x;
result = str('user');
console.log(result);

//Numbers are data
let num = (x,y,z) => x+y+z;
result = num(1,2,3);
console.log(result);

//Booleans are data
let bool = x => x ? 'success' : 'failure';
result = bool(true);
console.log(result);