export interface Pointer {
	pointerEnabled?: boolean;
	onPointerDown?: (x: number, y: number) => void;
	onPointerUp?: (x: number, y: number) => void;
	onPointerMove?: (x: number, y: number) => void;
}

export namespace Pointer {
	export function isPointerEnabled(pointer: Pointer): boolean {
		return pointer.pointerEnabled ?? true;
	}
}
