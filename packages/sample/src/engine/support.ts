import { CanvasSupport } from '@e2d/canvas-support';
import { applyCanvasTextExtension } from '@e2d/text';
import { applyCustomImageExtension } from './image';

export default class CustomSupport extends CanvasSupport {
	constructor() {
		super();
		applyCanvasTextExtension(this);
		applyCustomImageExtension(this);
	}

	clear() {
		const { context2d } = this;
		context2d.fillStyle = 'black';
		context2d.setTransform();
		context2d.fillRect(0, 0, context2d.canvas.width, context2d.canvas.height);
		context2d.fillStyle = '';
	}
}
