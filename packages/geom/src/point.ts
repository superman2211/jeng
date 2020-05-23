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

	private static _pool: Point[] = [];

	static get poolSize(): number {
		return this._pool.length;
	}

	static set poolSize(value: number) {
		if (this._pool.length > value) {
			this._pool.length = value;
		} else {
			while (this._pool.length < value) {
				this._pool.push(new Point());
			}
		}
	}

	static create(): Point {
		if (this._pool.length > 0) {
			return <Point> this._pool.pop();
		}
		return new Point();
	}

	static dispose(value: Point | null) {
		if (value) {
			value.setEmpty();
			this._pool.push(value);
		}
	}
}
