const horses = [
	"Secretariat",
	"Eclipse",
	"West Australian",
	"Flying Fox",
	"Seabiscuit",
];

const race = (nameOfHorse) => {
	return new Promise((resulve) => {
		const time = getRandomTime(2000, 3500);

		setTimeout(() => {
			resulve({ nameOfHorse, time });
		}, time);
	});
};

const getRandomTime = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

Promise.race(horses.map(race)).then(({ nameOfHorse, time }) => {
	console.log(
		`%c Winner - ${nameOfHorse}, finished ${time} time`,
		"color: skyblue; font-size: 14px;"
	);
});

Promise.all(horses.map(race)).then((x) => {
	x.map(({ nameOfHorse, time }) => {
		console.log(`Name: ${nameOfHorse} and his time: ${time}`);
	});
	console.log(
		`%c Race is the end, bids is accepted`,
		"color: green; font-size: 14px;"
	);
});

console.log(
	`%c Rase has started, bids are not accepted!`,
	`color: red; font-size: 14px;`
);
