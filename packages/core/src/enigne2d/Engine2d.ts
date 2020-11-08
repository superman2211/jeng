import Engine from '../core/Engine';
import { IMAGE, updateImage } from '../extensions/Image';
import { TEXT, updateText } from '../extensions/Text';
import { Context2d } from './Context2d';

export default class Engine2d extends Engine {
	constructor() {
		super(new Context2d());

		this.context.updateHandlers.set(IMAGE, updateImage);
		this.context.updateHandlers.set(TEXT, updateText);
	}
}
