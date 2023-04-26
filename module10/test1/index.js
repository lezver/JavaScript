const refs = {
	fetchUserBtn: document.querySelector(".btn"),
	userList: document.querySelector(".user-list"),
};

const fetchUser = () => {
	return fetch("https://jsonplaceholder.typicode.com/users").then(
		(response) => {
			if (!response.ok) {
				throw new Error(response.status);
			}
			return response.json();
		}
	);
};

const renderUserlist = (users) => {
	const markup = users.reduce(
		(acc, user) =>
			acc +
			`
				<li>
          <p><b>Name</b>: ${user.name}</p>
          <p><b>Email</b>: ${user.email}</p>
          <p><b>Company</b>: ${user.company.name}</p>
        </li>
			`,
		""
	);
	refs.userList.innerHTML = markup;
};

refs.fetchUserBtn.addEventListener("click", () =>
	fetchUser()
		.then((users) => renderUserlist(users))
		.catch((error) => console.log(error))
);
