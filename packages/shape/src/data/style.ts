import { Source } from '@jeng/core';
import { Matrix } from '@jeng/geom';

export type FillType = 'solid' | 'radial' | 'linear' | 'bitmap';
export type CapsStyle = 'butt' | 'round' | 'square';
export type JointStyle = 'bevel' | 'miter' | 'round';
export type PathWinding = 'evenOdd' | 'nonZero';
export type GradientType = 'linear' | 'radial';
export type InterpolationMethod = 'linearRgb' | 'rgb';
export type SpreadMethod = 'pad' | 'reflect' | 'repeat';
export type LineScaleMode = 'normal' | 'none' | 'vertical' | 'horizontal';

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
	matrix?: Matrix;
	spread?: SpreadMethod;
	interpolation?: InterpolationMethod;
	focalPointRatio?: number;
}

export interface BitmapFill extends FillStyle, Source {
	matrix?: Matrix;
	repeat?: boolean;
	smooth?: boolean;
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
