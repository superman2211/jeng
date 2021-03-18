export interface Pivot {
	pivotX?: number;
	pivotY?: number;
}

export namespace Pivot {
	export function getX(pivot: Pivot, width: number): number {
		const { pivotX } = pivot;
		if (pivotX) {
			return -pivotX * width;
		}
		return 0;
	}

	export function getY(pivot: Pivot, height: number): number {
		const { pivotY } = pivot;
		if (pivotY) {
			return -pivotY * height;
		}
		return 0;
	}

	export function hasValues(pivot: Pivot): boolean {
		const { pivotX, pivotY } = pivot;
		return !!pivotX || !!pivotY;
	}
}
