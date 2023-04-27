const fetchUsers = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");

	return await response.json();
};

fetchUsers().then((users) => console.log(users));

// //////////////////////////////////////////

const fetchUsers1 = async () => {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/users");

		const users = await response.json();

		console.log(users);
	} catch (error) {
		console.log(error.message);
	}
};
fetchUsers1();

// //////////////////////////////////////////

const fetchUsers2 = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");

	const users = await response.json();

	return users;
};

fetchUsers2()
	.then((users) => console.log(users))
	.catch((error) => console.log(error));

// //////////////////////////////////////////

const fetchUsers3 = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	return await response.json();
};

const doStuff = async () => {
	try {
		const users = await fetchUsers3();
		console.log(users);
	} catch (error) {
		console.log(error.message);
	}
};

doStuff();

const fetchUsers4 = async () => {
	const baseUrl = "https://jsonplaceholder.typicode.com";
	const firstResponse = await fetch(`${baseUrl}/users/1`);
	const secondResponse = await fetch(`${baseUrl}/users/2`);
	const thirdResponse = await fetch(`${baseUrl}/users/3`);

	const firstUser = await firstResponse.json();
	const secondUser = await secondResponse.json();
	const thirdUser = await thirdResponse.json();

	console.log(firstUser, secondUser, thirdUser);
};

fetchUsers4();

const fetchUsers5 = async () => {
	const baseUrl = "https://jsonplaceholder.typicode.com";
	const userIds = [1, 2, 3];

	const arrayOfPromises = userIds.map(async (userId) => {
		const response = await fetch(`${baseUrl}/users/${userId}`);

		return response.json();
	});

	const users = await Promise.all(arrayOfPromises);

	console.log(users);
};

fetchUsers5();
