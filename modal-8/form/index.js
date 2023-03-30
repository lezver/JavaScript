const refs = {
	paragraph: document.createElement("p"),
	output: document.createElement("span"),
	form: document.createElement("form"),
	input: document.createElement("input"),
	submitBtn: document.createElement("button"),
};

refs.paragraph.textContent = "Value from localStorage: ";

// refs.output.setAttribute("id", "output");
refs.output.id = "output";

refs.form.id = "message-form";

refs.input.classList.add("input");
refs.input.type = "text";
refs.input.name = "message";

refs.submitBtn.id = "btn";
refs.submitBtn.type = "submit";
refs.submitBtn.textContent = "save";

refs.paragraph.append(refs.output);
refs.form.append(refs.input, refs.submitBtn);

document.body.prepend(refs.paragraph, refs.form);

const LOCALSTORAGE_KEY = "example-message";

const updateOutput = () =>
	(refs.output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "");

const saveMessage = (e) => {
	e.preventDefault();
	localStorage.setItem(LOCALSTORAGE_KEY, refs.form.elements.message.value);
	updateOutput();
	refs.form.reset();
};

updateOutput();

refs.submitBtn.addEventListener("click", saveMessage);
