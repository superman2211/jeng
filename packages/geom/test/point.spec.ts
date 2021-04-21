import { Point } from '../src/point';

const PRECISION = 5;

describe('point get length', () => {
	it('should calculate empty point length', () => {
		expect(Point.length(Point.empty())).toBe(0);
	});
	it('should calculate not empty point length', () => {
		expect(Point.length({ x: 3, y: 4 })).toBe(5);
	});
});

describe('point get angle', () => {
	it('should calculate empty point angle', () => {
		expect(Point.angle(Point.empty())).toBe(0);
	});
	it('should calculate not empty point angle', () => {
		expect(Point.angle({ x: 3, y: 4 })).toBeCloseTo(0.9272952180016122, PRECISION);
	});
});

describe('point equals', () => {
	it('should equal of two points', () => {
		expect(Point.equals({ x: 1, y: 2 }, { x: 1, y: 2 })).toBeTruthy();
	});
	it('should not equal of two points', () => {
		expect(Point.equals({ x: 1, y: 2 }, { x: 3, y: 2 })).toBeFalsy();
	});
	it('should not equal of two points', () => {
		expect(Point.equals({ x: 1, y: 2 }, { x: 1, y: 3 })).toBeFalsy();
	});
	it('should not equal of two points', () => {
		expect(() => {
			expect(Point.equals(null, null));
		}).toThrow();
	});
	it('should not equal of two points', () => {
		expect(() => {
			expect(Point.equals({ x: 1, y: 2 }, null));
		}).toThrow();
	});
	it('should not equal of two points', () => {
		expect(() => {
			expect(Point.equals(null, { x: 1, y: 2 }));
		}).toThrow();
	});
});

describe('point set empty', () => {
	it('should set point empty', () => {
		const p: Point = { x: 123, y: 456 };
		Point.setEmpty(p);
		expect(p).toEqual(Point.empty());
	});
});

describe('point is empty', () => {
	it('point should be empty', () => {
		expect(Point.isEmpty(Point.empty())).toBeTruthy();
	});
	it('point should not be empty', () => {
		expect(Point.isEmpty({ x: 1, y: 2 })).toBeFalsy();
	});
});

describe('point copy', () => {
	it('should copy values from point', () => {
		const p: Point = { x: 1, y: 2 };
		Point.copy({ x: 3, y: 4 }, p);
		expect(p).toEqual({ x: 3, y: 4 });
	});
	it('should throw when copy value is null', () => {
		expect(() => {
			Point.copy(null, { x: 1, y: 2 });
		}).toThrow();
	});
});

describe('point normalize', () => {
	it('should normalize empty point', () => {
		const p = Point.empty();
		Point.normalize(p, 1);
		expect(p).toEqual(Point.empty());
	});
	it('should normalize point', () => {
		const p: Point = { x: 3, y: 4 };
		Point.normalize(p, 10);
		expect(p).toEqual({ x: 6, y: 8 });
	});
	it('should normalize negative point', () => {
		const p: Point = { x: -4, y: -3 };
		Point.normalize(p, 10);
		expect(p).toEqual({ x: -8, y: -6 });
	});
});

describe('point distance', () => {
	it('should get distance between two equal points', () => {
		expect(Point.distance({ x: 1, y: 2 }, { x: 1, y: 2 })).toBe(0);
	});
	it('should get distance between two points', () => {
		expect(Point.distance({ x: 1, y: 2 }, { x: 4, y: 6 })).toBe(5);
	});
	it('should throws if points are null', () => {
		expect(() => {
			Point.distance(null, null);
		}).toThrow();

		expect(() => {
			Point.distance({ x: 1, y: 2 }, null);
		}).toThrow();

		expect(() => {
			Point.distance(null, Point.empty());
		}).toThrow();
	});
});

describe('point interpolate', () => {
	it('should interpolate center point', () => {
		const p = Point.empty();
		Point.interpolate({ x: 1, y: 2 }, { x: 3, y: 4 }, 0.5, p);
		expect(p).toEqual({ x: 2, y: 3 });
	});
	it('should interpolate begin point', () => {
		const p = Point.empty();
		Point.interpolate({ x: 1, y: 2 }, { x: 3, y: 4 }, 0, p);
		expect(p).toEqual({ x: 1, y: 2 });
	});
	it('should interpolate end point', () => {
		const p = Point.empty();
		Point.interpolate({ x: 1, y: 2 }, { x: 3, y: 4 }, 1, p);
		expect(p).toEqual({ x: 3, y: 4 });
	});
	it('should interpolate outside point', () => {
		const p = Point.empty();
		Point.interpolate({ x: 1, y: 2 }, { x: 3, y: 4 }, 2.5, p);
		expect(p).toEqual({ x: 6, y: 7 });
	});
	it('should throws if points are null', () => {
		expect(() => {
			Point.interpolate(null, null, 0, Point.empty());
		}).toThrow();
	});
});

describe('point polar', () => {
	it('should create horizontal point', () => {
		const p = Point.empty();
		Point.polar(p, 10, 0);
		expect(p).toEqual({ x: 10, y: 0 });
	});
	it('should create vertical point', () => {
		const p = Point.empty();
		Point.polar(p, 5, Math.PI / 2);
		expect(p.x).toBeCloseTo(0.00000, PRECISION);
		expect(p.y).toBeCloseTo(5.00000, PRECISION);
	});
	it('should create point in polar space', () => {
		const p = Point.empty();
		Point.polar(p, 2.345, 1.347);
		expect(p.x).toBeCloseTo(0.5204325736928448, PRECISION);
		expect(p.y).toBeCloseTo(2.286520268057872, PRECISION);
	});
});
