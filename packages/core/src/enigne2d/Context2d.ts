import { Context, ContextState } from '../core/Context';
import { Entity } from '../core/Entity';
import {
	getMatrix, Matrix, matrixConcat, Transform,
} from './Transform';

export interface ContextState2d extends ContextState {
	matrix: Matrix;
}

export class Context2d extends Context {
	// eslint-disable-next-line class-methods-use-this
	createState(entity: Entity): ContextState {
		return {
			matrix: getMatrix(entity as Transform),
		};
	}

	getTransformMatrix(entity: Entity): Matrix {
		const matrix = getMatrix(entity as Transform);
		if (this.states.length) {
			const lastState = this.states[this.states.length - 1] as ContextState2d;
			const parentMatrix = lastState.matrix;
			return matrixConcat(parentMatrix, matrix);
		}
		return matrix;
	}
}
