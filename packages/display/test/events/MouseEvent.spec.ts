import MouseEvent from '../../src/events/MouseEvent';

describe('event constructor', () => {
	it('should create event', () => {
		expect(new MouseEvent('test', false)).toEqual(new MouseEvent('test', false));
	});
});

describe('event deltaX', () => {
	it('should get event deltaX', () => {
		expect(new MouseEvent('test', false, 1, 2, 3, 4, 5, 6).deltaX).toBe(5);
	});
});

describe('event deltaY', () => {
	it('should get event deltaY', () => {
		expect(new MouseEvent('test', false, 1, 2, 3, 4, 5, 6).deltaY).toBe(6);
	});
});

describe('event buttonDown', () => {
	it('should get event buttonDown', () => {
		expect(new MouseEvent('test', false, 1, 2, 3, 4, 5, 6, true).buttonDown).toBeTruthy();
	});
});

describe('event toString', () => {
	it('should get string from event', () => {
		expect(new MouseEvent('test', false, 1, 2, 3, 4, 5, 6, true).toString())
			.toBe('MouseEvent: { type: test, cancelable: false, stageX: 1, stageY: 2, localX: 3, localY: 4, deltaX: 5, deltaY: 6, buttonDown: true }');
	});
});

describe('event clone', () => {
	it('should get clone of event', () => {
		const type = 'test';
		expect(new MouseEvent(type, false, 1, 2, 3, 4, 5, 6, true).clone())
			.toEqual(new MouseEvent(type, false, 1, 2, 3, 4, 5, 6, true));
	});
});

describe('event cloneWithType', () => {
	it('should get clone of event with type', () => {
		const type = 'test';
		expect(new MouseEvent('test2', false, 1, 2, 3, 4, 5, 6).cloneWithType(type))
			.toEqual(new MouseEvent(type, false, 1, 2, 3, 4, 5, 6, false));
	});
});
