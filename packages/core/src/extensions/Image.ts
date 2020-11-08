import { Context } from '../core/Context';
import { Entity } from '../core/Entity';
import { Context2d } from '../enigne2d/Context2d';
import { Transform } from '../enigne2d/Transform';

export const IMAGE = 'image';

export interface Image extends Entity, Transform {
	src?: string,
}

export function updateImage(image: Image, context: Context): void {
	if (image.src) {
		const context2d = context as Context2d;
		const matrix = context2d.getTransformMatrix(image);
		// eslint-disable-next-line no-console
		console.log(matrix, image.src);
	}
}
