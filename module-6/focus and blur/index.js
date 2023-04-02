const body = document.querySelector("body");
body.insertAdjacentHTML(
	"afterbegin",
	`<button type="button" data-action="set">Set focus to input</button>
<button type="button" data-action="remove">Remove focus from input</button>
<br><br>
<input type="text" class="text-input" />`
);

const textInput = document.querySelector(".text-input");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener("click", () => textInput.focus());

textInput.addEventListener(
	"focus",
	() => (textInput.value = "This input has focus")
);

removeFocusBtn.addEventListener("click", () => textInput.blur());

textInput.addEventListener("blur", () => (textInput.value = ""));
