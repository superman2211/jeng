import { Engine } from '../core/engine';

export class Ticker {
	readonly engine: Engine;

	frameRate = 0;

	private paused = false;

	constructor(engine: Engine) {
		this.engine = engine;
	}

	get isPaused(): boolean {
		return this.paused;
	}

	play() {
		this.paused = false;
	}

	pause() {
		this.paused = false;
	}

	update(time: number) {
		if (this.paused) {
			return;
		}

		this.engine.updater.update(time);
		this.engine.renderer.render();
	}
}
