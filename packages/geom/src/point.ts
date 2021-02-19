export interface Point {
	x: number;
	y: number;
}

export namespace Point {
	export function empty(): Point {
		return { x: 0, y: 0 };
	}
}
