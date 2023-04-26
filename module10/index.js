fetch("https://jsonplaceholder.typicode.com/users")
	.then((test) => test.json())
	.then((obj) => console.log(obj));

fetch("https://jsonplaceholder.typicode.com/users")
	.then((response) => {
		if (!response.ok) {
			throw new Error(response.status);
		}
		return response.json();
	})
	.then((data) => {
		console.log(data);
		// Data handling
	})
	.catch((error) => {
		// Error handling
	});

let globalVariable;

fetch("https://jsonplaceholder.typicode.com/users")
	.then((response) => response.json())
	.then((users) => {
		console.log("users inside the callback", users);

		globalVariable = users;

		console.log("globalVariable inside fetch callback", globalVariable);
	});

console.log("globalVariable outside fetch", globalVariable);

const searchParams = new URLSearchParams({
	_limit: 2,
	_sort: "name",
});

console.log(searchParams.toString());

const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
console.log(url);

const headers = new Headers({
	"Content-Type": "application/json",
	"X-Custom-Header": "custom value",
});

headers.append("Content-Type", "text/bush");
headers.append("X-Custom-Header", "custom value");
headers.has("Content-Type");
headers.get("Content-Type");
headers.set("Content-Type", "application/json");
headers.delete("X-Custom-Header");

//  SIMPLIFICATION - СПРОЩЕННЯ

const headersSimplification = {
	"Content-Type": "application/json",
	"X-Custom-Header": "custom value",
};
