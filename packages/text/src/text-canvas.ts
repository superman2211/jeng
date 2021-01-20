/* eslint-disable class-methods-use-this */
import { Pivot, RenderContext, Support } from '@e2d/engine';
import { CanvasSupport, createColorPattern } from '@e2d/canvas-support';
import {
	getAdvance, getFont, getLineWidth, getStyleFont, getTextHeight, getTextWidth,
} from './font';
import { applyTextExtension, TEXT, Text } from './text';
import { getAlingValue, getVerticalAlingValue, getValidTextFormat } from './format';

export function renderCanvasText(component: Text, context: RenderContext): void {
	const { text } = component;
	if (!text) {
		return;
	}

	const { matrix, colorTransform } = context;

	if (colorTransform.alphaMultiplier <= 0) {
		return;
	}

	const lines = text.split('\n');
	const {
		width, height, textFormat, border, background,
	} = component;

	const format = getValidTextFormat(textFormat);
	const formatSize = format.size!;
	const formatLetterSpacing = format.letterSpacing!;
	const formatLeading = format.leading!;

	const font = getFont(format.font!);
	const { support } = context;
	const { context2d } = support as CanvasSupport;

	const textWidth = getTextWidth(font, format, lines);
	const textHeight = getTextHeight(format, lines);
	const realWidth = width ?? textWidth;
	const realHeight = height ?? textHeight;

	const offsetX = Pivot.getX(component, realWidth);
	const offsetY = Pivot.getY(component, realHeight);

	let y = 0;

	if (height) {
		const alignVerticalValue = getVerticalAlingValue(format.verticalAlign!);
		y = (height - textHeight) * alignVerticalValue;
		if (y < 0) {
			y = 0;
		}
	}

	context2d.setTransform(
		matrix.a,
		matrix.b,
		matrix.c,
		matrix.d,
		matrix.tx,
		matrix.ty,
	);

	context2d.globalAlpha = 1;

	if (background !== undefined) {
		context2d.strokeStyle = '';
		context2d.fillStyle = createColorPattern(background!, 1, colorTransform);
		context2d.beginPath();
		context2d.rect(offsetX, offsetY, realWidth, realHeight);
		context2d.fill();
	}

	if (border !== undefined) {
		context2d.strokeStyle = createColorPattern(border!, 1, colorTransform);
		context2d.fillStyle = '';
		context2d.beginPath();
		context2d.rect(offsetX, offsetY, realWidth, realHeight);
		context2d.stroke();
	}

	context2d.font = getStyleFont(format.font!, formatSize);
	context2d.textBaseline = 'alphabetic';
	context2d.strokeStyle = '';
	context2d.fillStyle = createColorPattern(format.color!, format.alpha!, colorTransform);

	y += offsetY;

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		const lineWidth = getLineWidth(font, format, line);
		const alignValue = getAlingValue(format.align!);
		let x = (realWidth - lineWidth) * alignValue;
		if (x < 0) {
			x = 0;
		}
		x += offsetX;
		for (let j = 0; j < line.length; j++) {
			const first = line.charAt(j);
			const second = line.charAt(j + 1);
			const advance = getAdvance(font, formatSize, first, second);
			context2d.fillText(first, x, y + formatSize);
			x += advance + formatLetterSpacing;
		}
		y += formatSize + formatLeading;
	}
}

export function applyCanvasTextExtension(support: Support) {
	applyTextExtension(support);
	support.renderHandlers.set(TEXT, renderCanvasText);
}
