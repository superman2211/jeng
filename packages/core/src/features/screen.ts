/* eslint-disable import/prefer-default-export */
import { Matrix, Rectangle } from '@e2d/geom';

export class Screen {
	width = 400;
	height = 400;
	pixelRatio = 0;
	fullscreen = false;
	view?: Rectangle;

	readonly matrix = Matrix.empty();

	updateMatrix() {
		const pixelRatio = window.devicePixelRatio ?? this.pixelRatio;

		this.matrix.a = pixelRatio;
		this.matrix.d = pixelRatio;
	}
}
