/* eslint-disable class-methods-use-this */
import { CanvasSupport } from '@e2d/canvas-support';
import { UpdateContext } from '@e2d/engine';
import { CanvasTextExtension, Text, defaultFormat } from '@e2d/text';

export default class CustomText extends CanvasTextExtension {
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
		context2d.font = `${size}px ${font}`;
		context2d.textBaseline = 'alphabetic';
		context2d.strokeStyle = 'red';
		context2d.fillStyle = '';
		context2d.strokeText(text, 0, size);
	}
}
