// 10

class Storage {
	constructor(items = []) {
		this.items = items;
	}
	getItems() {
		return this.items;
	}
	addItem(newItem) {
		this.items.push(newItem);
	}
	removeItem(itemToRemove) {
		this.items = this.items.filter((item) => item !== itemToRemove);
	}
}
// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

console.log(
	["Nanitoids", "Prolonger", "Antigravitator"].filter(
		(item) => item !== "Prolonger"
	)
);

// 11

class StringBuilder {
	constructor(initialValue = "") {
		this.value = initialValue;
	}
	getValue() {
		return this.value;
	}
	padEnd(str) {
		this.value += str;
	}
	padStart(str) {
		this.value = str + this.value;
	}
	padBoth(str) {
		this.padStart(str);
		this.padEnd(str);
	}
}
// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

// 16

class Car {
	// Change code below this line
	static MAX_PRICE = 50000;

	#price;

	constructor({ price } = {}) {
		this.#price = price;
	}

	get price() {
		return this.#price;
	}

	set price(newPrice) {
		if (newPrice > Car.MAX_PRICE) {
			return;
		}
		this.#price = newPrice;
	}
	// Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

// 17

class Car1 {
	static #MAX_PRICE = 50000;
	// Change code below this line
	static checkPrice(price) {
		if (price > Car1.#MAX_PRICE) return "Error! Price exceeds the maximum";

		return "Success! Price is within acceptable limits";
	}
	// Change code above this line
	constructor({ price }) {
		this.price = price;
	}
}

const audi1 = new Car1({ price: 36000 });
const bmw1 = new Car1({ price: 64000 });

console.log(Car1.checkPrice(audi1.price)); // "Success! Price is within acceptable limits"
console.log(Car1.checkPrice(bmw1.price)); // "Error! Price exceeds the maximum"

// 19

// class User {
// 	email;

// 	constructor(email) {
// 		this.email = email;
// 	}

// 	get email() {
// 		return this.email;
// 	}

// 	set email(newEmail) {
// 		this.email = newEmail;
// 	}
// }

// class Admin extends User {
// 	// Change code below this line

// 	static AccessLevel = {
// 		BASIC: "basic",
// 		SUPERUSER: "superuser",
// 	};

// 	constructor({ email, accessLevel } = {}) {
// 		super(email);
// 		this.accessLevel = accessLevel;
// 	}

// 	// Change code above this line
// }

// const mango = new Admin({
// 	email: "mango@mail.com",
// 	accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// 20

class User {
	email;

	constructor(email) {
		this.email = email;
	}

	get email() {
		return this.email;
	}

	set email(newEmail) {
		this.email = newEmail;
	}
}
class Admin extends User {
	// Change code below this line

	static AccessLevel = {
		BASIC: "basic",
		SUPERUSER: "superuser",
	};

	constructor({ email, accessLevel }) {
		super(email);
		this.accessLevel = accessLevel;
		this.blacklistedEmails = [];
	}

	blacklist(email) {
		this.blacklistedEmails.push(email);
	}

	isBlacklisted(email) {
		return this.blacklistedEmails.includes(email);
	}

	// Change code above this line
}

const mango = new Admin({
	email: "mango@mail.com",
	accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true

class UserOfLeshes {
	static userCount = 0;
	static addToUserCount() {
		this.userCount += 1;
	}
	#email;
	#firstName;
	#lastName;
	#password;
	constructor({ email, firstName, lastName, password } = {}) {
		this.#email = email;
		this.#firstName = firstName;
		this.#lastName = lastName;
		this.#password = password;
		UserOfLeshes.addToUserCount();
	}
	// get email() {
	// 	if (Number(prompt("Enter your password please")) === this.#password) {
	// 		return console.log(`Here is your email : ${this.#email}`);
	// 	}

	// 	return console.log(" You are not Alina");
	// }
	// set email(newEmail) {
	// 	if (Number(prompt("Enter your password please")) === this.#password) {
	// 		this.#email = newEmail;
	// 		return console.log("Email change done");
	// 	}
	// 	return console.log(" You are not Alina");
	// }
	// get firstName() {
	// 	return this.#firstName;
	// }
	// set firstName(newName) {
	// 	this.#firstName = newName;
	// }
	// get lastName() {
	// 	return this.#lastName;
	// }
	// set lastName(newName) {
	// 	this.#lastName = newName;
	// }
	// get password() {
	// 	return this.#password;
	// }
	// set password(newPassword) {
	// 	this.#password = newPassword;
	// }
}

const Alina = new UserOfLeshes({
	email: "ali@email.com",
	firstName: "Alina",
	lastName: "Dmitrieva",
	password: 1234,
});
const Vlad = new UserOfLeshes({
	email: "ali@email.com",
	firstName: "Alina",
	lastName: "Dmitrieva",
	password: 1234,
});
const Nastya = new UserOfLeshes({
	email: "ali@email.com",
	firstName: "Alina",
	lastName: "Dmitrieva",
	password: 1234,
});
const Sveta = new UserOfLeshes({
	email: "ali@email.com",
	firstName: "Alina",
	lastName: "Dmitrieva",
	password: 1234,
});
const Olya = new UserOfLeshes({
	email: "ali@email.com",
	firstName: "Alina",
	lastName: "Dmitrieva",
	password: 1234,
});

// Alina.email;
// Alina.email = "newAlina@email.com";

console.log(UserOfLeshes.userCount);
console.log(UserOfLeshes);

// console.log(Alina.firstName);
// Alina.firstName = "Alinka";
// console.log(Alina.firstName);
// console.log(Alina.lastName);
// Alina.lastName = "Gulida";
// console.log(Alina.lastName);
// console.log(Alina.password);
// Alina.password = "1ff33f320j03";
// console.log(Alina.password);

class Phone {
	constructor(brand) {
		this.brand = brand;
	}
	present() {
		return `I have a ${this.brand}`;
	}
}
class Model extends Phone {
	constructor({ brand, model } = {}) {
		super(brand);
		this.model = model;
	}
	show() {
		return this.present() + ` it is a ${this.model}`;
	}
}

const myPhone = new Model({ brand: "iPhone", model: "12 PRO MAX" });

console.log(myPhone.show());
