/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
import { Rectangle } from '@e2d/geom';
import { UpdateContext, PointerContext } from '../engine/Context';
import { Component, ComponentExtension } from './Component';

type ComponentsMap = { [key: string]: Component };

export const CONTAINER = 'container';

export interface Container extends Component {
	child?: Component;
	children?: Component[] | ComponentsMap;
}

export class ContainerExtension extends ComponentExtension {
	update(container: Container, context: UpdateContext): void {
		const { child, children } = container;
		const { support } = context;

		if (child) {
			const childContext = support.getUpdateContext(child, context);
			support.update(child, childContext);
		}

		if (children) {
			if (Array.isArray(children)) {
				for (let i = 0; i < children.length; i++) {
					const component = children[i];
					const componentContext = support.getUpdateContext(component, context);
					support.update(component, componentContext);
				}
			} else {
				const keys = Object.keys(children);
				for (let i = 0; i < keys.length; i++) {
					const component = children[keys[i]];
					const componentContext = support.getUpdateContext(component, context);
					support.update(component, componentContext);
				}
			}
		}
	}

	getBounds(component: Container, context: PointerContext): Rectangle | undefined {
		return undefined;
	}

	hitTest(container: Container, context: PointerContext): boolean {
		const { child, children } = container;
		const { support } = context;

		if (children) {
			if (Array.isArray(children)) {
				for (let i = children.length - 1; i >= 0; i--) {
					const component = children[i];
					const componentContext = support.getPointerContext(component, context);
					const result = support.updatePointer(component, componentContext);
					if (result) {
						return true;
					}
				}
			} else {
				const keys = Object.keys(children);
				for (let i = keys.length - 1; i >= 0; i--) {
					const component = children[keys[i]];
					const componentContext = support.getPointerContext(component, context);
					const result = support.updatePointer(component, componentContext);
					if (result) {
						return true;
					}
				}
			}
		}

		if (child) {
			const childContext = support.getPointerContext(child, context);
			const result = support.updatePointer(child, childContext);
			if (result) {
				return true;
			}
		}

		return false;
	}
}
