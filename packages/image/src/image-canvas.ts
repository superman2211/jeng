import {
	Pivot, RenderContext, Source, Support,
} from '@e2d/engine';
import { CanvasSupport } from '@e2d/canvas-support';
import { ImageResource } from './resources';
import { applyImageExtension, IMAGE, Image } from './image';

export function renderCanvas(image: Image, context: RenderContext): void {
	const resource = Source.getResource(image, context) as ImageResource;
	if (!resource?.loaded || !resource?.image) {
		return;
	}

	const { colorTransform } = context;
	if (colorTransform.alphaMultiplier <= 0) {
		return;
	}

	const { support } = context;
	const { context2d } = support as CanvasSupport;

	const { matrix } = context;
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

	context2d.globalAlpha = colorTransform.alphaMultiplier;
	context2d.drawImage(resource.image, x, y);
}

export function applyCanvasImageExtension(support: Support) {
	applyImageExtension(support);
	support.renderHandlers.set(IMAGE, renderCanvas);
}
