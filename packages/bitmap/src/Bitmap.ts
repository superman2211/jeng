import { DisplayObject } from '@e2d/display';
import BitmapData from './BitmapData';
import { PixelSnapping } from './enums';

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
}
