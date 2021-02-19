import { UpdateContext, PointerContext, RenderContext } from '../engine/context';
import Support from '../engine/support';
import { Component } from './component';

type ComponentsMap = { [key: string]: Component };

export const CONTAINER = 'container';

export interface Container extends Component {
	children?: Component | Component[] | ComponentsMap;
}

export namespace Container {
	export function numChildren(container: Container): number {
		const { children } = container;
		if (children) {
			if (Array.isArray(children)) {
				return children.length;
			} if (children.type) {
				return 1;
			}
			const keys = Object.keys(children);
			return keys.length;
		}
		return 0;
	}
}

export function render(container: Container, context: RenderContext): void {
	const { children } = container;
	const { support } = context;

	if (children) {
		if (Array.isArray(children)) {
			for (let i = 0; i < children.length; i++) {
				const component = children[i];
				const componentContext = support.getRenderContext(component, context);
				support.render(component, componentContext);
			}
		} else if (children.type) {
			const component = children as Container;
			const childContext = support.getRenderContext(component, context);
			support.render(component, childContext);
		} else {
			const componentsMap = children as ComponentsMap;
			const keys = Object.keys(componentsMap);
			for (let i = 0; i < keys.length; i++) {
				const component = componentsMap[keys[i]];
				const componentContext = support.getRenderContext(component, context);
				support.render(component, componentContext);
			}
		}
	}
}

export function update(container: Container, context: UpdateContext): void {
	const { children } = container;
	const { support } = context;

	if (children) {
		if (Array.isArray(children)) {
			for (let i = 0; i < children.length; i++) {
				const component = children[i];
				const componentContext = support.getUpdateContext(component, context);
				support.update(component, componentContext);
			}
		} else if (children.type) {
			const component = children as Container;
			const childContext = support.getUpdateContext(component, context);
			support.update(component, childContext);
		} else {
			const componentsMap = children as ComponentsMap;
			const keys = Object.keys(componentsMap);
			for (let i = 0; i < keys.length; i++) {
				const component = componentsMap[keys[i]];
				const componentContext = support.getUpdateContext(component, context);
				support.update(component, componentContext);
			}
		}
	}
}

export function hitTest(container: Container, context: PointerContext): boolean {
	const { children } = container;
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
		} else if (children.type) {
			const component = children as Container;
			const childContext = support.getPointerContext(component, context);
			const result = support.hitTest(component, childContext);
			if (result) {
				return true;
			}
		} else {
			const componentsMap = children as ComponentsMap;
			const keys = Object.keys(componentsMap);
			for (let i = keys.length - 1; i >= 0; i--) {
				const component = componentsMap[keys[i]];
				const componentContext = support.getPointerContext(component, context);
				const result = support.hitTest(component, componentContext);
				if (result) {
					return true;
				}
			}
		}
	}
	return false;
}

export function applyContainerExtension(support: Support) {
	support.updateHandlers.set(CONTAINER, update);
	support.renderHandlers.set(CONTAINER, render);
	support.hitTestHandlers.set(CONTAINER, hitTest);
}
