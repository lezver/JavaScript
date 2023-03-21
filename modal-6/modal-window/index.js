const refs = {
	openBtnModalWindow: document.querySelector(".open-btn"),
	closeBtnModalWindow: document.querySelector(".close-btn"),
	backdrop: document.querySelector(".backdrop"),
};

const onOpenModal = () => document.body.classList.add("show-modal");

const onCloseModal = () => document.body.classList.remove("show-modal");

const onCloseBackdrop = (event) => {
	if (event.currentTarget === event.target)
		document.body.classList.remove("show-modal");
};

const onEscapeClose = (event) => {
	event.preventDefault();

	if (event.code === "Escape") onCloseModal();
};

refs.openBtnModalWindow.addEventListener("click", onOpenModal);

refs.closeBtnModalWindow.addEventListener("click", onCloseModal);

refs.backdrop.addEventListener("click", onCloseBackdrop);

window.addEventListener("keydown", onEscapeClose);
