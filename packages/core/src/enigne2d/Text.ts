import { Context } from '../core/Context';
import { Entity } from '../core/Entity';
import { Context2d } from './Context2d';
import { Transform } from './Transform';

export const TEXT = 'text';

export interface Text extends Entity, Transform {
	text?: string,
}

export function updateText(text: Text, context: Context): void {
	if (text.text) {
		const context2d = context as Context2d;
		const matrix = context2d.getTransformMatrix(text);
		// eslint-disable-next-line no-console
		// console.log(matrix, text.text);
	}
}
