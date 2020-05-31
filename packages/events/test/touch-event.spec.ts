import TouchEvent from '../src/touch-event';

describe('event id', () => {
	it('should get event id', () => {
		expect(new TouchEvent('test', false, 1, 2, 3, 4, 5).id).toBe(5);
	});
});

describe('event toString', () => {
	it('should get string from event', () => {
		expect(new TouchEvent('test', false, 1, 2, 3, 4, 5).toString())
			.toBe('TouchEvent: { type: test, cancelable: false, stageX: 1, stageY: 2, localX: 3, localY: 4, id: 5 }');
	});
});

describe('event clone', () => {
	it('should get clone of event', () => {
		const type = 'test';
		expect(new TouchEvent(type, false, 1, 2, 3, 4, 5).clone())
			.toEqual(new TouchEvent(type, false, 1, 2, 3, 4, 5));
	});
});

describe('event cloneWithType', () => {
	it('should get clone of event with type', () => {
		const type = 'test';
		expect(new TouchEvent('test2', false, 1, 2, 3, 4, 5).cloneWithType(type))
			.toEqual(new TouchEvent(type, false, 1, 2, 3, 4, 5));
	});
});
