import { Engine } from '../core/engine';
import { Component } from './component';

export type ComponentsMap = { [key: string]: Component };

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

			renderer.depth--;
		}
	}

	export function update(container: Container, engine: Engine): void {
		const { children } = container;
		const { updater } = engine;

		if (children) {
			updater.depth++;

			if (Array.isArray(children)) {
				for (let i = 0; i < children.length; i++) {
					const component = children[i];
					updater.updateComponent(component);
				}
			} else if (children.type) {
				const component = children as Container;
				updater.updateComponent(component);
			} else {
				const componentsMap = children as ComponentsMap;
				const keys = Object.keys(componentsMap);
				for (let i = 0; i < keys.length; i++) {
					const component = componentsMap[keys[i]];
					updater.updateComponent(component);
				}
			}

			updater.depth--;
		}
	}

	export function hitTest(container: Container, engine: Engine): boolean {
		const { children } = container;
		const { pointers: pointerEvents } = engine;

		if (children) {
			const context = pointerEvents.getContext();
			pointerEvents.depth++;

			let result = false;

			if (Array.isArray(children)) {
				for (let i = children.length - 1; i >= 0; i--) {
					const component = children[i];
					if (pointerEvents.dispatchComponent(component, context, result)) {
						result = true;
					}
				}
			} else if (children.type) {
				const component = children as Container;
				if (pointerEvents.dispatchComponent(component, context, result)) {
					result = true;
				}
			} else {
				const componentsMap = children as ComponentsMap;
				const keys = Object.keys(componentsMap);
				for (let i = keys.length - 1; i >= 0; i--) {
					const component = componentsMap[keys[i]];
					if (pointerEvents.dispatchComponent(component, context, result)) {
						result = true;
					}
				}
			}

			pointerEvents.depth--;

			return result;
		}
		return false;
	}

	export function loaded(container: Container, engine: Engine): void {
		const { children } = container;
		const { loading } = engine;

		if (children) {
			const context = loading.getContext();
			loading.depth++;

			if (Array.isArray(children)) {
				if (children.length) {
					context.progress = 0;
					context.loaded = true;
					for (let i = 0; i < children.length; i++) {
						const component = children[i];
						loading.updateComponent(component);
						const componentContext = loading.getContext();
						context.progress += componentContext.progress;
						if (!componentContext.loaded) {
							context.loaded = false;
						}
					}
					context.progress /= children.length;
				} else {
					context.progress = 1;
				}
			} else if (children.type) {
				const component = children as Container;
				loading.updateComponent(component);
				const componentContext = loading.getContext();
				context.progress = componentContext.progress;
				context.loaded = componentContext.loaded;
			} else {
				const componentsMap = children as ComponentsMap;
				const keys = Object.keys(componentsMap);
				if (keys.length) {
					context.progress = 0;
					context.loaded = true;
					for (let i = 0; i < keys.length; i++) {
						const component = componentsMap[keys[i]];
						loading.updateComponent(component);
						const componentContext = loading.getContext();
						context.progress += componentContext.progress;
						if (!componentContext.loaded) {
							context.loaded = false;
						}
					}
					context.progress /= keys.length;
				} else {
					context.progress = 1;
					context.loaded = true;
				}
			}

			loading.depth--;
		}
	}

	export function init(engine: Engine) {
		engine.components.update.set(CONTAINER, update);
		engine.components.render.set(CONTAINER, render);
		engine.components.hitTest.set(CONTAINER, hitTest);
		engine.components.loaded.set(CONTAINER, loaded);
	}
}
