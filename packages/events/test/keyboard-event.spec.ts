import KeyboardEvent from '../src/keyboard-event';

describe('event keyCode', () => {
	it('should get event keyCode', () => {
		expect(new KeyboardEvent('test', false, 55).keyCode).toBe(55);
	});
});

describe('event toString', () => {
	it('should get string from event', () => {
		expect(new KeyboardEvent('test', false, 55).toString())
			.toBe('KeyboardEvent: { type: test, cancelable: false, keyCode: 55 }');
	});
});

describe('event clone', () => {
	it('should get clone of event', () => {
		const type = 'test';
		expect(new KeyboardEvent(type, false, 55).clone())
			.toEqual(new KeyboardEvent(type, false, 55));
	});
});
