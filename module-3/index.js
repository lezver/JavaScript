const localName = "My city";
const localPlace = "Kharkiv";

const obj = {
	a: "Vlad",
	b: 28,
	changeName(newName) {
		this.a = newName;
	},
	addNewStrengthIndication(a, b) {
		this[nameArray].push(a, b);
	},
	addMyWifeOld(text) {
		this.wife = text;
	},
	getLengthStrehgthIndication() {
		return this[nameArray].length;
	},
};
obj.lastName = "Gulida";
obj[localName] = localPlace;

obj.changeName("Vladislav");

const nameArray = "strengthIndication";
const valueOfArray = ["110x4", "120x4", "130x6"];

obj[nameArray] = valueOfArray;

obj.addNewStrengthIndication("50x7", "380x12");

obj.wife = "Alina";
let myWifeOld = 28;

obj.addMyWifeOld(`My wife name - Alina and she is a ${myWifeOld} years old :)`);
console.log(obj.getLengthStrehgthIndication());
console.log(obj);

for (const kay in obj) {
	console.log(`This is kay: ${kay} this is it value: ${obj[kay]}`);
}

const bookShelf = {
	books: ["The Last Kingdom"],
	getBook() {
		return this.books;
	},
	addNewBook(newBook) {
		this.books.push(newBook);
	},
	remuveBook(bookName) {
		const indexBook = this.books.indexOf(bookName);
		this.books.splice(indexBook, 1);
	},
};

bookShelf.addNewBook("The Mist");
bookShelf.addNewBook("Gream Guarding");
bookShelf.remuveBook("The Last Kingdom");

console.log(bookShelf.getBook());

const animal = {
	legs: 4,
};

const dog = Object.create(animal);
dog.name = "Khan";

animal.legs = 2;

console.log(dog);
console.log(animal);

console.log(dog.hasOwnProperty("name"));
console.log(dog.hasOwnProperty("legs"));

for (const kay in dog) {
	if (dog.hasOwnProperty(kay)) {
		console.log(`Kay : ${kay} and his value : ${dog[kay]}`);
	}
}
// const kaysFromObjectDog = Object.keys(dog);
console.log(Object.keys(dog));

console.log(Object.values(dog));

const fiendKeysFromObj = Object.keys(obj);

for (const key of fiendKeysFromObj) {
	console.log(key);

	console.log(obj[key]);
}

console.log(fiendKeysFromObj.join(", "));

const fiendValuesFromObj = Object.values(obj);

console.log(fiendValuesFromObj.join(", "));

const goods = {
	apples: 6,
	grapes: 3,
	bread: 4,
	cheese: 7,
};

const vuluesOfGoods = Object.values(goods);

const sumOfGoods = (array) => {
	let sum = 0;
	for (const value of array) {
		sum += value;
	}
	return sum;
};

console.log(sumOfGoods(vuluesOfGoods));

console.log(Object.entries(obj));
console.log(Object.create(obj));

const books = [
	{
		title: "The Last Kingdom",
		author: "Bernard Cornwell",
		rating: 8.38,
	},
	{
		title: "На березі спокійних вод",
		author: "Роберт Шеклі",
		rating: 8.51,
	},
	{
		title: "Сон смішної людини",
		author: "Федір Достоєвський",
		rating: 7.75,
	},
];

const fnOfBooks = (array) => {
	let bookNames = [];
	let totalRating = 0;
	for (const book of array) {
		console.log(book);
		console.log(book.title);
		console.log(book.author);
		console.log(book.rating);
		bookNames.push(book.title);
		totalRating += book.rating / array.length;
	}
	console.log(totalRating.toFixed(2));
	console.log(bookNames);
};

fnOfBooks(books);

const arrayNumbers = ["0931112233", "0931112233", "0931112233"];
const arrayName = ["Abraham", "Bonny", "Criss"];

let sum = "";

for (let i = 0; i < arrayName.length; i += 1) {
	sum += ` Names : ${arrayName[i]}, Numbers  : ${arrayNumbers[i]}.`;
}
console.log(sum);

const arrayOfThings = ["chair", "window", "table", "menu", "bag", "couch"];

console.log(arrayOfThings.sort());

const friends = [
	{ name: "Mango", online: false },
	{ name: "Kiwi", online: true },
	{ name: "Poly", online: true },
	{ name: "Ajax", online: false },
];

const fiendFriendsByName = (allFriends, friendName) => {
	for (const friend of allFriends) {
		if (friend.name === friendName) {
			return `Oh here is your friend : ${friendName}`;
		}
	}
	return "Your friend is not here";
};

console.log(fiendFriendsByName(friends, "Mango"));
console.log(fiendFriendsByName(friends, "Kiwi"));
console.log(fiendFriendsByName(friends, "Vasya"));

const getAllNames = (allFriends) => {
	const getAllNamesFriends = [];
	for (const friend of allFriends) {
		getAllNamesFriends.push(friend.name);
	}
	return getAllNamesFriends;
	//  of is we need string
	// return getAllNamesFriends.join(", ");
};

console.log(getAllNames(friends));

const getOnlineFriends = (allFriends) => {
	const friendIsOnline = [];
	for (const friend of allFriends) {
		if (friend.online) {
			friendIsOnline.push(friend.name);
		}
	}
	// return friendIsOnline;
	return `Your friends : ${friendIsOnline.join(", ")} are online!`;
};

console.log(getOnlineFriends(friends));

const getOfflineFriends = (allFriends) => {
	const friendsIsOffline = [];
	for (const friend of allFriends) {
		if (!friend.online) {
			friendsIsOffline.push(friend.name);
		}
	}
	return `Your friends : ${friendsIsOffline.join(", ")} are not online!`;
};

console.log(getOfflineFriends(friends));

const getFriendsByStatus = (allFriends) => {
	const friendsByStatus = {
		online: [],
		offline: [],
	};

	for (const friend of allFriends) {
		// if (friend.online) {
		// 	friendsByStatus.online.push(friend.name);
		// } else {
		// 	friendsByStatus.offline.push(friend.name);
		// }
		friend.online
			? friendsByStatus.online.push(friend.name)
			: friendsByStatus.offline.push(friend.name);
	}

	return friendsByStatus;
};

console.log(getFriendsByStatus(friends));

console.log(Object.keys(friends).length);

const shoppingCard = {
	items: [],
	getItems() {
		return this.items;
	},
	add(product) {
		const { items } = this;

		for (const item of items) {
			if (item.name === product.name) {
				item.quantity += 1;
				return;
			}
		}

		const newProduct = {
			...product,
			quantity: 1,
		};

		items.push(newProduct);
	},
	remove(productName) {
		const { items } = this;

		for (let i = 0; i < items.length; i += 1) {
			const { name } = items[i];

			if (name === productName) {
				items.splice(i, 1);
			}
		}
	},
	clear() {
		this.items = [];
	},
	countTotalPrice() {
		const { items } = this;
		let totalPrice = 0;

		for (const item of items) {
			const { price, quantity } = item;

			totalPrice += price * quantity;
		}

		return `Total price in the card : ${totalPrice}`;
	},
	increaseQuantity(producntName) {
		const { items } = this;
		for (const item of items) {
			if (item.name === producntName) {
				item.quantity += 1;
			}
		}
	},
	decreaseQuantity(producntName) {
		const { items } = this;
		for (let i = 0; i < items.length; i += 1) {
			const { name, quantity } = items[i];
			if (name === producntName) {
				items[i].quantity -= 1;
			}
			if (name === producntName && quantity === 1) {
				items.splice(i, 1);
				return;
			}
		}
	},
};

shoppingCard.add({ name: "apple", price: 50 });
shoppingCard.add({ name: "apple", price: 50 });

console.table(shoppingCard.getItems());
console.log(shoppingCard.countTotalPrice());

shoppingCard.clear();

console.table(shoppingCard.getItems());
console.log(shoppingCard.countTotalPrice());

shoppingCard.add({ name: "apple", price: 50 });
shoppingCard.add({ name: "lemon", price: 60 });
shoppingCard.add({ name: "orange", price: 80 });
shoppingCard.add({ name: "banana", price: 120 });
shoppingCard.add({ name: "banana", price: 120 });

console.table(shoppingCard.getItems());
console.log(shoppingCard.countTotalPrice());

shoppingCard.remove("banana");

console.table(shoppingCard.getItems());
console.log(shoppingCard.countTotalPrice());

shoppingCard.add({ name: "apple", price: 50 });
shoppingCard.add({ name: "apple", price: 50 });
shoppingCard.add({ name: "banana", price: 120 });

console.table(shoppingCard.getItems());
console.log(shoppingCard.countTotalPrice());

shoppingCard.increaseQuantity("banana");
shoppingCard.increaseQuantity("banana");

console.table(shoppingCard.getItems());
console.log(shoppingCard.countTotalPrice());

shoppingCard.decreaseQuantity("banana");
shoppingCard.decreaseQuantity("banana");
shoppingCard.decreaseQuantity("banana");
shoppingCard.decreaseQuantity("apple");
shoppingCard.decreaseQuantity("apple");

console.table(shoppingCard.getItems());
console.log(shoppingCard.countTotalPrice());

const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];

const allTemps = [...lastWeekTemps, ...currentWeekTemps];

const fnOfTemps = (firstArray, secondArray, ...rest) => {
	return firstArray + secondArray + rest;
};

console.log(fnOfTemps(lastWeekTemps, currentWeekTemps, allTemps));
console.log(Math.min(...allTemps));

const firstObj = { propA: 5, propB: 10 };
const secondObj = { propC: 15 };
const thirdObj = { ...firstObj, ...secondObj };
console.log(thirdObj);

const restObj = (...rest) => {
	return rest;
};

console.log(restObj(firstObj, secondObj, thirdObj));

const book = {
	title: "The Last Kingdom",
	author: "Bernard Cornwell",
	genres: ["historical prose", "adventure"],
	isPublic: true,
	rating: 8.38,
	isAccessType() {
		const accessType = this.isPublic ? "public" : "closed";
		return accessType;
	},
};

const {
	title,
	author,
	rating,
	coverImage = "https://via.placeholder.com/640/480",
} = book;

console.log(
	`The book ${title} of author ${author}, is have rating ${rating} in ${book.isAccessType()} access.`
);

console.log(coverImage);
console.log(book);

const firstBook = {
	title: "The Last Kingdom",
	convetImage:
		"https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const {
	title: firstTitle,
	coverImage: firstCoverTitle = "https://via.placeholder.com/640/480",
} = firstBook;

console.log(firstTitle, firstCoverTitle);

const secondBook = { title: "The First Kingdom" };

const {
	title: secondTitle,
	coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
} = secondBook;

console.log(secondTitle, secondCoverImage);

const firstTypeOfDestructuring = (array) => {
	for (const { title, author, rating } of array) {
		console.log(title);
		console.log(author);
		console.log(rating);
	}
};

firstTypeOfDestructuring(books);

const secondTypeOfDestructuring = (array) => {
	for (const book of array) {
		const { title, author, rating } = book;
		console.log(title);
		console.log(author);
		console.log(rating);
	}
};

secondTypeOfDestructuring(books);

const user = {
	name: "Jacques Gluke",
	tag: "jgluke",
	stats: {
		followers: 5603,
		views: 4827,
		likes: 1308,
	},
};
const {
	name: myName,
	tag: myTag,
	stats: { followers: allFollowers, views: allViews, likes: allLikes = 0 },
} = user;

console.log(myName);
console.log(myTag);
console.log(allFollowers);
console.log(allViews);
console.log(allLikes);

const rgb = [200, 255, 100];

const [red, green, blue, alfa = 0.3] = rgb;

console.log(`R:${red}, G:${green}, B:${blue}, A:${alfa}`);

const rgbL = [200, 255, 100];

let redL, greenL, blueL, alfaL;

[redL, greenL, blueL, alfaL = 0.3] = rgbL;

console.log(`R:${redL}, G:${greenL}, B:${blueL}, A:${alfaL}`);

const [redT, ...restT] = rgb;

console.log(redT);
console.log(restT);

const [, , blueF] = rgb;

console.log(blueF);

// const doStuffWithBook = (book) => {
// 	const { title, numberOfPages, downloads, isPublic, rating } = book;
// 	console.log(title);
// 	console.log(numberOfPages);
// 	console.log(downloads);
// 	console.log(isPublic);
// 	console.log(rating);
// };

//  OR

const doStuffWithBook = ({
	title,
	numberOfPages,
	downloads,
	isPublic,
	rating,
}) => {
	console.log(title);
	console.log(numberOfPages);
	console.log(downloads);
	console.log(isPublic);
	console.log(rating);
};

doStuffWithBook({
	title: "The Last Kingdom",
	numberOfPages: 736,
	downloads: 10283,
	rating: 8.38,
	isPublic: true,
});

const authors = { kiwi: 9, poly: 3, ajax: 7, mango: 5 };

const maxOfAuthors = (obj) => {
	// const keys = Object.keys(obj);
	// console.log(keys);
	// let max = 0;
	// for (const key of keys) {
	// 	if (max < obj[key]) {
	// 		max = `${key} ${obj[key]}`;
	// 	}
	// }
	// return max;

	// //  if need array
	// return max.split("  ");

	const entriesArray = Object.entries(obj);
	let maxRating = 0;
	let total = [];
	for (const entry of entriesArray) {
		const [name, rating] = entry;
		if (maxRating < rating) {
			maxRating = rating;
			total = entry;
		}
	}
	return total;
};

console.log(maxOfAuthors(authors));

const culcBMIFn = (weight, height) => {
	return Number(
		(
			Number(weight.replace(",", ".")) /
			Math.pow(Number(height.replace(",", ".")), 2)
		).toFixed(1)
	);
};

console.log(culcBMIFn("88,3", "1,75"));

const getRectArea = (string) => {
	const stringToArray = string.split(" ");
	return Number(stringToArray[0] * stringToArray[1]);
};

console.log(getRectArea("8 11"));

const logItems = (items) => {
	for (let i = 0; i < items.length; i += 1) {
		console.log(`${[i + 1]} - ${items[i]}`);
	}
};

logItems(arrayOfThings);

const printContactInfo = (names, phones) => {
	const toArrayNames = names.split(",");
	const toArrayPhones = phones.split(",");
	console.log(toArrayNames);
	for (let i = 0; i < toArrayNames.length; i += 1) {
		console.log(`${[i + 1]} - ${toArrayNames[i]} : ${toArrayPhones[i]}`);
	}
};

printContactInfo("Abraham,Bonny,Criss", "0931112233,0931112233,0931112233");

const maxNumberFn = (numbers) => {
	return Math.max(...numbers);

	// let maxNumber = numbers[0];
	// for (const number of numbers) {
	// 	if (maxNumber < number) {
	// 		maxNumber = number;
	// 	}
	// }
	// return maxNumber;
};

const minNumberFn = (numbers) => {
	return Math.min(...numbers);

	// let minNumber = numbers[0];

	// for (const number of numbers) {
	// 	if (minNumber > number) {
	// 		minNumber = number;
	// 	}
	// }
	// return minNumber;
};

console.log(maxNumberFn([43, 2, 33, 23, 65, 60, 0, 99]));
console.log(minNumberFn([43, 2, 33, 23, 65, 60, 0, 99]));

const calAvareg = (...args) => {
	let sum = 0;
	for (const number of args) {
		sum += number;
	}
	return sum / args.length;
};

console.log(calAvareg(3, 34, 39));
console.log(calAvareg(33, 99));
console.log(calAvareg(33, 53, 36, 75));

const formanTime = (numbers) => {
	return (
		String(Math.floor(numbers / 60)).padStart(2, "0") +
		":" +
		String(numbers % 60).padStart(2, "0")
	);
};

console.log(formanTime(70));
console.log(formanTime(450));
console.log(formanTime(1441));

const stones = [
	{ name: "emerald", price: 2333, quantity: 3 },
	{ name: "diamond", price: 3333, quantity: 7 },
	{ name: "sapphire", price: 2555, quantity: 9 },
	{ name: "rubble", price: 100, quantity: 57 },
];

const calcTotalPrice = (stones, stoneName) => {
	let totalPrice = 0;

	for (const { name, price, quantity } of stones) {
		if (name === stoneName) {
			totalPrice = price * quantity;
		}
	}

	return totalPrice;
};

console.log(calcTotalPrice(stones, "emerald"));
console.log(calcTotalPrice(stones, "diamond"));
console.log(calcTotalPrice(stones, "sapphire"));
console.log(calcTotalPrice(stones, "rubble"));
console.log(calcTotalPrice(stones, "topaz"));

const Transaction = { DEPOSIT: "deposit", WITHDRAW: "withdraw" };

const account = {
	balance: 0,
	transactions: [],
	createTransaction(amount, type) {
		return {
			amount,
			type,
			id: this.transactions.length + 1,
		};
	},
	deposit(amount) {
		this.balance += amount;
		const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
		console.log(transaction);
		this.transactions.push(transaction);
	},
	withdraw(amount) {
		if (amount > this.balance) {
			return console.log("You don't have a cash");
		}
		this.balance -= amount;
		const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
		console.log(transaction);
		this.transactions.push(transaction);
	},
	getBalance() {
		return this.balance;
	},
	getTransactionDetails(id) {
		for (const transaction of this.transactions) {
			if (transaction.id === id) {
				return console.log(transaction);
			}
		}
		return console.log("Sorry, we can't find this ID :(");
	},
	getTransactionTotal(type) {
		const { transactions } = this;
		let total = 0;

		for (const transaction of transactions) {
			if (transaction.type === type) {
				total += transaction.amount;
			}
		}
		return console.log(total);
	},
};

console.log(account.getBalance());

account.deposit(1000);
account.withdraw(100);
account.deposit(1000);
account.withdraw(100);
account.withdraw(11100);
account.getTransactionDetails(4);
account.getTransactionDetails(33);
account.getTransactionTotal(Transaction.DEPOSIT);
account.getTransactionTotal(Transaction.WITHDRAW);

console.log(account.balance);

const Likes = { LIKE: "like", DISLIKE: "dislike" };

const accountFacebook = {
	numberOfLikes: 0,
	numberOfDisikes: 0,
	transactionOfLikes: [],
	createTransactionOfLike(amountOfLikes, typeOfLikes) {
		return {
			amountOfLikes,
			typeOfLikes,
			idOfTransactionLikes: this.transactionOfLikes.length + 1,
		};
	},
	like(amountOfLikes) {
		this.numberOfLikes += amountOfLikes;

		const transaction = this.createTransactionOfLike(amountOfLikes, Likes.LIKE);

		this.transactionOfLikes.push(transaction);
	},
	dislike(amountOfLikes) {
		this.numberOfDisikes += amountOfLikes;

		const transaction = this.createTransactionOfLike(
			amountOfLikes,
			Likes.DISLIKE
		);

		this.transactionOfLikes.push(transaction);
	},
	getBalanceOfLikes() {
		const { numberOfLikes, numberOfDisikes } = this;
		return console.log(
			`Your likes: ${numberOfLikes} and dislikes: ${numberOfDisikes}`
		);
	},
	getTransactionDetailsOfLikes(idOfTransactionLikes) {
		for (const transaction of this.transactionOfLikes) {
			if (transaction.idOfTransactionLikes === idOfTransactionLikes) {
				return console.log(transaction);
			}
		}

		return console.log(`Sorry, we can't find this ${idOfTransactionLikes} ID`);
	},
	getTransactionTotalOflikes(typeOfLikes) {
		let total = 0;

		for (const transaction of this.transactionOfLikes) {
			if (transaction.typeOfLikes === typeOfLikes) {
				total += transaction.amountOfLikes;
			}
		}

		return console.log(total);
	},
};

accountFacebook.like(31);
accountFacebook.like(1);
accountFacebook.like(11);
accountFacebook.dislike(2);
accountFacebook.dislike(9);
accountFacebook.dislike(17);
accountFacebook.getTransactionDetailsOfLikes(33);
accountFacebook.getTransactionDetailsOfLikes(1);
accountFacebook.getTransactionTotalOflikes(Likes.DISLIKE);
accountFacebook.getTransactionTotalOflikes(Likes.LIKE);

console.log(accountFacebook.transactionOfLikes);
accountFacebook.getBalanceOfLikes();

const userInfo = {
	name: "Jacques Gluke",
	tag: "jgluke",
	age: 30,
	"likes JS": 1,
	stats: {
		followers: 5603,
		views: 4827,
		likes: 1308,
	},
};
// 2

console.log(userInfo[58]);

// 3

const user1 = userInfo;
user1.age = 45;

console.log(userInfo.age);

// 5

for (const key in userInfo) {
	const valueOfUserInfo = userInfo[key];
	console.log(valueOfUserInfo);
}

// 6

for (const key in userInfo.stats) {
	console.log(userInfo.stats[key]);
}
