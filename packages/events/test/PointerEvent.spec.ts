import { Point } from '@e2d/geom';
import PointerEvent from '../src/PointerEvent';

describe('event stageX', () => {
	it('should get event stageX', () => {
		expect(new PointerEvent('test', false, 1, 2, 3, 4).stageX).toBe(1);
	});
});

describe('event stageY', () => {
	it('should get event stageY', () => {
		expect(new PointerEvent('test', false, 1, 2, 3, 4).stageY).toBe(2);
	});
});

describe('event localX', () => {
	it('should get event localX', () => {
		expect(new PointerEvent('test', false, 1, 2, 3, 4).localX).toBe(3);
	});
});

describe('event localY', () => {
	it('should get event localY', () => {
		expect(new PointerEvent('test', false, 1, 2, 3, 4).localY).toBe(4);
	});
});

describe('event stagePoint', () => {
	it('should get event stagePoint', () => {
		expect(new PointerEvent('test', false, 1, 2, 3, 4).stagePoint).toEqual(new Point(1, 2));
	});
});

describe('event localPoint', () => {
	it('should get event localPoint', () => {
		expect(new PointerEvent('test', false, 1, 2, 3, 4).localPoint).toEqual(new Point(3, 4));
	});
});

describe('event toString', () => {
	it('should get string from event', () => {
		expect(new PointerEvent('test', false, 1, 2, 3, 4).toString())
			.toBe('PointerEvent: { type: test, cancelable: false, stageX: 1, stageY: 2, localX: 3, localY: 4 }');
	});
});

describe('event clone', () => {
	it('should get clone of event', () => {
		const type = 'test';
		expect(new PointerEvent(type, false, 1, 2, 3, 4).clone())
			.toEqual(new PointerEvent(type, false, 1, 2, 3, 4));
	});
});

describe('event cloneWithType', () => {
	it('should get clone of event with type', () => {
		const type = 'test';
		expect(new PointerEvent('test2', false, 1, 2, 3, 4).cloneWithType(type))
			.toEqual(new PointerEvent(type, false, 1, 2, 3, 4));
	});
});
