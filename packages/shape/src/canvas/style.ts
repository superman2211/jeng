import { CanvasEngine, CanvasPatterns } from '@jeng/canvas-engine';
import { ColorTransform, Matrix } from '@jeng/geom';
import { ImageResource } from '@jeng/resources';
import {
	BitmapFill, FillStyle, GradientFill, SolidFill, StrokeStyle, RadialGradientFill,
} from '../data/style';

const emptyArray: number[] = [];
const emptyMatrix = Matrix.empty();

function getCanvasPattern(fill: number | FillStyle, colorTransform: ColorTransform, context: CanvasRenderingContext2D, engine: CanvasEngine): string | CanvasGradient | CanvasPattern {
	if (typeof fill === 'number') {
		return CanvasPatterns.colorPattern(fill, 1, colorTransform);
	}

	if (typeof fill === 'object') {
		switch (fill.type) {
			case 'solid':
				const solid: SolidFill = fill;
				return CanvasPatterns.colorPattern(solid.color ?? 0, solid.alpha ?? 1, colorTransform);

			case 'linear':
				const linear: GradientFill = fill;
				return CanvasPatterns.linearGradientPattern(
					linear.beginX ?? 0,
					linear.beginY ?? 0,
					linear.endX ?? 0,
					linear.endY ?? 0,
					linear.colors ?? emptyArray,
					linear.alphas ?? emptyArray,
					linear.ratios ?? emptyArray,
					colorTransform,
					context,
				);

			case 'radial':
				const radial: RadialGradientFill = fill;
				return CanvasPatterns.radialGradientPattern(
					radial.beginX ?? 0,
					radial.beginY ?? 0,
					radial.beginRadius ?? 0,
					radial.endX ?? radial.beginX ?? 0,
					radial.endY ?? radial.beginY ?? 0,
					radial.endRadius ?? 0,
					radial.colors ?? emptyArray,
					radial.alphas ?? emptyArray,
					radial.ratios ?? emptyArray,
					colorTransform,
					context,
				);

			case 'bitmap':
				const bitmapFill = fill as BitmapFill;
				const {
					repeat = true, src, matrix = emptyMatrix, fallback,
				} = bitmapFill;
				if (!src) {
					return 'transparent';
				}

				const resource = engine.resources.get(src) as ImageResource;

				if (resource?.image) {
					const pattern = CanvasPatterns.bitmapPattern(resource.image, repeat, matrix, context);
					return pattern;
				}

				if (fallback) {
					return getCanvasPattern(fallback, colorTransform, context, engine);
				}

				return 'transparent';

			default:
				return 'transparent';
		}
	}

	return '';
}

export function setFillStyle(fill: number | FillStyle, colorTransform: ColorTransform, context: CanvasRenderingContext2D, engine: CanvasEngine) {
	context.fillStyle = getCanvasPattern(fill, colorTransform, context, engine);
}

export function setStrokeStyle(stroke: number | StrokeStyle, colorTransform: ColorTransform, context: CanvasRenderingContext2D, engine: CanvasEngine) {
	if (typeof stroke === 'number') {
		context.strokeStyle = CanvasPatterns.colorPattern(stroke, 1, colorTransform);
		context.lineWidth = 1;
		context.lineCap = 'round';
		context.lineJoin = 'round';
		context.miterLimit = 10;
	} else if (typeof stroke === 'object' && stroke.fill !== undefined) {
		context.strokeStyle = getCanvasPattern(stroke.fill, colorTransform, context, engine);
		context.lineWidth = stroke.thickness ?? 1;
		context.lineCap = stroke.caps ?? 'round';
		context.lineJoin = stroke.joints ?? 'round';
		context.miterLimit = stroke.miterLimit ?? 10;
	}
}
