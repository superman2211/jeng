import { Point } from './point';

export interface Rectangle {
	x: number;
	y: number;
	width: number;
	height: number;
}

export namespace Rectangle {
	export function empty(): Rectangle {
		return {
			x: 0, y: 0, width: 0, height: 0,
		};
	}

	export function setEmpty(rectangle: Rectangle) {
		rectangle.x = 0;
		rectangle.y = 0;
		rectangle.width = 0;
		rectangle.height = 0;
	}

	export function intersection(source: Rectangle, target: Rectangle, result: Rectangle) {
		let {
			x, y, width, height,
		} = source;

		const left = target.x;
		const top = target.y;
		const right = target.x + target.width;
		const bottom = target.y + target.height;

		if (x < left) {
			width -= left - x;
			x = left;
		}
		if (x + width > right) {
			width = right - x;
		}

		if (y < top) {
			height -= top - y;
			y = top;
		}
		if (y + height > bottom) {
			height = bottom - y;
		}

		if (width < 0) {
			width = 0;
		}

		if (height < 0) {
			height = 0;
		}

		result.x = x;
		result.y = y;
		result.width = width;
		result.height = height;
	}

	export function isEmpty(rectangle: Rectangle): boolean {
		return rectangle.width === 0 || rectangle.height === 0;
	}

	export function contains(rectangle: Rectangle, point: Point): boolean {
		return rectangle.x < point.x
			&& rectangle.x + rectangle.width > point.x
			&& rectangle.y < point.y
			&& rectangle.y + rectangle.height > point.y;
	}

	export function round(rectangle: Rectangle) {
		rectangle.x = Math.round(rectangle.x);
		rectangle.y = Math.round(rectangle.y);
		rectangle.width = Math.round(rectangle.width);
		rectangle.height = Math.round(rectangle.height);
	}
}
