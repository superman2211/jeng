import { IGraphicsBitmapData } from '@e2d/graphics';
import DisplayObject from './display-object';
import { PixelSnapping } from './types';

export default class Bitmap extends DisplayObject {
	bitmapData: IGraphicsBitmapData | null;
	pixelSnapping: PixelSnapping;
	smoothing: boolean;

	constructor(
		bitmapData: IGraphicsBitmapData | null,
		pixelSnapping: PixelSnapping = PixelSnapping.AUTO,
		smoothing: boolean = false,
	) {
		super();
		this.bitmapData = bitmapData;
		this.pixelSnapping = pixelSnapping;
		this.smoothing = smoothing;
	}
}
