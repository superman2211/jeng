/* eslint-disable no-console */
import { Point } from '@e2d/geom';
import { Stage, DisplayObjectContainer } from '@e2d/display';
import { Sprite, Shape } from '@e2d/shape';
import { CanvasRenderingContext } from '@e2d/render-canvas';

class Main {
	static main() {
		const point = new Point(1, 2);
		console.log(point.length);
		console.log(Point.polar(1, 2));

		const canvas = new HTMLCanvasElement();
		canvas.width = 1024;
		canvas.width = 768;

		const context = new CanvasRenderingContext(canvas);

		const stage = new Stage(context);

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
	}
}

Main.main();
