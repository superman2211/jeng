import { Component } from '../components/component';
import { EngineFeature } from '../core/feature';
import { Key, KeyEvent } from '../extensions/key';

export class Keyboard extends EngineFeature {
	depth = 0;
	enabled = true;

	private keyEvent?: KeyEvent;

	dispatch(event: KeyEvent) {
		if (!this.enabled) {
			return;
		}

		const { root } = this.engine;
		if (!root) {
			return;
		}

		this.keyEvent = event;

		this.depth = 0;

		this.dispatchComponent(root);
	}

	dispatchComponent(component: Component): void {
		if (this.depth > this.engine.depth) {
			return;
		}

		if (!Key.isKeyEnabled(component)) {
			return;
		}

		const handler = this.engine.components.keyTest.get(component.type);
		if (handler) {
			handler(component, this.engine);
		}
		Key.dispatchEvent(component, this.keyEvent!);
	}
}
