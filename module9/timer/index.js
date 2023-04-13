const refs = {
	clockFace: document.querySelector(".clock-face"),
	startBtn: document.querySelector(".start-btn"),
	stopBtn: document.querySelector(".stop-btn"),
	resetBtn: document.querySelector(".reset-btn"),
};

class Timer {
	constructor({ onTick }) {
		this.intervalId = null;
		this.isActive = false;
		this.onTick = onTick;
		this.init();
	}
	init() {
		this.onTick(this.getTimeComponents(0));
	}
	start() {
		if (this.isActive) return;

		const startTime = Date.now();
		this.isActive = true;

		this.intervalId = setInterval(() => {
			const currentTime = Date.now();
			const deltaTime = currentTime - startTime;
			const time = this.getTimeComponents(deltaTime);

			this.onTick(time);
		}, 1000);
	}
	stop() {
		clearInterval(this.intervalId);
		this.isActive = false;
	}
	reset() {
		this.onTick(this.getTimeComponents(0));
		this.stop();
	}
	pad(value) {
		return String(value).padStart(2, "0");
	}
	getTimeComponents(time) {
		const hours = this.pad(
			Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
		);
		const minuts = this.pad(
			Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
		);
		const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));

		return { hours, minuts, seconds };
	}
}

const updateClockFace = ({ hours, minuts, seconds }) => {
	refs.clockFace.textContent = `${hours}:${minuts}:${seconds}`;
};
const timer = new Timer({
	onTick: updateClockFace,
});

refs.startBtn.addEventListener("click", timer.start.bind(timer));
refs.stopBtn.addEventListener("click", timer.stop.bind(timer));
refs.resetBtn.addEventListener("click", timer.reset.bind(timer));
