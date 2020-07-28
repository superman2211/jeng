import { Point } from '@e2d/geom';
import {
	Stage, Container, DisplayObjectContainer,
} from '../src';

describe('display object', () => {
	it('should calculate empty point length', () => {
		expect(new Point().length).toBe(0);
	});
	it('should calculate not empty point length', () => {
		expect(new Point(3, 4).length).toBe(5);
	});
	it('should create display object', () => {
		const stage = new Stage();

		const sprite = new Container();
		stage.addChild(sprite);

		const shape = new Container();
		shape.x = 100;
		shape.y = 100;
		sprite.addChild(shape);

		const parentObject = shape.parent as DisplayObjectContainer;
		const stageObject = parentObject.parent as Stage;

		expect(sprite.numChildren).toBe(1);
		expect(stage.numChildren).toBe(1);
		expect(shape.x).toBe(100);
		expect(shape.parent).toBe(sprite);
		expect(shape.stage).toBe(stage);
		expect(parentObject).toBe(sprite);
		expect(stageObject).toBe(stage);
	});
});
