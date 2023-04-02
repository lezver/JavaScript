const x = 5;
const y = 10;
const z = 5;

console.log("x > y:", x > y); // false
console.log("x < y:", x < y); // true
console.log("x < z:", x < z); // false
console.log("x <= z:", x <= z); // true
console.log("x === y:", x === y); // false
console.log("x === z:", x === z); // true
console.log("x !== y:", x !== y); // true
console.log("x !== z:", x !== z); // false

//  //  Number

// Number.parseInt and Number.parseFloat
const array = ["1", "2,2", "3.333", "4.55fdsxgsd", "5.234sdfzsdf5342"];
console.log(Number.parseInt(array[4]));
console.log(Number.parseFloat(array[4]));
// Number.isNaN
const validNumber = Number("51");
console.log(Number.isNaN(validNumber)); // falce
const invalidNumber = Number("fasdf");
console.log(Number.isNaN(invalidNumber)); // true

console.log(0.1 + 0.2); // 0.30000000000000004
console.log((0.1 * 100 + 0.2 * 100) / 100); // 0.3
console.log((0.17 * 100 + 0.22 * 100) / 100); // 0.39
// toFixed
console.log(0.17 + 0.24); //
console.log(Number((0.17 + 0.24).toFixed(2)));
// Math
console.log(Math.floor(1, 7)); // 1
console.log(Math.ceil(1, 2)); // 2
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2
console.log(Math.max(33, 22, 11, 55, 66, 88)); // 88
console.log(Math.min(33, 22, 11, 55, 66, 88)); // 11
console.log(Math.pow(3, 3)); // 27
console.log(Math.random()); // випадкове число між 0 і 1
console.log(Math.round(Math.random() * (10 - 1) + 1)); //
// Конкатинація рядків
console.log("Mango " + "is" + " happy");
// Шаблонні рядки
const guestName = "Vladislav";
const roomNumber = 3;
console.log(
	"Welcome " + guestName + ", your room number is " + roomNumber + "!"
);
console.log(`Welcome ${guestName}, your room number is ${roomNumber}!`);
//Властивості і методи рядків
console.log("Welcome to Bahamas!".length);
// Методи toLowerCase() і toUpperCase()
console.log("Welcome to Bahamas!".toLowerCase());
console.log("Welcome to Bahamas!".toUpperCase());
console.log("Welcome to Bahamas!");
// Метод indexOf()
console.log("Welcome to Bahamas!".indexOf("t"));
// Метод includes()
console.log("Ремонтний дроїд".includes("н")); // true
console.log("Ремонтний дроїд".includes("Н")); // false
console.log("Ремонтний дроїд".includes("дроїд")); // true
console.log("Ремонтний дроїд".includes("Дроїд")); // false
console.log("Ремонтний дроїд".includes("Ремонтний")); // true
console.log("Ремонтний дроїд".includes("ремонтний")); // false
// Метод endsWith()
console.log("script.js".endsWith(".js"));
console.log("script.js".endsWith(".xs"));
// Методи replace() і replaceAll()

const jsFileName = "script.js";
const minifiendJsFileName = jsFileName.replace(".js", ".main.js");
console.log(minifiendJsFileName);
const cssFileNames = "style.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".main.css");
console.log(minifiedCssFileNames);
// Метод slice()
console.log("Repair droid".slice(0, 4));
console.log("Repair droid".slice(3, 9));
console.log("Repair droid".slice(0, "Repair droid".length));
console.log("Repair droid".slice(7, "Repair droid".length));

//  //  Логічні оператори

// Логічне «І»
console.log(20 > 10 && 20 < 30); // true && true -> true

console.log(50 > 10 && 50 < 30); // true && false -> false
console.log(50 > 80 && 50 < 120); // false && true -> false

console.log(1 && 5); // true && true -> 5
console.log(5 && 1); // true && true -> 1
console.log(0 && 2); // false && true -> 0
console.log(2 && 0); // true && false -> 0
console.log("" && "Mango"); // false && true -> ""
console.log("Mango" && ""); // true && false -> ""
console.log("Mango" && "Poly"); // true && true -> "Poly"
console.log("Poly" && "Mango"); // true && true -> "Mango"
// Логічне «АБО»
console.log(5 < 10 || 5 > 30); // true || false -> true
console.log(40 < 10 || 40 > 30); // false || true -> true
console.log(20 < 10 || 20 > 30); // false || false -> false

console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true

console.log(3 || false); // 3
console.log(false || 3); // 3
console.log(3 || true); // 3
console.log(true || 3); // true
// Логічне «НЕ»
console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!"Mango"); // !"Mango" -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !"" -> !false -> true

//  //  Розгалуження

// Інструкція if
let cost = 0;
const subscription = "pro";
if (subscription === "pro") {
	cost = 100;
}
console.log(cost); // 100

let cost1 = 0;
const subscription1 = "pro";
if (subscription1 === "free") {
	cost1 = 100;
}
console.log(cost1); // 0
// Інструкція if...else
let cost2;
const subscription2 = "free";
if (subscription2 === "pro") {
	cost2 = 111;
} else {
	cost2 = 0;
}
console.log(cost2);

let cost3;
const subscription3 = "pro";
if (subscription3 === "pro") {
	cost3 = 111;
} else {
	cost3 = 0;
}
console.log(cost3);
// Інструкція else...if
let cost4;
const subscription4 = prompt("input your subscription");
if (subscription4 === "free") {
	cost4 = 0;
	console.log(cost4);
} else if (subscription4 === "pro") {
	cost4 = 100;
	console.log(cost4);
} else if (subscription4 === "premium") {
	cost4 = 500;
	console.log(cost4);
} else {
	console.log(" invalid subscription type");
}
// Тернарний оператор
let type;
const age = 20;
if (age >= 18) {
	type = "adult";
	console.log(type);
} else {
	type = " child";
	console.log(type);
}
const ternarn = age >= 21 ? (type = "adult") : (type = " child");
console.log(ternarn);

const numberFirst = 33;
const numberSecond = 55;
const biggerNumber = numberFirst > numberSecond ? numberFirst : numberSecond;
console.log(biggerNumber);

//  //  Інструкція switch

let cost5;
const subscription5 = "premium";
switch (subscription5) {
	case "free":
		cost5 = 0;
		break;
	case "pro":
		cost5 = 100;
		break;
	case "premium":
		cost5 = 500;
		break;
	default:
		console.log("Invalid subscription type");
}
console.log(cost5);

// //  Область видимості

// const global = "global";

// if (true) {
// 	const blockA = "block A";

// 	// Бачимо глобальну + локальну A
// 	console.log(global); // 'global'
// 	console.log(blockA); // block A

// 	// Змінні blockB і blockC не знайдені в доступних областях видимості.
// 	// Буде помилка звернення до змінної.
// 	console.log(blockB); // ReferenceError: blockB is not defined
// 	console.log(blockC); // ReferenceError: blockC is not defined

// 	if (true) {
// 		const blockB = "block B";

// 		// Бачимо глобальну + зовнішню A + локальну B
// 		console.log(global); // global
// 		console.log(blockA); // block A
// 		console.log(blockB); // block B

// 		// Змінна blockC не знайдена в доступних областях видимості.
// 		// Буде помилка звернення до змінної.
// 		console.log(blockC); // ReferenceError: blockC is not defined
// 	}
// }

// if (true) {
// 	const blockC = "block C";

// 	// Бачимо глобальну + локальну C
// 	console.log(global); // global
// 	console.log(blockC); // block C

// 	// Змінні blockA і blockB не знайдені в доступних областях видимості.
// 	// Буде помилка звернення до змінної.
// 	console.log(blockA); // ReferenceError: blockA is not defined
// 	console.log(blockB); // ReferenceError: blockB is not defined
// }

// // Бачимо лише глобальну
// console.log(global); // global

// // Змінні blockA, blockB і blockC не знайдені в доступних областях видимості.
// // Буде помилка звернення до змінної.
// console.log(blockA); // ReferenceError: blockA is not defined
// console.log(blockB); // ReferenceError: blockB is not defined
// console.log(blockC); // ReferenceError: blockC is not defined

//  //  Цикли

//  Цикл while
let counter = 0;
while (counter < 10) {
	counter += 1;
	console.log("counter : ", counter);
}

let clientCounter = 18;
const maxClients = 25;
while (clientCounter < maxClients) {
	clientCounter += 1;
	console.log("clietn counter :", clientCounter);
}
// Цикл do...while
let password = "";
do {
	password = prompt(" Input password longer four symbol", "");
} while (password.length < 5);
console.log("Input password", password);
// Цикл for
for (let i = 0; i <= 20; i += 5) {
	console.log(i); // 0 5 10 15 20
}

const target = 3;
let sum = 0;
for (let i = 0; i <= target; i++) {
	sum += i;
}
console.log(sum);

const max = 10;
for (let i = 0; i <= max; i++) {
	console.log(`${max} % ${i}`, max % i);
}
// Оператор break
for (let i = 0; i <= 5; i++) {
	if (i === 3) {
		console.log(`we find number ${i} and break iteration`);
		break;
	}
}
console.log("log after cycle");
//  Оператор continue
for (let i = 0; i < 10; i++) {
	if (i % 2 === 0) {
		continue;
	}
	console.log("Not paired i: ", i);
}
