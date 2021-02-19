/* eslint-disable max-classes-per-file */
import { Bounds } from '@e2d/geom';
import {
	CubicCurveTo, CurveTo, LineTo, MoveTo, PathCommand,
} from './path';

type StringCommand =
	'M' | 'm' |
	'L' | 'l' |
	'H' | 'h' |
	'V' | 'v' |
	'C' | 'c' |
	'S' | 's' |
	'Q' | 'q' |
	'T' | 't' |
	'Z' | 'z'
;

const TEST_COMMAND = /[MmLlHhVvCcSsQqTtAaZz]/;
const TEST_SPACE = /[\s,]/;
const TEST_NUMBER = /[-+.\d]/;

// https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths

export class GraphicsStringStream {
	private path = '';
	private position = 0;
	private command: StringCommand | null = null;
	private buffer: number[] = [];
	private size: number = 0;

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

	getSize(): number {
		return this.size;
	}

	getBuffer(): number[] {
		return this.buffer;
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
		this.size = 0;
		let number = '';
		while (this.position < this.path.length) {
			const char = this.path[this.position];
			if (TEST_NUMBER.test(char)) {
				number += char;
			} else if (TEST_SPACE.test(char)) {
				this.buffer[this.size++] = parseFloat(number);
				number = '';
			} else if (TEST_COMMAND.test(char)) {
				break;
			}
			this.position++;
		}
		if (number) {
			this.buffer[this.size++] = parseFloat(number);
		}
	}
}

export class GraphicsStringReader {
	private stream = new GraphicsStringStream();
	private command: PathCommand = { type: 'moveTo' };
	private commandExists = false;
	private lastX = 0;
	private lastY = 0;

	setPath(path: string) {
		this.stream.setPath(path);
		this.lastX = 0;
		this.lastY = 0;
		this.commandExists = false;
	}

	hasData() {
		return this.stream.hasData();
	}

	getCommand(): PathCommand | null {
		return this.commandExists ? this.command : null;
	}

	readNext() {
		this.stream.readNext();
		this.parse();
	}

	private parse() {
		const command = this.stream.getCommand();

		this.commandExists = !!command;

		if (!this.commandExists) {
			return;
		}

		const buffer = this.stream.getBuffer();

		const [
			x0, y0,
			x1, y1,
			x2, y2,
		] = buffer;

		let cx = 0;
		let cy = 0;

		switch (command) {
			case 'M': {
				this.command.type = 'moveTo';
				const moveTo = this.command as MoveTo;
				moveTo.x = x0;
				moveTo.y = y0;
				this.lastX = moveTo.x;
				this.lastY = moveTo.y;
			} break;

			case 'm': {
				this.command.type = 'moveTo';
				const moveTo = this.command as MoveTo;
				moveTo.x = x0 + this.lastX;
				moveTo.y = y0 + this.lastY;
				this.lastX = moveTo.x;
				this.lastY = moveTo.y;
			} break;

			case 'L': {
				this.command.type = 'lineTo';
				const lineTo = this.command as LineTo;
				lineTo.x = x0;
				lineTo.y = y0;
				this.lastX = lineTo.x;
				this.lastY = lineTo.y;
			} break;

			case 'l': {
				this.command.type = 'lineTo';
				const lineTo = this.command as LineTo;
				lineTo.x = x0 + this.lastX;
				lineTo.y = y0 + this.lastY;
				this.lastX = lineTo.x;
				this.lastY = lineTo.y;
			} break;

			case 'H': {
				this.command.type = 'lineTo';
				const lineTo = this.command as LineTo;
				lineTo.x = x0;
				lineTo.y = this.lastY;
				this.lastX = lineTo.x;
			} break;

			case 'h': {
				this.command.type = 'lineTo';
				const lineTo = this.command as LineTo;
				lineTo.x = x0 + this.lastX;
				lineTo.y = this.lastY;
				this.lastX = lineTo.x;
			} break;

			case 'V': {
				this.command.type = 'lineTo';
				const lineTo = this.command as LineTo;
				lineTo.x = this.lastX;
				lineTo.y = x0;
				this.lastY = lineTo.y;
			} break;

			case 'v': {
				this.command.type = 'lineTo';
				const lineTo = this.command as LineTo;
				lineTo.x = this.lastX;
				lineTo.y = x0 + this.lastY;
				this.lastY = lineTo.y;
			} break;

			case 'C': {
				this.command.type = 'cubicCurveTo';
				const cubicCurveTo = this.command as CubicCurveTo;

				cubicCurveTo.cx = x0;
				cubicCurveTo.cy = y0;
				cubicCurveTo.sx = x1;
				cubicCurveTo.sy = y1;
				cubicCurveTo.x = x2;
				cubicCurveTo.y = y2;

				cx = cubicCurveTo.x - (cubicCurveTo.sx - cubicCurveTo.x);
				cy = cubicCurveTo.y - (cubicCurveTo.sy - cubicCurveTo.y);
				this.lastX = cubicCurveTo.x;
				this.lastY = cubicCurveTo.y;
			} break;

			case 'c': {
				this.command.type = 'cubicCurveTo';
				const cubicCurveTo = this.command as CubicCurveTo;

				cubicCurveTo.cx = x0 + this.lastX;
				cubicCurveTo.cy = y0 + this.lastY;
				cubicCurveTo.sx = x1 + this.lastX;
				cubicCurveTo.sy = y1 + this.lastY;
				cubicCurveTo.x = x2 + this.lastX;
				cubicCurveTo.y = y2 + this.lastY;

				cx = cubicCurveTo.x - (cubicCurveTo.sx - cubicCurveTo.x);
				cy = cubicCurveTo.y - (cubicCurveTo.sy - cubicCurveTo.y);
				this.lastX = cubicCurveTo.x;
				this.lastY = cubicCurveTo.y;
			} break;

			case 'S': {
				this.command.type = 'cubicCurveTo';
				const cubicCurveTo = this.command as CubicCurveTo;

				cubicCurveTo.cx = cx;
				cubicCurveTo.cy = cy;
				cubicCurveTo.sx = x0;
				cubicCurveTo.sy = y0;
				cubicCurveTo.x = x1;
				cubicCurveTo.y = y1;

				cx = cubicCurveTo.x - (cubicCurveTo.sx - cubicCurveTo.x);
				cy = cubicCurveTo.y - (cubicCurveTo.sy - cubicCurveTo.y);
				this.lastX = cubicCurveTo.x;
				this.lastY = cubicCurveTo.y;
			} break;

			case 's': {
				this.command.type = 'cubicCurveTo';
				const cubicCurveTo = this.command as CubicCurveTo;

				cubicCurveTo.cx = cx;
				cubicCurveTo.cy = cy;
				cubicCurveTo.sx = x0 + this.lastX;
				cubicCurveTo.sy = y0 + this.lastY;
				cubicCurveTo.x = x1 + this.lastX;
				cubicCurveTo.y = y1 + this.lastY;

				cx = cubicCurveTo.x - (cubicCurveTo.sx - cubicCurveTo.x);
				cy = cubicCurveTo.y - (cubicCurveTo.sy - cubicCurveTo.y);
				this.lastX = cubicCurveTo.x;
				this.lastY = cubicCurveTo.y;
			} break;

			case 'Q': {
				this.command.type = 'curveTo';
				const curveTo = this.command as CurveTo;

				curveTo.cx = x0;
				curveTo.cy = y0;
				curveTo.x = x1;
				curveTo.y = y1;

				cx = curveTo.x - (curveTo.cx - curveTo.x);
				cy = curveTo.y - (curveTo.cy - curveTo.y);
				this.lastX = curveTo.x;
				this.lastY = curveTo.y;
			} break;

			case 'q': {
				this.command.type = 'curveTo';
				const curveTo = this.command as CurveTo;

				curveTo.cx = x0 + this.lastX;
				curveTo.cy = y0 + this.lastY;
				curveTo.x = x1 + this.lastX;
				curveTo.y = y1 + this.lastY;

				cx = curveTo.x - (curveTo.cx - curveTo.x);
				cy = curveTo.y - (curveTo.cy - curveTo.y);
				this.lastX = curveTo.x;
				this.lastY = curveTo.y;
			} break;

			case 'T': {
				this.command.type = 'curveTo';
				const curveTo = this.command as CurveTo;

				curveTo.cx = cx;
				curveTo.cy = cy;
				curveTo.x = x0;
				curveTo.y = y0;

				cx = curveTo.x - (curveTo.cx - curveTo.x);
				cy = curveTo.y - (curveTo.cy - curveTo.y);
				this.lastX = curveTo.x;
				this.lastY = curveTo.y;
			} break;

			case 't': {
				this.command.type = 'curveTo';
				const curveTo = this.command as CurveTo;

				curveTo.cx = cx;
				curveTo.cy = cy;
				curveTo.x = x0 + this.lastX;
				curveTo.y = y0 + this.lastY;

				cx = curveTo.x - (curveTo.cx - curveTo.x);
				cy = curveTo.y - (curveTo.cy - curveTo.y);
				this.lastX = curveTo.x;
				this.lastY = curveTo.y;
			} break;

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
			const command = reader.getCommand();
			if (command) {
				PathCommand.calculateBounds(command, bounds);
			}
		}
	}
}
