import { hellow, goodbye } from "./greeter.js";
console.log(hellow());
console.log(goodbye());

import { square, diagonal } from "./my-module.js";

console.log(square(12));
console.log(diagonal(22, 33));

import { square1, diagonal1 } from "./my-module1.js";

console.log(square1(21));
console.log(diagonal1(44, 55));

import * as myModule from "./my-module2.js";

console.log(myModule.square(75));
console.log(myModule.diagonal(10, 8));

try {
	const data = JSON.parse("Well, this is awkward");
} catch (error) {
	console.log(error.name);
	console.log(error.message);
	console.log(error.stack);
}
console.log("This is fine, we handled parse error in try...catch");

///////////////////////////////////////

const data = JSON.parse('{"name":"Vladislav"}');
try {
	data;
} catch (error) {
	console.log(error.name);
	console.log(error.message);
}
console.log(data);

localStorage.setItem("ui-theme", "light");
localStorage.setItem("sidebar", "expanded");
localStorage.setItem("notifications-level", "mute");
localStorage.removeItem("notifications-level");

const them = localStorage.getItem("ui-theme");

// localStorage.clear();

console.log(localStorage.length);

const settings = {
	theme: "dark",
	isAuthenticated: true,
	options: [1, 2, 3],
};
localStorage.setItem("settings", JSON.stringify(settings));

console.log(localStorage);

console.log(them);

const saveSattings = localStorage.getItem("settings");
const parsedSettings = JSON.parse(saveSattings);
console.log(parsedSettings);
