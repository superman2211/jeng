import { Entity } from './Entity';
import { Context } from './Context';
import { CONTAINER, updateContainer } from './Container';

export default class Engine {
	readonly context: Context;

	root?: Entity;

	constructor(context: Context) {
		this.context = context;

		this.context.updateHandlers.set(CONTAINER, updateContainer);
	}

	update(time: number) {
		this.context.time = time;
		if (this.root) {
			this.context.update(this.root);
		}
	}
}
