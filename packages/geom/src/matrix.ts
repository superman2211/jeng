import { Point } from './point';
import { Rectangle } from './rectangle';

export interface Matrix {
	a: number;
	b: number;
	c: number;
	d: number;
	tx: number;
	ty: number;
}

export namespace Matrix {
	export function empty(): Matrix {
		return {
			a: 1,
			b: 0,
			c: 0,
			d: 1,
			tx: 0,
			ty: 0,
		};
	}

	export function concat(matrix0: Matrix, matrix1: Matrix): Matrix {
		return {
			a: matrix1.a * matrix0.a + matrix1.b * matrix0.c,
			b: matrix1.a * matrix0.b + matrix1.b * matrix0.d,
			c: matrix1.c * matrix0.a + matrix1.d * matrix0.c,
			d: matrix1.c * matrix0.b + matrix1.d * matrix0.d,
			tx: matrix1.tx * matrix0.a + matrix1.ty * matrix0.c + matrix0.tx,
			ty: matrix1.tx * matrix0.b + matrix1.ty * matrix0.d + matrix0.ty,
		};
	}

	export function getDeterminant(matrix: Matrix): number {
		return matrix.a * matrix.d - matrix.b * matrix.c;
	}

	export function invert(matrix: Matrix) {
		let determinant = getDeterminant(matrix);

		if (determinant === 0) {
			matrix.a = 0;
			matrix.b = 0;
			matrix.c = 0;
			matrix.d = 0;
			matrix.tx = -matrix.tx;
			matrix.ty = -matrix.ty;
		} else {
			determinant = 1.0 / determinant;

			const d = matrix.d * determinant;
			const a = matrix.a * determinant;

			matrix.a = d;
			matrix.b *= -determinant;
			matrix.c *= -determinant;
			matrix.d = a;

			const tx = -matrix.a * matrix.tx - matrix.c * matrix.ty;
			const ty = -matrix.b * matrix.tx - matrix.d * matrix.ty;

			matrix.tx = tx;
			matrix.ty = ty;
		}
	}

	export function transformPoint(matrix: Matrix, point: Point): Point {
		const { x, y } = point;

		return {
			x: x * matrix.a + y * matrix.c + matrix.tx,
			y: x * matrix.b + y * matrix.d + matrix.ty,
		};
	}

	export function transformInversePoint(matrix: Matrix, point: Point): Point {
		let determinant = getDeterminant(matrix);

		if (determinant === 0) {
			return {
				x: -matrix.tx,
				y: -matrix.ty,
			};
		}

		determinant = 1 / determinant;

		const { x, y } = point;

		return {
			x: determinant * (matrix.c * (matrix.ty - y) + matrix.d * (x - matrix.tx)),
			y: determinant * (matrix.a * (y - matrix.ty) + matrix.b * (matrix.tx - x)),
		};
	}

	export function transformBounds(matrix: Matrix, bounds: Rectangle): Rectangle {
		const {
			a, b, c, d, tx, ty,
		} = matrix;

		const rx = bounds.x;
		const ry = bounds.y;
		const rr = rx + bounds.width;
		const rb = ry + bounds.height;

		const nx1 = rx * a + ry * c + tx;
		const ny1 = rx * b + ry * d + ty;
		const nx2 = rr * a + ry * c + tx;
		const ny2 = rr * b + ry * d + ty;
		const nx3 = rr * a + rb * c + tx;
		const ny3 = rr * b + rb * d + ty;
		const nx4 = rx * a + rb * c + tx;
		const ny4 = rx * b + rb * d + ty;

		let left = nx1;
		if (left > nx2) {
			left = nx2;
		}
		if (left > nx3) {
			left = nx3;
		}
		if (left > nx4) {
			left = nx4;
		}

		let top = ny1;
		if (top > ny2) {
			top = ny2;
		}
		if (top > ny3) {
			top = ny3;
		}
		if (top > ny4) {
			top = ny4;
		}

		let right = nx1;
		if (right < nx2) {
			right = nx2;
		}
		if (right < nx3) {
			right = nx3;
		}
		if (right < nx4) {
			right = nx4;
		}

		let bottom = ny1;
		if (bottom < ny2) {
			bottom = ny2;
		}
		if (bottom < ny3) {
			bottom = ny3;
		}
		if (bottom < ny4) {
			bottom = ny4;
		}

		return {
			x: left,
			y: top,
			width: right - left,
			height: bottom - top,
		};
	}
}
