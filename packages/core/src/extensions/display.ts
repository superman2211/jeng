export interface Display {
	visible?: boolean;
}

export namespace Display {
	export function isVisible(component: Display) {
		return component.visible ?? true;
	}
}
