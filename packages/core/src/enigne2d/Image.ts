import { Context } from '../core/Context';
import { Entity } from '../core/Entity';
import { Context2d, ContextState2d } from './Context2d';
import { Transform } from './Transform';
import Resources from './Resources';

export const IMAGE = 'image';

export interface Image extends Entity, Transform {
	src?: string,
}

export function updateImage(image: Image, context: Context): void {
	if (image.src) {
		const context2d = context as Context2d;
		const renderingContext = context2d.context;
		const state = context2d.getState(image) as ContextState2d;
		const { matrix, colorTransform } = state;

		renderingContext.setTransform(
			matrix.a,
			matrix.b,
			matrix.c,
			matrix.d,
			matrix.tx,
			matrix.ty,
		);

		renderingContext.globalAlpha = colorTransform.alphaMultiplier;

		const resource: HTMLImageElement = Resources.get(image.src);
		if (resource && resource.width && resource.height) {
			renderingContext.drawImage(resource, 0, 0);
		}
	}
}
