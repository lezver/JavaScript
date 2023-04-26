import NewsApiService from "./news-service.js";

const refs = {
	searchForm: document.querySelector("[data-form]"),
	searchInput: document.querySelector("[data-search-text]"),
	searchBtn: document.querySelector("[data-search-btn]"),
	moreBtn: document.querySelector("[data-more-btn]"),
	items: document.querySelector("[data-items]"),
};
refs.searchBtn.disabled = true;
refs.moreBtn.disabled = true;

const newsApiServerce = new NewsApiService();

const checkActiveBtn = () => {
	if (refs.searchInput.value) {
		refs.searchBtn.disabled = false;
	} else {
		refs.searchBtn.disabled = true;
	}
};

const clearArticlesMarkup = () => {
	refs.items.innerHTML = "";
};

const appendArticlesMarkup = (articles) => {
	const markup = articles.reduce(
		(acc, { url, title, author, description, urlToImage }) =>
			acc +
			`
<li>
	<a href="${url}" target="_blank" rel="noopener noreferrer">
	<article>
		<img src="${urlToImage ? urlToImage : ""}" />
		<h2>${title}</h2>
		<p>Posted by: ${author}</p>
		<p>${description}</p>
	</article>
	</a>
</li>
			`,
		""
	);

	return refs.items.insertAdjacentHTML("beforeend", markup);
};

const onSearch = (e) => {
	e.preventDefault();

	if (!e.currentTarget.elements[0].value) return;

	clearArticlesMarkup();

	newsApiServerce.query = e.currentTarget.elements[0].value;

	newsApiServerce.resetPage();

	newsApiServerce.fetchArticals().then(appendArticlesMarkup);

	refs.searchBtn.disabled = true;
	refs.moreBtn.disabled = false;

	refs.searchForm.reset();
};

const onLoadMore = () => {
	newsApiServerce.incrementPage();

	newsApiServerce.fetchArticals().then(appendArticlesMarkup);
};

refs.searchInput.addEventListener("input", checkActiveBtn);

refs.searchForm.addEventListener("submit", onSearch);

refs.moreBtn.addEventListener("click", onLoadMore);
