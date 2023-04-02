const body = document.querySelector("body");

const textP = document.createElement("p");
textP.textContent = "Select option text: ";

const spanText = document.createElement("span");
spanText.classList.add("text-output");
spanText.textContent = "none";

textP.append(spanText);

const valueP = document.createElement("p");
valueP.textContent = "Select option value: ";

const spanValue = document.createElement("span");
spanValue.classList.add("value-output");
spanValue.textContent = "none";

valueP.append(spanValue);

body.prepend(textP, valueP);

valueP.insertAdjacentHTML(
	"afterend",
	`<select class="pizza-select">
    <option value="four_meats">Four Meats</option>
    <option value="royal_cheese">Royal Cheese</option>
    <option value="vegetarian">Vegetarian</option>
    <option value="smoked_salmon">Smoked Salmon</option>
  </select>`
);

const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

const setOutput = () => {
	const selectedOptionValue = select.value;
	const selectedOptionIndex = select.selectedIndex;
	const selectedOptionText = select.options[selectedOptionIndex].text;
	console.dir(select);
	textOutput.textContent = selectedOptionText;
	valueOutput.textContent = selectedOptionValue;
};
setOutput();
select.addEventListener("change", setOutput);
