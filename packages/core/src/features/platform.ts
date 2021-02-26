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

	clear(): void {
	}
}
