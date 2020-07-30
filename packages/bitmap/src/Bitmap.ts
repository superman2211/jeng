import { DisplayObject } from '@e2d/display';
import { IRenderingContext } from '@e2d/render';
import BitmapData from './BitmapData';
import { PixelSnapping } from './enums';
import BitmapRenderer from './BitmapRenderer';

export default class Bitmap extends DisplayObject {
	bitmapData?: BitmapData;
	pixelSnapping: PixelSnapping;
	smoothing: boolean;

	constructor(
		bitmapData?: BitmapData,
		pixelSnapping: PixelSnapping = PixelSnapping.AUTO,
		smoothing: boolean = false,
	) {
		super();
		this.bitmapData = bitmapData;
		this.pixelSnapping = pixelSnapping;
		this.smoothing = smoothing;
	}

	renderContent(context: IRenderingContext) {
		BitmapRenderer.render(
			context,
			this.transform.concatenatedMatrix,
			this.transform.concatenatedColorTransform,
			this,
		);
	}
}
