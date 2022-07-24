/*
Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.

Examples
missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5

missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10

missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

*/

function missingNum(arr) {
	for(let i = 1;i <= arr.length + 1;i++){
		if(arr.indexOf(i) === -1){
			return i;
		}
	}
}