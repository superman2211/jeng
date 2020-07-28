import { Matrix, ColorTransform } from '@e2d/geom';
import { IRenderingContext, ImagePattern, FillStyle } from '@e2d/render';
import Bitmap from './Bitmap';

export default class BitmapRenderer {
	static render(context: IRenderingContext, matrix: Matrix, colorTransform: ColorTransform, bitmap: Bitmap) {
		const { bitmapData, smoothing } = bitmap;

		if (!bitmapData) {
			return;
		}

		context.setTransform(
			matrix.a,
			matrix.b,
			matrix.c,
			matrix.d,
			matrix.tx,
			matrix.ty,
		);

		const pattern = new ImagePattern();
		pattern.image = bitmapData.canvas;
		pattern.repeat = false;
		pattern.smooth = smoothing;

		const style: FillStyle = {
			alpha: colorTransform.alphaMultiplier,
		};

		context.rect(0, 0, bitmapData.width, bitmapData.height);
		context.fill(pattern, style);
	}
}
