import Debug from '../utils/debug';

export type PointerEventType = 'pointerUp' | 'pointerDown' | 'pointerMove';

export interface PointerEvent {
	type: PointerEventType;
	x: number;
	y: number;
	id?: number;
}

export interface Pointer {
	pointerEnabled?: boolean;
	onPointerDown?: (event: PointerEvent) => void;
	onPointerUp?: (event: PointerEvent) => void;
	onPointerMove?: (event: PointerEvent) => void;
}

export namespace Pointer {
	export function isPointerEnabled(pointer: Pointer): boolean {
		return pointer.pointerEnabled ?? true;
	}

	export function runEvent(pointer: Pointer, event: PointerEvent) {
		switch (event.type) {
			case 'pointerDown':
				if (pointer.onPointerDown) {
					pointer.onPointerDown(event);
				}
				break;
			case 'pointerMove':
				if (pointer.onPointerMove) {
					pointer.onPointerMove(event);
				}
				break;
			case 'pointerUp':
				if (pointer.onPointerUp) {
					pointer.onPointerUp(event);
				}
				break;
			default:
				Debug.warning(`Pointer event with type: ${event.type} not found`);
				break;
		}
	}
}
