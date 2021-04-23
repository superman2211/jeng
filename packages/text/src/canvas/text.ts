import { Pivot } from '@jeng/core';
import { CanvasEngine, CanvasPlatform, CanvasPatterns } from '@jeng/canvas-engine';
import { Font } from '../data/font';
import { TextExtension, TEXT, Text } from '../text';
import { TextFormat } from '../data/format';
import { TextMetrics } from '../data/metrics';

const defaultTextFormat: TextFormat = {};

const CORRECTION: number = 0.85;

export namespace CanvasTextExtension {
	export function render(component: Text, engine: CanvasEngine): void {
		const metrics = TextMetrics.getMetrics(component);
		if (!metrics) {
			return;
		}

		const { matrix, colorTransform } = engine.renderer.getContext();

		if (colorTransform.alphaMultiplier <= 0) {
			return;
		}

		const {
			width, height, format, border, background,
		} = component;

		TextFormat.combine(format, TextFormat.defaultTextFormat, defaultTextFormat);

		const realWidth = width ?? metrics.width;
		const realHeight = height ?? metrics.height;

		const offsetX = Pivot.getX(component, realWidth);
		const offsetY = Pivot.getY(component, realHeight);

		const { lines } = metrics;

		let y = 0;
		if (height) {
			const alignVerticalValue = TextFormat.getVerticalAlignValue(defaultTextFormat);
			y = (height - metrics.height) * alignVerticalValue;
			if (y < 0) {
				y = 0;
			}
		}
		y += offsetY;

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

		context2d.textBaseline = 'alphabetic';
		context2d.strokeStyle = '';

		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];
			if (line.symbols.length) {
				const first = line.symbols[0];
				const alignValue = TextFormat.getAlignValue(first.format);
				let x = (realWidth - line.width) * alignValue;
				if (x < 0) {
					x = 0;
				}
				x += offsetX;
				const { symbols } = line;
				const lineHeight = line.height * CORRECTION;
				for (let j = 0; j < symbols.length; j++) {
					const symbol = symbols[j];
					const size = symbol.format.size!;
					const alignSymbolValue = TextFormat.getVerticalAlignValue(symbol.format);
					const symbolSize = size * CORRECTION;
					context2d.font = Font.getStyleFont(symbol.format.font!, size!);
					context2d.fillStyle = CanvasPatterns.colorPattern(
						symbol.format.color!,
						symbol.format.alpha!,
						colorTransform,
					);
					context2d.fillText(
						symbol.symbol,
						x,
						y + symbolSize + alignSymbolValue * (lineHeight - symbolSize),
					);
					x += symbol.advance;
				}
			}
			y += line.height;
		}
	}

	export function init(engine: CanvasEngine) {
		TextExtension.init(engine);
		engine.components.render.set(TEXT, render);
	}
}
