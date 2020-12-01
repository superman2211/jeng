import { Entity } from './components/Entity';
import { Context } from './Context';
import { CONTAINER, updateContainer } from './components/Container';

export default class Engine {
	readonly context: Context;

	updateDepth = 256;

	root?: Entity;

	constructor(context: Context) {
		this.context = context;

		this.context.updateHandlers.set(CONTAINER, updateContainer);
	}

	update(time: number = 0) {
		this.context.time = time;
		this.context.updateDepth = this.updateDepth;
		if (this.root) {
			this.context.update(this.root);
		}
	}
}
