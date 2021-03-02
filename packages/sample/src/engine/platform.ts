import { CanvasPlatform } from '@e2d/canvas-engine';

export default class CustomPlatform extends CanvasPlatform {
	clear() {
		const context2d = this.getContext();
		context2d.fillStyle = 'black';
		context2d.setTransform();
		context2d.fillRect(0, 0, context2d.canvas.width, context2d.canvas.height);
		context2d.fillStyle = '';
	}
}
