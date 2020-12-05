import {
	CanvasContext, CanvasEngine, IMAGE, TEXT,
} from '@e2d/canvas-engine';
import updateText from './CustomText';
import updateImage from './CustomImage';

export default class CustomEngine2d extends CanvasEngine {
	constructor() {
		super();

		// override default renderers
		this.context.components.set(IMAGE, updateImage);
		this.context.components.set(TEXT, updateText);
	}

	clear() {
		const context2d = this.context as CanvasContext;
		context2d.context.fillStyle = 'black';
		context2d.context.setTransform();
		context2d.context.fillRect(0, 0, context2d.canvas.width, context2d.canvas.height);
		context2d.context.fillStyle = '';
	}
}
