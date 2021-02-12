import { Pointer } from '../interfaces/pointer';
import { Transform } from '../interfaces/transform';

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
