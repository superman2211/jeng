/* eslint-disable no-console */
import { Point } from '@e2d/geom';
import {
	Stage, Sprite, Shape, DisplayObjectContainer,
} from '@e2d/display';

class Main {
	static main() {
		console.log(123);

		const point = new Point(1, 2);
		console.log(point.length);
		console.log(Point.polar(1, 2));

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

		const parentObject = <DisplayObjectContainer>shape.parent;
		const stageObject = <Stage>parentObject.parent;

		console.log(sprite.numChildren);
		console.log(stage.numChildren);
		console.log(shape.x);
		console.log(shape.parent);
		console.log(shape.stage);
		console.log(parentObject);
		console.log(stageObject);

		shape.parent = stage;
	}
}

Main.main();
