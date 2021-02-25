import { Point } from './point';

export interface Rectangle {
	x: number;
	y: number;
	width: number;
	height: number;
}

export namespace Rectangle {
	export function contains(rectangle: Rectangle, point: Point): boolean {
		return rectangle.x < point.x
			&& rectangle.x + rectangle.width > point.x
			&& rectangle.y < point.y
			&& rectangle.y + rectangle.height > point.y;
	}

	export function isEmpty(rectangle: Rectangle): boolean {
		return rectangle.width === 0 || rectangle.height === 0;
	}
}
