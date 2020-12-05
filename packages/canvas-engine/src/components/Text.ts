import {
	ColorTransform,
	Context,
	Entity,
	isDefault,
	Transform,
} from '@e2d/core';
import { CanvasContext, CanvasContextState } from '../engine/CanvasContext';

export const TEXT = 'text';

export interface Text extends Entity, Transform {
	text?: string,
	fontSize?: number,
	fontName?: string,
	color?: number;
}

function createColorPattern(color: number, alpha: number, ct: ColorTransform): string {
	let r = color >> 16 & 0xff;
	let g = color >> 8 & 0xff;
	let b = color & 0xff;
	let a = alpha * 0xff;

	if (!isDefault(ct)) {
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

export function updateText(text: Text, context: Context): void {
	if (text.text) {
		const context2d = context as CanvasContext;
		const state = context2d.getState(text) as CanvasContextState;
		const { matrix, colorTransform } = state;

		const fontSize = text.fontSize ?? 10;
		const fontName = text.fontName ?? 'arial';
		const fontColor = text.color ?? 0;

		const renderingContext = context2d.context;
		renderingContext.setTransform(
			matrix.a,
			matrix.b,
			matrix.c,
			matrix.d,
			matrix.tx,
			matrix.ty,
		);
		renderingContext.globalAlpha = 1;
		renderingContext.font = `${fontSize}px ${fontName}`;
		renderingContext.textBaseline = 'alphabetic';
		renderingContext.strokeStyle = '';
		renderingContext.fillStyle = createColorPattern(fontColor, 1, colorTransform);
		renderingContext.fillText(text.text, 0, fontSize);
	}
}
