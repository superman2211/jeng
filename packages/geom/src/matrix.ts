import Point from './point';
import Rectangle from './rectangle';

const lt = new Point();
const lb = new Point();
const rt = new Point();
const rb = new Point();

export default class Matrix {
	a: number;
	b: number;
	c: number;
	d: number;
	tx: number;
	ty: number;

	constructor(a: number = 1, b: number = 0, c: number = 0, d: number = 1, tx: number = 0, ty: number = 0) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.tx = tx;
		this.ty = ty;
	}

	get determinant() {
		return this.a * this.d - this.b * this.c;
	}

	get position() {
		return new Point(this.tx, this.ty);
	}

	set position(value: Point) {
		this.tx = value.x;
		this.ty = value.y;
	}

	get ortX() {
		return new Point(this.a, this.b);
	}

	set ortX(value: Point) {
		this.a = value.x;
		this.b = value.y;
	}

	get ortY() {
		return new Point(this.c, this.d);
	}

	set ortY(value: Point) {
		this.c = value.x;
		this.d = value.y;
	}

	toString(): string {
		return `{ a: ${this.a}, b: ${this.b}, c: ${this.c}, d: ${this.d}, tx: ${this.tx}, ty: ${this.ty} }`;
	}

	clone(): Matrix {
		return new Matrix(this.a, this.b, this.c, this.d, this.tx, this.ty);
	}

	concat(matrix: Matrix) {
		const a = this.a * matrix.a + this.b * matrix.c;
		const b = this.a * matrix.b + this.b * matrix.d;
		const c = this.c * matrix.a + this.d * matrix.c;
		const d = this.c * matrix.b + this.d * matrix.d;
		const tx = this.tx * matrix.a + this.ty * matrix.c + matrix.tx;
		const ty = this.tx * matrix.b + this.ty * matrix.d + matrix.ty;

		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.tx = tx;
		this.ty = ty;
	}

	copyFrom(matrix: Matrix) {
		this.a = matrix.a;
		this.b = matrix.b;
		this.c = matrix.c;
		this.d = matrix.d;
		this.tx = matrix.tx;
		this.ty = matrix.ty;
	}

	createBox(scaleX: number, scaleY: number, rotation: number = 0, x: number = 0, y: number = 0) {
		if (rotation !== 0) {
			const cos = Math.cos(rotation);
			const sin = Math.sin(rotation);

			this.a = cos * scaleX;
			this.b = sin * scaleX;
			this.c = -sin * scaleY;
			this.d = cos * scaleY;
		} else {
			this.a = scaleX;
			this.b = 0;
			this.c = 0;
			this.d = scaleY;
		}

		this.tx = x;
		this.ty = y;
	}

	createGradientBox(width: number, height: number, rotation: number = 0, x: number = 0, y: number = 0) {
		this.a = width / 1638.4;
		this.d = height / 1638.4;

		if (rotation !== 0) {
			const cos = Math.cos(rotation);
			const sin = Math.sin(rotation);

			this.b = sin * this.d;
			this.c = -sin * this.a;
			this.a *= cos;
			this.d *= cos;
		} else {
			this.b = 0;
			this.c = 0;
		}

		this.tx = x + width / 2;
		this.ty = y + height / 2;
	}

	deltaTransformPoint(point: Point): Point {
		return new Point(
			point.x * this.a + point.y * this.c,
			point.x * this.b + point.y * this.d,
		);
	}

	equals(source: Matrix): boolean {
		return source !== null
			&& this.tx === source.tx
			&& this.ty === source.ty
			&& this.a === source.a
			&& this.b === source.b
			&& this.c === source.c
			&& this.d === source.d;
	}

	identity() {
		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.tx = 0;
		this.ty = 0;
	}

	invert() {
		let { determinant } = this;

		if (determinant === 0) {
			this.a = 0;
			this.b = 0;
			this.c = 0;
			this.d = 0;
			this.tx = -this.tx;
			this.ty = -this.ty;
		} else {
			determinant = 1.0 / determinant;

			const d = this.d * determinant;
			const a = this.a * determinant;

			this.a = d;
			this.b *= -determinant;
			this.c *= -determinant;
			this.d = a;

			const tx = -this.a * this.tx - this.c * this.ty;
			const ty = -this.b * this.tx - this.d * this.ty;

			this.tx = tx;
			this.ty = ty;
		}
	}

	rotate(angle: number) {
		if (angle === 0) {
			return;
		}

		const cos = Math.cos(angle);
		const sin = Math.sin(angle);

		const a = this.a * cos - this.b * sin;
		const b = this.a * sin + this.b * cos;
		const c = this.c * cos - this.d * sin;
		const d = this.c * sin + this.d * cos;
		const tx = this.tx * cos - this.ty * sin;
		const ty = this.tx * sin + this.ty * cos;

		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.tx = tx;
		this.ty = ty;
	}

	scale(x: number, y: number) {
		this.a *= x;
		this.b *= y;
		this.c *= x;
		this.d *= y;
		this.tx *= x;
		this.ty *= y;
	}

	setRotation(angle: number, scale: number = 1) {
		const x = Math.cos(angle) * scale;
		const y = Math.sin(angle) * scale;

		this.a = x;
		this.c = y;
		this.b = -y;
		this.d = x;
	}

	setTo(a: number, b: number, c: number, d: number, tx: number, ty: number) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.tx = tx;
		this.ty = ty;
	}

	translate(x: number, y: number) {
		this.tx += x;
		this.ty += y;
	}

	transformPoint(point: Point): Point {
		const result = new Point();
		this.transformPointTo(point, result);
		return result;
	}

	transformPointTo(source: Point, target: Point) {
		const { x, y } = source;

		target.x = x * this.a + y * this.c + this.tx;
		target.y = x * this.b + y * this.d + this.ty;
	}

	transformX(x: number, y: number) {
		return x * this.a + y * this.c + this.tx;
	}

	transformY(x: number, y: number) {
		return x * this.b + y * this.d + this.ty;
	}

	transformInversePoint(point: Point): Point {
		const result = new Point();
		this.transformInversePointTo(point, result);
		return result;
	}

	transformInversePointTo(source: Point, target: Point) {
		let { determinant } = this;

		if (determinant === 0) {
			target.x = -this.tx;
			target.y = -this.ty;
		} else {
			determinant = 1 / determinant;

			const { x, y } = source;

			target.x = determinant * (this.c * (this.ty - y) + this.d * (x - this.tx));
			target.y = determinant * (this.a * (y - this.ty) + this.b * (this.tx - x));
		}
	}

	transformInverseX(x: number, y: number): number {
		let { determinant } = this;

		if (determinant === 0) {
			return -this.tx;
		}

		determinant = 1 / determinant;
		return determinant * (this.c * (this.ty - y) + this.d * (x - this.tx));
	}

	transformInverseY(x: number, y: number): number {
		let { determinant } = this;

		if (determinant === 0) {
			return -this.ty;
		}

		determinant = 1 / determinant;
		return determinant * (this.a * (y - this.ty) + this.b * (this.tx - x));
	}

	transformRect(rect: Rectangle): Rectangle {
		const result = new Rectangle();
		this.transformRectTo(rect, result);
		return result;
	}

	transformRectTo(source: Rectangle, target: Rectangle) {
		const {
			top,
			bottom,
			left,
			right,
		} = source;

		lt.setTo(left, top);
		lb.setTo(left, bottom);
		rt.setTo(right, top);
		rb.setTo(right, bottom);

		this.transformPointTo(lt, lt);
		this.transformPointTo(lb, lb);
		this.transformPointTo(rt, rt);
		this.transformPointTo(rb, rb);

		const minX = Math.min(lt.x, lb.x, rt.x, rb.x);
		const maxX = Math.max(lt.x, lb.x, rt.x, rb.x);

		const minY = Math.min(lt.y, lb.y, rt.y, rb.y);
		const maxY = Math.max(lt.y, lb.y, rt.y, rb.y);

		target.x = minX;
		target.y = minY;
		target.width = maxX - minX;
		target.height = maxY - minY;
	}

	private static _pool: Matrix[] = [];

	static get poolSize(): number {
		return this._pool.length;
	}

	static set poolSize(value: number) {
		if (this._pool.length > value) {
			this._pool.length = value;
		} else {
			while (this._pool.length < value) {
				this._pool.push(new Matrix());
			}
		}
	}

	static create(): Matrix {
		if (this._pool.length > 0) {
			return <Matrix> this._pool.pop();
		}
		return new Matrix();
	}

	static dispose(value: Matrix | null) {
		if (value) {
			value.identity();
			this._pool.push(value);
		}
	}
}
