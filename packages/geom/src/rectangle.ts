import Point from './point';

export default class Rectangle {
	x: number;
	y: number;
	width: number;
	height: number;

	constructor(x: number = 0, y: number = 0, width: number = 0, height: number = 0) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	get left(): number {
		return this.x;
	}

	set left(value: number) {
		this.width -= value - this.x;
		this.x = value;
	}

	get right(): number {
		return this.x + this.width;
	}

	set right(value: number) {
		this.width = value - this.x;
	}

	get bottom(): number {
		return this.y + this.height;
	}

	set bottom(value: number) {
		this.height = value - this.y;
	}

	get top(): number {
		return this.y;
	}

	set top(value: number) {
		this.height -= value - this.y;
		this.y = value;
	}

	get topLeft(): Point {
		return new Point(this.x, this.y);
	}

	set topLeft(value: Point) {
		this.x = value.x;
		this.y = value.y;
	}

	get bottomRight(): Point {
		return new Point(this.x + this.width, this.y + this.height);
	}

	set bottomRight(value: Point) {
		this.width = value.x - this.x;
		this.height = value.y - this.y;
	}

	toString(): string {
		return `{ x: ${this.x}, y: ${this.y}, width: ${this.width}, height: ${this.height} }`;
	}

	clone(): Rectangle {
		return new Rectangle(this.x, this.y, this.width, this.height);
	}

	contains(x: number, y: number): boolean {
		return x >= this.x && y >= this.y && x < this.x + this.width && y < this.y + this.height;
	}

	containsPoint(point: Point): boolean {
		return this.contains(point.x, point.y);
	}

	containsRect(rect: Rectangle): boolean {
		if (rect.width <= 0 || rect.height <= 0) {
			return rect.x > this.x
				&& rect.y > this.y
				&& rect.x + rect.width < this.x + this.width
				&& rect.y + rect.height < this.y + this.height;
		}

		return rect.x >= this.x
			&& rect.y >= this.y
			&& rect.x + rect.width <= this.x + this.width
			&& rect.y + rect.height <= this.y + this.height;
	}

	copyFrom(rect: Rectangle) {
		this.x = rect.x;
		this.y = rect.y;
		this.width = rect.width;
		this.height = rect.height;
	}

	equalsRect(rect: Rectangle): boolean {
		if (rect === this) return true;
		if (rect === null) return false;

		return this.equals(rect.x, rect.y, rect.width, rect.height);
	}

	equals(x: number, y: number, width: number, height: number): boolean {
		return this.x === x
			&& this.y === y
			&& this.width === width
			&& this.height === height;
	}

	inflate(dx: number, dy: number) {
		this.x -= dx;
		this.y -= dy;
		this.width += dx * 2;
		this.height += dy * 2;
	}

	inflatePoint(point: Point) {
		this.inflate(point.x, point.y);
	}

	round() {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
	}

	intersection(rect: Rectangle): Rectangle {
		const x0 = this.x < rect.x ? rect.x : this.x;
		const x1 = this.right > rect.right ? rect.right : this.right;

		if (x1 <= x0) return new Rectangle();

		const y0 = this.y < rect.y ? rect.y : this.y;
		const y1 = this.bottom > rect.bottom ? rect.bottom : this.bottom;

		if (y1 <= y0) return new Rectangle();

		return new Rectangle(x0, y0, x1 - x0, y1 - y0);
	}

	intersects(rect: Rectangle): boolean {
		const x0 = this.x < rect.x ? rect.x : this.x;
		const x1 = this.right > rect.right ? rect.right : this.right;

		if (x1 <= x0) return false;

		const y0 = this.y < rect.y ? rect.y : this.y;
		const y1 = this.bottom > rect.bottom ? rect.bottom : this.bottom;

		return y1 > y0;
	}

	isEmpty(): boolean {
		return this.width <= 0 || this.height <= 0;
	}

	offset(dx: number, dy: number) {
		this.x += dx;
		this.y += dy;
	}

	offsetPoint(p: Point) {
		this.x += p.x;
		this.y += p.y;
	}

	setEmpty() {
		this.x = 0;
		this.y = 0;
		this.width = 0;
		this.height = 0;
	}

	setTo(x: number = 0, y: number = 0, width: number = 0, height: number = 0) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	union(rect: Rectangle): Rectangle {
		if (this.width === 0 || this.height === 0) {
			return rect.clone();
		}

		if (rect.width === 0 || rect.height === 0) {
			return this.clone();
		}

		const x0 = this.x > rect.x ? rect.x : this.x;
		const x1 = this.right < rect.right ? rect.right : this.right;
		const y0 = this.y > rect.y ? rect.y : this.y;
		const y1 = this.bottom < rect.bottom ? rect.bottom : this.bottom;

		return new Rectangle(x0, y0, x1 - x0, y1 - y0);
	}

	contract(x: number, y: number, width: number, height: number) {
		if (this.width === 0 && this.height === 0) return;

		let offsetX = 0;
		let offsetY = 0;
		let offsetRight = 0;
		let offsetBottom = 0;

		if (this.x < x) offsetX = x - this.x;
		if (this.y < y) offsetY = y - this.y;
		if (this.right > x + width) offsetRight = (x + width) - this.right;
		if (this.bottom > y + height) offsetBottom = (y + height) - this.bottom;

		this.x += offsetX;
		this.y += offsetY;
		this.width += offsetRight - offsetX;
		this.height += offsetBottom - offsetY;
	}

	expand(x: number, y: number, width: number, height: number) {
		if (this.width === 0 && this.height === 0) {
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
			return;
		}

		const { right, bottom } = this;

		if (this.x > x) {
			this.x = x;
			this.width = right - x;
		}

		if (this.y > y) {
			this.y = y;
			this.height = bottom - y;
		}

		if (right < x + width) {
			this.width = x + width - this.x;
		}

		if (bottom < y + height) {
			this.height = y + height - this.y;
		}
	}

	extend(px: number, py: number) {
		if (px < this.x) {
			this.width += this.x - px;
			this.x = px;
		}

		if (py < this.y) {
			this.height += this.y - py;
			this.y = py;
		}

		if (px > this.x + this.width) {
			this.width = px - this.x;
		}

		if (py > this.y + this.height) {
			this.height = py - this.y;
		}
	}

	private static _pool: Rectangle[] = [];

	static get poolSize(): number {
		return this._pool.length;
	}

	static set poolSize(value: number) {
		if (this._pool.length > value) {
			this._pool.length = value;
		} else {
			while (this._pool.length < value) {
				this._pool.push(new Rectangle());
			}
		}
	}

	static create(): Rectangle {
		if (this._pool.length) {
			return <Rectangle> this._pool.pop();
		}
		return new Rectangle();
	}

	static dispose(value: Rectangle | null) {
		if (value) {
			value.setEmpty();
			this._pool.push(value);
		}
	}
}
