/* eslint-disable no-console */
import { Point, Rectangle } from '@e2d/geom';
import { Stage, DisplayObjectContainer } from '@e2d/display';
import { Sprite, Shape } from '@e2d/shape';
import { Bitmap, BitmapData } from '@e2d/bitmap';
import { CanvasRenderingContext } from '@e2d/render-canvas';

class Main {
	static main() {
		const point = new Point(1, 2);
		console.log(point.length);
		console.log(Point.polar(1, 2));

		const context = new CanvasRenderingContext();
		context.width = 400;
		context.height = 300;
		document.body.appendChild(context.element);

		const stage = new Stage(context);

		const sprite = new Sprite();
		sprite.graphics.lineStyle(1, 0);
		sprite.graphics.beginFill(0x00ff00, 0.5);
		sprite.graphics.drawCircle(100, 100, 50);
		sprite.graphics.beginFill(0x00ff00, 0.5);
		sprite.graphics.drawRect(100, 100, 50, 20);
		sprite.rotation = 10;
		stage.addChild(sprite);

		const shape = new Shape();
		shape.graphics.beginFill(0xff0000, 0.5);
		shape.graphics.drawRect(0, 0, 100, 100);
		shape.x = 100;
		shape.y = 100;
		sprite.addChild(shape);

		const bitmapData = new BitmapData(50, 40, true, 0xffff00ff);
		bitmapData.fillRect(new Rectangle(10, 10, 10, 10), 0x00ffff);

		const bitmap = new Bitmap(bitmapData);
		bitmap.rotation = -30;
		bitmap.x = 200;
		bitmap.y = 150;
		sprite.addChild(bitmap);

		const parentObject = shape.parent as DisplayObjectContainer;
		const stageObject = parentObject.parent as Stage;

		console.log(sprite.numChildren);
		console.log(stage.numChildren);
		console.log(shape.x);
		console.log(shape.parent);
		console.log(shape.stage);
		console.log(parentObject);
		console.log(stageObject);

		stage.render();
	}
}

Main.main();
