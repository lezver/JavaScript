const refs = {
	input: document.querySelector("[data-input]"),
	items: document.querySelector("[data-items]"),
	form: document.querySelector("[data-form]"),
};

const onFetchError = () => {
	alert("Something went wrong and we can't find your POKEMON!");
};

const renderPokemonCard = ({
	name,
	weight,
	height,
	sprites: { front_default },
	abilities: [ability1, ability2],
}) => {
	const markup = `
		<li>
			<picture>
				<img src="${front_default}" alt="${name}" />
			</picture>
			<div>
				<h2>Name: ${name}</h2>
				<p>Weight: ${weight}</p>
				<p>Height: ${height}</p>
				<h3>Abilities:</h3>
			</div>
			<ul>
			<li>Ability: ${ability1.ability.name}</li>
			<li>Ability: ${ability2.ability.name}</li>
			</ul>
		</li>
		`;

	refs.items.innerHTML = markup;
};

const fetchPokemon = (pokemonId) =>
	fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then((response) =>
		response.json()
	);

const onSearch = (e) => {
	e.preventDefault();
	if (refs.input.value === "") return alert("Please input number of Pokemons");
	const searchQuery = refs.input.value;

	fetchPokemon(searchQuery)
		.then(renderPokemonCard)
		.catch(onFetchError)
		.finally(() => refs.form.reset());
};

refs.form.addEventListener("submit", onSearch);
