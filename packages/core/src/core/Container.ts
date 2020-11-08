import { Context } from './Context';
import { Entity } from './Entity';

export const CONTAINER = 'container';

export interface Container extends Entity {
	children?: Entity[];
}

export function updateContainer(container: Container, context: Context): void {
	if (container.children) {
		context.states.push(context.createState(container));

		for (let i = 0; i < container.children.length; i++) {
			const entity = container.children[i];
			context.update(entity);
		}

		context.states.pop();
	}
}
