import { ColorTransform, Matrix } from '@e2d/geom';
import { Component } from '../components/component';
import { Engine } from '../core/engine';

export type RenderComponentHandler = (component: Component, engine: Engine) => void;

export interface RenderContext {
	matrix: Matrix;
	colorTransform: ColorTransform;
}

export class Renderer {
	readonly engine: Engine;
	readonly components = new Map<string, RenderComponentHandler>();

	depth = 0;
	enabled = true;

	private contexts: RenderContext[] = [];

	constructor(engine: Engine) {
		this.engine = engine;
	}

	getContext(): RenderContext {
		return this.contexts[this.depth];
	}

	render() {
	}

	renderComponent(component: Component) {
	}
}
