import DisplayObject from './display-object';
import { PixelSnapping, BitmapData } from './types';

export default class Bitmap extends DisplayObject {
	bitmapData: BitmapData | null;
	pixelSnapping: PixelSnapping;
	smoothing: boolean;

	constructor(
		bitmapData: BitmapData | null = null,
		pixelSnapping: PixelSnapping = PixelSnapping.AUTO,
		smoothing: boolean = false,
	) {
		super();
		this.bitmapData = bitmapData;
		this.pixelSnapping = pixelSnapping;
		this.smoothing = smoothing;
	}
}
