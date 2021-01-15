import { ColorTransform, Matrix, Point } from '@e2d/geom';
import Support from './support';

export interface Context {
	support: Support;
	depth: number;
}

export interface UpdateContext extends Context {
	time: number;
}

export interface RenderContext extends Context {
	matrix: Matrix;
	colorTransform: ColorTransform;
}

export interface PointerContext extends Context {
	matrix: Matrix;
	point: Point;
}
