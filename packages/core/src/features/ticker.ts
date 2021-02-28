import { Engine } from '../core/engine';

export class Ticker {
	readonly engine: Engine;

	frameRate = 0;

	private paused = false;
	private time = 0;

	constructor(engine: Engine) {
		this.engine = engine;
	}

	get isPaused(): boolean {
		return this.paused;
	}

	play() {
		if (this.paused) {
			this.time = performance.now();
			this.paused = false;
			this.updateNextFrame();
		}
	}

	pause() {
		this.paused = false;
	}

	update = (time: number) => {
		if (this.paused) {
			return;
		}

		this.engine.updater.update(time);
		this.engine.renderer.render();
	}

	private updateFrame = () => {
		const currentTime = performance.now();
		const deltaTime = (currentTime - this.time) / 1000;
		this.time = currentTime;
		this.update(deltaTime);
		this.updateNextFrame();
	}

	private updateNextFrame() {
		requestAnimationFrame(this.updateFrame);
	}
}
