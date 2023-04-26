const promise = new Promise((resolve, reject) => {
	const canFulfill = Math.random() > 0.5;

	setTimeout(() => {
		if (canFulfill) return resolve("fulfilled");
		else {
			reject("rejecte");
		}
	}, 2000);
});

promise
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		console.log("i wll be fullfiled ib any case");
	});

//  //////////////////

const makePromise = () => {
	return new Promise((resolve, reject) => {
		const halfOfChange = Math.random() > 0.5;
		if (halfOfChange) resolve("yes");
		reject("no");
	});
};

makePromise()
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.log(error);
	});
