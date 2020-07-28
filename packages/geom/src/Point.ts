export default class Point {
	x: number;
	y: number;

	constructor(x: number = 0, y: number = 0) {
		this.x = x;
		this.y = y;
	}

	get length(): number {
		const dx = this.x * this.x;
		const dy = this.y * this.y;
		return Math.sqrt(dx + dy);
	}

	get angle(): number {
		return Math.atan2(this.y, this.x);
	}

	toString(): string {
		return `{ x: ${this.x}, y: ${this.y} }`;
	}

	clone(): Point {
		return new Point(this.x, this.y);
	}

	equals(point: Point): boolean {
		return this.x === point.x && this.y === point.y;
	}

	setEmpty(): void {
		this.x = 0;
		this.y = 0;
	}

	setTo(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	copyFrom(point: Point) {
		this.x = point.x;
		this.y = point.y;
	}

	add(point: Point): Point {
		return new Point(point.x + this.x, point.y + this.y);
	}

	subtract(point: Point): Point {
		return new Point(this.x - point.x, this.y - point.y);
	}

	normalize(thickness: number) {
		let { length } = this;

		if (length > 0) {
			length = thickness / length;
			this.x *= length;
			this.y *= length;
		}
	}

	offset(dx: number, dy: number) {
		this.x += dx;
		this.y += dy;
	}

	static distance(point1: Point, point2: Point): number {
		const dx = point1.x - point2.x;
		const dy = point1.y - point2.y;
		return Math.sqrt(dx * dx + dy * dy);
	}

	static interpolate(point1: Point, point2: Point, value: number): Point {
		return new Point(
			point2.x + value * (point1.x - point2.x),
			point2.y + value * (point1.y - point2.y),
		);
	}

	static polar(length: number, angle: number): Point {
		return new Point(
			length * Math.cos(angle),
			length * Math.sin(angle),
		);
	}
}
