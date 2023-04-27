const fooPost = () => {
	const postToAdd = {
		author: "Mango",
		body: "CRUD is awesome",
	};

	const options = {
		method: "POST",
		body: JSON.stringify(postToAdd),
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
		},
	};

	fetch("https://jsonplaceholder.typicode.com/posts", options)
		.then((response) => response.json())
		.then((post) => console.log(post))
		.catch((error) => console.log(error));
};

fooPost();

const fooPatch = () => {
	const postToUpdate = {
		id: 101,
		body: "I change info in body!!!",
	};
	const options = {
		method: "PATCH",
		body: JSON.stringify(postToUpdate),
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
		},
	};

	fetch(
		`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`,
		options
	)
		.then((response) => response.json())
		.then((post) => console.log(post))
		.catch((error) => console.log("ERROE" + error));
};

fooPatch();

const fooDelete = () => {
	const postIdToDelete = 101;

	fetch("https://jsonplaceholder.typicode.com/posts/" + postIdToDelete, {
		method: "DELETE",
	})
		.then(() => console.log("Post deleted"))
		.catch((error) => console.log("Error:", error));
};

fooDelete();
