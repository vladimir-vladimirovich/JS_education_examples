//-------------------------Promises timeout example-------------------------

function delay(ms) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			console.log('Initial timeout');
			resolve(ms);
		}, ms);
	})
};

function timeOutPromise (ms) {
	return new Promise (function(resolve) {
		setTimeout(function() {
			console.log('delay: ' + (ms + 500));
			resolve(ms + 500);
		}, ms + 500);
	})
};

delay(1500)
	.then(result => timeOutPromise(result))
	.then(result => timeOutPromise(result))

//-------------------------Async timeout example-------------------------
async function asyncTimeout() {
	console.log("1");
	let res1 = await timeOutPromise(1000);
	let res2 = await timeOutPromise(res1);
	await timeOutPromise(res2);
	console.log("2");
};

asyncTimeout();
console.log("3");

