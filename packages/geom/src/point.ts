export interface Point {
	x: number;
	y: number;
}

export namespace Point {
	export function empty(): Point {
		return { x: 0, y: 0 };
	}

	export function length(point: Point): number {
		const { x, y } = point;
		return Math.sqrt(x * x + y * y);
	}

	export function angle(point: Point): number {
		return Math.atan2(point.y, point.x);
	}

	export function isEmpty(point: Point): boolean {
		return point.x === 0 && point.y === 0;
	}

	export function equals(point0: Point, point1: Point): boolean {
		return point0.x === point1.x && point0.y === point1.y;
	}

	export function setEmpty(point: Point) {
		point.x = 0;
		point.y = 0;
	}

	export function copy(source: Point, target: Point) {
		target.x = source.x;
		target.y = source.y;
	}

	export function normalize(point: Point, thickness: number) {
		let value = length(point);
		if (value > 0) {
			value = thickness / value;
			point.x *= value;
			point.y *= value;
		}
	}

	export function distance(point0: Point, point1: Point): number {
		const dx = point0.x - point1.x;
		const dy = point0.y - point1.y;
		return Math.sqrt(dx * dx + dy * dy);
	}

	export function interpolate(begin: Point, end: Point, value: number, result: Point) {
		result.x = begin.x + value * (end.x - begin.x);
		result.y = begin.y + value * (end.y - begin.y);
	}

	// eslint-disable-next-line no-shadow
	export function polar(point: Point, length: number, angle: number) {
		point.x = length * Math.cos(angle);
		point.y = length * Math.sin(angle);
	}
}
