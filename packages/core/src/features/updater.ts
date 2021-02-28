import { Component } from '../components/component';
import { Update } from '../interfaces/update';
import { Feature } from './feature';

export class Updater extends Feature {
	depth = 0;
	time = 0;

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

		const handler = this.engine.components.update.get(component.type);
		if (handler) {
			handler(component, this.engine);
		}
	}

	updateProperties(component: Component) {
		this.engine.components.properties.forEach((handler, property) => {
			if ((component as any)[property]) {
				handler(component, this.engine);
			}
		});
	}
}
