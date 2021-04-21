/* eslint-disable max-classes-per-file */
import { Bounds } from '@jeng/geom';
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
	'T' | 't'
	;

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
};

// https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths

export class GraphicsStringStream {
	private path = '';
	private command: StringCommand | null = null;
	private readonly buffer = [0, 0, 0, 0, 0, 0];
	private readonly commandRegex = /[MmLlHhVvCcSsQqTt]/g;
	private readonly numberRegex = /[-+]?[\d.]+/g;

	setPath(path: string) {
		this.path = path;
		this.commandRegex.lastIndex = 0;
	}

	getCommand(): StringCommand | null {
		return this.command;
	}

	getBuffer(): number[] {
		return this.buffer;
	}

	readNext() {
		const commandMatch = this.commandRegex.exec(this.path);
		if (commandMatch) {
			this.command = commandMatch[0] as StringCommand;
			const count = NUMBERS_COUNT[this.command];
			this.numberRegex.lastIndex = commandMatch.index;
			for (let i = 0; i < count; i++) {
				const numberMatch = this.numberRegex.exec(this.path);
				if (numberMatch) {
					this.buffer[i] = parseFloat(numberMatch[0]);
				} else {
					break;
				}
			}
		} else {
			this.command = null;
		}
	}
}

export class GraphicsStringReader {
	private stream = new GraphicsStringStream();
	private command: PathCommand = { type: 'moveTo' };
	private commandExists = false;
	private lastX = 0;
	private lastY = 0;
	private lastCX = 0;
	private lastCY = 0;

	setPath(path: string) {
		this.stream.setPath(path);
		this.lastX = 0;
		this.lastY = 0;
		this.lastCX = 0;
		this.lastCY = 0;
		this.commandExists = false;
	}

	getCommand(): PathCommand | null {
		return this.commandExists ? this.command : null;
	}

	readNext(): boolean {
		this.stream.readNext();
		this.parse();
		return this.commandExists;
	}

	private parse() {
		const command = this.stream.getCommand();
		this.commandExists = !!command;
		if (!this.commandExists) {
			return;
		}

		const buffer = this.stream.getBuffer();

		const [
			e0, e1,
			e2, e3,
			e4, e5,
		] = buffer;

		switch (command) {
			case 'M': {
				this.command.type = 'moveTo';
				const moveTo = this.command as MoveTo;
				moveTo.x = e0;
				moveTo.y = e1;
				this.lastX = moveTo.x;
				this.lastY = moveTo.y;
			} break;

			case 'm': {
				this.command.type = 'moveTo';
				const moveTo = this.command as MoveTo;
				moveTo.x = e0 + this.lastX;
				moveTo.y = e1 + this.lastY;
				this.lastX = moveTo.x;
				this.lastY = moveTo.y;
			} break;

			case 'L': {
				this.command.type = 'lineTo';
				const lineTo = this.command as LineTo;
				lineTo.x = e0;
				lineTo.y = e1;
				this.lastX = lineTo.x;
				this.lastY = lineTo.y;
			} break;

			case 'l': {
				this.command.type = 'lineTo';
				const lineTo = this.command as LineTo;
				lineTo.x = e0 + this.lastX;
				lineTo.y = e1 + this.lastY;
				this.lastX = lineTo.x;
				this.lastY = lineTo.y;
			} break;

			case 'H': {
				this.command.type = 'lineTo';
				const lineTo = this.command as LineTo;
				lineTo.x = e0;
				lineTo.y = this.lastY;
				this.lastX = lineTo.x;
			} break;

			case 'h': {
				this.command.type = 'lineTo';
				const lineTo = this.command as LineTo;
				lineTo.x = e0 + this.lastX;
				lineTo.y = this.lastY;
				this.lastX = lineTo.x;
			} break;

			case 'V': {
				this.command.type = 'lineTo';
				const lineTo = this.command as LineTo;
				lineTo.x = this.lastX;
				lineTo.y = e0;
				this.lastY = lineTo.y;
			} break;

			case 'v': {
				this.command.type = 'lineTo';
				const lineTo = this.command as LineTo;
				lineTo.x = this.lastX;
				lineTo.y = e0 + this.lastY;
				this.lastY = lineTo.y;
			} break;

			case 'C': {
				this.command.type = 'cubicCurveTo';
				const cubicCurveTo = this.command as CubicCurveTo;

				cubicCurveTo.cx = e0;
				cubicCurveTo.cy = e1;
				cubicCurveTo.sx = e2;
				cubicCurveTo.sy = e3;
				cubicCurveTo.x = e4;
				cubicCurveTo.y = e5;

				this.lastCX = cubicCurveTo.x - (cubicCurveTo.sx - cubicCurveTo.x);
				this.lastCY = cubicCurveTo.y - (cubicCurveTo.sy - cubicCurveTo.y);
				this.lastX = cubicCurveTo.x;
				this.lastY = cubicCurveTo.y;
			} break;

			case 'c': {
				this.command.type = 'cubicCurveTo';
				const cubicCurveTo = this.command as CubicCurveTo;

				cubicCurveTo.cx = e0 + this.lastX;
				cubicCurveTo.cy = e1 + this.lastY;
				cubicCurveTo.sx = e2 + this.lastX;
				cubicCurveTo.sy = e3 + this.lastY;
				cubicCurveTo.x = e4 + this.lastX;
				cubicCurveTo.y = e5 + this.lastY;

				this.lastCX = cubicCurveTo.x - (cubicCurveTo.sx - cubicCurveTo.x);
				this.lastCY = cubicCurveTo.y - (cubicCurveTo.sy - cubicCurveTo.y);
				this.lastX = cubicCurveTo.x;
				this.lastY = cubicCurveTo.y;
			} break;

			case 'S': {
				this.command.type = 'cubicCurveTo';
				const cubicCurveTo = this.command as CubicCurveTo;

				cubicCurveTo.cx = this.lastCX;
				cubicCurveTo.cy = this.lastCY;
				cubicCurveTo.sx = e0;
				cubicCurveTo.sy = e1;
				cubicCurveTo.x = e2;
				cubicCurveTo.y = e3;

				this.lastCX = cubicCurveTo.x - (cubicCurveTo.sx - cubicCurveTo.x);
				this.lastCY = cubicCurveTo.y - (cubicCurveTo.sy - cubicCurveTo.y);
				this.lastX = cubicCurveTo.x;
				this.lastY = cubicCurveTo.y;
			} break;

			case 's': {
				this.command.type = 'cubicCurveTo';
				const cubicCurveTo = this.command as CubicCurveTo;

				cubicCurveTo.cx = this.lastCX;
				cubicCurveTo.cy = this.lastCY;
				cubicCurveTo.sx = e0 + this.lastX;
				cubicCurveTo.sy = e1 + this.lastY;
				cubicCurveTo.x = e2 + this.lastX;
				cubicCurveTo.y = e3 + this.lastY;

				this.lastCX = cubicCurveTo.x - (cubicCurveTo.sx - cubicCurveTo.x);
				this.lastCY = cubicCurveTo.y - (cubicCurveTo.sy - cubicCurveTo.y);
				this.lastX = cubicCurveTo.x;
				this.lastY = cubicCurveTo.y;
			} break;

			case 'Q': {
				this.command.type = 'curveTo';
				const curveTo = this.command as CurveTo;

				curveTo.cx = e0;
				curveTo.cy = e1;
				curveTo.x = e2;
				curveTo.y = e3;

				this.lastCX = curveTo.x - (curveTo.cx - curveTo.x);
				this.lastCY = curveTo.y - (curveTo.cy - curveTo.y);
				this.lastX = curveTo.x;
				this.lastY = curveTo.y;
			} break;

			case 'q': {
				this.command.type = 'curveTo';
				const curveTo = this.command as CurveTo;

				curveTo.cx = e0 + this.lastX;
				curveTo.cy = e1 + this.lastY;
				curveTo.x = e2 + this.lastX;
				curveTo.y = e3 + this.lastY;

				this.lastCX = curveTo.x - (curveTo.cx - curveTo.x);
				this.lastCY = curveTo.y - (curveTo.cy - curveTo.y);
				this.lastX = curveTo.x;
				this.lastY = curveTo.y;
			} break;

			case 'T': {
				this.command.type = 'curveTo';
				const curveTo = this.command as CurveTo;

				curveTo.cx = this.lastCX;
				curveTo.cy = this.lastCY;
				curveTo.x = e0;
				curveTo.y = e1;

				this.lastCX = curveTo.x - (curveTo.cx - curveTo.x);
				this.lastCY = curveTo.y - (curveTo.cy - curveTo.y);
				this.lastX = curveTo.x;
				this.lastY = curveTo.y;
			} break;

			case 't': {
				this.command.type = 'curveTo';
				const curveTo = this.command as CurveTo;

				curveTo.cx = this.lastCX;
				curveTo.cy = this.lastCY;
				curveTo.x = e0 + this.lastX;
				curveTo.y = e1 + this.lastY;

				this.lastCX = curveTo.x - (curveTo.cx - curveTo.x);
				this.lastCY = curveTo.y - (curveTo.cy - curveTo.y);
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
		while (reader.readNext()) {
			const command = reader.getCommand();
			if (command) {
				PathCommand.calculateBounds(command, bounds);
			}
		}
	}
}
