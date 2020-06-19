import { Matrix } from '@e2d/geom';
import { IGraphicsData, IGraphicsFill } from './interfaces';
import { GradientType, SpreadMethod, InterpolationMethod } from './enums';

export default class GraphicsGradientFill implements IGraphicsData, IGraphicsFill {
	type: GradientType;
	colors: number[];
	alphas: number[];
	ratios: number[];
	matrix: Matrix;
	spreadMethod: SpreadMethod;
	interpolationMethod: InterpolationMethod;
	focalPointRatio: number;

	constructor(
		type: GradientType = GradientType.LINEAR,
		colors?: number[],
		alphas?: number[],
		ratios?: number[],
		matrix?: Matrix,
		spreadMethod: SpreadMethod = SpreadMethod.PAD,
		interpolationMethod: InterpolationMethod = InterpolationMethod.RGB,
		focalPointRatio: number = 0,
	) {
		this.type = type;
		this.colors = colors || [];
		this.alphas = alphas || [];
		this.ratios = ratios || [];
		this.matrix = matrix || new Matrix();
		this.spreadMethod = spreadMethod;
		this.interpolationMethod = interpolationMethod;
		this.focalPointRatio = focalPointRatio;
	}
}
