const clockFace = document.querySelector(".clock-face");

const deadline = new Date(2024, 0, 1);

const pad = (value) => {
	return String(value).padStart(2, "0");
};

const timer = (deadline) => {
	return new Promise(() => {
		setInterval(() => {
			const delta = deadline - new Date();

			const arrOfTime = {
				seconds: Math.floor(delta / 1000) % 60,
				minutes: Math.floor(delta / 1000 / 60) % 60,
				hours: Math.floor(delta / 1000 / 60 / 60) % 24,
				days: Math.floor(delta / 1000 / 60 / 60 / 24),
			};

			const { seconds, minutes, hours, days } = arrOfTime;

			clockFace.textContent = `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(
				seconds
			)}`;
		}, 1000);
	});
};

timer(deadline);
