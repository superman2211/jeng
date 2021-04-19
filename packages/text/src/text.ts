import { Component, Engine, Pivot } from '@e2d/core';
import { Rectangle } from '@e2d/geom';
import { TextFormat } from './format';
import { Font } from './font';

export const TEXT = 'text';

const validTextFormat: TextFormat = {};

export interface Text extends Component, Pivot {
	text?: string;
	textFormat?: TextFormat;
	width?: number;
	height?: number;
	border?: number;
	background?: number;
}

export namespace Text {
	export function calculateBounds(component: Text, bounds: Rectangle) {
		const { text } = component;
		if (!text) {
			Rectangle.setEmpty(bounds);
			return;
		}

		const lines = text.split('\n');
		let { width, height } = component;
		const { textFormat } = component;
		TextFormat.getValidTextFormat(textFormat, validTextFormat);

		if (!width) {
			const font = Font.getFont(validTextFormat.font!);
			width = Font.getTextWidth(font, validTextFormat, lines);
		}

		if (!height) {
			height = Font.getTextHeight(validTextFormat, lines);
		}

		const x = Pivot.getX(component, width);
		const y = Pivot.getY(component, height);

		bounds.x = x;
		bounds.y = y;
		bounds.width = width;
		bounds.height = height;
	}
}

const bounds = Rectangle.empty();

export namespace TextExtension {
	export function hitTest(text: Text, engine: Engine): boolean {
		const { local } = engine.pointers;
		Text.calculateBounds(text, bounds);
		return Rectangle.contains(bounds, local);
	}

	export function init(engine: Engine) {
		engine.components.hitTest.set(TEXT, hitTest);
	}
}
