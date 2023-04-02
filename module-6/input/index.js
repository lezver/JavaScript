const body = document.querySelector("body");

const textInputn = document.createElement("input");
textInputn.classList.add("text-input");
textInputn.type = "text";
textInputn.placeholder = "write something...";

const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.textContent = "Text field value: ";

const spanOutput = document.createElement("span");
spanOutput.classList.add("output");

paragraph.append(spanOutput);

body.prepend(textInputn, paragraph);

const foo = (event) => (spanOutput.textContent = event.currentTarget.value);

textInputn.addEventListener("input", foo);
