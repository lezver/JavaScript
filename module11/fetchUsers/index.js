const refs = {
	fetchUsersBtn: document.querySelector("[data-fetch-users]"),
	userList: document.querySelector("[data-user-list]"),
};

const renderUserListItems = (users) => {
	const markup = users.reduce(
		(acc, { name, email, company }) =>
			acc +
			`
			<li>
				<p><b>Name</b>:${name}</p>
				<p><b>Email</b>:${email}</p>
				<p><b>Company</b>:${company.name}</p>
			</li>
			`,
		""
	);
	return refs.userList.insertAdjacentHTML("beforeend", markup);
};

const createUsers = async () => {
	const baseUrl = "https://jsonplaceholder.typicode.com";
	const userIds = [1, 2, 3, 4, 5];

	const arrayOfPromises = userIds.map(async (userId) => {
		const response = await fetch(`${baseUrl}/users/${userId}`);

		return response.json();
	});

	const users = Promise.all(arrayOfPromises);

	return users;
};

const fetchUsers = async () => {
	try {
		const users = await createUsers();
		renderUserListItems(users);
	} catch (error) {
		console.log(error.message);
	}
};

refs.fetchUsersBtn.addEventListener("click", fetchUsers);
