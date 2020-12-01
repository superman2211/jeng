import { Context } from '../../core/Context';
import { Entity } from '../../core/components/Entity';
import { Context2d, ContextState2d } from '../Context2d';
import { Transform } from '../../geom/Transform';
import { ImageResource } from '../resources/ImageResource';

export const IMAGE = 'image';

export interface Image extends Entity, Transform {
	src?: string,
}

export function updateImage(image: Image, context: Context): void {
	if (image.src) {
		const context2d = context as Context2d;
		const state = context2d.getState(image) as ContextState2d;
		const { matrix, colorTransform } = state;
		const resource: ImageResource = context.resources.get(image.src) as ImageResource;

		if (resource?.image) {
			const renderingContext = context2d.context;
			renderingContext.setTransform(
				matrix.a,
				matrix.b,
				matrix.c,
				matrix.d,
				matrix.tx,
				matrix.ty,
			);
			renderingContext.globalAlpha = colorTransform.alphaMultiplier;
			renderingContext.drawImage(resource.image, 0, 0);
		}
	}
}
