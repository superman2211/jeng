import { Component } from '../components/component';
import { Engine } from '../core/engine';

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
		this.time = time;
	}

	updateComponent(component: Component) {
	}

	updateProperties(component: Component) {
	}
}
