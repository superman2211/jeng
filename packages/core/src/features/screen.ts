/* eslint-disable class-methods-use-this */
import { Matrix, Rectangle } from '@jeng/geom';
import { EngineFeature } from '../core/feature';

export abstract class Screen extends EngineFeature {
	width = 400;
	height = 400;
	pixelRatio = 0;
	fullscreen = false;
	view?: Rectangle;

	private matrix = Matrix.empty();

	getMatrix() {
		const pixelRatio = this.getPixelRatio();

		this.matrix.a = pixelRatio;
		this.matrix.d = pixelRatio;

		return this.matrix;
	}

	getWidth() {
		return this.fullscreen ? this.getWindowWidth() : this.width;
	}

	getHeight() {
		return this.fullscreen ? this.getWindowHeight() : this.height;
	}

	getPixelRatio() {
		return this.pixelRatio > 0 ? this.pixelRatio : this.getWindowPixelRatio();
	}

	abstract getWindowWidth(): number;

	abstract getWindowHeight(): number;

	abstract getWindowPixelRatio(): number;
}
