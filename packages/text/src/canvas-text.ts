import { Pivot } from '@jeng/core';
import { CanvasEngine, CanvasPlatform, CanvasPatterns } from '@jeng/canvas-engine';
import { Font } from './font';
import { TextExtension, TEXT, Text } from './text';
import { TextFormat } from './format';
import { TextMetrics } from './metrics';

const validTextFormat: TextFormat = {};

const CORRECTION: number = 0.15;

export namespace CanvasTextExtension {
	export function render(component: Text, engine: CanvasEngine): void {
		TextMetrics.update(component);
		const { metrics } = component;
		if (!metrics) {
			return;
		}

		const { matrix, colorTransform } = engine.renderer.getContext();

		if (colorTransform.alphaMultiplier <= 0) {
			return;
		}

		const {
			width, height, textFormat, border, background,
		} = component;

		TextFormat.getValidTextFormat(textFormat, validTextFormat);

		const {
			size, leading, font, color, alpha,
		} = validTextFormat;

		const textWidth = metrics.width;
		const textHeight = TextMetrics.getHeight(metrics, validTextFormat);

		const realWidth = width ?? textWidth;
		const realHeight = height ?? textHeight;

		const offsetX = Pivot.getX(component, realWidth);
		const offsetY = Pivot.getY(component, realHeight);

		const { lines } = metrics;

		let y = 0;
		if (height) {
			const alignVerticalValue = TextFormat.getVerticalAlignValue(validTextFormat);
			y = (height - textHeight) * alignVerticalValue;
			if (y < 0) {
				y = 0;
			}
		}
		y += offsetY - CORRECTION * size!;

		const context2d = (engine.platform as CanvasPlatform).getContext();

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

		context2d.font = Font.getStyleFont(font!, size!);
		context2d.textBaseline = 'alphabetic';
		context2d.strokeStyle = '';
		context2d.fillStyle = CanvasPatterns.colorPattern(color!, alpha!, colorTransform);

		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];
			const alignValue = TextFormat.getAlignValue(validTextFormat);
			let x = (realWidth - line.width) * alignValue;
			if (x < 0) {
				x = 0;
			}
			x += offsetX;
			const { symbols, advance } = line;
			for (let j = 0; j < symbols.length; j++) {
				const symbol = symbols[j];
				const symbolAdvance = advance[j];
				context2d.fillText(symbol, x, y + size!);
				x += symbolAdvance;
			}
			y += size! + leading!;
		}
	}

	export function init(engine: CanvasEngine) {
		TextExtension.init(engine);
		engine.components.render.set(TEXT, render);
	}
}
