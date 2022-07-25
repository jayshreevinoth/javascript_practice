/*
Create a function that takes a string and returns the number (count) of vowels contained within it.

Examples
countVowels("Celebration") ➞ 5

countVowels("Palm") ➞ 1

countVowels("Prediction") ➞ 4
Notes
a, e, i, o, u are considered vowels (not y).
All test cases are one word and only contain letters.

*/
function countVowels(str) {
	let arr = str.split('');
	let count = 0;
  for(let i = 0;i < arr.length;i++){
		if(arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u'){
  		count++;
  	}
	}
	return count;
}