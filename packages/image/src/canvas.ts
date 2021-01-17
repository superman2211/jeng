import { RenderContext, Support } from '@e2d/engine';
import { CanvasSupport } from '@e2d/canvas-support';
import { ImageResource } from './resources';
import { applyImageExtension, IMAGE, Image } from './image';

export function renderCanvas(image: Image, context: RenderContext): void {
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

export function applyCanvasImageExtension(support: Support) {
	applyImageExtension(support);
	support.renderHandlers.set(IMAGE, renderCanvas);
}
