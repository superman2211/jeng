import { Matrix } from '@e2d/geom';
import { Component } from '../components/component';
import { Engine } from '../core/engine';

export type PointerComponentHandler = (component: Component, engine: Engine) => void;

export interface PointerContext {
	matrix: Matrix;
}

export class Pointer {
	readonly engine: Engine;
	readonly components = new Map<string, PointerComponentHandler>();

	depth = 0;

	private contexts: PointerContext[] = [];

	constructor(engine: Engine) {
		this.engine = engine;
	}

	getContext(): PointerContext {
		return this.contexts[this.depth];
	}

	dispatchEvent() {
	}

	hitTestComponent(component: Component): boolean {
	}
}
