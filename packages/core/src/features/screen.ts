import { Matrix, Rectangle } from '@e2d/geom';

export class Screen {
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
		return this.fullscreen ? window.innerWidth : this.width;
	}

	getHeight() {
		return this.fullscreen ? window.innerHeight : this.height;
	}

	getPixelRatio() {
		return this.pixelRatio > 0 ? this.pixelRatio : window.devicePixelRatio ?? 1;
	}
}
