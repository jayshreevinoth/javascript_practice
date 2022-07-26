/*
Mubashir was walking through a straight street with exactly n identical houses on both sides. House numbers in the street look like this:

1 |   | 6

3 |   | 4

5 |   | 2
He noticed that Even numbered houses increase on the right while Odd numbered houses decrease on the left.

Create a function that takes a house number house and length of the street n and returns the house number on the opposite side.

Examples
oppositeHouse(1, 3) ➞ 6

oppositeHouse(2, 3) ➞ 5

oppositeHouse(3, 5) ➞ 8

*/
function oppositeHouse(house, n) {
	let totalHouses = n * 2;
	let oddArr = [];
	let evenArr = [];
	for(let i = 1;i <= totalHouses;i++){
		if(i % 2 == 0){
			evenArr.push(i);
		} else {
			oddArr.push(i);
		}
	}
	evenArr.reverse();
	let index;
	if(house % 2 == 0){
		index = evenArr.indexOf(house);
		return oddArr[index];
	} else {
		index = oddArr.indexOf(house);
		return evenArr[index];
	}
}