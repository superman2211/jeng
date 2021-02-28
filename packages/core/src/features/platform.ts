/* eslint-disable class-methods-use-this */
import { Engine } from '../core/engine';

export class Platform {
	readonly engine: Engine;
	readonly view: HTMLElement;

	constructor(engine: Engine) {
		this.engine = engine;
		this.view = document.createElement('div');
	}

	updateSize(): void {
	}

	begin(): void {
	}

	end(): void {
	}
}
