import { Component } from '../components/component';
import { Engine } from '../core/engine';
import { Update } from '../interfaces/update';

export type UpdateComponentHandler = (component: Component, engine: Engine) => void;

export class Updater {
	readonly engine: Engine;
	readonly components = new Map<string, UpdateComponentHandler>();
	readonly properties = new Map<string, UpdateComponentHandler>();

	depth = 0;
	time = 0;
	enabled = true;

	constructor(engine: Engine) {
		this.engine = engine;
	}

	update(time: number) {
		if (!this.enabled) {
			return;
		}

		const { root } = this.engine;
		if (!root) {
			return;
		}

		this.depth = 0;
		this.time = time;

		this.updateComponent(root);
	}

	updateComponent(component: Component) {
		if (this.depth > this.engine.depth) {
			return;
		}

		if (!Update.isEnabled(component)) {
			return;
		}

		this.updateProperties(component);

		Update.update(component, this.time);

		const handler = this.components.get(component.type);
		if (handler) {
			handler(component, this.engine);
		}
	}

	updateProperties(component: Component) {
		this.properties.forEach((handler, property) => {
			if ((component as any)[property]) {
				handler(component, this.engine);
			}
		});
	}
}
