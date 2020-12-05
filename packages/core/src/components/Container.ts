import { Context } from '../engine/Context';
import { Entity } from './Entity';

type EntitiesMap = { [key: string]: Entity };

export const CONTAINER = 'container';

export interface Container extends Entity {
	child?: Entity;
	children?: Entity[] | EntitiesMap;
}

export function updateContainer(container: Container, context: Context): void {
	const { child, children } = container;

	if (!child && !children) {
		return;
	}

	const updateDepth = context.updateDepth - 1;
	const state = context.getState(container);

	if (child) {
		context.state = state;
		context.updateDepth = updateDepth;
		context.update(child);
	}

	if (children) {
		if (Array.isArray(children)) {
			for (let i = 0; i < children.length; i++) {
				const entity = children[i];
				context.state = state;
				context.updateDepth = updateDepth;
				context.update(entity);
			}
		} else {
			const keys = Object.keys(children);
			for (let i = 0; i < keys.length; i++) {
				const entity = children[keys[i]];
				context.state = state;
				context.updateDepth = updateDepth;
				context.update(entity);
			}
		}
	}
}
