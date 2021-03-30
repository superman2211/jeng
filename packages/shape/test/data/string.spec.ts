import { GraphicsStringReader } from '../../src/data/string';

const reader = new GraphicsStringReader();

describe('rectangle shape', () => {
	it('should read rectangle', () => {
		reader.setPath('M 10 10.00 H 90.0000    V 90 H   10 L 10    10   Z');

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({ type: 'moveTo', x: 10, y: 10 });

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({ type: 'lineTo', x: 90, y: 10 });

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({ type: 'lineTo', x: 90, y: 90 });

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({ type: 'lineTo', x: 10, y: 90 });

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({ type: 'lineTo', x: 10, y: 10 });

		expect(reader.readNext()).toBeFalsy();
	});

	it('should read relative rectangle', () => {
		reader.setPath('m 10 10.00 h 90.0000 v 90 h 	-90 l 0 -90');

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({ type: 'moveTo', x: 10, y: 10 });

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({ type: 'lineTo', x: 100, y: 10 });

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({ type: 'lineTo', x: 100, y: 100 });

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({ type: 'lineTo', x: 10, y: 100 });

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({ type: 'lineTo', x: 10, y: 10 });

		expect(reader.readNext()).toBeFalsy();
	});

	it('should read cubic curve', () => {
		reader.setPath('M 10 10 C 20 20, 40 20, 50 10');

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({ type: 'moveTo', x: 10, y: 10 });

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({
			type: 'cubicCurveTo',
			cx: 20,
			cy: 20,
			sx: 40,
			sy: 20,
			x: 50,
			y: 10,
		});

		expect(reader.readNext()).toBeFalsy();
	});

	it('should read relative cubic curve', () => {
		reader.setPath('m 100 100 c 20 20 40 20 50 10');

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({ type: 'moveTo', x: 100, y: 100 });

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({
			type: 'cubicCurveTo',
			cx: 120,
			cy: 120,
			sx: 140,
			sy: 120,
			x: 150,
			y: 110,
		});

		expect(reader.readNext()).toBeFalsy();
	});

	it('should read short cubic curve', () => {
		reader.setPath('M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80');

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({ type: 'moveTo', x: 10, y: 80 });

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({
			type: 'cubicCurveTo',
			cx: 40,
			cy: 10,
			sx: 65,
			sy: 10,
			x: 95,
			y: 80,
		});

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({
			type: 'cubicCurveTo',
			cx: 125,
			cy: 150,
			sx: 150,
			sy: 150,
			x: 180,
			y: 80,
		});

		expect(reader.readNext()).toBeFalsy();
	});

	it('should read relative short cubic curve', () => {
		reader.setPath('m 10 80 c 40 10, 65 10, 95 80 s 65 70, 85 0');

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({ type: 'moveTo', x: 10, y: 80 });

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({
			type: 'cubicCurveTo',
			cx: 50,
			cy: 90,
			sx: 75,
			sy: 90,
			x: 105,
			y: 160,
		});

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({
			type: 'cubicCurveTo',
			cx: 135,
			cy: 230,
			sx: 170,
			sy: 230,
			x: 190,
			y: 160,
		});

		expect(reader.readNext()).toBeFalsy();
	});

	it('should read quadratic curve', () => {
		reader.setPath('M 10 80 Q 95 10 180 80');

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({ type: 'moveTo', x: 10, y: 80 });

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({
			type: 'curveTo',
			cx: 95,
			cy: 10,
			x: 180,
			y: 80,
		});

		expect(reader.readNext()).toBeFalsy();
	});

	it('should read relative quadratic curve', () => {
		reader.setPath('m 10 80 q 85 -70 170 0');

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({ type: 'moveTo', x: 10, y: 80 });

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({
			type: 'curveTo',
			cx: 95,
			cy: 10,
			x: 180,
			y: 80,
		});

		expect(reader.readNext()).toBeFalsy();
	});

	it('should read quadratic short curve', () => {
		reader.setPath('M 10 80 Q 52.5 10, 95 80 T 180 80');

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({ type: 'moveTo', x: 10, y: 80 });

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({
			type: 'curveTo',
			cx: 52.5,
			cy: 10,
			x: 95,
			y: 80,
		});

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({
			type: 'curveTo',
			cx: 137.5,
			cy: 150,
			x: 180,
			y: 80,
		});

		expect(reader.readNext()).toBeFalsy();
	});

	it('should read relative quadratic short curve', () => {
		reader.setPath('m 10 80 q 42.5 -70, 85 0 t 95 80');

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({ type: 'moveTo', x: 10, y: 80 });

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({
			type: 'curveTo',
			cx: 52.5,
			cy: 10,
			x: 95,
			y: 80,
		});

		expect(reader.readNext()).toBeTruthy();
		expect(reader.getCommand()).toMatchObject({
			type: 'curveTo',
			cx: 137.5,
			cy: 150,
			x: 190,
			y: 160,
		});

		expect(reader.readNext()).toBeFalsy();
	});
});
