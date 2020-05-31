import EventDispatcher from '../src/event-dispatcher';
import Event from '../src/event';

describe('EventDispatcher toString', () => {
	it('should get string from event dispatcher', () => {
		const dispatcher = new EventDispatcher();
		expect(dispatcher.toString()).toBe('EventDispatcher');
	});
});

describe('EventDispatcher addEventListener', () => {
	it('should add new event listeners', () => {
		const dispatcher = new EventDispatcher();
		dispatcher.addEventListener('test1', (e: Event) => e.toString());
		dispatcher.addEventListener('test2', (e: Event) => e.toString());
		expect(dispatcher.hasEventListener('test1')).toBeTruthy();
		expect(dispatcher.hasEventListener('test2')).toBeTruthy();
		expect(dispatcher.hasEventListener('test3')).toBeFalsy();
	});
	it('should add existent event listener', () => {
		const dispatcher = new EventDispatcher();
		const dispatchedEvents: number[] = [];
		const type = 'test';
		const callback = () => dispatchedEvents.push(1);
		dispatcher.addEventListener(type, callback);
		dispatcher.addEventListener(type, callback);
		dispatcher.addEventListener(type, () => dispatchedEvents.push(2));
		dispatcher.dispatchEvent(new Event(type));
		expect(dispatchedEvents).toEqual([1, 2]);
	});
	it('should check sequence of event listeners', () => {
		const dispatcher = new EventDispatcher();
		const dispatchedEvents: number[] = [];
		const type = 'test';
		dispatcher.addEventListener(type, () => dispatchedEvents.push(1));
		dispatcher.addEventListener(type, () => dispatchedEvents.push(2));
		dispatcher.addEventListener(type, () => dispatchedEvents.push(3));
		dispatcher.addEventListener(type, () => dispatchedEvents.push(4));
		dispatcher.addEventListener(type, () => dispatchedEvents.push(5));
		dispatcher.dispatchEvent(new Event(type));
		expect(dispatchedEvents).toEqual([1, 2, 3, 4, 5]);
	});
	it('should check priority of event listeners', () => {
		const dispatcher = new EventDispatcher();
		const dispatchedEvents: number[] = [];
		const type = 'test';
		dispatcher.addEventListener(type, () => dispatchedEvents.push(1));
		dispatcher.addEventListener(type, () => dispatchedEvents.push(2));
		dispatcher.addEventListener(type, () => dispatchedEvents.push(3), 10);
		dispatcher.addEventListener(type, () => dispatchedEvents.push(4), 1);
		dispatcher.addEventListener(type, () => dispatchedEvents.push(5), -1);
		dispatcher.dispatchEvent(new Event(type));
		expect(dispatchedEvents).toEqual([3, 4, 1, 2, 5]);
	});
	it('should throw when pass null event', () => {
		expect(() => {
			new EventDispatcher().addEventListener(null, (e) => e.toString());
		}).toThrow();
	});
	it('should throw when pass null callback', () => {
		expect(() => {
			new EventDispatcher().addEventListener('test', null);
		}).toThrow();
	});
});

describe('EventDispatcher removeEventListener', () => {
	it('should remove event listener', () => {
		const dispatcher = new EventDispatcher();
		const type = 'test';
		const callback = (e: Event) => e.toString();
		dispatcher.addEventListener(type, callback);
		expect(dispatcher.hasEventListener(type)).toBeTruthy();
		dispatcher.removeEventListener(type, callback);
		expect(dispatcher.hasEventListener(type)).toBeFalsy();
	});
	it('should remove nonexistent event listener', () => {
		const dispatcher = new EventDispatcher();
		dispatcher.removeEventListener('test', (e) => e.toString());
		expect(dispatcher.hasEventListener('test')).toBeFalsy();
	});
	it('should remove another nonexistent event listener', () => {
		const dispatcher = new EventDispatcher();
		dispatcher.addEventListener('test1', (e) => e.toString());
		dispatcher.removeEventListener('test1', (e) => e.toString());
		dispatcher.removeEventListener('test2', (e) => e.toString());
		expect(dispatcher.hasEventListener('test1')).toBeTruthy();
		expect(dispatcher.hasEventListener('test2')).toBeFalsy();
	});
	it('should throw when pass null event', () => {
		expect(() => {
			new EventDispatcher().removeEventListener(null, (e) => e.toString());
		}).toThrow();
	});
	it('should throw when pass null callback', () => {
		expect(() => {
			new EventDispatcher().removeEventListener('test', null);
		}).toThrow();
	});
});

describe('EventDispatcher hasEventListener', () => {
	it('should throw when pass null event type', () => {
		expect(() => {
			new EventDispatcher().hasEventListener(null);
		}).toThrow();
	});
});

describe('EventDispatcher dispatchEvent', () => {
	it('should check for empty events', () => {
		const dispatcher = new EventDispatcher();
		const dispatchedEvents: number[] = [];
		dispatcher.dispatchEvent(new Event('test1'));
		dispatcher.addEventListener('test2', () => dispatchedEvents.push(2));
		dispatcher.dispatchEvent(new Event('test1'));
		dispatcher.dispatchEvent(new Event('test2'));
		expect(dispatchedEvents).toEqual([2]);
	});
	it('should throw when pass null event', () => {
		expect(() => {
			new EventDispatcher().dispatchEvent(null);
		}).toThrow();
	});
});
