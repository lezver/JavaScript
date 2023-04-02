const refs = {
	firstSection: document.createElement("section"),
	eventCounter: document.createElement("div"),
	paragraph: document.createElement("p"),
	output: document.createElement("span"),
	cta: document.createElement("p"),
};

const firstSectionCreate = () => {
	refs.firstSection.classList.add("first-section");

	refs.eventCounter.classList.add("event-counter");

	refs.paragraph.textContent = "Number of scroll events";

	refs.output.classList.add("output");
	refs.output.textContent = "0";

	refs.cta.classList.add("cta");
	refs.cta.textContent = "Scroll me";

	refs.eventCounter.append(refs.paragraph, refs.output);
	refs.firstSection.append(refs.cta, refs.eventCounter);

	return refs.firstSection;
};

document.body.prepend(firstSectionCreate());

let scrollElementContent = 0;

const scrollBody = () => {
	scrollElementContent += 1;

	refs.output.textContent = scrollElementContent;
};

document.addEventListener("scroll", scrollBody);

const secondSection = document.createElement("section");
secondSection.classList.add("second-section");

const nameForBtn = [
	"#html",
	"#css",
	"#javascript",
	"#npm",
	"#react",
	"#redux",
	"#nodejs",
];

const arrayOfBtn = [];

nameForBtn.forEach((name) => {
	const button = document.createElement("button");
	button.dataset.value = name.slice(1);
	console.log(name.slice(1));
	button.textContent = name;
	arrayOfBtn.push(button);
});

secondSection.append(...arrayOfBtn);

refs.firstSection.after(secondSection);

// const addNewClass = (e) => {
// 	if (e.target.nodeName !== "BUTTON") return;

// 	const currentActiveBtn = document.querySelector(".btn--active");

// 	currentActiveBtn?.classList.remove("btn--active");
// 	// the same
// 	// if (currentActiveBtn) currentActiveBtn.classList.remove("btn--active");

// 	e.target.classList.add("btn--active");

// 	console.log(e.target.value);
// };

const selectedTags = new Set();

const addNewClass = (e) => {
	if (e.target.nodeName !== "BUTTON") return;

	if (e.target.classList.contains("btn--active"))
		selectedTags.delete(e.target.dataset.value);
	else {
		selectedTags.add(e.target.dataset.value);
	}

	e.target.classList.toggle("btn--active");

	console.log(selectedTags);
};

secondSection.addEventListener("click", addNewClass);
