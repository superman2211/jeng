import Event from './event';
import EventDispatcher from './event-dispatcher';

describe('event constructor', () => {
	it('should create event with empty type', () => {
		expect(() => {
			new Event(null).toString();
		}).toThrow();
	});
});

describe('event type', () => {
	it('should get event type', () => {
		const type = 'test';
		expect(new Event(type).type).toBe(type);
	});
});

describe('event cancelable', () => {
	it('should get event cancelable property', () => {
		const type = 'test';
		expect(new Event(type).cancelable).toBeFalsy();
		expect(new Event(type, true).cancelable).toBeTruthy();
	});
});

describe('event target', () => {
	it('should throw when pass null event', () => {
		expect(() => {
			// eslint-disable-next-line no-console
			console.log(new Event('test').target);
		}).toThrow();
	});
	it('should set event target', () => {
		const dispatcher = new EventDispatcher();
		const event = new Event('test');
		(event as any)._target = dispatcher;
		expect(event.target).toBe(dispatcher);
	});
});

describe('event toString', () => {
	it('should get string from event', () => {
		expect(new Event('test').toString()).toBe('Event: { type: test, cancelable: false }');
	});
});

describe('event clone', () => {
	it('should get clone of event', () => {
		const type = 'test';
		expect(new Event(type).clone()).toEqual(new Event(type));
		expect(new Event(type, true).clone()).toEqual(new Event(type, true));
	});
});

describe('event cloneWithType', () => {
	it('should get clone of event with type', () => {
		const type = 'test';
		expect(new Event(type).cloneWithType(type)).toEqual(new Event(type));
		expect(new Event(type, true).cloneWithType(type)).toEqual(new Event(type, true));
	});
});

describe('event preventDefault', () => {
	it('should get event isDefaultPrevented property', () => {
		const event = new Event('test');
		event.preventDefault();
		expect(event.isDefaultPrevented).toBeTruthy();
	});
});

describe('event stopPropagation', () => {
	it('should get event isCanceled property', () => {
		const event = new Event('test', true);
		event.stopPropagation();
		expect(event.isCanceled).toBeTruthy();
	});
	it('should disable event stop propagation', () => {
		const event = new Event('test', false);
		event.stopPropagation();
		expect(event.isCanceled).toBeFalsy();
	});
});

describe('event stopImmediatePropagation', () => {
	it('should get event isCanceledNow property', () => {
		const event = new Event('test', true);
		event.stopImmediatePropagation();
		expect(event.isCanceled).toBeTruthy();
		expect(event.isCanceledNow).toBeTruthy();
	});
	it('should disable event stop propagation', () => {
		const event = new Event('test', false);
		event.stopImmediatePropagation();
		expect(event.isCanceled).toBeFalsy();
		expect(event.isCanceledNow).toBeFalsy();
	});
});
