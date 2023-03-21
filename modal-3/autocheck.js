// Change code below this line

// 4

// const apartment = {
// 	imgUrl: "https://via.placeholder.com/640x480",
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// 	tags: ["premium", "promoted", "top"],
// 	owner: {
// 		name: "Henry",
// 		phone: "982-126-1588",
// 		email: "henry.carter@aptmail.com",
// 	},
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// // Change code above this line
// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

// 10

// const apartment = {
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment) {
// 	keys.push(key);
// 	values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// 11

// const keys = [];
// const values = [];
// const advert = {
// 	service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
// 	// Change code below this line
// 	if (apartment.hasOwnProperty(key)) {
// 		keys.push(key);
// 		values.push(apartment[key]);
// 	}
// 	// Change code above this line
// }

// console.log(keys);
// console.log(values);

// 12

// function countProps(object) {
// 	let propCount = 0;
// 	// Change code below this line
// 	for (const key in object) {
// 		if (object.hasOwnProperty(key)) {
// 			propCount += 1;
// 		}
// 	}
// 	// Change code above this line
// 	return propCount;
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// 18

// const products = [
// 	{ name: "Radar", price: 1300, quantity: 4 },
// 	{ name: "Scanner", price: 2700, quantity: 3 },
// 	{ name: "Droid", price: 400, quantity: 7 },
// 	{ name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
// 	let productPrice = null;

// 	for (const product of products) {
// 		if (product.name === productName) {
// 			productPrice = product.price;
// 		}
// 	}

// 	return productPrice;
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Engine"));

// 19

// const products = [
// 	{ name: "Radar", price: 1300, quantity: 4 },
// 	{ name: "Scanner", price: 2700, quantity: 3 },
// 	{ name: "Droid", price: 400, quantity: 7 },
// 	{ name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
// 	let arrayOfValue = [];

// 	for (const { name, price, quantity } of products) {
// 		switch (propName) {
// 			case "name":
// 				arrayOfValue.push(name);
// 				break;

// 			case "quantity":
// 				arrayOfValue.push(quantity);
// 				break;

// 			case "price":
// 				arrayOfValue.push(price);
// 				break;

// 			default:
// 				arrayOfValue;
// 		}
// 	}
// 	return arrayOfValue;
// }

// console.log(getAllPropValues("category"));
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("quantity"));

// 20

// const products = [
// 	{ name: "Radar", price: 1300, quantity: 4 },
// 	{ name: "Scanner", price: 2700, quantity: 3 },
// 	{ name: "Droid", price: 400, quantity: 7 },
// 	{ name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
// 	let totalPrice = 0;

// 	for (const { name, price, quantity } of products) {
// 		totalPrice += productName === name ? price * quantity : 0;
// 	}
// 	return totalPrice;
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Scanner"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));

// 39

// const atTheOldToad = {
// 	potions: ["Speed potion", "Dragon breath", "Stone skin"],
// 	removePotion(potionName) {
// 		// Change code below this line
// 		const { potions } = this;
// 		return potions.splice(potions.indexOf(potionName), 1);
// 		// Change code above this line
// 	},
// };

// console.log(atTheOldToad.removePotion("Dragon breath"));

// 41

const atTheOldToad = {
	potions: [
		{ name: "Speed potion", price: 460 },
		{ name: "Dragon breath", price: 780 },
		{ name: "Stone skin", price: 520 },
	],
	// Change code below this line
	getPotions() {
		return this.potions;
	},

	addPotion(newPotion) {
		const { potions } = this;
		const { name: newPotionName } = newPotion;

		for (const { name } of potions) {
			if (name.includes(newPotionName)) {
				return `Error! Potion ${newPotionName} is already in your inventory!`;
			}
		}

		potions.push(newPotion);
	},

	removePotion(potionName) {
		const { potions } = this;

		for (const potion of potions) {
			const { name } = potion;

			if (name === potionName) {
				potions.splice(potions.indexOf(potion), 1);
			}
		}

		return `Potion ${potionName} is not in inventory!`;
	},

	updatePotionName(oldName, newName) {
		const { potions } = this;

		for (const potion of potions) {
			let { name } = potion;

			if (name === oldName) {
				name = newName;
			}
		}

		return `Potion ${oldName} is not in inventory!`;
	},
	// Change code above this line
};

atTheOldToad.addPotion({ name: "Dragon breath", price: 780 });
console.log(atTheOldToad.removePotion("Dragon breath"));
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

console.log(atTheOldToad.getPotions());
