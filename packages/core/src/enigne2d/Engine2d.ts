import Engine from '../core/Engine';
import { IMAGE, updateImage } from './Image';
import { TEXT, updateText } from './Text';
import { Context2d } from './Context2d';
import { Matrix } from './Transform';

export default class Engine2d extends Engine {
	width = 400;
	height = 300;
	fullscreen = true;

	get view(): HTMLCanvasElement {
		return this.context2d.canvas;
	}

	private paused = true;

	private matrix: Matrix = {
		a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0,
	};

	private get context2d(): Context2d {
		return this.context as Context2d;
	}

	constructor() {
		super(new Context2d());

		this.context.updateHandlers.set(IMAGE, updateImage);
		this.context.updateHandlers.set(TEXT, updateText);
	}

	clear() {
		this.context2d.context.setTransform();
		this.context2d.context.clearRect(0, 0, this.context2d.canvas.width, this.context2d.canvas.height);
	}

	updateSize() {
		const {
			view, width, height, fullscreen,
		} = this;

		let targetWidth = width;
		let targetHeight = height;

		if (fullscreen) {
			targetWidth = window.innerWidth;
			targetHeight = window.innerHeight;
		}

		const pixelRatio = window.devicePixelRatio;

		view.width = targetWidth * pixelRatio;
		view.height = targetHeight * pixelRatio;
		view.style.width = `${targetWidth}px`;
		view.style.height = `${targetHeight}px`;

		this.matrix.a = pixelRatio;
		this.matrix.d = pixelRatio;
	}

	update(time: number = 0) {
		this.updateSize();
		this.clear();

		this.context.states.push({ matrix: this.matrix });
		super.update(time);
		this.context.states.pop();

		this.updateNextFrame();
	}

	private internalUpdate = (time: number) => this.update(time);

	private updateNextFrame() {
		requestAnimationFrame(this.internalUpdate);
	}

	play() {
		if (this.paused) {
			this.paused = false;
			this.updateNextFrame();
		}
	}

	pause() {
		this.paused = true;
	}
}
