import { CanvasEngine } from '@e2d/canvas-engine';
import { ShapeExtension, SHAPE, Shape } from './shape';

export namespace CanvasShapeExtension {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	export function render(shape: Shape, engine: CanvasEngine): void {
	}

	export function init(engine: CanvasEngine) {
		ShapeExtension.init(engine);
		engine.components.render.set(SHAPE, render);
	}
}
