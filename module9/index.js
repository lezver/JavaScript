const h1Ref = document.getElementsByTagName("h1");

const button = document.createElement("button");
button.classList.add("btn");
button.textContent = "Click me";

h1Ref[0].insertAdjacentElement("afterend", button);

const onClick = () => {
	setTimeout(() => alert("I love async JS!"), 2000);
};

button.addEventListener("click", onClick);

const greet = () => console.log("Hello");
const timeId = setTimeout(greet, 3000);

clearTimeout(timeId);

const button1 = document.createElement("button");
button1.classList.add("btn1");
button1.textContent = "START";

const button2 = document.createElement("button");
button2.classList.add("btn2");
button2.textContent = "STOP";
2;

button.after(button1, button2);

let newTimerId = null;

button1.addEventListener(
	"click",
	() =>
		(newTimerId = setInterval(() => {
			console.log(`I love async JS! ${Math.round(Math.random() * 100)}`);
		}, 1000))
);
button2.addEventListener("click", () => {
	clearInterval(newTimerId);
	console.log(`Interval with id ${newTimerId} has stopped`);
});

console.log(new Date());

console.log(new Date().toString());

console.log(typeof new Date());

console.log(typeof new Date().toString());

console.log(new Date(0));

console.log(new Date(1000));

console.log(new Date().getTime());

const timeMeetingDate = new Date("June 3, 1994");

console.log(timeMeetingDate);

const presiceTimeMeetingDate = new Date("Apriel 12, 1994 12:12:12");

console.log(presiceTimeMeetingDate);

console.log(new Date(2022, 1, 24, 4, 15, 0));

console.log(new Date().getDate());
console.log(new Date().getUTCDate());

console.log(new Date().getDay());
console.log(new Date().getUTCDay());

console.log(new Date().getMonth());
console.log(new Date().getUTCMonth());

console.log(new Date().getFullYear());
console.log(new Date().getUTCFullYear());

console.log(new Date().getHours());
console.log(new Date().getUTCHours());

console.log(new Date().getMinutes());
console.log(new Date().getUTCMinutes());

console.log(new Date().getSeconds());
console.log(new Date().getUTCSeconds());

console.log(new Date(5).getMilliseconds());
console.log(new Date(3).getUTCMilliseconds());

const date = new Date("March 16, 2030 14:25:00");

date.setMinutes(50);
// "Sat Mar 16 2030 14:50:00 GMT+0200"
console.log(date);

date.setFullYear(2040, 4, 8);
// "Tue May 08 2040 14:50:00 GMT+0300"

date.setUTCMilliseconds(1111);
console.log(date);

console.log(date.toTimeString());

console.log(date.toDateString());

console.log(date.toString());

// const isSuccess = true;
const isSuccess = false;

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (isSuccess) {
			resolve("Success! Value passed to resolve function");
		} else {
			reject("Error! passed to reject function");
		}
	}, 2000);
});

console.log("Before promise.then()");

promise.then(
	(value) => {
		console.log("onResolve call inside promise.then()");
		console.log(value);
	},
	(error) => {
		console.log("onReject call inside promise.then()");
		console.log(error);
	}
);

console.log("After promise.then()");

promise
	.then((value) => {
		console.log(value);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		console.log("Promise settled");
	});

const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(5);
	}, 1000);
});

promise1
	.then((value) => {
		return value * 2;
	})
	.then((value) => {
		return value * 3;
	})
	.then((value) => {
		return console.log(value * 10);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		console.log("Final Task");
	});

const fetchUserFromServer = (userName, onSuccess, onError) => {
	console.log(`Fetching data from ${userName}`);

	setTimeout(() => {
		const isSuccess = true;
		if (isSuccess) {
			onSuccess("success value");
		} else {
			onError("error");
		}
	}, 3000);
};

const onFetchSuccess = (user) => {
	console.log(user);
};

const onFetchErorr = (error) => {
	console.error(error);
};

fetchUserFromServer("mango", onFetchSuccess, onFetchErorr);
//  or
const fetchUserFromServer1 = (userName) => {
	return new Promise((resolve, reject) => {
		console.log(`Fetching data from ${userName}`);

		setTimeout(() => {
			const isSuccess = true;

			if (isSuccess) resolve("success value");
			else {
				reject("error");
			}
		}, 2000);
	});
};

fetchUserFromServer1("Mango")
	.then((user) => {
		console.log(user);
	})
	.catch((error) => {
		console.error(error);
	});

const makePromise = (text, delay) => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(text), delay);
	});
};

const promiseA = makePromise("Promise value A", 1000);
const promiseB = makePromise("Promise value B", 3000);

Promise.all([promiseA, promiseB])
	.then((value) => console.log(value))
	.catch((error) => console.log(error));

Promise.race([promiseA, promiseB])
	.then((value) => console.log(value))
	.catch((error) => console.log(error));

const makeGreeting = (guestName, onSucces, onError) => {
	if (guestName === "" || guestName === undefined)
		return onError("Guest name mast not be empty");
	onSucces(`Welcome ${guestName}`);
};

makeGreeting(
	"Mango",
	(greeting) => console.log(greeting),
	(error) => console.log(error)
);

const makeGreetingUpdate = (guestName) => {
	if (guestName === "" || guestName === undefined)
		return Promise.reject("Guest name mast not be empty");
	return Promise.resolve(`Welcome ${guestName}`);
};

makeGreetingUpdate("Ajax")
	.then((greeting) => console.log(greeting))
	.catch((error) => console.log(error));
