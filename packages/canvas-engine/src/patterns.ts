import { ColorTransform } from '@jeng/geom';

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
			const color = colors[i];
			const alpha = alphas[i];

			let ratio = ratios[i];
			if (ratio < 0) ratio = 0;
			if (ratio > 1) ratio = 1;

			const colorStyle = colorPattern(color, alpha, colorTransform);
			pattern.addColorStop(ratio, colorStyle);
		}
	}

	export function radialGradientPattern(
		beginX: number,
		beginY: number,
		beginRadius: number,
		endX: number,
		endY: number,
		endRadius: number,
		colors: number[],
		alphas: number[],
		ratios: number[],
		colorTransform: ColorTransform,
		context: CanvasRenderingContext2D,
	): CanvasGradient {
		const pattern = context.createRadialGradient(
			beginX,
			beginY,
			beginRadius,
			endX,
			endY,
			endRadius,
		);
		addGradientColors(pattern, colors, alphas, ratios, colorTransform);
		return pattern;
	}

	export function linearGradientPattern(
		beginX: number,
		beginY: number,
		endX: number,
		endY: number,
		colors: number[],
		alphas: number[],
		ratios: number[],
		colorTransform: ColorTransform,
		context: CanvasRenderingContext2D,
	): CanvasGradient {
		const pattern = context.createLinearGradient(
			beginX,
			beginY,
			endX,
			endY,
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
