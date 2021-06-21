const numberOfPairs = (sockPile) => {
	let totalPairs = 0;
	const sockArray = new Map();

	if (!Array.isArray(sockPile)) {
		throw new Error('Sock pile is not an expected type.');
	}

	sockPile.map(sock => {
		if (!isNaN(sock)) {
			if (sockArray[sock] === 1) {
				totalPairs++;
				sockArray[sock] = 0;
			} else {
				sockArray[sock] = !sockArray[sock] ? 1 : 0;
			}
		}
	});

	return totalPairs;
}

const socks = [1, 2, 1, 2, 'a', 1, 3, 2, 'a'];

console.log(numberOfPairs(socks));
