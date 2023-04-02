// 22
function calculateTotalPrice(order) {
	let total = 0;
	for (let i = 0; i < order.length; i += 1) {
		total += order[i];
	}
	return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
console.log(calculateTotalPrice([164, 48, 291])); // 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116
// 21
function findLongestWord(string) {
	const stringToArray = string.split(" ");
	let longerWordInArray = stringToArray[0];
	for (const index of stringToArray) {
		longerWordInArray =
			longerWordInArray.length < index.length
				? (longerWordInArray = index)
				: longerWordInArray;
	}
	return longerWordInArray;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // jumped
console.log(findLongestWord("Google do a roll")); // Google
console.log(findLongestWord("May the force be with you")); // force
// 22
function createArrayOfNumbers(min, max) {
	const numbers = [];
	for (let i = min; i <= max; i += 1) {
		numbers.push(i);
	}
	return numbers;
}
console.log(createArrayOfNumbers(1, 3)); // [1, 2, 3]
console.log(createArrayOfNumbers(14, 17)); // [14, 15, 16, 17]
console.log(createArrayOfNumbers(29, 34)); // [29, 30, 31, 32, 33, 34]
// 23
function filterArray(numbers, value) {
	const newArray = [];
	for (const number of numbers) {
		if (value < number) {
			newArray.push(number);
		}
	}
	return newArray;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
// 25
function getCommonElements(array1, array2) {
	let newArray = [];
	for (const number of array1) {
		if (array2.includes(number)) {
			newArray.push(number);
		}
	}
	return newArray;
}
console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40]
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []
// 29
function getEvenNumbers(start, end) {
	const newArray = [];
	for (let i = start; i <= end; i += 1) {
		if (i % 2 === 0) {
			newArray.push(i);
		}
	}
	return newArray;
}
console.log(getEvenNumbers(2, 5)); // [2, 4]
console.log(getEvenNumbers(3, 11)); // [4, 6, 8, 10]
console.log(getEvenNumbers(6, 12)); // [6, 8, 10, 12]
console.log(getEvenNumbers(8, 8)); // [8]
console.log(getEvenNumbers(7, 7)); // []
// 32
function includes(array, value) {
	for (const index of array) {
		if (index === value) {
			return true;
		}
	}
	return false;
}
console.log(includes([1, 2, 3, 4, 5], 3)); // true
console.log(includes([1, 2, 3, 4, 5], 17)); // false
console.log(
	includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
); // true
console.log(
	includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
); // false
console.log(includes(["apple", "plum", "pear", "orange"], "plum")); // true
console.log(includes(["apple", "plum", "pear", "orange"], "kiwi")); // false

//  AUTOCHECK FOR FREELANCER
const lengthOfArray = (array) => {
	array.push("Uranus");
	return `Length of Array is : ${array.length} and Names in Array : ${array}`;
};

console.log(lengthOfArray(["Earth", "Mars", "Venus", "Jupiter", "Saturn"]));

// 1

const arrayIsPlanets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
const newArrayisPlanets = arrayIsPlanets;
newArrayisPlanets.push("Uranus");
console.log(newArrayisPlanets.length); // 6

// 2

const arrayIsUsers = ["Vanya", "Ishvan"];

arrayIsUsers.push("Olya");
console.log(arrayIsUsers); // ['Vanya', 'Ishvan', 'Olya']

arrayIsUsers.splice(1, 1, "Petya");
console.log(arrayIsUsers); // ['Vanya', 'Petya', 'Olya']

arrayIsUsers.splice(1, arrayIsUsers.length);
console.log(arrayIsUsers); // ['Vanya']

arrayIsUsers.unshift("Masha", "Pasha");
console.log(arrayIsUsers); // ['Masha', 'Pasha', 'Vanya']

// 3

const arrayIsNames = ["Vanya", "Ishvan", "Olya"];

const deliteSomeName = arrayIsNames.slice(1, 2);
console.log(deliteSomeName); // ['Ishvan']

//  4

const stringToArray = (string) => {
	return string.split(",");
};
console.log(stringToArray("Vanya,Ishtvan,Olya")); // ['Vanya', 'Ishtvan', 'Olya']

// 5

const arrayOfNumbers = [9, 2, 8];
const reduceValueArrayOfNumbers = arrayOfNumbers.reduce(
	(previousValue, item, index, array) => {
		return previousValue;
	}
);

console.log(reduceValueArrayOfNumbers); // 9

// 6

function showMessage() {
	console.log("Vasya");
}

setTimeout(showMessage, 0);
console.log("Colya");

// 7

let showMessageInIf;

if (2 > 1) {
	showMessageInIf = () => console.log("Message");
}
showMessageInIf();
