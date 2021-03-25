async function waitFor(condition, maxTime = 5000) {
	let tryCount = 0;
	let conditionVal;
	while(!(conditionVal = condition())) {
		tryCount++;
		if (tryCount * 100 >= maxTime) throw new Error("Condition was not true in " + maxTime + "ms");
		await new Promise(r => setTimeout(r, 100));
	}
	return conditionVal;
}

async function waitForElem(selector, timeout = 5000) {
	try {
		return await waitFor(() => document.querySelector(selector), timeout)
	} catch {
		throw new Error(`Failed to find element with selector "${selector}" within ${timeout}ms`)
	}
}
