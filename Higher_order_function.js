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

/* sum of even pairs in an array.
   Given an array with an even amount of numbers, return true if the sum of two numbers in the array is even and false if the sum of two numbers in the array is odd.

To illustrate:

11, 15, 6, 8, 9, 10
11 + 15 = 26 = true
15 + 6 = 21 = false
6 + 8 = 14 = true
8+ 9 = 17 = false
9 + 10 = 19 = false
Therefore, solution = [true, false, true, false, false]

*/
function oddSum(numbers) {
	let count = 0;
	let splice
	let result = numbers.map(num => {
		count++;
		let add;
		if(count < numbers.length){
		     add = num + numbers[count];	
			   if(add%2 == 0){
					 return true;
				 } else {
					 return false;
				 }
		} else {
			return;
		}
	});
	result.pop();
	return result;
}

/*
Create a function that adds a string ending to each member in an array.

Examples
addEnding(["clever", "meek", "hurried", "nice"], "ly")
➞ ["cleverly", "meekly", "hurriedly", "nicely"]

addEnding(["new", "pander", "scoop"], "er")
➞ ["newer", "panderer", "scooper"]

addEnding(["bend", "sharpen", "mean"], "ing")
➞ ["bending", "sharpening", "meaning"]

*/

function addEnding(arr, ending) {
	let result = arr.map(val => {
		return val + ending;
	});
	return result;
}

/*
A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.

Examples
additiveInverse([5, -7, 8, 3]) ➞ [-5, 7, -8, -3]

additiveInverse([1, 1, 1, 1, 1]) ➞ [-1, -1, -1, -1, -1]

additiveInverse([-5, -25, 35]) ➞ [5, 25, -35]

*/

function additiveInverse(arr) {
	let result = arr.map(x => {
		return x*-1;
	});
	return result;
}
