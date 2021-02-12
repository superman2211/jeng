/* eslint-disable import/prefer-default-export */
import { CanvasSupport } from '@e2d/canvas-support';
import { Pivot, RenderContext, Support } from '@e2d/engine';
import {
	applyImageExtension, IMAGE, Image,
} from '@e2d/image';
import { ImageResource } from '@e2d/resources';

function renderImage(image: Image, context: RenderContext): void {
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

	const { width, height } = resource.image;
	const x = Pivot.getX(image, width);
	const y = Pivot.getY(image, height);

	context2d.globalAlpha = 1;
	context2d.fillStyle = '';
	context2d.strokeStyle = 'gray';
	context2d.strokeRect(x, y, width, height);
}

export function applyCustomImageExtension(support: Support) {
	applyImageExtension(support);
	support.renderHandlers.set(IMAGE, renderImage);
}
