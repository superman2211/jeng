import { Point } from './point';
import { Rectangle } from './rectangle';

export interface Bounds {
	minX: number,
	minY: number,
	maxX: number,
	maxY: number,
}

export namespace Bounds {
	export function empty(): Bounds {
		return {
			minX: Number.MAX_VALUE,
			minY: Number.MAX_VALUE,
			maxX: Number.MIN_VALUE,
			maxY: Number.MIN_VALUE,
		};
	}

	export function setEmpty(bounds: Bounds) {
		bounds.minX = Number.MAX_VALUE;
		bounds.minY = Number.MAX_VALUE;
		bounds.maxX = Number.MIN_VALUE;
		bounds.maxY = Number.MIN_VALUE;
	}

	export function isEmpty(bounds: Bounds): boolean {
		return bounds.minX === Number.MAX_VALUE
			&& bounds.minY === Number.MAX_VALUE
			&& bounds.maxX === Number.MIN_VALUE
			&& bounds.maxY === Number.MIN_VALUE;
	}

	export function toRectangle(bounds: Bounds, rectangle: Rectangle) {
		const {
			minX, minY, maxX, maxY,
		} = bounds;

		rectangle.x = minX;
		rectangle.y = minY;
		rectangle.width = maxX - minX;
		rectangle.height = maxY - minY;
	}

	export function testX(bounds: Bounds, x: number) {
		if (bounds.minX > x) {
			bounds.minX = x;
		} else if (bounds.maxX < x) {
			bounds.maxX = x;
		}
	}

	export function testY(bounds: Bounds, y: number) {
		if (bounds.minY > y) {
			bounds.minY = y;
		} else if (bounds.maxY < y) {
			bounds.maxY = y;
		}
	}

	export function test(bounds: Bounds, x: number, y: number) {
		if (bounds.minX > x) {
			bounds.minX = x;
		} else if (bounds.maxX < x) {
			bounds.maxX = x;
		}

		if (bounds.minY > y) {
			bounds.minY = y;
		} else if (bounds.maxY < y) {
			bounds.maxY = y;
		}
	}

	export function testPoint(bounds: Bounds, point: Point) {
		const { x, y } = point;
		if (bounds.minX > x) {
			bounds.minX = x;
		} else if (bounds.maxX < x) {
			bounds.maxX = x;
		}

		if (bounds.minY > y) {
			bounds.minY = y;
		} else if (bounds.maxY < y) {
			bounds.maxY = y;
		}
	}
}
