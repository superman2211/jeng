import { Source } from '@jeng/core';
import { Matrix } from '@jeng/geom';

export type FillType = 'solid' | 'radial' | 'linear' | 'bitmap';
export type CapsStyle = 'butt' | 'round' | 'square';
export type JointStyle = 'bevel' | 'miter' | 'round';
export type LineScaleMode = 'normal' | 'none' | 'vertical' | 'horizontal';
export type GradientType = 'radial' | 'linear';

export interface FillStyle {
	type: FillType;
}

export interface SolidFill extends FillStyle {
	color?: number;
	alpha?: number;
}

export interface GradientFill extends FillStyle {
	colors?: number[];
	alphas?: number[];
	ratios?: number[];
	beginX?: number;
	beginY?: number;
	endX?: number;
	endY?: number;
}

export interface RadialGradientFill extends GradientFill {
	beginRadius?: number;
	endRadius?: number;
}

export interface BitmapFill extends FillStyle, Source {
	matrix?: Matrix;
	repeat?: boolean;
	smooth?: boolean;
	fallback?: number | FillStyle;
}

export interface StrokeStyle {
	fill?: number | FillStyle;
	thickness?: number;
	caps?: CapsStyle;
	joints?: JointStyle;
	miterLimit?: number;
	pixelHinting?: boolean;
	scaleMode?: LineScaleMode;
}
