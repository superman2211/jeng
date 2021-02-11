/* eslint-disable max-classes-per-file */
import { Bounds } from '@e2d/geom';
import { PathCommand } from './path';

type StringCommand =
	'M' | 'm' |
	'L' | 'l' |
	'H' | 'h' |
	'V' | 'v' |
	'C' | 'c' |
	'S' | 's' |
	'Q' | 'q' |
	'T' | 't' |
	'A' | 'a' |
	'Z' | 'z'
;

const TEST_COMMAND = /[MmLlHhVvCcSsQqTtAaZz]/;
const TEST_NUMBER = /[-+.\d]/;

// https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
export class GraphicsStringStream {
	private path = '';
	private position = 0;
	private command: StringCommand | null = null;
	private numbers: number[] = [];

	setPath(path: string) {
		this.path = path;
		this.position = 0;
	}

	hasData(): boolean {
		return this.position < this.path.length;
	}

	getCommand(): StringCommand | null {
		return this.command;
	}

	getNumbers(): number[] {
		return this.numbers;
	}

	readNext() {
		this.readCommand();
		this.readNumbers();
	}

	private readCommand() {
		this.command = null;
		while (this.position < this.path.length) {
			const command = this.path[this.position];
			if (TEST_COMMAND.test(command)) {
				this.command = command as StringCommand;
			}
			this.position++;
		}
	}

	private readNumbers() {
		let count = 0;
		let number = '';
		while (this.position < this.path.length) {
			const char = this.path[this.position];
			if (TEST_NUMBER.test(char)) {
				number += char;
			} else if (TEST_COMMAND.test(char)) {
				this.numbers[count++] = parseFloat(number);
				number = '';
			}
			this.position++;
		}
		if (number) {
			this.numbers[count++] = parseFloat(number);
		}
		this.numbers.length = count;
	}
}

export class GraphicsStringReader {
	private stream = new GraphicsStringStream();
	private command: PathCommand | null = null;
	private numbers: number[] = [];
	private lastX = 0;
	private lastY = 0;

	setPath(path: string) {
		this.stream.setPath(path);
		this.command = null;
		this.lastX = 0;
		this.lastY = 0;
	}

	hasData() {
		return this.stream.hasData();
	}

	getCommand(): PathCommand | null {
		return this.command;
	}

	getNumbers(): number[] {
		return this.numbers;
	}

	readNext() {
		this.stream.readNext();
		this.parse();
	}

	private parse() {
		const command = this.stream.getCommand();

		if (!command) {
			this.command = null;
			return;
		}

		const numbers = this.stream.getNumbers();

		const [
			x, y,
			x1, y1,
			x2, y2,
		] = numbers;

		let tx = 0;
		let ty = 0;
		let tx1 = 0;
		let ty1 = 0;
		let tx2 = 0;
		let ty2 = 0;

		let cx = 0;
		let cy = 0;

		switch (command) {
			case 'M':
				this.command = 'moveTo';
				this.numbers[0] = x;
				this.numbers[1] = y;
				this.numbers.length = 2;
				this.lastX = x;
				this.lastY = y;
				break;

			case 'm':
				this.command = 'moveTo';
				tx = x + this.lastX;
				ty = y + this.lastY;
				this.numbers[0] = tx;
				this.numbers[1] = ty;
				this.numbers.length = 2;
				this.lastX = tx;
				this.lastY = ty;
				break;

			case 'L':
				this.command = 'lineTo';
				this.numbers[0] = x;
				this.numbers[1] = y;
				this.numbers.length = 2;
				this.lastX = x;
				this.lastY = y;
				break;

			case 'l':
				this.command = 'lineTo';
				tx = x + this.lastX;
				ty = y + this.lastY;
				this.numbers[0] = tx;
				this.numbers[1] = ty;
				this.numbers.length = 2;
				this.lastX = tx;
				this.lastY = ty;
				break;

			case 'H':
				this.command = 'lineTo';
				this.numbers[0] = x;
				this.numbers[1] = this.lastY;
				this.numbers.length = 2;
				this.lastX = x;
				break;

			case 'h':
				this.command = 'lineTo';
				tx = x + this.lastX;
				this.numbers[0] = tx;
				this.numbers[1] = this.lastY;
				this.numbers.length = 2;
				this.lastX = tx;
				break;

			case 'V':
				this.command = 'lineTo';
				this.numbers[0] = this.lastX;
				this.numbers[1] = y;
				this.numbers.length = 2;
				this.lastY = y;
				break;

			case 'v':
				this.command = 'lineTo';
				ty = y + this.lastY;
				this.numbers[0] = this.lastX;
				this.numbers[1] = ty;
				this.numbers.length = 2;
				this.lastY = ty;
				break;

			case 'C':
				this.command = 'cubicCurveTo';

				this.numbers[0] = x;
				this.numbers[1] = y;
				this.numbers[2] = x1;
				this.numbers[3] = y1;
				this.numbers[4] = x2;
				this.numbers[5] = y2;
				this.numbers.length = 6;

				cx = x1;
				cy = y1;
				this.lastX = x2;
				this.lastY = y2;
				break;

			case 'c':
				this.command = 'cubicCurveTo';

				tx = x + this.lastX;
				ty = y + this.lastY;
				tx1 = x1 + this.lastX;
				ty1 = y1 + this.lastY;
				tx2 = x2 + this.lastX;
				ty2 = y2 + this.lastY;

				this.numbers[0] = tx;
				this.numbers[1] = ty;
				this.numbers[2] = tx1;
				this.numbers[3] = ty1;
				this.numbers[4] = tx2;
				this.numbers[5] = ty2;
				this.numbers.length = 6;

				cx = tx1;
				cy = ty1;
				this.lastX = tx2;
				this.lastY = ty2;
				break;

			case 'S':
				this.command = 'cubicCurveTo';
				this.numbers[0] = cx;
				this.numbers[1] = cy;
				this.numbers[2] = x;
				this.numbers[3] = y;
				this.numbers[4] = x1;
				this.numbers[5] = y1;
				this.numbers.length = 6;

				cx = x;
				cy = y;
				this.lastX = x1;
				this.lastY = y1;
				break;

			case 's':
				this.command = 'cubicCurveTo';
				tx = cx + this.lastX;
				ty = cy + this.lastY;
				tx1 = x + this.lastX;
				ty1 = y + this.lastY;
				tx2 = x1 + this.lastX;
				ty2 = y1 + this.lastY;

				this.numbers[0] = tx;
				this.numbers[1] = ty;
				this.numbers[2] = tx1;
				this.numbers[3] = ty1;
				this.numbers[4] = tx2;
				this.numbers[5] = ty2;
				this.numbers.length = 6;

				cx = tx1;
				cy = ty1;
				this.lastX = tx2;
				this.lastY = ty2;
				break;

			default:
				break;
		}
	}
}

const reader = new GraphicsStringReader();

export namespace GraphicsString {
	export function calculateBounds(path: string, bounds: Bounds) {
		reader.setPath(path);
		while (reader.hasData()) {
			reader.readNext();
			const numbers = reader.getNumbers();
			for (let i = 0; i < numbers.length; i += 2) {
				const x = numbers[i];
				const y = numbers[i + 1];
				Bounds.test(bounds, x, y);
			}
		}
	}
}
