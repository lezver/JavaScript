// 3

function makePizza(pizzaName, callback) {
	console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
	callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
	console.log(`Delivering pizza ${pizzaName}.`);
});

makePizza("Ultracheese", (pizzaName) =>
	console.log(`Eting pizza ${pizzaName}`)
);
// 4

const pizzaPalace = {
	pizzas: ["Ultracheese", "Smoked", "Four meats"],
	order(pizzaName, onSuccess, onError) {
		if (this.pizzas.find((pizza) => pizza === pizzaName)) {
			return onSuccess(pizzaName);
		}
		return onError(
			`This is no pizza with a name ${pizzaName} in the assortment.`
		);
	},
};

function makePizza(pizzaName) {
	return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

function onOrderError(error) {
	return `Error! ${error}`;
}

console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// 6

function filterArray(numbers, value) {
	const filteredNumbers = [];

	numbers.forEach((number) => {
		if (number > value) {
			filteredNumbers.push(number);
		}
	});

	return filteredNumbers;
}

console.log(filterArray([]));

console.log(filterArray([1, 2, 3, 4, 5], 3));

// 7

function getCommonElements(firstArray, secondArray) {
	const commonElements = [];

	firstArray.forEach((number) => {
		if (secondArray.includes(number)) {
			commonElements.push(number);
		}
	});

	return commonElements;
}

console.log(getCommonElements([1, 2, 3], [2, 4]));

// 13

function changeEven(numbers, value) {
	let evenNumbers = [];

	numbers.forEach((number) => {
		if (number % 2 === 0) {
			evenNumbers.push(number + value);
		} else {
			evenNumbers.push(number);
		}
	});

	return evenNumbers;
}

console.log(changeEven([1, 2, 3, 4, 5], 10));

console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

console.log(changeEven([17, 24, 68, 31, 42], 100));

//

const users = [
	{
		name: "Moore Hensley",
		email: "moorehensley@indexia.com",
		eyeColor: "blue",
		friends: ["Sharron Pace"],
		isActive: false,
		balance: 2811,
		gender: "male",
		age: 37,
	},
	{
		name: "Sharlene Bush",
		email: "sharlenebush@tubesys.com",
		eyeColor: "blue",
		friends: ["Briana Decker", "Sharron Pace"],
		isActive: true,
		balance: 3821,
		gender: "female",
		age: 34,
	},
	{
		name: "Ross Vazquez",
		email: "rossvazquez@xinware.com",
		eyeColor: "green",
		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
		isActive: false,
		balance: 3793,
		gender: "male",
		age: 24,
	},
	{
		name: "Elma Head",
		email: "elmahead@omatom.com",
		eyeColor: "green",
		friends: ["Goldie Gentry", "Aisha Tran"],
		isActive: true,
		balance: 2278,
		gender: "female",
		age: 21,
	},
	{
		name: "Carey Barr",
		email: "careybarr@nurali.com",
		eyeColor: "blue",
		friends: ["Jordan Sampson", "Eddie Strong"],
		isActive: true,
		balance: 3951,
		gender: "male",
		age: 27,
	},
	{
		name: "Blackburn Dotson",
		email: "blackburndotson@furnigeer.com",
		eyeColor: "brown",
		friends: ["Jacklyn Lucas", "Linda Chapman"],
		isActive: false,
		balance: 1498,
		gender: "male",
		age: 38,
	},
	{
		name: "Sheree Anthony",
		email: "shereeanthony@kog.com",
		eyeColor: "brown",
		friends: ["Goldie Gentry", "Briana Decker"],
		isActive: true,
		balance: 2764,
		gender: "female",
		age: 39,
	},
];

const getInactiveUsers = (users) => {
	return users
		.filter((user) => user.isActive === false)
		.map((user) => user.name);
};

console.log(getInactiveUsers(users));

//  35

const players = [
	{ name: "Mango", playtime: 1270, gamesPlayed: 4 },
	{ name: "Poly", playtime: 469, gamesPlayed: 2 },
	{ name: "Ajax", playtime: 690, gamesPlayed: 3 },
	{ name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce(
	(total, player) => total + player.playtime / player.gamesPlayed,
	0
);

console.log(totalAveragePlaytimePerGame);

// 36

const calculateTotalBalance = (users) => {
	return users.reduce((total, { balance }) => total + balance, 0);
};

console.log(calculateTotalBalance(users));

// 41

const books = [
	{
		title: "The Last Kingdom",
		author: "Bernard Cornwell",
		rating: 8.38,
	},
	{
		title: "Beside Still Waters",
		author: "Robert Sheckley",
		rating: 8.51,
	},
	{
		title: "The Dream of a Ridiculous Man",
		author: "Fyodor Dostoevsky",
		rating: 7.75,
	},
	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
	{ title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const sortedByAuthorName = [...books].sort((a, b) =>
	a.author.localeCompare(b.author)
);

const sortedByReversedAuthorName = [...books].sort((a, b) =>
	b.author.localeCompare(a.author)
);

const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

console.log(sortedByAuthorName);

console.log(sortedByReversedAuthorName);

console.log(sortedByAscendingRating);

console.log(sortedByDescentingRating);

// 45

const MIN_BOOK_RATING = 8;
// Change code below this line

const names = books
	.filter(({ rating }) => rating > MIN_BOOK_RATING)
	.map(({ author }) => author)
	.sort((a, b) => a.localeCompare(b));

console.log(names);

// 46

const getNamesSortedByFriendCount = (users) => {
	return [...users]
		.sort((a, b) => a.friends.length - b.friends.length)
		.map(({ name }) => name);
};

console.log(getNamesSortedByFriendCount(users));

// 47

const getSortedFriends = (users) => {
	return users
		.flatMap(({ friends }) => friends)
		.filter((value, index, array) => array.indexOf(value) === index)
		.sort((a, b) => a.localeCompare(b));
};

console.log(getSortedFriends(users));

// 48

const getTotalBalanceByGender = (users, gender) => {
	return users
		.filter((user) => user.gender === gender)
		.map(({ balance }) => balance)
		.reduce((total, numbers) => total + numbers, 0);
};

console.log(getTotalBalanceByGender(users, "male"));
console.log(getTotalBalanceByGender(users, "female"));
