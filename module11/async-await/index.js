class HTTPServer {
	constructor(url) {
		this.url = url;
	}

	async getData(params = "") {
		const url = this.url + params;

		const response = await fetch(url);

		return await this.#parseResponse(response);
	}

	async postData(body) {
		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body),
		};

		const response = await fetch(this.url, options);

		return await this.#parseResponse(response);
	}

	async updateData(id, body) {
		const options = {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body),
		};
		const response = await fetch(this.url + id, options);

		return await this.#parseResponse(response);
	}

	async deleteData(id) {
		const options = {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
		};

		const response = await fetch(this.url + id, options);

		if (response.ok) {
			return "Success";
		} else {
			throw new Error("Error occured while trying delete");
		}
	}

	async #parseResponse(response) {
		return await response.json();
	}
}

const HTTPServerBulder = new HTTPServer(
	"https://jsonplaceholder.typicode.com/users/"
);

HTTPServerBulder.getData(1).then((data) => console.log(data));
HTTPServerBulder.postData({ name: "Valet", text: "hello everybody!" }).then(
	(data) => console.log(data)
);
HTTPServerBulder.updateData(1, { add: "some text..." }).then((data) =>
	console.log(data)
);
HTTPServerBulder.deleteData(2).then((data) => console.log(data));
HTTPServerBulder.deleteData(2).then((data) => console.log(data));
