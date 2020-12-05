import {
	Context,
	ContextState,
	Entity,
} from '@e2d/core';

import {
	Matrix,
	ColorTransform,
	Transform,
	getMatrix,
	concatMatrix,
	getColorTransform,
	concatColorTransform,
} from '@e2d/geom';

export interface CanvasContextState extends ContextState {
	matrix: Matrix;
	colorTransform: ColorTransform;
}

export class CanvasContext extends Context {
	readonly canvas: HTMLCanvasElement;
	readonly context: CanvasRenderingContext2D;

	constructor() {
		super();
		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
	}

	private getConcatenatedMatrix(transform: Transform): Matrix {
		const state = this.state as CanvasContextState;
		const matrix = getMatrix(transform);
		return concatMatrix(state.matrix, matrix);
	}

	private getConcatenatedColorTransform(transform: Transform): ColorTransform {
		const state = this.state as CanvasContextState;
		const colorTransform = getColorTransform(transform);
		return concatColorTransform(state.colorTransform, colorTransform);
	}

	getState(entity: Entity): ContextState {
		return {
			matrix: this.getConcatenatedMatrix(entity as Transform),
			colorTransform: this.getConcatenatedColorTransform(entity as Transform),
		};
	}
}
