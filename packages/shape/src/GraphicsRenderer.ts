import {
	Matrix,
	Point,
	ColorTransform,
} from '@e2d/geom';
import {
	IRenderingPattern,
	IRenderingContext,
	RadialGradientPattern,
	GradientPattern,
	LinearGradientPattern,
	ColorPattern,
	ImagePattern,
	StrokeStyle,
} from '@e2d/render';
import { IGraphicsFill } from './interfaces';
import { GradientType, GraphicsPathCommand } from './enums';
import Graphics from './Graphics';
import GraphicsGradientFill from './GraphicsGradientFill';
import GraphicsStroke from './GraphicsStroke';
import GraphicsSolidFill from './GraphicsSolidFill';
import GraphicsBitmapFill from './GraphicsBitmapFill';
import GraphicsPath from './GraphicsPath';
import GraphicsEndFill from './GraphicsEndFill';

export default class GraphicsRenderer {
	private static tempMatrix = new Matrix();
	private static tempPoint1 = new Point();
	private static tempPoint2 = new Point();

	private static createColorPattern(color: number, alpha: number, ct: ColorTransform): ColorPattern {
		const pattern = new ColorPattern();

		const r = color >> 16 & 0xff;
		const g = color >> 8 & 0xff;
		const b = color & 0xff;
		const a = alpha * 0xff;

		if (!ct.isDefault()) {
			pattern.r = (r * ct.redMultiplier + ct.redOffset) & 0xff;
			pattern.g = (g * ct.greenMultiplier + ct.greenOffset) & 0xff;
			pattern.b = (b * ct.blueMultiplier + ct.blueOffset) & 0xff;
			pattern.a = (a * ct.alphaMultiplier + ct.alphaOffset) & 0xff;
			return pattern;
		}

		pattern.r = r;
		pattern.g = g;
		pattern.b = b;
		pattern.a = a;

		return pattern;
	}

	private static createGradientPattern(context: IRenderingContext, fill: GraphicsGradientFill, colorTransform: ColorTransform): GradientPattern | undefined {
		let pattern: GradientPattern | undefined;

		let { matrix } = fill;

		if (!matrix) {
			matrix = this.tempMatrix;
		}

		switch (fill.type) {
			case GradientType.RADIAL:
				this.tempPoint1.setTo(1638.4, 0);
				matrix.transformPointTo(this.tempPoint1, this.tempPoint1);

				const radialGradient = new RadialGradientPattern();
				radialGradient.x0 = matrix.tx;
				radialGradient.y0 = matrix.ty;
				radialGradient.r0 = 0;
				radialGradient.x1 = matrix.tx;
				radialGradient.y1 = matrix.ty;
				radialGradient.r1 = Math.abs(this.tempPoint1.x - matrix.tx) / 2;

				pattern = radialGradient;
				break;

			case GradientType.LINEAR:
				this.tempPoint1.setTo(-819.2, 0);
				this.tempPoint2.setTo(819.2, 0);
				matrix.transformPointTo(this.tempPoint1, this.tempPoint1);
				matrix.transformPointTo(this.tempPoint2, this.tempPoint2);

				const linearGradient = new LinearGradientPattern();
				linearGradient.x0 = this.tempPoint1.x;
				linearGradient.y0 = this.tempPoint1.y;
				linearGradient.x1 = this.tempPoint2.x;
				linearGradient.y1 = this.tempPoint2.y;

				pattern = linearGradient;
				break;
			default:
				return pattern;
		}

		const { colors, alphas, ratios } = fill;

		for (let i = 0; i < colors.length; i++) {
			const rgb = colors[i];
			const alpha = alphas[i];

			const color = this.createColorPattern(rgb, alpha, colorTransform);

			let ratio = ratios[i] / 0xff;
			if (ratio < 0) ratio = 0;
			else if (ratio > 1) ratio = 1;

			pattern.offsets.push(ratio);
			pattern.colors.push(color);
		}

		return pattern;
	}

	static createFillPattern(context: IRenderingContext, fill: IGraphicsFill, colorTransform: ColorTransform): IRenderingPattern | undefined {
		if (fill instanceof GraphicsSolidFill) {
			return this.createColorPattern(fill.color, fill.alpha, colorTransform);
		}

		if (fill instanceof GraphicsGradientFill) {
			return this.createGradientPattern(context, fill, colorTransform);
		}

		if (fill instanceof GraphicsBitmapFill) {
			return this.createImagePattern(context, fill);
		}

		return undefined;
	}

	static createImagePattern(context: IRenderingContext, fill: GraphicsBitmapFill): ImagePattern | undefined {
		if (fill.bitmapData) {
			const {
				bitmapData, matrix, repeat, smooth,
			} = fill;

			const {
				a, b, c, d, tx, ty,
			} = matrix;

			const pattern = new ImagePattern();
			pattern.image = bitmapData;
			pattern.smooth = smooth;
			pattern.repeat = repeat;
			pattern.a = a;
			pattern.b = b;
			pattern.c = c;
			pattern.d = d;
			pattern.tx = tx;
			pattern.ty = ty;
			return pattern;
		}

		return undefined;
	}

	static render(context: IRenderingContext, matrix: Matrix, colorTransform: ColorTransform, graphics: Graphics) {
		const graphicsData = graphics.readGraphicsData();

		if (!graphicsData.length) {
			return;
		}

		context.setTransform(
			matrix.a,
			matrix.b,
			matrix.c,
			matrix.d,
			matrix.tx,
			matrix.ty,
		);

		let stroke: GraphicsStroke | null = null;
		let fill: IGraphicsFill | null = null;

		graphicsData.forEach((item) => {
			if (item instanceof GraphicsStroke) {
				stroke = item;
			} else if (item instanceof GraphicsSolidFill || item instanceof GraphicsGradientFill || item instanceof GraphicsBitmapFill) {
				fill = item;
			} else if (item instanceof GraphicsEndFill) {
				fill = null;
			} else if (item instanceof GraphicsPath) {
				const { data, commands } = item;

				let index = 0;

				let moved = false;
				let moveX = 0;
				let moveY = 0;

				context.beginPath();

				commands.forEach((command) => {
					switch (command) {
						case GraphicsPathCommand.MOVE_TO:
							if (fill && moved) {
								context.lineTo(moveX, moveY);
							}

							moved = true;
							moveX = data[index++];
							moveY = data[index++];

							context.moveTo(moveX, moveY);
							break;

						case GraphicsPathCommand.LINE_TO:
							context.lineTo(
								data[index++],
								data[index++],
							);
							break;

						case GraphicsPathCommand.CURVE_TO:
							context.quadraticCurveTo(
								data[index++],
								data[index++],
								data[index++],
								data[index++],
							);
							break;

						case GraphicsPathCommand.WIDE_MOVE_TO:
							context.moveTo(
								data[index++],
								data[index++],
							);
							break;

						case GraphicsPathCommand.WIDE_LINE_TO:
							context.lineTo(
								data[index++],
								data[index++],
							);
							break;

						case GraphicsPathCommand.CUBIC_CURVE_TO:
							context.bezierCurveTo(
								data[index++],
								data[index++],
								data[index++],
								data[index++],
								data[index++],
								data[index++],
							);
							break;
						default:
							break;
					}
				});

				if (fill && moved) {
					context.lineTo(moveX, moveY);
				}

				if (fill) {
					const fillPattern = this.createFillPattern(context, fill, colorTransform);

					if (fillPattern) {
						const fillStyle = { alpha: 1 };
						context.fill(fillPattern, fillStyle);
					}
				}

				if (stroke != null && stroke.thickness > 0) {
					const strokePattern = this.createFillPattern(context, stroke.fill as IGraphicsFill, colorTransform);

					if (strokePattern) {
						const strokeStyle: StrokeStyle = {
							thikness: stroke.thickness,
							join: stroke.joints,
							cap: stroke.caps,
							miterLimit: stroke.miterLimit,
							alpha: 1,
						};

						context.stroke(strokePattern, strokeStyle);
					}
				}
			}
		});
	}
}
