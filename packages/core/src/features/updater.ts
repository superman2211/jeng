import { Component } from '../components/component';
import { Update } from '../extensions/update';
import { EngineFeature } from '../core/feature';

export class Updater extends EngineFeature {
	depth = 0;
	time = 0;
	elapsedTime = 0;
	enabled = true;

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

		const startTime = performance.now();
		this.updateComponent(root);
		this.elapsedTime = performance.now() - startTime;
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
