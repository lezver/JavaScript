const body = document.querySelector("body");

const form = document.createElement("form");
form.classList.add("form");
form.setAttribute("autocomplete", "off");

const inputLogin = document.createElement("input");
inputLogin.setAttribute("type", "text");
inputLogin.setAttribute("name", "login");
inputLogin.setAttribute("placeholder", "Login");

const inputPassword = document.createElement("input");
inputPassword.setAttribute("type", "password");
inputPassword.setAttribute("name", "password");
inputPassword.setAttribute("placeholder", "Password");

const registerBtn = document.createElement("button");
registerBtn.textContent = "Register";
registerBtn.classList.add("btn");
// registerBtn.setAttribute("type", "submit");
registerBtn.type = "submit";

form.append(inputLogin, inputPassword, registerBtn);

body.prepend(form);
// body.insertAdjacentElement("afterbegin", form);

const hendleSubmit = (event) => {
	event.preventDefault();

	const {
		elements: { login, password },
	} = event.currentTarget;

	if (login.value === "" || password.velue === "")
		return console.log("Please fill in all the fields!");
	console.log(
		`Your login --> ${login.value} and your password --> ${password.value}`
	);
	event.currentTarget.reset();
};

form.addEventListener("submit", hendleSubmit);
