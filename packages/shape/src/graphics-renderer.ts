import {
	Matrix,
	Point,
	ColorTransform,
	Color,
} from '@e2d/geom';
import { IRenderingContext, IRenderSupport } from '@e2d/render';
import GraphicsGradientFill from './graphics-gradient-fill';
import { GradientType, GraphicsPathCommand } from './enums';
import Graphics from './graphics';
import GraphicsStroke from './graphics-stroke';
import GraphicsSolidFill from './graphics-solid-fill';
import GraphicsBitmapFill from './graphics-bitmap-fill';
import { GraphicsPath, GraphicsEndFill, IGraphicsFill } from '.';
import { IGraphicsBitmapData } from './interfaces';

export default class GraphicsRenderer {
	private static tempMatrix = new Matrix();
	private static tempPoint1 = new Point();
	private static tempPoint2 = new Point();

	private static createGradientPattern(context: IRenderingContext, fill: GraphicsGradientFill, colorTransform: ColorTransform): CanvasGradient | '' {
		let pattern: CanvasGradient | '' = '';

		let { matrix } = fill;

		if (!matrix) {
			matrix = this.tempMatrix;
		}

		switch (fill.type) {
			case GradientType.RADIAL:
				this.tempPoint1.setTo(1638.4, 0);
				matrix.transformPointTo(this.tempPoint1, this.tempPoint1);

				pattern = context.createRadialGradient(
					matrix.tx,
					matrix.ty,
					0,
					matrix.tx,
					matrix.ty,
					Math.abs((this.tempPoint1.x - matrix.tx) / 2),
				);
				break;

			case GradientType.LINEAR:
				this.tempPoint1.setTo(-819.2, 0);
				this.tempPoint2.setTo(819.2, 0);
				matrix.transformPointTo(this.tempPoint1, this.tempPoint1);
				matrix.transformPointTo(this.tempPoint2, this.tempPoint2);

				pattern = context.createLinearGradient(
					this.tempPoint1.x,
					this.tempPoint1.y,
					this.tempPoint2.x,
					this.tempPoint2.y,
				);
				break;
			default:
				break;
		}

		if (!pattern) {
			return '';
		}

		let rgb = 0;
		let alpha = 0;
		let ratio = 0;

		for (let i = 0; i < fill.colors.length; i++) {
			rgb = fill.colors[i];
			alpha = fill.alphas[i];

			ratio = fill.ratios[i] / 0xFF;
			if (ratio < 0) ratio = 0;
			if (ratio > 1) ratio = 1;

			pattern.addColorStop(
				ratio,
				Color.format(rgb, alpha, colorTransform),
			);
		}

		return pattern;
	}

	static createFillPattern(context: IRenderingContext, fill: IGraphicsFill, colorTransform: ColorTransform): any {
		if (fill instanceof GraphicsSolidFill) {
			if (fill.alpha > 0) {
				return Color.format(fill.color, fill.alpha, colorTransform);
			}
		} else if (fill instanceof GraphicsGradientFill) {
			return this.createGradientPattern(context, fill, colorTransform);
		}

		return '';
	}

	static render(context: IRenderingContext, matrix: Matrix, colorTransform: ColorTransform, graphics: Graphics) {
		const graphicsData = graphics.readGraphicsData();

		context.strokeStyle = '';
		context.fillStyle = '';

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
					context.fillStyle = this.createFillPattern(context, fill, colorTransform);

					if (context.fillStyle) {
						context.fill();
					}
				}

				if (stroke != null && stroke.thickness > 0) {
					context.strokeStyle = this.createFillPattern(context, stroke.fill as IGraphicsFill, colorTransform);

					if (context.strokeStyle) {
						context.lineWidth = stroke.thickness;
						context.lineJoin = stroke.joints;
						context.lineCap = stroke.caps;
						context.miterLimit = stroke.miterLimit;
						context.stroke();
					}
				}
			}
		});
	}
}
