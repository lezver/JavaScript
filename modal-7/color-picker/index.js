import colors from "./colors.js";

const container = document.querySelector(".color-picker__items");

const createColorCardsMarkup = (colors) =>
	[...colors]
		.map(
			({ hex, rgb }) =>
				`
			<li class="color-picker__item">
				<div class="color-picker__watch"
				style="background-color: ${hex}"
				></div>
				<p class="color-picker__meta">
					<span>HEX: ${hex}</span>
					<span>GRB: ${rgb}</span>
				</p>
			</li>
		`
		)
		.join("");

container.insertAdjacentHTML("beforeend", createColorCardsMarkup(colors));

const changeBackgroundColor = (color) =>
	(document.body.style.backgroundColor = color);

const changeClassInWatchWindow = (cl) => cl.toggle("is-active");

const removeActiveClassInItem = (cl) => {
	if (cl) {
		cl.classList.remove("active");
	}
};

const handlerPicked = (e) => {
	if (!e.target.classList.contains("color-picker__watch")) return;

	changeBackgroundColor(e.target.style.backgroundColor);

	changeClassInWatchWindow(e.target.classList);

	const currantActiveCard = document.querySelector(
		".color-picker__item.active"
	);

	removeActiveClassInItem(currantActiveCard);

	const parentColorCard = e.target.closest(".color-picker__item");

	parentColorCard.classList.add("active");
};

container.addEventListener("click", handlerPicked);
