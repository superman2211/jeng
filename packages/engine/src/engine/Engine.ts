/* eslint-disable no-console */
import { ColorTransform, Matrix } from '@e2d/geom';
import { Component } from '../components/component';
import { applyContainerExtension } from '../components/container';
import { PointerEvent } from '../extensions/pointer';
import { PointerContext, RenderContext, UpdateContext } from './context';
import Support from './support';

const EMPTY_MATRIX = Matrix.empty();

export default class Engine {
	readonly support: Support;

	root?: Component;

	width = 400;
	height = 300;
	fullscreen = true;

	updateEnabled = true;
	renderEnabled = true;
	pointerEnabled = true;

	private paused = true;
	private time = -1;
	private matrix = Matrix.empty();

	constructor(support: Support) {
		this.support = support;

		applyContainerExtension(this.support);
	}

	update(time: number = 0) {
		if (!this.root) {
			return;
		}

		const base: UpdateContext = {
			support: this.support,
			time,
			depth: 0,
		};

		const context = this.support.getUpdateContext(this.root, base);
		this.support.update(this.root, context);
	}

	render() {
		if (!this.root) {
			return;
		}

		this.support.clear();

		const base: RenderContext = {
			support: this.support,
			depth: 0,
			matrix: this.matrix,
			colorTransform: ColorTransform.empty(),
		};

		const context = this.support.getRenderContext(this.root, base);
		this.support.render(this.root, context);
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

		this.matrix.a = pixelRatio;
		this.matrix.d = pixelRatio;

		this.support.setSize(targetWidth, targetHeight, pixelRatio);
	}

	updateFrame(time: number = 0) {
		if (this.paused) {
			return;
		}

		this.updateSize();

		if (this.updateEnabled) {
			this.update(time);
		}

		if (this.renderEnabled) {
			this.render();
		}

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

	dispatchPointerEvent(event: PointerEvent) {
		if (this.paused) {
			return;
		}

		if (!this.pointerEnabled) {
			return;
		}

		if (!this.root) {
			return;
		}

		const {
			type, id, x, y,
		} = event;

		const base: PointerContext = {
			support: this.support,
			depth: 0,
			matrix: EMPTY_MATRIX,
			local: { x, y },
			global: { x, y },
			type,
			id,
		};

		const context = this.support.getPointerContext(this.root, base);
		this.support.hitTest(this.root, context);
	}

	play() {
		console.log('play');
		if (this.paused) {
			this.time = -1;
			this.paused = false;
			this.updateNextFrame();
		}
	}

	pause() {
		console.log('pause');
		this.paused = true;
	}
}
