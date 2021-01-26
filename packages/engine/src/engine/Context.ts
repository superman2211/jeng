import { ColorTransform, Matrix, Point } from '@e2d/geom';
import { PointerEventType } from '../extensions/pointer';
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
	local: Point;
	global: Point;
	type: PointerEventType;
	id?: number,
}
