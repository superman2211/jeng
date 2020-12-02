import {
	Context2d, Engine2d, IMAGE, TEXT,
} from '@e2d/core';
import updateText from './CustomText';
import updateImage from './CustomImage';

export default class CustomEngine2d extends Engine2d {
	constructor() {
		super();

		// override default renderers
		this.context.updateHandlers.set(IMAGE, updateImage);
		this.context.updateHandlers.set(TEXT, updateText);
	}

	clear() {
		const context2d = this.context as Context2d;
		context2d.context.fillStyle = 'black';
		context2d.context.setTransform();
		context2d.context.fillRect(0, 0, context2d.canvas.width, context2d.canvas.height);
		context2d.context.fillStyle = '';
	}
}
