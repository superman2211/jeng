import ColorTransform from './color-transform';

describe('color transform color', () => {
	it('should get color from color tranform', () => {
		expect(new ColorTransform().color).toBe(0);
	});
	it('should sec custom color', () => {
		const c = new ColorTransform();
		c.color = 0x556677;
		expect(c.color).toBe(0x556677);
		expect(c).toEqual(new ColorTransform(0, 0, 0, 1, 0x55, 0x66, 0x77));
	});
});

describe('color transform toString', () => {
	it('should get string from color tranform', () => {
		const c = new ColorTransform(1, 2, 3, 4, 5, 6, 7, 8);
		const targetString = '{ redMultiplier: 1, greenMultiplier: 2, blueMultiplier: 3, alphaMultiplier: 4, redOffset: 5, greenOffset: 6, blueOffset: 7, alphaOffset: 8 }';
		expect(c.toString()).toBe(targetString);
	});
});

describe('color transform clone', () => {
	it('should get clone of color tranform', () => {
		const c = new ColorTransform(1, 2, 3, 4, 5, 6, 7, 8);
		expect(c.clone()).toEqual(new ColorTransform(1, 2, 3, 4, 5, 6, 7, 8));
	});
});

describe('color transform concat', () => {
	it('should concat two color tranforms', () => {
		const c1 = new ColorTransform(1, 2, 3, 4, 5, 6, 7, 8);
		const c2 = new ColorTransform(8, 7, 6, 5, 4, 3, 2, 1);
		c1.concat(c2);
		expect(c1).toEqual(new ColorTransform(8, 14, 18, 20, 44, 45, 44, 41));
	});
	it('should throw when pass null color transform', () => {
		expect(() => {
			new ColorTransform().concat(null);
		}).toThrow();
	});
});

describe('color transform copyFrom', () => {
	it('should copy from color tranform', () => {
		const c1 = new ColorTransform(1, 2, 3, 4, 5, 6, 7, 8);
		const c2 = new ColorTransform(2, 3, 4, 5, 6, 7, 8, 9);
		c1.copyFrom(c2);
		expect(c1).toEqual(new ColorTransform(2, 3, 4, 5, 6, 7, 8, 9));
	});
	it('should throw when pass null color transform', () => {
		expect(() => {
			new ColorTransform().copyFrom(null);
		}).toThrow();
	});
});

describe('color transform combine', () => {
	it('should combine of two color tranforms', () => {
		const c1 = new ColorTransform(1, 2, 3, 4, 5, 6, 7, 8);
		const c2 = new ColorTransform(2, 3, 4, 5, 6, 7, 8, 9);
		c1.combine(c2);
		expect(c1).toEqual(new ColorTransform(2, 6, 12, 20, 11, 13, 15, 17));
	});
	it('should throw when pass null color transform', () => {
		expect(() => {
			new ColorTransform().combine(null);
		}).toThrow();
	});
});

describe('color transform identity', () => {
	it('should identity color tranform', () => {
		const c = new ColorTransform(1, 2, 3, 4, 5, 6, 7, 8);
		c.identity();
		expect(c).toEqual(new ColorTransform());
	});
});

describe('color transform equals', () => {
	it('should compare of two color tranforms', () => {
		const c1 = new ColorTransform(1, 2, 3, 4, 5, 6, 7, 8);
		const c2 = new ColorTransform(1, 2, 3, 4, 5, 6, 7, 8);
		expect(c1.equals(c2)).toBeTruthy();
	});
	it('should compare of two color tranforms', () => {
		const c1 = new ColorTransform(1, 2, 3, 4, 5, 6, 7, 8);
		const c2 = new ColorTransform(2, 3, 4, 5, 6, 7, 8, 9);
		expect(c1.equals(c2)).toBeFalsy();
	});
	it('should compare of two color tranforms with skipped alpha', () => {
		const c1 = new ColorTransform(1, 2, 3, 4, 5, 6, 7, 8);
		const c2 = new ColorTransform(1, 2, 3, 9, 5, 6, 7, 8);
		expect(c1.equals(c2, true)).toBeTruthy();
	});
	it('should compare color tranforms with null', () => {
		const c = new ColorTransform(1, 2, 3, 4, 5, 6, 7, 8);
		expect(c.equals(null)).toBeFalsy();
	});
});

describe('color transform isDefault', () => {
	it('should check color tranform is default', () => {
		expect(new ColorTransform().isDefault()).toBeTruthy();
	});
	it('should check color tranform is default', () => {
		expect(new ColorTransform(1, 2, 3, 4, 5, 6, 7, 8).isDefault()).toBeFalsy();
	});
});

describe('color transform pool', () => {
	it('should create color tranform from empty pool', () => {
		ColorTransform.poolSize = 0;
		expect(ColorTransform.create()).toEqual(new ColorTransform());
		expect(ColorTransform.poolSize).toBe(0);
	});
	it('should dispose color transform to pool', () => {
		ColorTransform.poolSize = 0;
		const matrix = new ColorTransform(1, 2, 3, 4, 5, 6);
		ColorTransform.dispose(matrix);
		expect(ColorTransform.poolSize).toBe(1);
		expect(ColorTransform.create()).toEqual(new ColorTransform());
	});
	it('should dispose empty color tranform to pool', () => {
		ColorTransform.poolSize = 0;
		ColorTransform.dispose(null);
		expect(ColorTransform.poolSize).toBe(0);
	});
	it('should create color tranform from pool', () => {
		ColorTransform.poolSize = 3;
		expect(ColorTransform.create()).toEqual(new ColorTransform());
		expect(ColorTransform.poolSize).toBe(2);
	});
	it('should change color tranform pool size', () => {
		ColorTransform.poolSize = 5;
		ColorTransform.poolSize = 3;
		expect(ColorTransform.poolSize).toBe(3);
	});
});
