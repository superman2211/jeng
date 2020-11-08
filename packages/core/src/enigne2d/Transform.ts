export interface Matrix {
	a: number;
	b: number;
	c: number;
	d: number;
	tx: number;
	ty: number;
}

export interface Transform {
	x?: number;
	y?: number;
	scaleX?: number;
	scaleY?: number;
	rotation?: number;
	matrix?: Matrix;
}

export function getMatrix(transform: Transform): Matrix {
	if (transform.matrix) {
		return transform.matrix;
	}

	if (transform.rotation) {
		const cos = Math.cos(transform.rotation);
		const sin = Math.sin(transform.rotation);
		const scaleX = transform.scaleX || 1;
		const scaleY = transform.scaleY || 1;

		return {
			a: cos * scaleX,
			b: sin * scaleX,
			c: -sin * scaleY,
			d: cos * scaleY,
			tx: transform.x || 0,
			ty: transform.y || 0,
		};
	}

	return {
		a: transform.scaleX || 1,
		b: 0,
		c: 0,
		d: transform.scaleY || 1,
		tx: transform.x || 0,
		ty: transform.y || 0,
	};
}

export function matrixConcat(matrix0: Matrix, matrix1: Matrix) {
	return {
		a: matrix1.a * matrix0.a + matrix1.b * matrix0.c,
		b: matrix1.a * matrix0.b + matrix1.b * matrix0.d,
		c: matrix1.c * matrix0.a + matrix1.d * matrix0.c,
		d: matrix1.c * matrix0.b + matrix1.d * matrix0.d,
		tx: matrix1.tx * matrix0.a + matrix1.ty * matrix0.c + matrix0.tx,
		ty: matrix1.tx * matrix0.b + matrix1.ty * matrix0.d + matrix0.ty,
	};
}
