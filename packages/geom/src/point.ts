export interface Point {
	x: number;
	y: number;
}

export namespace Point {
	export function empty(): Point {
		return { x: 0, y: 0 };
	}

	export function isEmpty(point: Point): boolean {
		return point.x === 0 && point.y === 0;
	}

	export function setEmpty(point: Point) {
		point.x = 0;
		point.y = 0;
	}
}
