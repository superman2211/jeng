import { SHAPE, Shape, PathData } from '@jeng/shape';
import { Graphics } from '../../src/graphics';

describe('rectangle', () => {
	it('should make rectangle shape', () => {
		const shape: Shape = { type: SHAPE };

		const graphics = new Graphics(shape);
		graphics.beginFill(0xff0000, 0.5);
		graphics.moveTo(10, 10);
		graphics.lineTo(90, 10);
		graphics.lineTo(90, 90);
		graphics.lineTo(10, 90);
		graphics.lineTo(10, 10);

		const path = shape.data[0] as PathData;
		const { fill, data, type } = path;

		expect(type).toBe('path');
		expect(fill).toEqual({ type: 'solid', color: 0xff0000, alpha: 0.5 });
		expect(data[0]).toMatchObject({ type: 'moveTo', x: 10, y: 10 });
		expect(data[1]).toMatchObject({ type: 'lineTo', x: 90, y: 10 });
		expect(data[2]).toMatchObject({ type: 'lineTo', x: 90, y: 90 });
		expect(data[3]).toMatchObject({ type: 'lineTo', x: 10, y: 90 });
		expect(data[4]).toMatchObject({ type: 'lineTo', x: 10, y: 10 });
	});
});

describe('cubic curve', () => {
	it('should make cubic curve shape', () => {
		const shape: Shape = { type: SHAPE };

		const graphics = new Graphics(shape);
		graphics.lineStyle(2, 0xff00ff, 0.9);
		graphics.moveTo(10, 10);
		graphics.cubicCurveTo(20, 20, 40, 20, 50, 10);

		const path = shape.data[0] as PathData;
		const { stroke, data, type } = path;

		expect(type).toBe('path');
		expect(stroke).toMatchObject({ thickness: 2, fill: { type: 'solid', color: 0xff00ff, alpha: 0.9 } });
		expect(data[0]).toMatchObject({ type: 'moveTo', x: 10, y: 10 });
		expect(data[1]).toMatchObject({
			type: 'cubicCurveTo',
			cx: 20,
			cy: 20,
			sx: 40,
			sy: 20,
			x: 50,
			y: 10,
		});
	});
});

describe('quadratic curve', () => {
	it('should make quadratic curve shape', () => {
		const shape: Shape = { type: SHAPE };

		const graphics = new Graphics(shape);
		graphics.beginFill(0xffffff, 0.5);
		graphics.lineStyle(1, 0x00ff00);
		graphics.moveTo(10, 80);
		graphics.curveTo(95, 10, 180, 80);
		graphics.lineTo(10, 80);

		const path = shape.data[0] as PathData;
		const {
			stroke, fill, data, type,
		} = path;

		expect(type).toBe('path');
		expect(stroke).toMatchObject({ thickness: 1, fill: { type: 'solid', color: 0x00ff00, alpha: 1 } });
		expect(fill).toMatchObject({ type: 'solid', color: 0xffffff, alpha: 0.5 });
		expect(data[0]).toMatchObject({ type: 'moveTo', x: 10, y: 80 });
		expect(data[1]).toMatchObject({
			type: 'curveTo',
			cx: 95,
			cy: 10,
			x: 180,
			y: 80,
		});
		expect(data[2]).toMatchObject({ type: 'lineTo', x: 10, y: 80 });
	});
});
