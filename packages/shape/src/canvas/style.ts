import { CanvasEngine, CanvasPatterns } from '@jeng/canvas-engine';
import { ColorTransform, Matrix } from '@jeng/geom';
import { ImageResource } from '@jeng/resources';
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
				const bitmapFill = fill as BitmapFill;
				const { repeat = true, src } = bitmapFill;
				if (!src) {
					return '';
				}

				const resource = engine.resources.get(src) as ImageResource;
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
