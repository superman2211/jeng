import { CanvasEngine, CanvasPatterns } from '@e2d/canvas-engine';
import { Source } from '@e2d/core';
import { ColorTransform, Matrix } from '@e2d/geom';
import { ImageResource } from '@e2d/resources';
import {
	BitmapFill, FillStyle, GradientFill, SolidFill, StrokeStyle,
} from '../data/style';

const emptyMatrix = Matrix.empty();
const emptyArray: number[] = [];

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
				const {
					matrix: ml = emptyMatrix,
					colors: cl = emptyArray,
					alphas: al = emptyArray,
					ratios: rl = emptyArray,
				} = fill as GradientFill;

				return CanvasPatterns.linearGradientPattern(
					ml, cl, al, rl,
					colorTransform,
					context,
				);

			case 'radial':
				const {
					matrix: mr = emptyMatrix,
					colors: cr = emptyArray,
					alphas: ar = emptyArray,
					ratios: rr = emptyArray,
				} = fill as GradientFill;

				return CanvasPatterns.radialGradientPattern(
					mr, cr, ar, rr,
					colorTransform,
					context,
				);

			case 'bitmap':
				const { repeat = true } = fill as BitmapFill;
				const resource = Source.getResource(fill as BitmapFill, engine) as ImageResource;
				if (resource?.image) {
					return CanvasPatterns.bitmapPattern(resource.image, repeat, context);
				}
				return '';

			default:
				return '';
		}
	}

	return '';
}

export function setFillStyle(fill: number | FillStyle, colorTransform: ColorTransform, context: CanvasRenderingContext2D, engine: CanvasEngine) {
	context.fillStyle = getCanvasPattern(fill, colorTransform, context, engine);
}

export function setStrokeStyle(stroke: number | StrokeStyle, colorTransform: ColorTransform, context: CanvasRenderingContext2D, engine: CanvasEngine) {
	if (typeof stroke === 'number') {
		context.fillStyle = CanvasPatterns.colorPattern(stroke, 1, colorTransform);
		context.lineWidth = 1;
	} else if (typeof stroke === 'object' && stroke.fill) {
		context.fillStyle = getCanvasPattern(stroke.fill, colorTransform, context, engine);
	}
}
