/* eslint-disable class-methods-use-this */
import { Support, UpdateContext } from '@e2d/engine';
import { ColorTransform } from '@e2d/geom';
import { CanvasSupport } from '@e2d/canvas-support';
import { TextExtension, defaultFormat } from './TextExtension';
import { Text } from './Text';

function getFont(font: string, size: number): string {
	return `${size}px ${font}`;
}

function createColorPattern(color: number, alpha: number, ct: ColorTransform): string {
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

export default class CanvasTextExtension extends TextExtension {
	measureText(support: Support, font: string, size: number, text: string): number {
		const context = (support as CanvasSupport).context2d;
		context.font = getFont(font, size);
		return context.measureText(text).width;
	}

	update(component: Text, context: UpdateContext): void {
		const { text } = component;
		if (!text) {
			return;
		}

		const { matrix, colorTransform } = context;

		if (colorTransform.alphaMultiplier <= 0) {
			return;
		}

		const { textFormat } = component;

		const font = textFormat?.font ?? defaultFormat.font!;
		const size = textFormat?.size ?? defaultFormat.size!;
		const color = textFormat?.color ?? defaultFormat.color!;

		const { support } = context;
		const { context2d } = support as CanvasSupport;

		context2d.setTransform(
			matrix.a,
			matrix.b,
			matrix.c,
			matrix.d,
			matrix.tx,
			matrix.ty,
		);

		context2d.globalAlpha = 1;
		context2d.font = getFont(font, size);
		context2d.textBaseline = 'alphabetic';
		context2d.strokeStyle = '';
		context2d.fillStyle = createColorPattern(color, 1, colorTransform);
		context2d.fillText(text, 0, size);
	}
}
