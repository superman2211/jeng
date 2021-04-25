import { EllipseData } from '../data/data';

const PI_2 = Math.PI * 2;

export function applyEllipse(data: EllipseData, hasFill: boolean, context: CanvasRenderingContext2D): boolean {
	const {
		x = 0, y = 0,
		radius = 0, radiusX, radiusY,
	} = data;

	const rx = radiusX ?? radius;
	const ry = radiusY ?? radius;

	if (rx === 0 || ry === 0) {
		return false;
	}

	context.beginPath();

	context.ellipse(x, y, rx, ry, 0, 0, PI_2);

	if (hasFill) {
		context.closePath();
	}
	return true;
}
