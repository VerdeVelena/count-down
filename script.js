setInterval(timer, 1000);
const defaultDate = " 1 january 2023";
let timeDown = "1 january 2023";

document.querySelector(".btn").addEventListener("click", () => {
	const newVal = document.querySelector(".input").value;
	timeDown = newVal;
});

document.querySelector(".input").addEventListener("keyup", (e) => {
	if (e.code === "Enter") {
		const newVal = document.querySelector(".input").value;
		timeDown = newVal;
	}
});

const daysEl = document.querySelector(".days");
const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
function timer() {
	const date = new Date(timeDown);
	if (isNaN(date)) {
		timeDown = defaultDate;
		timer();
		return;
	}
	const currentDate = new Date();
	const difDate = date - currentDate;

	const days = Math.floor(difDate / 1000 / 60 / 60 / 24);
	const hours = Math.floor(difDate / 1000 / 60 / 60 - days * 24);
	const minutes = Math.floor(difDate / 1000 / 60 - days * 24 * 60 - hours * 60);
	const seconds = Math.floor(
		difDate / 1000 - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60
	);

	daysEl.textContent = days;
	hoursEl.textContent = formatValue(hours);
	minutesEl.textContent = formatValue(minutes);
	secondsEl.textContent = formatValue(seconds);
}

function formatValue(val) {
	if (val < 10) {
		return "0" + val;
	}
	return val;
}
