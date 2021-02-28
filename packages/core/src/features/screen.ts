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

	getPixelRatio() {
		return window.devicePixelRatio ?? this.pixelRatio;
	}
}
