async function f() {
	let promise = fetch("https://jsonplaceholder.typicode.com/posts/");

	return console.log((await promise).json());
}

f();
