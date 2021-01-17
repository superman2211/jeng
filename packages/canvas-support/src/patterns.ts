import { ColorTransform } from '@e2d/geom';

// eslint-disable-next-line import/prefer-default-export
export function createColorPattern(color: number, alpha: number, ct: ColorTransform): string {
	let r = color >> 16 & 0xff;
	let g = color >> 8 & 0xff;
	let b = color & 0xff;
	let a = alpha * 0xff;

	if (!ColorTransform.isDefault(ct)) {
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
