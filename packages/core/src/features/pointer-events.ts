import { Matrix, Point } from '@e2d/geom';
import { Component } from '../components/component';
import { Display } from '../extensions/display';
import { Pointer, PointerEventType } from '../extensions/pointer';
import { Transform } from '../extensions/transform';
import { EngineFeature } from '../core/feature';

export interface PointerContext {
	matrix: Matrix;
}

export class PointerEvents extends EngineFeature {
	depth = 0;
	enabled = true;

	readonly global = Point.empty();
	readonly local = Point.empty();
	pointerId = 0;
	pointerType: PointerEventType = 'pointerDown';

	private contexts: PointerContext[] = [];

	getContext(): PointerContext {
		let context = this.contexts[this.depth];
		if (!context) {
			context = {
				matrix: Matrix.empty(),
			};
			this.contexts[this.depth] = context;
		}
		return context;
	}

	dispatch(type: PointerEventType, x: number, y: number, id: number) {
		if (!this.enabled) {
			return;
		}

		const { root } = this.engine;
		if (!root) {
			return;
		}

		this.local.x = x;
		this.local.y = y;

		this.global.x = x;
		this.global.y = y;

		this.pointerId = id;
		this.pointerType = type;

		this.depth = 0;
		const base = this.getContext();
		Matrix.setEmpty(base.matrix);

		this.depth++;

		this.dispatchComponent(root, base);
	}

	dispatchComponent(component: Component, parent: PointerContext): boolean {
		if (this.depth > this.engine.depth) {
			return false;
		}

		if (!Display.isVisible(component)) {
			return false;
		}

		if (!Pointer.isPointerEnabled(component)) {
			return false;
		}

		const handler = this.engine.components.hitTest.get(component.type);
		if (handler) {
			const context = this.getContext();
			Transform.getMatrix(component, context.matrix);
			Matrix.concat(parent.matrix, context.matrix, context.matrix);
			Matrix.transformInversePoint(context.matrix, this.global, this.local);

			const { x, y } = this.local;
			const result = handler(component, this.engine);
			if (result) {
				Pointer.dispatchEvent(component, this.pointerType, x, y, this.pointerId);
			}

			if (this.pointerType === 'pointerMove') {
				if (result && !component.pointerOver) {
					Pointer.dispatchEvent(component, 'pointerOver', x, y, this.pointerId);
				} else if (!result && component.pointerOver) {
					Pointer.dispatchEvent(component, 'pointerOut', x, y, this.pointerId);
				}
				component.pointerOver = result;
			}

			return result;
		}

		return false;
	}
}
