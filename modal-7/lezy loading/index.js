import images from "./images.js";

const items = document.getElementById("items");

const createItem = (arr) =>
	arr
		.map(
			({ src, text }) =>
				`
		<li>
			<p>${text}</p>
			<img data-src="${src}" alt="" />
		</li>
		`
		)
		.join("");
items.insertAdjacentHTML("beforeend", createItem(images));

const allImg = document.querySelectorAll("img");

const onImageLoaded = (e) => {
	e.target.classList.add("appear");
};

allImg.forEach((img) => {
	img.loading = "lazy";
	img.addEventListener("load", onImageLoaded, { once: true });
});

if ("loading" in HTMLImageElement.prototype) {
	allImg.forEach((img) => (img.src = img.getAttribute("data-src")));
} else {
	const script = document.createElement("script");
	script.src =
		"https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
	script.integrity =
		"sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
	script.crossOrigin = "anonymous";
	script.referrerPolicy = "no-referrer";
}
document.addEventListener(
	"scroll",
	_.throttle(() => console.log("Scroll handler call every 300ms"), 300)
);
