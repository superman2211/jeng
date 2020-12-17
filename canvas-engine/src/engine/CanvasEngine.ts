import { Engine } from '@e2d/core';
import { Matrix, ColorTransform } from '@e2d/geom';
import { CanvasContext, CanvasContextState } from './CanvasContext';
import { resolveImage } from '../resources/ImageResource';
import { IMAGE, updateImage } from '../components/Image';
import { TEXT, updateText } from '../components/Text';

export default class Engine2d extends Engine {
	width = 400;
	height = 300;
	fullscreen = true;

	get view(): HTMLCanvasElement {
		return this.context2d.canvas;
	}

	private paused = true;
	private time = -1;

	private matrix: Matrix = {
		a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0,
	};

	private colorTranssform: ColorTransform = {
		alphaMultiplier: 1,
		redMultiplier: 1,
		greenMultiplier: 1,
		blueMultiplier: 1,

		alphaOffset: 0,
		redOffset: 0,
		greenOffset: 0,
		blueOffset: 0,
	};

	private get context2d(): CanvasContext {
		return this.context as CanvasContext;
	}

	constructor() {
		super(new CanvasContext());

		this.context.components.set(IMAGE, updateImage);
		this.context.components.set(TEXT, updateText);

		this.context.resources.resolvers.add(resolveImage);
	}

	clear() {
		this.context2d.context.setTransform();
		this.context2d.context.clearRect(0, 0, this.context2d.canvas.width, this.context2d.canvas.height);
	}

	updateSize() {
		const {
			view, width, height, fullscreen,
		} = this;

		let targetWidth = Math.floor(width);
		let targetHeight = Math.floor(height);

		if (fullscreen) {
			targetWidth = window.innerWidth;
			targetHeight = window.innerHeight;
		}

		const pixelRatio = window.devicePixelRatio;

		const viewWidth = Math.floor(targetWidth * pixelRatio);
		const viewHeight = Math.floor(targetHeight * pixelRatio);

		if (view.width !== viewWidth || view.height !== viewHeight) {
			view.width = viewWidth;
			view.height = viewHeight;
			view.style.width = `${targetWidth}px`;
			view.style.height = `${targetHeight}px`;

			this.matrix.a = pixelRatio;
			this.matrix.d = pixelRatio;
		}
	}

	getState(): CanvasContextState {
		return {
			matrix: this.matrix,
			colorTransform: this.colorTranssform,
		};
	}

	update(time: number = 0) {
		if (this.paused) {
			return;
		}

		this.updateSize();
		this.clear();
		this.context2d.state = this.getState();
		super.update(time);
		this.updateNextFrame();
	}

	private internalUpdate = (time: number) => {
		const deltaTime = this.time === -1 ? 0 : time - this.time;
		this.time = time;
		this.update(deltaTime / 1000);
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
