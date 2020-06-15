import Point from '../src/point';

const PRECISION = 5;

describe('point length', () => {
	it('should calculate empty point length', () => {
		expect(new Point().length).toBe(0);
	});
	it('should calculate not empty point length', () => {
		expect(new Point(3, 4).length).toBe(5);
	});
});

describe('point angle', () => {
	it('should calculate empty point angle', () => {
		expect(new Point().angle).toBe(0);
	});
	it('should calculate not empty point angle', () => {
		expect(new Point(3, 4).angle).toBeCloseTo(0.9272952180016122, PRECISION);
	});
});

describe('point clone', () => {
	it('should clone point', () => {
		expect(new Point(1, 2).clone()).toEqual(new Point(1, 2));
	});
});

describe('point equals', () => {
	it('should equal of two points', () => {
		expect(new Point(1, 2).equals(new Point(1, 2))).toBeTruthy();
	});
	it('should not equal of two points', () => {
		expect(new Point(1, 2).equals(new Point(3, 2))).toBeFalsy();
	});
	it('should not equal of two points', () => {
		expect(new Point(1, 2).equals(new Point(1, 3))).toBeFalsy();
	});
	it('should not equal of two points', () => {
		expect(() => {
			new Point(1, 2).equals(null);
		}).toThrow();
	});
});

describe('point setEmpty', () => {
	it('should set point empty', () => {
		const p = new Point(123, 456);
		p.setEmpty();
		expect(p).toEqual(new Point());
	});
});

describe('point setTo', () => {
	it('should set point values', () => {
		const p = new Point(1, 2);
		p.setTo(3, 4);
		expect(p).toEqual(new Point(3, 4));
	});
});

describe('point copyFrom', () => {
	it('should copy values from point', () => {
		const p = new Point(1, 2);
		p.copyFrom(new Point(3, 4));
		expect(p).toEqual(new Point(3, 4));
	});
	it('should throw when copy value is null', () => {
		expect(() => {
			new Point(1, 2).copyFrom(null);
		}).toThrow();
	});
});

describe('point add', () => {
	it('should add two empty points', () => {
		expect(new Point().add(new Point())).toEqual(new Point());
	});
	it('should add two non empty points', () => {
		expect(new Point(1, 2).add(new Point(3, 4))).toEqual(new Point(4, 6));
	});
	it('should throws when add null', () => {
		expect(() => {
			new Point(1, 2).add(null);
		}).toThrow();
	});
});

describe('point subtract', () => {
	it('should subtract two empty points', () => {
		expect(new Point().subtract(new Point())).toEqual(new Point());
	});
	it('should subtract two non empty points', () => {
		expect(new Point(1, 2).subtract(new Point(3, 4))).toEqual(new Point(-2, -2));
	});
	it('should throws when add null', () => {
		expect(() => {
			new Point(1, 2).subtract(null);
		}).toThrow();
	});
});

describe('point normalize', () => {
	it('should normalize empty point', () => {
		const p = new Point();
		p.normalize(1);
		expect(p).toEqual(new Point());
	});
	it('should normalize x ort', () => {
		const p = new Point(10, 0);
		p.normalize(1);
		expect(p).toEqual(new Point(1, 0));
	});
	it('should normalize y ort', () => {
		const p = new Point(0, 10);
		p.normalize(1);
		expect(p).toEqual(new Point(0, 1));
	});
	it('should normalize point', () => {
		const p = new Point(3, 4);
		p.normalize(10);
		expect(p).toEqual(new Point(6, 8));
	});
	it('should normalize negative point', () => {
		const p = new Point(-4, -3);
		p.normalize(10);
		expect(p).toEqual(new Point(-8, -6));
	});
});

describe('point offset', () => {
	it('should offset with empty values', () => {
		const p = new Point(1, 2);
		p.offset(0, 0);
		expect(p).toEqual(new Point(1, 2));
	});
	it('should offset', () => {
		const p = new Point(1, 2);
		p.offset(3, 4);
		expect(p).toEqual(new Point(4, 6));
	});
});

describe('point toString', () => {
	it('should get string from point', () => {
		expect(new Point(1, 2).toString()).toEqual('{ x: 1, y: 2 }');
	});
});

describe('point distance', () => {
	it('should get distance between two equal points', () => {
		expect(Point.distance(new Point(1, 2), new Point(1, 2))).toBe(0);
	});
	it('should get distance between two points', () => {
		expect(Point.distance(new Point(1, 2), new Point(4, 6))).toBe(5);
	});
	it('should throws if points are null', () => {
		expect(() => {
			Point.distance(null, null);
		}).toThrow();

		expect(() => {
			Point.distance(new Point(), null);
		}).toThrow();

		expect(() => {
			Point.distance(null, new Point());
		}).toThrow();
	});
});

describe('point interpolate', () => {
	it('should interpolate center point', () => {
		expect(Point.interpolate(new Point(1, 2), new Point(3, 4), 0.5)).toEqual(new Point(2, 3));
	});
	it('should interpolate begin point', () => {
		expect(Point.interpolate(new Point(1, 2), new Point(3, 4), 0)).toEqual(new Point(3, 4));
	});
	it('should interpolate end point', () => {
		expect(Point.interpolate(new Point(1, 2), new Point(3, 4), 1)).toEqual(new Point(1, 2));
	});
	it('should interpolate outside point', () => {
		expect(Point.interpolate(new Point(1, 2), new Point(3, 4), 2.5)).toEqual(new Point(-2, -1));
	});
	it('should throws if points are null', () => {
		expect(() => {
			Point.interpolate(null, null, 0);
		}).toThrow();

		expect(() => {
			Point.interpolate(new Point(), null, 0);
		}).toThrow();

		expect(() => {
			Point.interpolate(null, new Point(), 0);
		}).toThrow();
	});
});

describe('point polar', () => {
	it('should create horizontal point', () => {
		expect(Point.polar(10, 0)).toEqual(new Point(10, 0));
	});
	it('should create vertical point', () => {
		const p: Point = Point.polar(5, Math.PI / 2);
		expect(p.x).toBeCloseTo(0.00000, PRECISION);
		expect(p.y).toBeCloseTo(5.00000, PRECISION);
	});
	it('should create point in polar space', () => {
		const p: Point = Point.polar(2.345, 1.347);
		expect(p.x).toBeCloseTo(0.5204325736928448, PRECISION);
		expect(p.y).toBeCloseTo(2.286520268057872, PRECISION);
	});
});
