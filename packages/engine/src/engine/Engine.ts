import { ColorTransform, Matrix } from '@e2d/geom';
import { Component } from '../components/Component';
import { CONTAINER, ContainerExtension } from '../components/Container';
import { UpdateContext } from './Context';
import Support from './Support';

export default class Engine {
	readonly support: Support;

	root?: Component;

	width = 400;
	height = 300;
	fullscreen = true;

	private paused = true;
	private time = -1;
	private updateContext: UpdateContext;

	constructor(support: Support) {
		this.support = support;

		this.updateContext = {
			support: this.support,
			time: 0,
			depth: 0,
			matrix: Matrix.empty(),
			colorTransform: ColorTransform.empty(),
		};

		this.support.components.set(CONTAINER, new ContainerExtension());
	}

	update(time: number = 0) {
		if (this.root) {
			this.updateContext.time = time;
			const context = this.support.getUpdateContext(this.root, this.updateContext);
			this.support.update(this.root, context);
		}
	}

	updateSize() {
		const pixelRatio = window.devicePixelRatio;

		const { width, height, fullscreen } = this;

		let targetWidth = Math.floor(width);
		let targetHeight = Math.floor(height);

		if (fullscreen) {
			targetWidth = window.innerWidth;
			targetHeight = window.innerHeight;
		}

		this.updateContext.matrix.a = pixelRatio;
		this.updateContext.matrix.d = pixelRatio;

		this.support.setSize(targetWidth, targetHeight, pixelRatio);
	}

	updateFrame(time: number = 0) {
		if (this.paused) {
			return;
		}

		this.updateSize();
		this.support.clear();
		this.update(time);
		this.updateNextFrame();
	}

	private internalUpdate = (time: number) => {
		const deltaTime = this.time === -1 ? 0 : time - this.time;
		this.time = time;
		this.updateFrame(deltaTime / 1000);
	}

	private updateNextFrame() {
		requestAnimationFrame(this.internalUpdate);
	}

	play() {
		// eslint-disable-next-line no-console
		console.log('play');
		if (this.paused) {
			this.time = -1;
			this.paused = false;
			this.updateNextFrame();
		}
	}

	pause() {
		// eslint-disable-next-line no-console
		console.log('pause');
		this.paused = true;
	}
}
