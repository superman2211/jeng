import {
	CanvasShapeExtension, Shape, SHAPE, Graphics,
} from '@jeng/shape';
import { CanvasEngine } from '@jeng/canvas-engine';

// create engine
const engine = new CanvasEngine();
// add shape extension
CanvasShapeExtension.init(engine);
// set fullscreen mode
engine.screen.fullscreen = true;
// start update loop
engine.ticker.play();
// add engine view to page
document.body.appendChild(engine.platform.view);

interface CustomShape extends Shape {
	graphics?: Graphics;
	value: number;
}

// create simple app with graphics
engine.root = {
	type: SHAPE,
	x: 150,
	y: 150,
	value: 0,
	onUpdate(time: number) {
		if (!this.graphics) {
			this.graphics = new Graphics(this);
		}

		this.value -= time * 5;

		const sizeX = 100;
		const sizeY = 70;
		const offset = 10;

		const { graphics, value } = this;

		const cos = Math.cos(value) * offset;
		const sin = Math.sin(value) * offset;

		graphics
			.clear()
			.beginFill(0xff0000)
			.lineStyle(4, 0x000099)
			.moveTo(-sizeX + cos, -sizeY + sin)
			.lineTo(sizeX + sin, -sizeY + cos)
			.lineTo(sizeX + cos, sizeY + sin)
			.lineTo(-sizeX + sin, sizeY + cos)
			.lineTo(-sizeX + cos, -sizeY + sin);
	},
} as CustomShape;
