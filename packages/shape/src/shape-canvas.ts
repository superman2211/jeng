import {
	Pivot, RenderContext, Source, Support,
} from '@e2d/engine';
import { CanvasSupport } from '@e2d/canvas-support';
import { ColorTransform, Matrix, Rectangle } from '@e2d/geom';
import { applyShapeExtension, SHAPE, Shape } from './shape';

export function renderShape(shape: Shape, context: RenderContext): void {
	
}

export function applyCanvasImageExtension(support: Support) {
	applyShapeExtension(support);
	support.renderHandlers.set(SHAPE, renderShape);
}
