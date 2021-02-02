import { Source } from '@e2d/engine';
import { Bounds, Matrix } from '@e2d/geom';
import { GraphicsPath } from './path';
import { GraphicsString } from './string';

export type CapsStyle = 'butt' | 'round' | 'square';
export type JointStyle ='bevel' | 'miter' | 'round';
export type PathWinding = 'evenOdd' | 'nonZero';
export type FillType = 'solid' | 'radial' | 'linear' | 'bitmap';
export type GradientType = 'linear' | 'radial';
export type InterpolationMethod = 'linearRgb' | 'rgb';
export type SpreadMethod = 'pad' | 'reflect' | 'repeat';
export type LineScaleMode = 'normal' | 'none' | 'vertical' | 'horizontal';

export interface GraphicsFill extends Source {
	type?: FillType;
	color?: number | number[];
	alpha?: number | number[];
	ratio?: number | number[];
	matrix?: Matrix;
	spread?: SpreadMethod;
	interpolation?: InterpolationMethod;
	focalPointRatio?: number;
	repeat?: boolean;
	smooth?: boolean;
}

export interface GraphicsStroke {
	caps?: CapsStyle;
	fill?: number | GraphicsFill;
	joints?: JointStyle;
	miterLimit?: number;
	pixelHinting?: boolean;
	scaleMode?: LineScaleMode;
	thickness?: number;
}

export interface GraphicsData {
	fill?: number | GraphicsFill;
	stroke?: number | GraphicsStroke;
	path?: string | GraphicsPath | GraphicsPath[];
}

export namespace GraphicsData {
	export function calculateBounds(data: GraphicsData, bounds: Bounds) {
		const { path } = data;
		if (Array.isArray(path)) {
			for (let i = 0; i < path.length; i++) {
				GraphicsPath.calculateBounds(path[i], bounds);
			}
		} else if (typeof path === 'object') {
			GraphicsPath.calculateBounds(path, bounds);
		} else if (typeof path === 'string') {
			GraphicsString.calculateBounds(path, bounds);
		}
	}
}
