const refs = {
	form: document.querySelector(".form"),
	input: document.querySelector(".form__input"),
	text: document.getElementById("form__text"),
	btn: document.querySelector(".form__btn"),
};
const STORAGE_USER_NAME = "username";
const STORAGE_MESSAGE = "message";

const onFormSubmit = (e) => {
	e.preventDefault();
	e.target.reset();
	localStorage.removeItem(STORAGE_USER_NAME);
	localStorage.removeItem(STORAGE_MESSAGE);
};
const onTextInput = (e) => {
	const {
		target: { name, value },
	} = e;
	if (name === STORAGE_USER_NAME)
		localStorage.setItem(STORAGE_USER_NAME, value);

	if (name === STORAGE_MESSAGE) localStorage.setItem(STORAGE_MESSAGE, value);
};

const messageInText = () => {
	const saveUserName = localStorage.getItem(STORAGE_USER_NAME);
	if (saveUserName) refs.input.value = localStorage.getItem(STORAGE_USER_NAME);

	const saveMessage = localStorage.getItem(STORAGE_MESSAGE);
	if (saveMessage) refs.text.value = localStorage.getItem(STORAGE_MESSAGE);
};

messageInText();

refs.form.addEventListener("input", _.debounce(onTextInput, 500));
refs.form.addEventListener("submit", onFormSubmit);
