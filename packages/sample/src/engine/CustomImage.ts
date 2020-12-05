import { Context } from '@e2d/core';
import {
	CanvasContext,
	CanvasContextState,
	Image,
	ImageResource,
} from '@e2d/canvas-engine';

export default function updateImage(image: Image, context: Context): void {
	if (image.src) {
		const context2d = context as CanvasContext;
		const state = context2d.getState(image) as CanvasContextState;
		const { matrix } = state;
		const resource = context.resources.get(image.src) as ImageResource;

		if (resource?.image) {
			const { width, height } = resource.image;
			const renderingContext: CanvasRenderingContext2D = context2d.context;
			renderingContext.setTransform(
				matrix.a,
				matrix.b,
				matrix.c,
				matrix.d,
				matrix.tx,
				matrix.ty,
			);
			renderingContext.globalAlpha = 1;
			renderingContext.fillStyle = '';
			renderingContext.strokeStyle = 'gray';
			renderingContext.strokeRect(0, 0, width, height);
		}
	}
}
