import { Pointer } from '../extensions/pointer';
import { Transform } from '../extensions/transform';

export interface Component extends Transform, Pointer {
	type: string;
	id?: string;
	enabled?: boolean;
	visible?: boolean;
	onUpdate?: (time: number) => void;
}

export namespace Component {
	export function isEnabled(component: Component) {
		return component.enabled ?? true;
	}

	export function isVisible(component: Component) {
		return component.visible ?? true;
	}
}

// export abstract class ComponentExtension {
// 	abstract update(component: Component, context: UpdateContext): void;
// 	abstract getBounds(component: Component, context: PointerContext): Rectangle | undefined;

// 	hitTest(component: Component, context: PointerContext): boolean {
// 		const { point } = context;
// 		const bounds = this.getBounds(component, context);
// 		return !!bounds && Rectangle.contains(bounds, point);
// 	}
// }
