import { Engine } from '../core/engine';
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

export namespace ContainerExtension {
	export function render(container: Container, engine: Engine): void {
		const { children } = container;
		const { renderer } = engine;

		if (children) {
			const context = renderer.getContext();
			renderer.depth++;

			if (Array.isArray(children)) {
				for (let i = 0; i < children.length; i++) {
					const component = children[i];
					renderer.renderComponent(component, context);
				}
			} else if (children.type) {
				const component = children as Container;
				renderer.renderComponent(component, context);
			} else {
				const componentsMap = children as ComponentsMap;
				const keys = Object.keys(componentsMap);
				for (let i = 0; i < keys.length; i++) {
					const component = componentsMap[keys[i]];
					renderer.renderComponent(component, context);
				}
			}

			renderer.depth++;
		}
	}

	export function update(container: Container, engine: Engine): void {
		const { children } = container;
		const { support } = engine;

		if (children) {
			if (Array.isArray(children)) {
				for (let i = 0; i < children.length; i++) {
					const component = children[i];
					const componentContext = support.getUpdateContext(component, engine);
					support.update(component, componentContext);
				}
			} else if (children.type) {
				const component = children as Container;
				const childContext = support.getUpdateContext(component, engine);
				support.update(component, childContext);
			} else {
				const componentsMap = children as ComponentsMap;
				const keys = Object.keys(componentsMap);
				for (let i = 0; i < keys.length; i++) {
					const component = componentsMap[keys[i]];
					const componentContext = support.getUpdateContext(component, engine);
					support.update(component, componentContext);
				}
			}
		}
	}

	export function hitTest(container: Container, engine: Engine): boolean {
		const { children } = container;
		const { support } = engine;

		if (children) {
			if (Array.isArray(children)) {
				for (let i = children.length - 1; i >= 0; i--) {
					const component = children[i];
					const componentContext = support.getPointerContext(component, engine);
					const result = support.hitTest(component, componentContext);
					if (result) {
						return true;
					}
				}
			} else if (children.type) {
				const component = children as Container;
				const childContext = support.getPointerContext(component, engine);
				const result = support.hitTest(component, childContext);
				if (result) {
					return true;
				}
			} else {
				const componentsMap = children as ComponentsMap;
				const keys = Object.keys(componentsMap);
				for (let i = keys.length - 1; i >= 0; i--) {
					const component = componentsMap[keys[i]];
					const componentContext = support.getPointerContext(component, engine);
					const result = support.hitTest(component, componentContext);
					if (result) {
						return true;
					}
				}
			}
		}
		return false;
	}

	export function init(engine: Engine) {
		engine.updater.components.set(CONTAINER, update);
		engine.renderer.components.set(CONTAINER, render);
		engine.pointer.components.set(CONTAINER, hitTest);
	}
}
