const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;
for (let i = 0; i < numbers.length; i += 1) {
	if (numbers[i] < threshold) {
		continue;
	}
	console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
}
function test(array) {
	let maxNumber = 0;
	for (let i = 0; i < array.length; i += 1) {
		if (maxNumber < array[i]) {
			maxNumber = array[i];
		}
	}
	return maxNumber;
}
console.log(test([1, 29, 3, 44, 5, 6, 74, 8, 9])); // 74

function hasMyWebsiteThisThings(website) {
	const isHaveEndsWithSlash = website.endsWith("/");
	const hasMyWebsiteText = website.includes("my-site");
	let changeWebsite =
		isHaveEndsWithSlash && hasMyWebsiteText
			? website
			: website.replace("some", "my-") + "/";
	return changeWebsite;

	// if (isHaveEndsWithSlash && hasMyWebsiteText) {
	// 	return website;
	// } else {
	// 	changeWebsite = website + "/";
	// 	return "No! this is not my website!";
	// }
}
console.log(hasMyWebsiteThisThings("http://somewebsite.com/about"));

const string = "Welcome to the Paradise";
console.log(string.replace("the", "the best"));
console.log(string.split(""));
console.log(string.split(" "));
console.log(string.split("  "));
const arrayString = string.split(" ");
console.log(arrayString.join(""));
console.log(arrayString.join(" "));
console.log(arrayString.join("-"));
console.log(arrayString.indexOf("the"));
console.log(arrayString.indexOf("Welcome"));
console.log(arrayString.indexOf("Par"));
console.log(arrayString.includes("to"));
console.log(arrayString.includes("Par"));

const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cherry";

const hasFruits = redFruits.includes(fruit);
if (hasFruits) {
	console.log(`${fruit} - is a red fruits!`);
}
const someThingText =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem labore itaque suscipit quo in odit?";
let somethingArray = someThingText.split(" ");
const things = "amet";
const checkWordsInArray = somethingArray.includes(things);
const hasWordsInArray = checkWordsInArray
	? `${things} - is a has in array`
	: "oh no, it is not has in array(((";
console.log(hasWordsInArray);
console.log(somethingArray.slice());
console.log(somethingArray.slice(5));
console.log(somethingArray.slice(-3));
console.log(someThingText.slice(0, 5));

const somethingNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(somethingNumbers);
const spliceSomethingNumbers = somethingNumbers.splice(-3);
console.log(somethingNumbers);
console.log(spliceSomethingNumbers);
somethingNumbers.splice(1, 2, "and add splice numbers", 7, 8, 9);
console.log(somethingNumbers);
somethingNumbers.splice(2, 0, 2, 3);
console.log(somethingNumbers);

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst);
const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst);

function testFunction(clients) {
	let sumClients = "";
	for (const client of clients) {
		sumClients += client + " ";
	}
	return sumClients.slice(0, -1);
}
console.log(testFunction(["Mango", "Ajax", "Poly", "Kiwi"]));

function multiply() {
	let total = 1;
	for (const argument of arguments) {
		total *= argument;
	}
	return total;
}
console.log(multiply(1, 2, 3));
console.log(multiply(1, 2, 3, 4));
console.log(multiply(1, 2, 3, 4, 5));

function testArg(ArrayToString) {
	let stringText = "";

	for (const argument of arguments) {
		stringText += argument;
	}

	return stringText.replaceAll(",", " ");

	// return ArrayToString.join(" ");
}
console.log(testArg(["Mango", "Ajax", "Poly", "Kiwi"]));

function fn() {
	// Змінна args буде містити повноцінний масив
	const args = Array.from(arguments);
	return args;
}
console.log(fn(1, 2, 3, 4, 5));
console.log(fn("one", "two", "three", "four", "five"));

function fn1(...args) {
	return args;
}
console.log(fn1(1, 2, 3, 4, 5));
console.log(fn1("one", "two", "three", "four", "five"));

function withdraw(amount, balance) {
	if (amount === 0) {
		return "Please, input sum more zero";
	} else if (amount > balance) {
		return "There are insufficient funds in the account";
	} else {
		return "The operation is successfull!";
	}
}
console.log(withdraw(500, 5000));
console.log(withdraw(1000, 785));
console.log(withdraw(0, 555));

const multiplyTestFunction = function (x, y, z) {
	return x * y * z;
};
console.log(multiplyTestFunction(11, 22, 33));
const fruits = ["apple", "peach", "pear", "banana"];
// Change code below this line
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];
console.log(lastElement);
console.log(lastElementIndex);

function calculateEngravingPrice(message, pricePerWord) {
	return message.split(" ").length * pricePerWord;
}
console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
function slugify(title) {
	return title.toLowerCase().split(" ").join("-");
}
console.log(slugify("Arrays for begginers"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

function makeArray(firstArray, secondArray, maxLength) {
	const allThings = firstArray.concat(secondArray);
	if (allThings.length >= maxLength) {
		return allThings.slice(0, maxLength);
	}
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));

function inverted(string) {
	const inArray = string.split("");
	let invertedWord = "";
	for (const index of inArray) {
		invertedWord +=
			index === index.toUpperCase() ? index.toLowerCase() : index.toUpperCase();
	}
	return invertedWord;
}
console.log(inverted("JavaScript")); // jAVAsCRIPT
const add = function (string) {
	let inverted = "";
	for (const index of string) {
		inverted +=
			index === index.toUpperCase() ? index.toLowerCase() : index.toUpperCase();
	}
	return inverted;
};
console.log(add("JavaScript"));

const fnOfSumNumbers = function (...args) {
	let sumOfNumbers = 0;

	for (const number of args) {
		sumOfNumbers += number;
	}
	return sumOfNumbers;
};

console.log(fnOfSumNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9));

const filterNumber = function (array, ...args) {
	let coincidences = [];

	for (const number of array) {
		if (args.includes(number)) {
			coincidences.push(number);
		}
	}

	return coincidences;
};

console.log(filterNumber([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
console.log(filterNumber([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
console.log(filterNumber([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

const arrTwo = [8, 22, 1, 44, 33];

console.log(arrTwo.sort());

console.log(arrTwo.sort((a, b) => a - b));

console.log(arrTwo.reverse());

const arr = ["Vanya", "Ishtvant", "Olya"];

const resultItem = arr.map(function (item, index, array) {
	return item[0];
});
console.log(arr);

console.log(resultItem);

const resultIndex = arr.map(function (item, index, array) {
	return index;
});

console.log(resultIndex);

const resultArray = arr.map(function (item, index, array) {
	return array[0];
});

console.log(resultArray);

arr.forEach((item) => console.log(item));

const arrOne = [1, 2, 3, 4, 5];
const reduceValueOne = arrOne.reduce((previousValue, item, index, array) => {
	return item + previousValue;
}, 0);

console.log(reduceValueOne);

const calcSumm = (a, b) => {
	if (b === 1) {
		return a;
	} else {
		return a * calcSumm(a, b - 1);
	}
};

console.log(calcSumm(2, 3));

//

const createMessage = (text, name) => {
	return `${text}, ${name}`;
};

const showMessage = (message) => console.log(message);

const initMessage = (text, name) => showMessage(createMessage(text, name));

initMessage("Hello", "Freelancer");
