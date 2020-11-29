import {
	Image, Context, Context2d, ContextState2d, Resources,
} from '@e2d/core';

export default function updateImage(image: Image, context: Context): void {
	if (image.src) {
		const context2d = context as Context2d;
		const renderingContext: CanvasRenderingContext2D = context2d.context;
		const state = context2d.getState(image) as ContextState2d;
		const { matrix } = state;

		renderingContext.setTransform(
			matrix.a,
			matrix.b,
			matrix.c,
			matrix.d,
			matrix.tx,
			matrix.ty,
		);

		renderingContext.globalAlpha = 1;

		const resource: HTMLImageElement = Resources.get(image.src);
		if (resource && resource.width && resource.height) {
			renderingContext.fillStyle = '';
			renderingContext.strokeStyle = 'gray';
			renderingContext.strokeRect(0, 0, resource.width, resource.height);
		}
	}
}
