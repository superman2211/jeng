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
		const { matrix, colorTransform } = engine.renderer.getContext();

		if (colorTransform.alphaMultiplier <= 0) {
			return;
		}

		if (Text.isUpdateMetrics(component)) {
			Text.updateMetrics(component);
		}

		const { metrics } = component;

		if (!metrics) {
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

		const simple = Text.isSimple(component);

		if (simple) {
			const text = component.text! as string;

			const {
				size, color, alpha, leading, letterSpacing,
			} = defaultTextFormat;

			const defaultFont = Font.getFont(defaultTextFormat);
			const symbolSize = size! * CORRECTION;
			const alignValue = TextFormat.getAlignValue(defaultTextFormat);

			context2d.font = Font.getStyle(defaultFont, size!);
			context2d.fillStyle = CanvasPatterns.colorPattern(color!, alpha!, colorTransform);

			let x = offsetX + alignValue ? alignValue * (realWidth - TextMetrics.getSimpleWidth(defaultTextFormat, text, 0)) : 0;
			let y = 0;

			for (let i = 0; i < text.length; i++) {
				const symbol = text[i];
				if (symbol === '\n') {
					x = alignValue ? alignValue * (realWidth - TextMetrics.getSimpleWidth(defaultTextFormat, text, i + 1)) : 0;
					y += size! + leading!;
				} else {
					const symbolNext = text[i + 1];
					const advance = Font.getAdvance(defaultFont, size!, symbol, symbolNext) + letterSpacing!;
					context2d.fillText(symbol, x, y + symbolSize);
					x += advance;
				}
			}
		} else {
			let y = 0;
			if (height) {
				const alignVerticalValue = TextFormat.getVerticalAlignValue(defaultTextFormat);
				y = (height - metrics.height) * alignVerticalValue;
				if (y < 0) {
					y = 0;
				}
			}
			y += offsetY;

			const { lines } = metrics as TextMetrics;
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
						const symbolFont = Font.getFont(symbol.format);
						context2d.font = Font.getStyle(symbolFont, size!);
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
	}

	export function init(engine: CanvasEngine) {
		TextExtension.init(engine);
		engine.components.render.set(TEXT, render);
	}
}
