import { Bounds } from '@e2d/geom';

export type PathCommand = 'moveTo' | 'lineTo' | 'curveTo' | 'cubicCurveTo' | 'rectangle' | 'circle';

export interface GraphicsPath {
	type: PathCommand;
	x?: number;
	y?: number;
	width?: number;
	height?: number;
	radius?: number;
	data?: number[];
}

export namespace GraphicsPath {
	export function calculateBounds(path: GraphicsPath, bounds: Bounds) {
		const { x, y, data } = path;

		if (x !== undefined) {
			Bounds.testX(bounds, x);
		}

		if (y !== undefined) {
			Bounds.testX(bounds, y);
		}

		if (data !== undefined) {
			for (let i = 0; i < data.length; i += 2) {
				const dataX = data[i];
				const dataY = data[i + 1];
				Bounds.test(bounds, dataX, dataY);
			}
		}
	}
}
