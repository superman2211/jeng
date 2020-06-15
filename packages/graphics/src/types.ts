import { Matrix } from '@e2d/geom';

export enum GraphicsPathCommand {
	MOVE_TO,
	LINE_TO,
	CURVE_TO,
	WIDE_MOVE_TO,
	WIDE_LINE_TO,
	CUBIC_CURVE_TO,
}

export enum GraphicsType {
	SOLID_FILL,
	GRADIENT_FILL,
	END_FILL,
	STROKE,
	PATH,
}

export enum GradientType {
	LINEAR,
	RADIAL,
}

export enum InterpolationMethod {
	LINEAR_RGB,
	RGB,
}

export enum SpreadMethod {
	PAD,
	REFLECT,
	REPEAT,
}

export interface IGraphicsData {
	type: GraphicsType,
}

export interface GraphicsSolidFill extends IGraphicsData {
	color: number,
	alpha: number,
}

export interface GraphicsGradientFill extends IGraphicsData {
	gradient: GradientType,
	colors: number[],
	alphas: number[],
	ratios: number[],
	matrix: Matrix,
	spreadMethod: SpreadMethod,
	interpolationMethod: InterpolationMethod,
	focalPointRatio: number
}

export interface GraphicsEndFill extends IGraphicsData {
}

export interface GraphicsStroke extends IGraphicsData {
	thickness: number,
	color: number,
	alpha: number,
	pixelHinting: boolean,
	caps: CanvasLineCap,
	joints: CanvasLineJoin,
	miterLimit: number,
}

export interface GraphicsPath extends IGraphicsData {
	commands: GraphicsPathCommand[],
	data: number[],
	winding: CanvasFillRule
}
