import { Context } from '../engine/Context';
import { Entity } from './Entity';

export const CONTAINER = 'container';

export interface Container extends Entity {
	children?: Entity[];
}

export function updateContainer(container: Container, context: Context): void {
	const { children } = container;
	if (children) {
		const updateDepth = context.updateDepth - 1;
		const state = context.getState(container);
		for (let i = 0; i < children.length; i++) {
			const entity = children[i];
			context.state = state;
			context.updateDepth = updateDepth;
			context.update(entity);
		}
	}
}
