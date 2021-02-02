import { Bounds } from '@e2d/geom';
import { PathCommand } from './path';

export class GraphicsStringReader {
	private path = '';
	private position = 0;
	private command: PathCommand = 'moveTo';
	private data: number[] = [];

	setPath(path: string) {
		this.path = path;
		this.position = 0;
	}

	hasData(): boolean {
		return this.position < this.path.length;
	}

	getCommand() {
		return this.command;
	}

	getData() {
		return this.data;
	}

	readNext() {
		https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
	}
}

const reader = new GraphicsStringReader();

export namespace GraphicsString {
	export function calculateBounds(path: string, bounds: Bounds) {
		reader.setPath(path);

		while (reader.hasData()) {
			reader.readNext();
			const data = reader.getData();
			for (let i = 0; i < data.length; i += 2) {
				const dataX = data[i];
				const dataY = data[i + 1];
				Bounds.test(bounds, dataX, dataY);
			}
		}
	}
}
