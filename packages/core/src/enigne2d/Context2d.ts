import { Context, ContextState } from '../core/Context';
import { Entity } from '../core/Entity';
import { ColorTransform, concat as concatColorTransform } from './ColorTransform';
import { Matrix, concat as concatMatrix } from './Matrix';
import {
	Transform, getMatrix, getColorTransform,
} from './Transform';

export interface ContextState2d extends ContextState {
	matrix: Matrix;
	colorTransform: ColorTransform;
}

export class Context2d extends Context {
	readonly canvas: HTMLCanvasElement;
	readonly context: CanvasRenderingContext2D;

	constructor() {
		super();
		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
	}

	private getConcatenatedMatrix(transform: Transform): Matrix {
		const state = this.state as ContextState2d;
		const matrix = getMatrix(transform);
		return concatMatrix(state.matrix, matrix);
	}

	private getConcatenatedColorTransform(transform: Transform): ColorTransform {
		const state = this.state as ContextState2d;
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
