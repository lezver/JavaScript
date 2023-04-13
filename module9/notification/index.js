const refs = {
	btn: document.querySelector(".btn"),
	info: document.querySelector(".notification-info"),
};

const NOTIFICATION_DELAY = 5000;
let timeOutId = null;

const showNotification = () => {
	refs.info.classList.add("is-visible");

	timeOutId = setTimeout(() => {
		hideNotification();
	}, NOTIFICATION_DELAY);
};

const hideNotification = () => {
	refs.info.classList.remove("is-visible");

	clearTimeout(timeOutId);
};

refs.btn.addEventListener("click", showNotification);

refs.info.addEventListener("click", hideNotification);
