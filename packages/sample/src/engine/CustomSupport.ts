import { CanvasSupport } from '@e2d/canvas-support';
import { IMAGE, resolveImage } from '@e2d/image';
import { TEXT } from '@e2d/text';
import CustomText from './CustomText';
import CustomImage from './CustomImage';

export default class CustomSupport extends CanvasSupport {
	constructor() {
		super();

		this.components.set(IMAGE, new CustomImage());
		this.components.set(TEXT, new CustomText());

		this.resources.resolvers.add(resolveImage);
	}

	clear() {
		const { context2d } = this;
		context2d.fillStyle = 'black';
		context2d.setTransform();
		context2d.fillRect(0, 0, context2d.canvas.width, context2d.canvas.height);
		context2d.fillStyle = '';
	}
}
