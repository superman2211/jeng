import { Component } from '../components/component';
import { EngineFeature } from '../core/feature';

export interface LoadContext {
	progress: number;
	loaded: boolean;
}

export class Loading extends EngineFeature {
	depth = 0;
	elapsedTime = 0;
	enabled = true;

	private contexts: LoadContext[] = [];

	getContext(): LoadContext {
		let context = this.contexts[this.depth];
		if (!context) {
			context = {
				progress: 0,
				loaded: false,
			};
			this.contexts[this.depth] = context;
		}
		return context;
	}

	updateComponent(component: Component) {
		const context = this.getContext();
		context.progress = 1;
		context.loaded = true;

		if (this.depth > this.engine.depth) {
			return;
		}

		const handler = this.engine.components.loaded.get(component.type);
		if (handler) {
			handler(component, this.engine);
		}
	}

	update() {
		if (!this.enabled) {
			return;
		}

		const { root } = this.engine;
		if (!root) {
			return;
		}

		const startTime = performance.now();
		this.depth = 0;
		this.updateComponent(root);
		this.elapsedTime = performance.now() - startTime;
	}
}
