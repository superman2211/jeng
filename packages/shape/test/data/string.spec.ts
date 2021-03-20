import { GraphicsStringReader } from '../../src/data/string';

const reader = new GraphicsStringReader();

describe('rectangle shape', () => {
	it('should read rectangle', () => {
		reader.setPath('M 10 10.00 H 90.0000    V 90 H   10 L 10    10   Z');

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toEqual({ type: 'moveTo', x: 10, y: 10 });

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toEqual({ type: 'lineTo', x: 90, y: 10 });

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toEqual({ type: 'lineTo', x: 90, y: 90 });

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toEqual({ type: 'lineTo', x: 10, y: 90 });

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toEqual({ type: 'lineTo', x: 10, y: 10 });

		expect(reader.readNext()).toBeFalsy();
	});
});
