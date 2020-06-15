import Rectangle from '../src/rectangle';
import Point from '../src/point';

describe('rectangle left', () => {
	it('should get left of empty rectangle', () => {
		expect(new Rectangle().left).toBe(0);
	});
	it('should get left of rectangle', () => {
		expect(new Rectangle(1).left).toBe(1);
	});
	it('should set left of rectangle', () => {
		expect(new Rectangle(1).left).toBe(1);
	});
});

describe('rectangle right', () => {
	it('should get right of empty rectangle', () => {
		expect(new Rectangle().right).toBe(0);
	});
	it('should get right of rectangle', () => {
		expect(new Rectangle(1, 0, 1).right).toBe(2);
	});
});

describe('rectangle top', () => {
	it('should get top of empty rectangle', () => {
		expect(new Rectangle().top).toBe(0);
	});
	it('should get top of rectangle', () => {
		expect(new Rectangle(0, -1).top).toBe(-1);
	});
});

describe('rectangle bottom', () => {
	it('should get bottom of empty rectangle', () => {
		expect(new Rectangle().bottom).toBe(0);
	});
	it('should get bottom of rectangle', () => {
		expect(new Rectangle(0, -1, 0, 2).bottom).toBe(1);
	});
});

describe('rectangle properties', () => {
	it('should set properties to rectangle', () => {
		const rect = new Rectangle();
		rect.left = 10;
		rect.right = 100;
		rect.top = -20;
		rect.bottom = 150;
		expect(rect).toEqual(new Rectangle(10, -20, 90, 170));
	});
	it('should set properties to rectangle', () => {
		const rect = new Rectangle();
		rect.topLeft = new Point(10, -20);
		rect.bottomRight = new Point(100, 150);
		expect(rect).toEqual(new Rectangle(10, -20, 90, 170));
	});
	it('should throw when set null topLeft', () => {
		expect(() => {
			const rect = new Rectangle();
			rect.topLeft = null;
		}).toThrow();
	});
});

describe('rectangle topLeft', () => {
	it('should get topLeft of empty rectangle', () => {
		expect(new Rectangle().topLeft).toEqual(new Point());
	});
	it('should get topLeft of rectangle', () => {
		expect(new Rectangle(1, 2).topLeft).toEqual(new Point(1, 2));
	});
});

describe('rectangle bottomRight', () => {
	it('should get bottomRight of empty rectangle', () => {
		expect(new Rectangle().bottomRight).toEqual(new Point());
	});
	it('should get bottomRight of rectangle', () => {
		expect(new Rectangle(1, 2, 3, 4).bottomRight).toEqual(new Point(4, 6));
	});
});

describe('rectangle toString', () => {
	it('should get string of rectangle', () => {
		expect(new Rectangle(1, 2, 3, 4).toString()).toBe('{ x: 1, y: 2, width: 3, height: 4 }');
	});
});

describe('rectangle clone', () => {
	it('should clone of rectangle', () => {
		expect(new Rectangle(1, 2, 3, 4).clone()).toEqual(new Rectangle(1, 2, 3, 4));
	});
});

describe('rectangle contains', () => {
	it('should not contains point in rectangle', () => {
		expect(new Rectangle(1, 2, 3, 4).contains(10, 20)).toBeFalsy();
	});
	it('should contains point in rectangle', () => {
		expect(new Rectangle(1, 2, 3, 4).contains(2, 3)).toBeTruthy();
	});
	it('should contains point in left side of rectangle', () => {
		expect(new Rectangle(1, 2, 3, 4).contains(1, 3)).toBeTruthy();
	});
	it('should not contains point in bottom side of rectangle', () => {
		expect(new Rectangle(1, 2, 3, 4).contains(2, 6)).toBeFalsy();
	});
});

describe('rectangle containsPoint', () => {
	it('should not contains point in rectangle', () => {
		expect(new Rectangle(1, 2, 3, 4).containsPoint(new Point(-10, -20))).toBeFalsy();
	});
	it('should contains point in rectangle', () => {
		expect(new Rectangle(1, 2, 3, 4).containsPoint(new Point(2, 3))).toBeTruthy();
	});
	it('should throw when pass null point', () => {
		expect(() => {
			new Rectangle().containsPoint(null);
		}).toThrow();
	});
});

describe('rectangle containsRect', () => {
	it('should not contains rectangle', () => {
		expect(new Rectangle(1, 2, 3, 4).containsRect(new Rectangle(-10, -20, 1, 2))).toBeFalsy();
	});
	it('should contains rectangle', () => {
		expect(new Rectangle(1, 2, 3, 4).containsRect(new Rectangle(2, 3, 0.5, 0.5))).toBeTruthy();
	});
	it('should contains empty rectangle', () => {
		expect(new Rectangle(1, 2, 3, 4).containsRect(new Rectangle(2, 3, 0, 0))).toBeTruthy();
	});
	it('should throw when pass null rectangle', () => {
		expect(() => {
			new Rectangle().containsRect(null);
		}).toThrow();
	});
});

describe('rectangle copyFrom', () => {
	it('should copy values from rectangle', () => {
		const rect = new Rectangle(1, 2, 3, 4);
		rect.copyFrom(new Rectangle(2, 3, 4, 5));
		expect(rect).toEqual(new Rectangle(2, 3, 4, 5));
	});
	it('should throw when pass null rectangle', () => {
		expect(() => {
			new Rectangle().copyFrom(null);
		}).toThrow();
	});
});

describe('rectangle equals', () => {
	it('should equals to another rectangle', () => {
		expect(new Rectangle(1, 2, 3, 4).equalsRect(new Rectangle(1, 2, 3, 4))).toBeTruthy();
	});
	it('should not equals to another rectangle', () => {
		expect(new Rectangle(1, 2, 3, 4).equalsRect(new Rectangle(2, 3, 4, 5))).toBeFalsy();
	});
	it('should be equal to oneself', () => {
		const rect = new Rectangle(1, 2, 3, 4);
		expect(rect.equalsRect(rect)).toBeTruthy();
	});
	it('should not equals to null', () => {
		expect(new Rectangle().equalsRect(null)).toBeFalsy();
	});
});

describe('rectangle inflate', () => {
	it('should inflate rectangle', () => {
		const rect = new Rectangle(1, 2, 3, 4);
		rect.inflate(1, 2);
		expect(rect).toEqual(new Rectangle(0, 0, 5, 8));
	});
	it('should inflate rectangle inside', () => {
		const rect = new Rectangle(1, 2, 3, 4);
		rect.inflate(-1, -1);
		expect(rect).toEqual(new Rectangle(2, 3, 1, 2));
	});
});

describe('rectangle inflatePoint', () => {
	it('should inflate rectangle', () => {
		const rect = new Rectangle(1, 2, 3, 4);
		rect.inflatePoint(new Point(1, 2));
		expect(rect).toEqual(new Rectangle(0, 0, 5, 8));
	});
	it('should throw when pass null point', () => {
		expect(() => {
			new Rectangle().inflatePoint(null);
		}).toThrow();
	});
});

describe('rectangle round', () => {
	it('should round rectangle values', () => {
		const rect = new Rectangle(1.4, 2.5, 3.678, 4.123);
		rect.round();
		expect(rect).toEqual(new Rectangle(1, 3, 4, 4));
	});
});

describe('rectangle intersection', () => {
	it('should get intersection of two rectangles', () => {
		const rect1 = new Rectangle(30, 50, 100, 200);
		const rect2 = new Rectangle(40, 100, 100, 100);
		expect(rect1.intersection(rect2)).toEqual(new Rectangle(40, 100, 90, 100));
	});
	it('should get intersection of two rectangles', () => {
		const rect1 = new Rectangle(10, 10, 10, 10);
		const rect2 = new Rectangle(-100, -100, 10, 10);
		expect(rect1.intersection(rect2)).toEqual(new Rectangle());
	});
	it('should get intersection of two rectangles', () => {
		const rect1 = new Rectangle(10, 100, 10, 10);
		const rect2 = new Rectangle(10, 10, 10, 10);
		expect(rect1.intersection(rect2)).toEqual(new Rectangle());
	});
	it('should get intersection of two rectangles', () => {
		const rect1 = new Rectangle(10, 10, 10, 10);
		const rect2 = new Rectangle(10, 100, 10, 10);
		expect(rect1.intersection(rect2)).toEqual(new Rectangle());
	});
	it('should get empty intersection of two rectangles', () => {
		const rect1 = new Rectangle(30, 50, 100, 200);
		const rect2 = new Rectangle(400, 1000, 100, 100);
		expect(rect1.intersection(rect2)).toEqual(new Rectangle());
	});
	it('should throw when pass null rectangle', () => {
		expect(() => {
			new Rectangle().intersection(null);
		}).toThrow();
	});
});

describe('rectangle intersects', () => {
	it('should intersects of two rectangles', () => {
		const rect1 = new Rectangle(30, 50, 100, 200);
		const rect2 = new Rectangle(40, 100, 100, 100);
		expect(rect1.intersects(rect2)).toBeTruthy();
	});
	it('should get intersects of two rectangles', () => {
		const rect1 = new Rectangle(10, 10, 10, 10);
		const rect2 = new Rectangle(-100, -100, 10, 10);
		expect(rect1.intersects(rect2)).toBeFalsy();
	});
	it('should get intersects of two rectangles', () => {
		const rect1 = new Rectangle(10, 100, 10, 10);
		const rect2 = new Rectangle(10, 10, 10, 10);
		expect(rect1.intersects(rect2)).toBeFalsy();
	});
	it('should get intersects of two rectangles', () => {
		const rect1 = new Rectangle(10, 10, 10, 10);
		const rect2 = new Rectangle(10, 100, 10, 10);
		expect(rect1.intersects(rect2)).toBeFalsy();
	});
	it('should not intersects of two rectangles', () => {
		const rect1 = new Rectangle(30, 50, 100, 200);
		const rect2 = new Rectangle(400, 1000, 100, 100);
		expect(rect1.intersects(rect2)).toBeFalsy();
	});
	it('should throw when pass null rectangle', () => {
		expect(() => {
			new Rectangle().intersects(null);
		}).toThrow();
	});
});

describe('rectangle isEmpty', () => {
	it('should be empty', () => {
		expect(new Rectangle().isEmpty()).toBeTruthy();
	});
	it('should be not empty', () => {
		expect(new Rectangle(1, 2, 3, 4).isEmpty()).toBeFalsy();
	});
	it('should be empty when width or height is negative', () => {
		expect(new Rectangle(1, 2, -3, -4).isEmpty()).toBeTruthy();
	});
});

describe('rectangle offset', () => {
	it('should offset rectangle', () => {
		const rect = new Rectangle(1, 2, 3, 4);
		rect.offset(1, 2);
		expect(rect).toEqual(new Rectangle(2, 4, 3, 4));
	});
});

describe('rectangle offsetPoint', () => {
	it('should offset rectangle via point', () => {
		const rect = new Rectangle(1, 2, 3, 4);
		rect.offsetPoint(new Point(1, 2));
		expect(rect).toEqual(new Rectangle(2, 4, 3, 4));
	});
	it('should throw when pass null point', () => {
		expect(() => {
			new Rectangle().offsetPoint(null);
		}).toThrow();
	});
});

describe('rectangle setEmpty', () => {
	it('should set rectangle to empty', () => {
		const rect = new Rectangle(1, 2, 3, 4);
		rect.setEmpty();
		expect(rect).toEqual(new Rectangle());
	});
});

describe('rectangle setTo', () => {
	it('should set default values to rectangle', () => {
		const rect = new Rectangle(1, 2, 3, 4);
		rect.setTo();
		expect(rect).toEqual(new Rectangle());
	});
	it('should set values to rectangle', () => {
		const rect = new Rectangle(1, 2, 3, 4);
		rect.setTo(2, 3, 4, 5);
		expect(rect).toEqual(new Rectangle(2, 3, 4, 5));
	});
});

describe('rectangle union', () => {
	it('should get union of two rectangles', () => {
		const rect1 = new Rectangle(30, 50, 100, 200);
		const rect2 = new Rectangle(40, 100, 100, 100);
		expect(rect1.union(rect2)).toEqual(new Rectangle(30, 50, 110, 200));
	});
	it('should get union of two rectangles', () => {
		const rect1 = new Rectangle(10, 100, 10, 10);
		const rect2 = new Rectangle(10, 110, 10, 10);
		expect(rect1.union(rect2)).toEqual(new Rectangle(10, 100, 10, 20));
	});
	it('should get union of two rectangles', () => {
		const rect1 = new Rectangle(100, 200, 300, 400);
		const rect2 = new Rectangle(-100, -200, 300, 400);
		expect(rect1.union(rect2)).toEqual(new Rectangle(-100, -200, 500, 800));
	});
	it('should get union as first when second is empty', () => {
		const rect1 = new Rectangle(1, 2, 3, 4);
		const rect2 = new Rectangle();
		expect(rect1.union(rect2)).toEqual(new Rectangle(1, 2, 3, 4));
	});
	it('should get union as second when first is empty', () => {
		const rect1 = new Rectangle();
		const rect2 = new Rectangle(1, 2, 3, 4);
		expect(rect1.union(rect2)).toEqual(new Rectangle(1, 2, 3, 4));
	});
	it('should throw when pass null rectangle', () => {
		expect(() => {
			new Rectangle().union(null);
		}).toThrow();
	});
});

describe('rectangle contract', () => {
	it('should contract rectangle', () => {
		const rect = new Rectangle(30, 50, 100, 200);
		rect.contract(10, 20, 30, 40);
		expect(rect).toEqual(new Rectangle(30, 50, 10, 10));
	});
	it('should get contract rectangle', () => {
		const rect = new Rectangle(30, 50, 100, 200);
		rect.contract(100, 200, 100, 200);
		expect(rect).toEqual(new Rectangle(100, 200, 30, 50));
	});
	it('should contract empty rectangle', () => {
		const rect = new Rectangle();
		rect.contract(10, 20, 30, 40);
		expect(rect).toEqual(new Rectangle());
	});
});

describe('rectangle expand', () => {
	it('should expand rectangle', () => {
		const rect = new Rectangle(30, 50, 100, 200);
		rect.expand(10, 20, 30, 40);
		expect(rect).toEqual(new Rectangle(10, 20, 120, 230));
	});
	it('should get expand rectangle', () => {
		const rect = new Rectangle(30, 50, 100, 200);
		rect.expand(100, 200, 100, 200);
		expect(rect).toEqual(new Rectangle(30, 50, 170, 350));
	});
	it('should get extend empty rectangle', () => {
		const rect = new Rectangle();
		rect.expand(10, 20, 100, 200);
		expect(rect).toEqual(new Rectangle(10, 20, 100, 200));
	});
});

describe('rectangle extend', () => {
	it('should extend rectangle', () => {
		const rect = new Rectangle(30, 50, 100, 200);
		rect.extend(10, 20);
		expect(rect).toEqual(new Rectangle(10, 20, 120, 230));
	});
	it('should get extend rectangle', () => {
		const rect = new Rectangle(30, 50, 100, 200);
		rect.extend(100, 200);
		expect(rect).toEqual(new Rectangle(30, 50, 100, 200));
	});
	it('should get extend empty rectangle', () => {
		const rect = new Rectangle();
		rect.extend(100, 200);
		expect(rect).toEqual(new Rectangle(0, 0, 100, 200));
	});
});
