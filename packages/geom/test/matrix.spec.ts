import Matrix from '../src/Matrix';
import Point from '../src/Point';
import Rectangle from '../src/Rectangle';

const PRECISION = 5;

describe('matrix determinant', () => {
	it('should calculate empty matrix determinant', () => {
		expect(new Matrix().determinant).toBe(1);
	});
	it('should calculate matrix determinant', () => {
		expect(new Matrix(1, 2, 3, 4, 5, 6).determinant).toBe(-2);
	});
});

describe('matrix position', () => {
	it('should get empty matrix position', () => {
		expect(new Matrix().position).toEqual(new Point(0, 0));
	});
	it('should get matrix position', () => {
		expect(new Matrix(1, 0, 0, 1, 3, 4).position).toEqual(new Point(3, 4));
	});
	it('should set matrix position', () => {
		const matrix = new Matrix();
		matrix.position = new Point(3, 4);
		expect(matrix).toEqual(new Matrix(1, 0, 0, 1, 3, 4));
	});
});

describe('matrix ortX', () => {
	it('should get empty matrix ortX', () => {
		expect(new Matrix().ortX).toEqual(new Point(1, 0));
	});
	it('should get matrix ortX', () => {
		expect(new Matrix(2, 3).ortX).toEqual(new Point(2, 3));
	});
	it('should set matrix ortX', () => {
		const matrix = new Matrix();
		matrix.ortX = new Point(3, 4);
		expect(matrix).toEqual(new Matrix(3, 4));
	});
});

describe('matrix ortY', () => {
	it('should get empty matrix ortY', () => {
		expect(new Matrix().ortY).toEqual(new Point(0, 1));
	});
	it('should get matrix ortY', () => {
		expect(new Matrix(1, 0, 2, 3).ortY).toEqual(new Point(2, 3));
	});
	it('should set matrix ortY', () => {
		const matrix = new Matrix();
		matrix.ortY = new Point(3, 4);
		expect(matrix).toEqual(new Matrix(1, 0, 3, 4));
	});
});

describe('matrix toString', () => {
	it('should get matrix string representation', () => {
		expect(new Matrix(1, 2, 3, 4, 5, 6).toString()).toBe('{ a: 1, b: 2, c: 3, d: 4, tx: 5, ty: 6 }');
	});
});

describe('matrix clone', () => {
	it('should get matrix clone', () => {
		expect(new Matrix(1, 2, 3, 4, 5, 6).clone()).toEqual(new Matrix(1, 2, 3, 4, 5, 6));
	});
});

describe('matrix concat', () => {
	it('should concat two empty matrices', () => {
		const matrix1 = new Matrix();
		const matrix2 = new Matrix();
		matrix1.concat(matrix2);
		expect(matrix1).toEqual(new Matrix());
	});
	it('should concat two matrices when source is empty', () => {
		const matrix1 = new Matrix();
		const matrix2 = new Matrix(1, 2, 3, 4, 5, 6);
		matrix1.concat(matrix2);
		expect(matrix1).toEqual(new Matrix(1, 2, 3, 4, 5, 6));
	});
	it('should concat two matrices when second is empty', () => {
		const matrix1 = new Matrix(1, 2, 3, 4, 5, 6);
		const matrix2 = new Matrix();
		matrix1.concat(matrix2);
		expect(matrix1).toEqual(new Matrix(1, 2, 3, 4, 5, 6));
	});
	it('should concat two matrices', () => {
		const matrix1 = new Matrix(1, 2, 3, 4, 5, 6);
		const matrix2 = new Matrix(2, 3, 4, 5, 6, 7);
		matrix1.concat(matrix2);
		expect(matrix1).toEqual(new Matrix(10, 13, 22, 29, 40, 52));
	});
	it('should throw when pass null matrix', () => {
		expect(() => {
			new Matrix().concat(null);
		}).toThrow();
	});
});

describe('matrix copyFrom', () => {
	it('should copy from matrix', () => {
		const matrix1 = new Matrix(1, 2, 3, 4, 5, 6);
		const matrix2 = new Matrix(2, 3, 4, 5, 6, 7);
		matrix1.copyFrom(matrix2);
		expect(matrix1).toEqual(new Matrix(2, 3, 4, 5, 6, 7));
	});
	it('should throw when pass null matrix', () => {
		expect(() => {
			new Matrix().copyFrom(null);
		}).toThrow();
	});
});

describe('matrix createBox', () => {
	it('should create matrix from empty transform parameters', () => {
		const matrix = new Matrix();
		matrix.createBox(1, 1, 0, 0, 0);
		expect(matrix).toEqual(new Matrix());
	});
	it('should create matrix without default parameters', () => {
		const matrix = new Matrix();
		matrix.createBox(1, 1);
		expect(matrix).toEqual(new Matrix());
	});
	it('should create matrix from transform parameters', () => {
		const matrix = new Matrix();
		matrix.createBox(2, 3, 30, 100, 200);
		expect(matrix.a).toBeCloseTo(0.30850, PRECISION);
		expect(matrix.b).toBeCloseTo(-1.97606, PRECISION);
		expect(matrix.c).toBeCloseTo(2.96409, PRECISION);
		expect(matrix.d).toBeCloseTo(0.46275, PRECISION);
		expect(matrix.tx).toBe(100);
		expect(matrix.ty).toBe(200);
	});
});

describe('matrix createGradientBox', () => {
	it('should create matrix from empty transform parameters', () => {
		const matrix = new Matrix();
		matrix.createGradientBox(1, 1, 0, 0, 0);
		expect(matrix.a).toBeCloseTo(0.00061, PRECISION);
		expect(matrix.b).toBeCloseTo(0.00000, PRECISION);
		expect(matrix.c).toBeCloseTo(0.00000, PRECISION);
		expect(matrix.d).toBeCloseTo(0.00061, PRECISION);
		expect(matrix.tx).toBeCloseTo(0.50000, PRECISION);
		expect(matrix.ty).toBeCloseTo(0.50000, PRECISION);
	});
	it('should create matrix without default parameters', () => {
		const matrix = new Matrix();
		matrix.createGradientBox(1, 1);
		expect(matrix.a).toBeCloseTo(0.00061, PRECISION);
		expect(matrix.b).toBeCloseTo(0.00000, PRECISION);
		expect(matrix.c).toBeCloseTo(0.00000, PRECISION);
		expect(matrix.d).toBeCloseTo(0.00061, PRECISION);
		expect(matrix.tx).toBeCloseTo(0.50000, PRECISION);
		expect(matrix.ty).toBeCloseTo(0.50000, PRECISION);
	});
	it('should create matrix from transform parameters', () => {
		const matrix = new Matrix();
		matrix.createGradientBox(2, 3, 30, 100, 200);
		expect(matrix.a).toBeCloseTo(0.00019, PRECISION);
		expect(matrix.b).toBeCloseTo(-0.00181, PRECISION);
		expect(matrix.c).toBeCloseTo(0.00121, PRECISION);
		expect(matrix.d).toBeCloseTo(0.00028, PRECISION);
		expect(matrix.tx).toBe(101);
		expect(matrix.ty).toBe(201.5);
	});
});

describe('matrix deltaTransformPoint', () => {
	it('should get delta transformed empty point with empty ematrix', () => {
		const matrix = new Matrix();
		const point = new Point();
		expect(matrix.deltaTransformPoint(point)).toEqual(new Point());
	});
	it('should get delta transformed point', () => {
		const matrix = new Matrix();
		matrix.rotate(1);
		matrix.scale(2, 3);
		matrix.translate(10, 20);
		const point = new Point(30, 40);
		const result = matrix.deltaTransformPoint(point);
		expect(result.x).toBeCloseTo(-34.89954043254334, PRECISION);
		expect(result.y).toBeCloseTo(140.56866533688745, PRECISION);
	});
	it('should throw when pass null point', () => {
		expect(() => {
			new Matrix().deltaTransformPoint(null);
		}).toThrow();
	});
});

describe('matrix equals', () => {
	it('should compare two matrices', () => {
		expect(new Matrix(1, 2, 3, 4, 5, 6).equals(new Matrix(1, 2, 3, 4, 5, 6))).toBeTruthy();
	});
	it('should compare two matrices', () => {
		expect(new Matrix(1, 2, 3, 4, 5, 6).equals(new Matrix())).toBeFalsy();
	});
	it('should compare two matrices when second is null', () => {
		expect(new Matrix(1, 2, 3, 4, 5, 6).equals(null)).toBeFalsy();
	});
});

describe('matrix identity', () => {
	it('should compare two matrices', () => {
		const matrix = new Matrix(1, 2, 3, 4, 5, 6);
		matrix.identity();
		expect(matrix).toEqual(new Matrix());
	});
});

describe('matrix invert', () => {
	it('should invert empty matrix', () => {
		const matrix = new Matrix();
		matrix.invert();
		expect(matrix.a).toBeCloseTo(1, PRECISION);
		expect(matrix.b).toBeCloseTo(0, PRECISION);
		expect(matrix.c).toBeCloseTo(0, PRECISION);
		expect(matrix.d).toBeCloseTo(1, PRECISION);
		expect(matrix.tx).toBeCloseTo(0, PRECISION);
		expect(matrix.ty).toBeCloseTo(0, PRECISION);
	});
	it('should invert matrix', () => {
		const matrix = new Matrix(1, 2, 3, 4, 5, 6);
		matrix.invert();
		expect(matrix.a).toBeCloseTo(-2, PRECISION);
		expect(matrix.b).toBeCloseTo(1, PRECISION);
		expect(matrix.c).toBeCloseTo(1.5, PRECISION);
		expect(matrix.d).toBeCloseTo(-0.5, PRECISION);
		expect(matrix.tx).toBeCloseTo(1, PRECISION);
		expect(matrix.ty).toBeCloseTo(-2, PRECISION);
	});
	it('should invert matrix with zero determinant', () => {
		const matrix = new Matrix(0, 0, 0, 0, 5, 6);
		matrix.invert();
		expect(matrix.a).toBeCloseTo(0, PRECISION);
		expect(matrix.b).toBeCloseTo(0, PRECISION);
		expect(matrix.c).toBeCloseTo(0, PRECISION);
		expect(matrix.d).toBeCloseTo(0, PRECISION);
		expect(matrix.tx).toBeCloseTo(-5, PRECISION);
		expect(matrix.ty).toBeCloseTo(-6, PRECISION);
	});
});

describe('matrix rotate', () => {
	it('should rotate matrix zero degree', () => {
		const matrix = new Matrix();
		matrix.rotate(0);
		expect(matrix).toEqual(new Matrix());
	});
	it('should rotate matrix', () => {
		const matrix = new Matrix(2, 0, 0, 3, 10, 20);
		matrix.rotate(Math.PI / 3);
		expect(matrix.a).toBeCloseTo(1, PRECISION);
		expect(matrix.b).toBeCloseTo(1.73205, PRECISION);
		expect(matrix.c).toBeCloseTo(-2.598076, PRECISION);
		expect(matrix.d).toBeCloseTo(1.5, PRECISION);
		expect(matrix.tx).toBeCloseTo(-12.32050807, PRECISION);
		expect(matrix.ty).toBeCloseTo(18.660254, PRECISION);
	});
});

describe('matrix scale', () => {
	it('should scale matrix', () => {
		const matrix = new Matrix(1, 2, 3, 4, 5, 6);
		matrix.scale(3, 4);
		expect(matrix.a).toBeCloseTo(3, PRECISION);
		expect(matrix.b).toBeCloseTo(8, PRECISION);
		expect(matrix.c).toBeCloseTo(9, PRECISION);
		expect(matrix.d).toBeCloseTo(16, PRECISION);
		expect(matrix.tx).toBeCloseTo(15, PRECISION);
		expect(matrix.ty).toBeCloseTo(24, PRECISION);
	});
});

describe('matrix setRotation', () => {
	it('should set rotation to matrix with default parameters', () => {
		const matrix = new Matrix(1, 2, 3, 4, 5, 6);
		matrix.setRotation(0);
		expect(matrix.a).toBeCloseTo(1, PRECISION);
		expect(matrix.b).toBeCloseTo(0, PRECISION);
		expect(matrix.c).toBeCloseTo(0, PRECISION);
		expect(matrix.d).toBeCloseTo(1, PRECISION);
		expect(matrix.tx).toBeCloseTo(5, PRECISION);
		expect(matrix.ty).toBeCloseTo(6, PRECISION);
	});
	it('should set rotation to matrix', () => {
		const matrix = new Matrix(1, 2, 3, 4, 5, 6);
		matrix.setRotation(Math.PI / 3, 2);
		expect(matrix.a).toBeCloseTo(1, PRECISION);
		expect(matrix.b).toBeCloseTo(-1.73205, PRECISION);
		expect(matrix.c).toBeCloseTo(1.73205, PRECISION);
		expect(matrix.d).toBeCloseTo(1, PRECISION);
		expect(matrix.tx).toBeCloseTo(5, PRECISION);
		expect(matrix.ty).toBeCloseTo(6, PRECISION);
	});
});

describe('matrix setTo', () => {
	it('should values to matrix', () => {
		const matrix = new Matrix(1, 2, 3, 4, 5, 6);
		matrix.setTo(2, 3, 4, 5, 6, 7);
		expect(matrix).toEqual(new Matrix(2, 3, 4, 5, 6, 7));
	});
});

describe('matrix translate', () => {
	it('should translate matrix', () => {
		const matrix = new Matrix(1, 2, 3, 4, 5, 6);
		matrix.translate(1, 2);
		expect(matrix).toEqual(new Matrix(1, 2, 3, 4, 6, 8));
	});
});

describe('matrix transformPoint', () => {
	it('should get transformed point', () => {
		const matrix = new Matrix(1, 2, 3, 4, 5, 6);
		expect(matrix.transformPoint(new Point(1, 2))).toEqual(new Point(12, 16));
	});
	it('should throw when pass null point', () => {
		expect(() => {
			new Matrix().transformPoint(null);
		}).toThrow();
	});
});

describe('matrix transformX', () => {
	it('should get transformed X', () => {
		const matrix = new Matrix(1, 2, 3, 4, 5, 6);
		expect(matrix.transformX(1, 2)).toBe(12);
	});
});

describe('matrix transformY', () => {
	it('should get transformed Y', () => {
		const matrix = new Matrix(1, 2, 3, 4, 5, 6);
		expect(matrix.transformY(1, 2)).toBe(16);
	});
});

describe('matrix transformPointTo', () => {
	it('should local transform point', () => {
		const matrix = new Matrix(1, 2, 3, 4, 5, 6);
		const point = new Point(1, 2);
		matrix.transformPointTo(point, point);
		expect(point).toEqual(new Point(12, 16));
	});
	it('should transform point to target', () => {
		const matrix = new Matrix(1, 2, 3, 4, 5, 6);
		const source = new Point(1, 2);
		const target = new Point(3, 4);
		matrix.transformPointTo(source, target);
		expect(source).toEqual(new Point(1, 2));
		expect(target).toEqual(new Point(12, 16));
	});
	it('should throw when pass null points', () => {
		expect(() => {
			new Matrix().transformPointTo(null, null);
		}).toThrow();
	});
});

describe('matrix transformInversePoint', () => {
	it('should get transformed inverse point', () => {
		const matrix = new Matrix(1, 2, 3, 4, 5, 6);
		const point = new Point(1, 2);
		expect(matrix.transformInversePoint(point)).toEqual(new Point(2, -2));
	});
	it('should throw when pass null point', () => {
		expect(() => {
			new Matrix().transformInversePoint(null);
		}).toThrow();
	});
});

describe('matrix transformInverseX', () => {
	it('should get transformed inverse x coordinate', () => {
		const matrix = new Matrix(1, 2, 3, 4, 5, 6);
		expect(matrix.transformInverseX(1, 2)).toBe(2);
	});
	it('should get transformed inverse x coordinate', () => {
		const matrix = new Matrix(0, 0, 0, 0, 5, 6);
		expect(matrix.transformInverseX(1, 2)).toBe(-5);
	});
});

describe('matrix transformInverseY', () => {
	it('should get transformed inverse y coordinate', () => {
		const matrix = new Matrix(1, 2, 3, 4, 5, 6);
		expect(matrix.transformInverseY(1, 2)).toBe(-2);
	});
	it('should get transformed inverse y coordinate', () => {
		const matrix = new Matrix(0, 0, 0, 0, 5, 6);
		expect(matrix.transformInverseY(1, 2)).toBe(-6);
	});
});

describe('matrix transformInversePointTo', () => {
	it('should local transform inverse point', () => {
		const matrix = new Matrix(1, 2, 3, 4, 5, 6);
		const point = new Point(1, 2);
		matrix.transformInversePointTo(point, point);
		expect(point).toEqual(new Point(2, -2));
	});
	it('should transform inverse point to target', () => {
		const matrix = new Matrix(1, 2, 3, 4, 5, 6);
		const source = new Point(1, 2);
		const target = new Point(3, 4);
		matrix.transformInversePointTo(source, target);
		expect(target).toEqual(new Point(2, -2));
	});
	it('should transform inverse point with zero determinant', () => {
		const matrix = new Matrix(0, 0, 0, 0, 5, 6);
		const source = new Point(1, 2);
		const target = new Point(3, 4);
		matrix.transformInversePointTo(source, target);
		expect(target).toEqual(new Point(-5, -6));
	});
	it('should throw when pass null points', () => {
		expect(() => {
			new Matrix().transformInversePointTo(null, null);
		}).toThrow();
	});
});

describe('matrix transformRect', () => {
	it('should get transformed rect', () => {
		const matrix = new Matrix(1, 2, 3, 4, 5, 6);
		const rect = new Rectangle(1, 2, 3, 4);
		expect(matrix.transformRect(rect)).toEqual(new Rectangle(12, 16, 15, 22));
	});
	it('should throw when pass null point', () => {
		expect(() => {
			new Matrix().transformRect(null);
		}).toThrow();
	});
});

describe('matrix transformRectTo', () => {
	it('should transform rect to target', () => {
		const matrix = new Matrix(1, 2, 3, 4, 5, 6);
		const source = new Rectangle(1, 2, 3, 4);
		const target = new Rectangle();
		matrix.transformRectTo(source, target);
		expect(target).toEqual(new Rectangle(12, 16, 15, 22));
	});
	it('should throw when pass null point', () => {
		expect(() => {
			new Matrix().transformRectTo(null, null);
		}).toThrow();
	});
});
