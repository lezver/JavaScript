const refs = {
	boxes: document.querySelectorAll(".parent, .children, .descendant"),
	colorPalette: document.querySelector(".color-palette"),
	output: document.querySelector(".output"),
};
const [parent, children, descendant] = refs.boxes;
// document.body.addEventListener("click", () => alert("Body click handler"));
// parent.addEventListener("click", () => alert("Parent click handler"));
// children.addEventListener("click", () => alert("Children click handler"));
// descendant.addEventListener("click", () => alert("Descendant click handler"));

parent.addEventListener("click", (event) => {
	console.log("event.target:", event.target);
	console.log("event.currentTarget: ", event.currentTarget);
});

// document.body.addEventListener("click", () => alert("Body click handler"));
// parent.addEventListener("click", () => alert("Parent click handler"));
// children.addEventListener("click", () => alert("Children click handler"));
// descendant.addEventListener("click", (event) => {
// 	console.dir(event.target);

// 	console.log(event.target.nodeName);
// 	event.stopPropagation();
// 	alert("Descendant click handler");
// });

const getRandomHex = () =>
	Math.round(Math.random() * 256)
		.toString(16)
		.padStart(2, "0");

const getRandomColor = () =>
	`#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;

const selectColor = (evetn) => {
	if (evetn.target.nodeName !== "BUTTON") return;
	const selectedColor = event.target.dataset.color;

	refs.output.textContent = `selected color: ${selectedColor}`;
	refs.output.style.color = selectedColor;
};

const createPaletteItems = () => {
	const items = [];

	for (let i = 0; i < 24; i += 1) {
		const color = getRandomColor();
		const item = document.createElement("button");
		item.classList.add("item");
		item.dataset.color = color;
		item.style.backgroundColor = color;
		items.push(item);
	}
	refs.colorPalette.append(...items);
};

createPaletteItems();
refs.colorPalette.addEventListener("click", selectColor);

const randomColor = () =>
	Math.round(Math.random() * 256)
		.toString(16)
		.padStart(2, "0");
