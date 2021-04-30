export type PointerEventType = 'pointerDown' | 'pointerUp' | 'pointerMove' | 'pointerCancel' | 'pointerOver' | 'pointerOut';

const handlersMap = {
	pointerDown: 'onPointerDown',
	pointerUp: 'onPointerUp',
	pointerMove: 'onPointerMove',
	pointerCancel: 'onPointerCancel',
	pointerOver: 'onPointerOver',
	pointerOut: 'onPointerOut',
};

export interface PointerEvent {
	type: PointerEventType;
	x: number;
	y: number;
	globalX: number;
	globalY: number;
	id?: number;
}

export interface Pointer {
	pointerEnabled?: boolean;
	pointerOver?: boolean;
	onPointerDown?: (event: PointerEvent) => void;
	onPointerUp?: (event: PointerEvent) => void;
	onPointerMove?: (event: PointerEvent) => void;
	onPointerCancel?: (event: PointerEvent) => void;
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

	export function dispatchEvent(pointer: Pointer, type: PointerEventType, x: number, y: number, globalX: number, globalY: number, id: number) {
		const handlerName = handlersMap[type];
		if (handlerName && (pointer as any)[handlerName]) {
			const event: PointerEvent = {
				type,
				x,
				y,
				globalX,
				globalY,
				id,
			};
			(pointer as any)[handlerName](event);
		}
	}
}
