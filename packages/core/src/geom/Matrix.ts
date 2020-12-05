export interface Matrix {
	a: number;
	b: number;
	c: number;
	d: number;
	tx: number;
	ty: number;
}

export function concatMatrix(matrix0: Matrix, matrix1: Matrix) {
	return {
		a: matrix1.a * matrix0.a + matrix1.b * matrix0.c,
		b: matrix1.a * matrix0.b + matrix1.b * matrix0.d,
		c: matrix1.c * matrix0.a + matrix1.d * matrix0.c,
		d: matrix1.c * matrix0.b + matrix1.d * matrix0.d,
		tx: matrix1.tx * matrix0.a + matrix1.ty * matrix0.c + matrix0.tx,
		ty: matrix1.tx * matrix0.b + matrix1.ty * matrix0.d + matrix0.ty,
	};
}
