function qsa(selector) {
	return document.querySelectorAll(selector);
}

function qs(selector) {
	return document.querySelector(selector);
}

async function waitForElement(selector, timeout, period) {
	var promise = new Promise(function(resolve, reject) {
		let period = period || 200;
		let loopIdx = 0;
		let checkElem = setInterval(function() {
			let elem = qs(selector);
			if (elem != null) {
				resolve(elem);
				clearInterval(checkElem);
			} else {
				if (timeout && (period * loopIdx >= timeout)) {
					reject();
					clearInterval(checkElem);
				}
				loopIdx++;
			}
		}, period);
	});
	return promise;
}