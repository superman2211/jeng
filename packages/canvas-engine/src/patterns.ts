import { ColorTransform, Matrix, Point } from '@e2d/geom';

const point1 = Point.empty();
const point2 = Point.empty();

export namespace CanvasPatterns {
	export function colorPattern(color: number, alpha: number, ct: ColorTransform): string {
		let r = color >> 16 & 0xff;
		let g = color >> 8 & 0xff;
		let b = color & 0xff;
		let a = alpha * 0xff;

		if (!ColorTransform.isEmpty(ct)) {
			r = (r * ct.redMultiplier + ct.redOffset) & 0xff;
			g = (g * ct.greenMultiplier + ct.greenOffset) & 0xff;
			b = (b * ct.blueMultiplier + ct.blueOffset) & 0xff;
			a = (a * ct.alphaMultiplier + ct.alphaOffset) & 0xff;
		}

		if (a < 0xff) {
			return `rgba(${r}, ${g}, ${b}, ${a / 0xff})`;
		}

		return `rgb(${r}, ${g}, ${b})`;
	}

	export function addGradientColors(
		pattern: CanvasGradient,
		colors: number[],
		alphas: number[],
		ratios: number[],
		colorTransform: ColorTransform,
	) {
		for (let i = 0; i < colors.length; i++) {
			const rgb = colors[i];
			const alpha = alphas[i];

			let ratio = ratios[i] / 0xFF;
			if (ratio < 0) ratio = 0;
			if (ratio > 1) ratio = 1;

			pattern.addColorStop(
				ratio,
				colorPattern(rgb, alpha, colorTransform),
			);
		}
	}

	export function radialGradientPattern(
		matrix: Matrix,
		colors: number[],
		alphas: number[],
		ratios: number[],
		colorTransform: ColorTransform,
		context: CanvasRenderingContext2D,
	): CanvasGradient {
		point1.x = 1638.4;
		point1.y = 0;
		Matrix.transformPoint(matrix, point1, point1);

		const pattern = context.createRadialGradient(
			matrix.tx,
			matrix.ty,
			0,
			matrix.tx,
			matrix.ty,
			Math.abs((point1.x - matrix.tx) / 2),
		);

		addGradientColors(pattern, colors, alphas, ratios, colorTransform);
		return pattern;
	}

	export function linearGradientPattern(
		matrix: Matrix,
		colors: number[],
		alphas: number[],
		ratios: number[],
		colorTransform: ColorTransform,
		context: CanvasRenderingContext2D,
	): CanvasGradient {
		point1.x = -819.2;
		point1.y = 0;

		point2.x = 819.2;
		point2.y = 0;

		Matrix.transformPoint(matrix, point1, point1);
		Matrix.transformPoint(matrix, point2, point2);

		const pattern = context.createLinearGradient(
			point1.x,
			point1.y,
			point2.x,
			point2.y,
		);

		addGradientColors(pattern, colors, alphas, ratios, colorTransform);
		return pattern;
	}

	export function bitmapPattern(
		image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement,
		repeat: boolean,
		context: CanvasRenderingContext2D,
	): CanvasPattern | '' {
		const pattern = context.createPattern(image, repeat ? 'repeat' : 'none');
		if (pattern) {
			return pattern;
		}
		return '';
	}
}
