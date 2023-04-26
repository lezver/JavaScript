const refs = {
	fetchUsersBtn: document.querySelector(".btn"),
	userList: document.querySelector(".user-list"),
};

const fetchUsers = () => {
	return fetch(
		"https://jsonplaceholder.typicode.com/users?_limit=3&_sort=name"
	).then((response) => {
		if (!response.ok) {
			throw new Error(response.status);
		}

		return response.json();
	});
};

const renderUserList = (users) => {
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
	return (refs.userList.innerHTML = markup);
};

refs.fetchUsersBtn.addEventListener("click", () => {
	fetchUsers()
		.then((users) => renderUserList(users))
		.catch((error) => console.log(error));
});
