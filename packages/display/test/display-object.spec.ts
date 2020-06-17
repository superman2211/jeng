import { Point } from '@e2d/geom';
import {
	Stage, Sprite, Shape, DisplayObjectContainer,
} from '../src';

describe('point length', () => {
	it('should calculate empty point length', () => {
		expect(new Point().length).toBe(0);
	});
	it('should calculate not empty point length', () => {
		expect(new Point(3, 4).length).toBe(5);
	});
	it('should create display object', () => {
		const stage = new Stage();

		const sprite = new Sprite();
		sprite.graphics.lineStyle(1, 0);
		sprite.graphics.beginFill(0x00ff00, 0.5);
		sprite.graphics.drawCircle(100, 100, 50);
		stage.addChild(sprite);

		const shape = new Shape();
		shape.graphics.beginFill(0xff0000, 0.5);
		shape.graphics.drawRect(0, 0, 100, 100);
		shape.x = 100;
		shape.y = 100;
		sprite.addChild(shape);

		const parentObject = <DisplayObjectContainer> shape.parent;
		const stageObject = <Stage> parentObject.parent;

		expect(sprite.numChildren).toBe(1);
		expect(stage.numChildren).toBe(1);
		expect(shape.x).toBe(100);
		expect(shape.parent).toBe(sprite);
		expect(shape.stage).toBe(stage);
		expect(parentObject).toBe(sprite);
		expect(stageObject).toBe(stage);
	});
});
