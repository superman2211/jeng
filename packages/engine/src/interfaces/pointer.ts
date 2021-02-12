import Debug from '../utils/debug';

export type PointerEventType = 'pointerDown' | 'pointerUp' | 'pointerMove' | 'pointerOver' | 'pointerOut';

export interface PointerEvent {
	type: PointerEventType;
	x: number;
	y: number;
	id?: number;
}

export interface Pointer {
	pointerEnabled?: boolean;
	pointerOver?: boolean;
	onPointerDown?: (event: PointerEvent) => void;
	onPointerUp?: (event: PointerEvent) => void;
	onPointerMove?: (event: PointerEvent) => void;
	onPointerOver?: (event: PointerEvent) => void;
	onPointerOut?: (event: PointerEvent) => void;
}

export namespace Pointer {
	export function isPointerOver(pointer: Pointer): boolean {
		return !!pointer.pointerOver;
	}

	export function isPointerEnabled(pointer: Pointer): boolean {
		return pointer.pointerEnabled ?? true;
	}

	export function dispatchEvent(pointer: Pointer, type: PointerEventType, x: number, y: number, id?: number) {
		const handlerName = `on${type.charAt(0).toUpperCase()}${type.slice(1)}`;
		if (handlerName) {
			const handler = (pointer as any)[handlerName];
			if (handler) {
				const event: PointerEvent = {
					type, x, y, id,
				};
				handler(event);
			}
		} else {
			Debug.warning(`Pointer event with type: ${type} not found`);
		}
	}
}
