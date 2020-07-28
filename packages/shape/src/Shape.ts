import { DisplayObject } from '@e2d/display';
import { IRenderingContext } from '@e2d/render';
import Graphics from './Graphics';
import GraphicsRenderer from './GraphicsRenderer';

export default class Shape extends DisplayObject {
	readonly graphics = new Graphics();

	constructor() {
		super();
	}

	renderContent(context: IRenderingContext) {
		GraphicsRenderer.render(
			context,
			this.transform.concatenatedMatrix,
			this.transform.concatenatedColorTransform,
			this.graphics,
		);
	}
}
