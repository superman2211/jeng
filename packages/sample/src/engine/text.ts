/* eslint-disable import/prefer-default-export */
import { CanvasSupport } from '@e2d/canvas-support';
import { RenderContext } from '@e2d/engine';
import {
	Text, defaultTextFormat, applyTextExtension, TEXT,
} from '@e2d/text';

function renderText(component: Text, context: RenderContext): void {
	const { text } = component;
	if (!text) {
		return;
	}

	const { matrix, colorTransform } = context;

	if (colorTransform.alphaMultiplier <= 0) {
		return;
	}

	const { textFormat } = component;

	const font = textFormat?.font ?? defaultTextFormat.font!;
	const size = textFormat?.size ?? defaultTextFormat.size!;

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

export function applyCustomTextExtension(support: CanvasSupport) {
	applyTextExtension(support);
	support.renderHandlers.set(TEXT, renderText);
}
