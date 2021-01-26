/* eslint-disable class-methods-use-this */
import { ColorTransform, Matrix } from '@e2d/geom';
import { Component } from '../components/component';
import { Pointer, PointerEvent } from '../extensions/pointer';
import { Transform } from '../extensions/transform';
import { Resources } from '../resources/resources';
import { UpdateContext, PointerContext, RenderContext } from './context';

type UpdateHandler = (component: Component, context: UpdateContext) => void;
type RenderHandler = (component: Component, context: RenderContext) => void;
type HitTestHandler = (component: Component, context: PointerContext) => boolean;
type PropertyHandler = (component: Component, context: UpdateContext) => void;

export default abstract class Support {
	updateDepth = 64;

	readonly updateHandlers = new Map<string, UpdateHandler>();
	readonly renderHandlers = new Map<string, RenderHandler>();
	readonly hitTestHandlers = new Map<string, HitTestHandler>();
	readonly propertyHandlers = new Map<string, PropertyHandler>();

	readonly resources = new Resources();

	abstract get element(): HTMLElement;
	abstract clear(): void;
	abstract setSize(width: number, height: number, pixelRatio: number): void;

	update(component: Component, context: UpdateContext) {
		if (context.depth > this.updateDepth) {
			return;
		}

		if (!Component.isEnabled(component)) {
			return;
		}

		this.propertyHandlers.forEach((handler, property) => {
			if ((component as any)[property]) {
				handler(component, context);
			}
		});

		if (component.onUpdate) {
			component.onUpdate(context.time);
		}

		const handler = this.updateHandlers.get(component.type);
		if (handler) {
			handler(component, context);
		}
	}

	render(component: Component, context: RenderContext) {
		if (context.depth > this.updateDepth) {
			return;
		}

		if (!Component.isVisible(component)) {
			return;
		}

		const handler = this.renderHandlers.get(component.type);
		if (handler) {
			handler(component, context);
		}
	}

	hitTest(component: Component, context: PointerContext): boolean {
		if (context.depth > this.updateDepth) {
			return false;
		}

		if (!Component.isVisible(component)) {
			return false;
		}

		if (!Pointer.isPointerEnabled(component)) {
			return false;
		}

		const handler = this.hitTestHandlers.get(component.type);
		if (handler) {
			const result = handler(component, context);
			if (result) {
				const event: PointerEvent = {
					type: context.type,
					x: context.local.x,
					y: context.local.y,
				};
				Pointer.runEvent(component, event);
				return true;
			}
		}

		return false;
	}

	getUpdateContext(component: Component, parent: UpdateContext): UpdateContext {
		return {
			time: parent.time,
			depth: parent.depth + 1,
			support: parent.support,
		};
	}

	getRenderContext(component: Component, parent: RenderContext): RenderContext {
		const matrix = Transform.getMatrix(component);
		const colorTransform = Transform.getColorTransform(component);

		return {
			depth: parent.depth + 1,
			support: parent.support,
			matrix: Matrix.concat(parent.matrix, matrix),
			colorTransform: ColorTransform.concat(parent.colorTransform, colorTransform),
		};
	}

	getPointerContext(component: Component, parent: PointerContext): PointerContext {
		const matrix = Transform.getMatrix(component);
		const transformedMatrix = Matrix.concat(parent.matrix, matrix);

		return {
			depth: parent.depth + 1,
			type: parent.type,
			support: parent.support,
			global: parent.global,
			matrix: transformedMatrix,
			local: Matrix.transformInversePoint(transformedMatrix, parent.global),
		};
	}
}
