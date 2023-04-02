import tech from "./tech.js";

const refs = {
	input: document.getElementById("js-filter"),
	list: document.querySelector(".js-list"),
};

const createListItemsMarkap = (arr) =>
	arr.map((item) => `<li>${item.label}</li>`).join("");

refs.list.innerHTML = createListItemsMarkap(tech);

const onFilterChange = (e) => {
	const value = e.target.value.toLowerCase();

	const filterItems = tech.filter((el) =>
		el.label.toLocaleLowerCase().includes(value)
	);
	refs.list.innerHTML = createListItemsMarkap(filterItems);
};

refs.input.addEventListener("input", _.debounce(onFilterChange, 500));
