import { ColorTransform } from '@e2d/geom';

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
}
