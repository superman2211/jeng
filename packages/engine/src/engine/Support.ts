import { ColorTransform, Matrix, Transform } from '@e2d/geom';
import { Component, ComponentExtension } from '../components/Component';
import { Pointer } from '../pointer/Pointer';
import { PropertyExtension } from '../properties/Property';
import { Resouces } from '../resources/Resources';
import { UpdateContext, PointerContext } from './Context';

export default abstract class Support {
	updateDepth = 64;
	updateEventEnabled = true;
	updateExtensionsEnabled = true;

	readonly components = new Map<string, ComponentExtension>();
	readonly extensions = new Map<string, PropertyExtension>();
	readonly resources = new Resouces();

	abstract get view(): HTMLElement;
	abstract clear(): void;
	abstract setSize(width: number, height: number, pixelRatio: number): void;

	update(component: Component, context: UpdateContext) {
		if (context.depth > this.updateDepth) {
			return;
		}

		if (!Component.isEnabled(component)) {
			return;
		}

		if (this.updateExtensionsEnabled) {
			this.extensions.forEach((extension, property) => {
				if ((component as any)[property]) {
					extension.update(component, context);
				}
			});
		}

		const extension = this.components.get(component.type);
		if (extension) {
			if (this.updateEventEnabled && component.onUpdate) {
				component.onUpdate(context.time);
			}
			extension.update(component, context);
		} else {
			// eslint-disable-next-line no-console
			console.warn(`Type not found: ${component.type}`);
		}
	}

	updatePointer(component: Component, context: PointerContext): boolean {
		if (context.depth > this.updateDepth) {
			return false;
		}

		if (!Component.isEnabled(component)) {
			return false;
		}

		if (!Pointer.isPointerEnabled(component)) {
			return false;
		}

		const extension: ComponentExtension = this.components.get(component.type) as ComponentExtension;
		if (extension) {
			const result = extension.hitTest(component, context);
			if (result) {
				if (component.onPointerDown) {
					component.onPointerDown(context.point.x, context.point.y);
				}
			}
		} else {
			// eslint-disable-next-line no-console
			console.warn(`Type not found: ${component.type}`);
		}

		return false;
	}

	// eslint-disable-next-line class-methods-use-this
	getUpdateContext(component: Component, parent: UpdateContext): UpdateContext {
		const matrix = Transform.getMatrix(component);
		const colorTransform = Transform.getColorTransform(component);

		return {
			time: parent.time,
			depth: parent.depth + 1,
			support: parent.support,
			matrix: Matrix.concat(parent.matrix, matrix),
			colorTransform: ColorTransform.concat(parent.colorTransform, colorTransform),
		};
	}

	// eslint-disable-next-line class-methods-use-this
	getPointerContext(component: Component, parent: PointerContext): PointerContext {
		const matrix = Transform.getMatrix(component);
		const transformedMatrix = Matrix.concat(parent.matrix, matrix);

		return {
			depth: parent.depth + 1,
			support: parent.support,
			matrix: transformedMatrix,
			point: Matrix.transformInversePoint(transformedMatrix, parent.point),
		};
	}
}
