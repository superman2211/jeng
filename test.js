const path1 = 'M 10 10.00 H 90.0000    V 90 H   10 L 11 10   K';
const path2 = 'M 10 10 h 80 v 80 h -80 Z';

const commandRegex = /[MmLlHhVvCcSsQqTtAaZz]/g;
const numberRegex = /[-+\d.]+/g;

const NUMBERS_COUNT = {
	M: 2,
	m: 2,
	L: 2,
	l: 2,
	H: 1,
	h: 1,
	V: 1,
	v: 1,
	C: 6,
	c: 6,
	S: 4,
	s: 4,
	Q: 4,
	q: 4,
	T: 2,
	t: 2,
	Z: 0,
	z: 0,
};

function readCommand(path) {
	const commandMatch = commandRegex.exec(path);
	if (commandMatch) {
		const command = commandMatch[0];
		const count = NUMBERS_COUNT[command];
		const buffer = [];
		numberRegex.lastIndex = commandMatch.index;
		for (let i = 0; i < count; i++) {
			const numberMatch = numberRegex.exec(path);
			if (numberMatch) {
				buffer[i] = parseFloat(numberMatch[0]);
			} else {
				break;
			}
		}
		return { command, buffer };
	}
	return null;
}

function readPath(path) {
	commandRegex.lastIndex = 0;

	console.log('readPath', path);
	let object;
	while ((object = readCommand(path)) !== null) {
		console.log(object);
	}
}

readPath(path1);
readPath(path1);
readPath(path2);
readPath(path1);
