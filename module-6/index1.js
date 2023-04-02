const body = document.querySelector("body");

const main = document.createElement("main");
main.classList.add("main");

body.prepend(main);

const title = document.createElement("h2");
title.classList.add("title");
title.textContent = "First try create HTML via JS";
main.append(title);

const img = document.createElement("img");
img.classList.add("img");
img.src =
	"https://cdn2.hexlet.io/store/derivatives/4aa834c7741fe4045ae3e5ecf6179654/fill_png-1200-565.png";
img.alt = "something picture";
main.append(img);

const text = document.createElement("p");
text.classList.add("text");
text.textContent =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste minima expedita, debitis amet pariatur, cum deleniti aliquam ad obcaecati quam numquam non nulla? In, distinctio aut. Aspernatur voluptas adipisci quae?";
main.append(text);

const items = document.createElement("ul");
items.classList.add("items");
main.append(items);

const arrayOfOffers = [
	"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, nobis?",
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, similique.",
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, similique.",
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, similique.",
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, similique.",
];

const offers = arrayOfOffers.reduce(
	(acc, offer) => acc + `<li>${offer}</li>`,
	""
);
console.log(offers);
items.insertAdjacentHTML("afterbegin", offers);

console.log(body);
