import { Point, Matrix } from '@e2d/geom';
import DisplayObject from '../src/display-object';

describe('point length', () => {
	it('should calculate empty point length', () => {
		expect(new Point().length).toBe(0);
	});
	it('should calculate not empty point length', () => {
		expect(new Point(3, 4).length).toBe(5);
	});
	it('should create display object', () => {
		const object = new DisplayObject();
		expect(object.x).toBe(0);
		expect(object.transform.matrix).toEqual(new Matrix());
	});
});
