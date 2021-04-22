import { Component, Engine, Pivot } from '@jeng/core';
import { Rectangle } from '@jeng/geom';
import { TextFormat } from './format';
import { TextMetrics } from './metrics';

export const TEXT = 'text';

const validTextFormat: TextFormat = {};

export interface Text extends Component, Pivot {
	text?: string;
	textFormat?: TextFormat;
	width?: number;
	height?: number;
	border?: number;
	background?: number;
	wordWrap?: boolean;
	metrics?: TextMetrics;
}

export namespace Text {
	export function isWordWrap(component: Text): boolean {
		return component.wordWrap ?? true;
	}

	export function calculateBounds(component: Text, bounds: Rectangle) {
		TextMetrics.update(component);
		const { metrics } = component;
		if (!metrics) {
			Rectangle.setEmpty(bounds);
			return;
		}

		let { width, height } = component;

		if (!width) {
			width = metrics.width;
		}

		if (!height) {
			TextFormat.getValidTextFormat(component.textFormat, validTextFormat);
			height = TextMetrics.getHeight(metrics, validTextFormat);
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
