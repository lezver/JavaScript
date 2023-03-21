import cars from "./cars.js";

const refs = {
	carPriceInput: document.getElementById("car-price-input"),
	carMakeInput: document.getElementById("car-make-input"),
	carTypeInput: document.getElementById("car-type-input"),
	carsBtn: document.querySelector(`[data-btn="button"]`),
	carsFindsBox: document.querySelector(".box"),
};

const listFoundCars = () => {
	const carPrice = refs.carPriceInput.value
		? Number(refs.carPriceInput.value)
		: null;

	const carMake = refs.carMakeInput.value ? refs.carMakeInput.value : null;

	const carType = refs.carTypeInput.value ? refs.carTypeInput.value : null;

	const filteredCars = [...cars].reduce((acc, car) => {
		const { price, make, type } = car;
		if (carPrice && carPrice < price) {
			return acc;
		}
		if (carMake && carMake !== make) {
			return acc;
		}
		if (carType && carType !== type) {
			return acc;
		}
		acc.push(car);
		return acc;
	}, []);

	let markup = "";

	filteredCars.forEach(
		({ make, model, type, price, picture }) =>
			(markup += `
		<ul class="cars-items">
	<li class="cars-items__item">make --> ${make}</li>
	<li class="cars-items__item">model --> ${model}</li>
	<li class="cars-items__item">type --> ${type}</li>
	<li class="cars-items__item">price --> ${price}</li>
	<li class="cars-items__item"><img src="${picture}" alt="car" /></li>
</ul>
	`)
	);
	console.log(markup);

	refs.carsFindsBox.insertAdjacentHTML("beforeend", markup);
	markup.rest();
};

refs.carsBtn.addEventListener("click", listFoundCars);
