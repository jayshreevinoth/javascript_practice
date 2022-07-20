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

//Array as data
let arr = (x) => x.length;
result = arr([1,2,3,4]);
console.log(result);

//Object as data
let obj = (x) => x.firstName + ' '+ x.secondName;
result = obj({
    firstName : 'ram',
    secondName : 'vin'
})
console.log(result);

//function as argument
isEven = (x) => x % 2;
result = [1,2,3,4,5,6].filter(isEven);
console.log(result);

// Greater resulability
let getName = (x) => x.name;
let users = [{name:'jj',age:'25'},
{name:'ram',age:'3'},
{name:'vin',age:'35'}];
result = users.map(getName);
console.log(result);

//Return types
function arrayValuesTypes(arr) {
	let result = [];
	arr.forEach(num => {
		result.push(typeof num);
	});
	return result;
}