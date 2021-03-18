import { Pivot } from '@e2d/core';
import { CanvasEngine, CanvasPlatform, CanvasPatterns } from '@e2d/canvas-engine';
import { Font } from './font';
import { TextExtension, TEXT, Text } from './text';
import { TextFormat } from './format';

const validTextFormat: TextFormat = {};

export namespace CanvasTextExtension {
	export function render(component: Text, engine: CanvasEngine): void {
		const { text } = component;
		if (!text) {
			return;
		}

		const { matrix, colorTransform } = engine.renderer.getContext();

		if (colorTransform.alphaMultiplier <= 0) {
			return;
		}

		const lines = text.split('\n');
		const {
			width, height, textFormat, border, background,
		} = component;

		TextFormat.getValidTextFormat(textFormat, validTextFormat);

		const formatSize = validTextFormat.size!;
		const formatLetterSpacing = validTextFormat.letterSpacing!;
		const formatLeading = validTextFormat.leading!;

		const font = Font.getFont(validTextFormat.font!);
		const context2d = (engine.platform as CanvasPlatform).getContext();

		const textWidth = Font.getTextWidth(font, validTextFormat, lines);
		const textHeight = Font.getTextHeight(validTextFormat, lines);
		const realWidth = width ?? textWidth;
		const realHeight = height ?? textHeight;

		const offsetX = Pivot.getX(component, realWidth);
		const offsetY = Pivot.getY(component, realHeight);

		let y = 0;

		if (height) {
			const alignVerticalValue = TextFormat.getVerticalAlignValue(validTextFormat.verticalAlign!);
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
			context2d.fillStyle = CanvasPatterns.colorPattern(background!, 1, colorTransform);
			context2d.beginPath();
			context2d.rect(offsetX, offsetY, realWidth, realHeight);
			context2d.closePath();
			context2d.fill();
		}

		if (border !== undefined) {
			context2d.strokeStyle = CanvasPatterns.colorPattern(border!, 1, colorTransform);
			context2d.fillStyle = '';
			context2d.beginPath();
			context2d.rect(offsetX, offsetY, realWidth, realHeight);
			context2d.closePath();
			context2d.stroke();
		}

		context2d.font = Font.getStyleFont(validTextFormat.font!, formatSize);
		context2d.textBaseline = 'alphabetic';
		context2d.strokeStyle = '';
		context2d.fillStyle = CanvasPatterns.colorPattern(validTextFormat.color!, validTextFormat.alpha!, colorTransform);

		y += offsetY;

		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];
			const lineWidth = Font.getLineWidth(font, validTextFormat, line);
			const alignValue = TextFormat.getAlignValue(validTextFormat.align!);
			let x = (realWidth - lineWidth) * alignValue;
			if (x < 0) {
				x = 0;
			}
			x += offsetX;
			for (let j = 0; j < line.length; j++) {
				const first = line.charAt(j);
				const second = line.charAt(j + 1);
				const advance = Font.getAdvance(font, formatSize, first, second);
				context2d.fillText(first, x, y + formatSize);
				x += advance + formatLetterSpacing;
			}
			y += formatSize + formatLeading;
		}
	}

	export function init(engine: CanvasEngine) {
		TextExtension.init(engine);
		engine.components.render.set(TEXT, render);
	}
}
