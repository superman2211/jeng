/* eslint-disable no-mixed-operators */
// eslint-disable-next-line no-unused-vars
import { ColorTransform } from '.';

export default class Color {
	static format(color: number, alpha: number = 1, ct: ColorTransform | null = null): string {
		if (ct != null && !ct.isDefault()) {
			const r = Math.floor((color >> 16 & 0xff) * ct.redMultiplier + ct.redOffset);
			const g = Math.floor((color >> 8 & 0xff) * ct.greenMultiplier + ct.greenOffset);
			const b = Math.floor((color & 0xff) * ct.blueMultiplier + ct.blueOffset);
			const a = alpha * ct.alphaMultiplier + ct.alphaOffset / 0xff;
			return `rgba(${r}, ${g}, ${b}, ${a})`;
		}

		if (alpha >= 1) {
			const hex = (color & 0xffffff).toString(16).padStart(6);
			return `#${hex}`;
		}

		const r = color >> 16 & 0xff;
		const g = color >> 8 & 0xff;
		const b = color & 0xff;

		return `rgba(${r}, ${g}, ${b}, ${alpha})`;
	}
}
