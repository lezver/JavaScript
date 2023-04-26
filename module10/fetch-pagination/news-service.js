export default class NewsApiService {
	constructor() {
		this.searchQuery = null;
		this.pageSize = 5;
		this.page = 1;
	}
	fetchArticals() {
		const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&pageSize=${this.pageSize}&page=${this.page}`;
		const options = {
			headers: {
				Authorization: "d41d518926524bb5b39a5784c858803b",
			},
		};

		return fetch(url, options)
			.then((response) => response.json())
			.then(({ articles }) => articles);
	}
	incrementPage() {
		this.page += 1;
	}
	resetPage() {
		this.page = 1;
	}
	get query() {
		return this.searchQuery;
	}
	set query(newSearchQuery) {
		this.searchQuery = newSearchQuery;
	}
}
