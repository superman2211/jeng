import { ColorTransform, Matrix, Point } from '@e2d/geom';
import Support from './Support';

export interface Context {
	support: Support;
	depth: number;
}

export interface UpdateContext extends Context {
	time: number;
	matrix: Matrix;
	colorTransform: ColorTransform;
}

export interface PointerContext extends Context {
	matrix: Matrix;
	point: Point;
}
