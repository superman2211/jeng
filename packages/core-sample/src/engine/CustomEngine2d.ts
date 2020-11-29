import { Engine2d, IMAGE, TEXT } from '@e2d/core';
import updateText from './CustomText';
import updateImage from './CustomImage';

export default class CustomEngine2d extends Engine2d {
	constructor() {
		super();

		// override default renderers
		this.context.updateHandlers.set(IMAGE, updateImage);
		this.context.updateHandlers.set(TEXT, updateText);
	}
}
