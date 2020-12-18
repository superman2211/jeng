/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
import {
	ComponentExtension,
	PointerContext,
	UpdateContext,
} from '@e2d/engine';
import { CanvasSupport } from '@e2d/canvas-support';
import { ImageResource } from '../resources/ImageResource';
import { Image } from './Image';
import ImageExtension from './ImageExtension';

export default class CanvasImageExtension extends ImageExtension {
	update(image: Image, context: UpdateContext): void {
		if (!image.src) {
			return;
		}

		const { matrix, colorTransform } = context;

		if (colorTransform.alphaMultiplier <= 0) {
			return;
		}

		const { support } = context;

		const resource = support.resources.get(image.src) as ImageResource | null;

		if (!resource?.loaded || !resource?.image) {
			return;
		}

		const { context2d } = support as CanvasSupport;

		context2d.setTransform(
			matrix.a,
			matrix.b,
			matrix.c,
			matrix.d,
			matrix.tx,
			matrix.ty,
		);

		context2d.globalAlpha = colorTransform.alphaMultiplier;
		context2d.drawImage(resource.image, 0, 0);
	}
}
