import { Rectangle } from '@e2d/geom';
import { UpdateContext, PointerContext } from '../engine/Context';
import { Pointer } from '../extensions/Pointer';
import { Transform } from '../extensions/Transform';

export interface Component extends Transform, Pointer {
	type: string;
	enabled?: boolean;
	onUpdate?: (time: number) => void;
}

export namespace Component {
	export function isEnabled(entity: Component) {
		return entity.enabled ?? true;
	}
}

export abstract class ComponentExtension {
	abstract update(component: Component, context: UpdateContext): void;
	abstract getBounds(component: Component, context: PointerContext): Rectangle | undefined;

	hitTest(component: Component, context: PointerContext): boolean {
		const { point } = context;
		const bounds = this.getBounds(component, context);
		return !!bounds && Rectangle.contains(bounds, point);
	}
}
