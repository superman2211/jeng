import { Bounds } from '@e2d/geom';

export type PathCommandType = 'moveTo' | 'lineTo' | 'curveTo' | 'cubicCurveTo';

export interface PathCommand {
	type: PathCommandType;
}

// (x, y)
export interface MoveTo extends PathCommand {
	// target point
	x?: number;
	y?: number;
}

// --> (x, y)
export interface LineTo extends PathCommand {
	// target point
	x?: number;
	y?: number;
}

// --> (cx, cy) --> (x, y)
export interface CurveTo extends PathCommand {
	// control point
	cx?: number;
	cy?: number;
	// target point
	x?: number;
	y?: number;
}

// --> (cx, cy) --> (sx, sy) --> (x, y)
export interface CubicCurveTo extends PathCommand {
	// first control point
	cx?: number;
	cy?: number;
	// second control point
	sx?: number;
	sy?: number;
	// target point
	x?: number;
	y?: number;
}

export namespace PathCommand {
	export function calculateBounds(path: PathCommand, bounds: Bounds) {
		const { type } = path;

		switch (type) {
			case 'moveTo':
			case 'lineTo':
				const moveTo = path as MoveTo;
				Bounds.test(bounds, moveTo.x ?? 0, moveTo.y ?? 0);
				break;

			case 'curveTo':
				const curveTo = path as CurveTo;
				Bounds.test(bounds, curveTo.cx ?? 0, curveTo.cy ?? 0);
				Bounds.test(bounds, curveTo.x ?? 0, curveTo.y ?? 0);
				break;

			case 'cubicCurveTo':
				const cubicCurveTo = path as CubicCurveTo;
				Bounds.test(bounds, cubicCurveTo.cx ?? 0, cubicCurveTo.cy ?? 0);
				Bounds.test(bounds, cubicCurveTo.sx ?? 0, cubicCurveTo.sy ?? 0);
				Bounds.test(bounds, cubicCurveTo.x ?? 0, cubicCurveTo.y ?? 0);
				break;

			default:
				break;
		}
	}
}
