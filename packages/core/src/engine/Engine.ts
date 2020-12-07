import { Entity } from '../components/Entity';
import { CONTAINER, updateContainer } from '../components/Container';
import { Context } from './Context';
import { ANIMATION, updateAnimation } from '../extensions/Animation';

export default class Engine {
	readonly context: Context;

	updateDepth = 64;

	root?: Entity;

	constructor(context: Context) {
		this.context = context;

		this.context.components.set(CONTAINER, updateContainer);
		this.context.extensions.set(ANIMATION, updateAnimation);
	}

	update(time: number = 0) {
		this.context.time = time;
		this.context.updateDepth = this.updateDepth;
		if (this.root) {
			this.context.update(this.root);
		}
	}
}
