import { UpdateContext, PointerContext, RenderContext } from '../engine/context';
import Support from '../engine/support';
import { Component } from './component';

type ComponentsMap = { [key: string]: Component };

export const CONTAINER = 'container';

export interface Container extends Component {
	child?: Component;
	children?: Component[] | ComponentsMap;
}

export namespace Container {
	export function numChildren(container: Container): number {
		const { child, children } = container;

		let count = 0;

		if (child) {
			count++;
		}

		if (children) {
			if (Array.isArray(children)) {
				count += children.length;
			} else {
				const keys = Object.keys(children);
				count += keys.length;
			}
		}

		return count;
	}
}

export function render(container: Container, context: RenderContext): void {
	const { child, children } = container;
	const { support } = context;

	if (child) {
		const childContext = support.getRenderContext(child, context);
		support.render(child, childContext);
	}

	if (children) {
		if (Array.isArray(children)) {
			for (let i = 0; i < children.length; i++) {
				const component = children[i];
				const componentContext = support.getRenderContext(component, context);
				support.render(component, componentContext);
			}
		} else {
			const keys = Object.keys(children);
			for (let i = 0; i < keys.length; i++) {
				const component = children[keys[i]];
				const componentContext = support.getRenderContext(component, context);
				support.render(component, componentContext);
			}
		}
	}
}

export function update(container: Container, context: UpdateContext): void {
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

export function hitTest(container: Container, context: PointerContext): boolean {
	const { child, children } = container;
	const { support } = context;

	if (children) {
		if (Array.isArray(children)) {
			for (let i = children.length - 1; i >= 0; i--) {
				const component = children[i];
				const componentContext = support.getPointerContext(component, context);
				const result = support.hitTest(component, componentContext);
				if (result) {
					return true;
				}
			}
		} else {
			const keys = Object.keys(children);
			for (let i = keys.length - 1; i >= 0; i--) {
				const component = children[keys[i]];
				const componentContext = support.getPointerContext(component, context);
				const result = support.hitTest(component, componentContext);
				if (result) {
					return true;
				}
			}
		}
	}

	if (child) {
		const childContext = support.getPointerContext(child, context);
		const result = support.hitTest(child, childContext);
		if (result) {
			return true;
		}
	}

	return false;
}

export function applyContainerExtension(support: Support) {
	support.updateHandlers.set(CONTAINER, update);
	support.renderHandlers.set(CONTAINER, render);
	support.hitTestHandlers.set(CONTAINER, hitTest);
}
