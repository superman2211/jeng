import { Component, Engine, Pivot } from '@jeng/core';
import { Rectangle } from '@jeng/geom';
import { TextFormat } from './data/format';
import { TextMetrics, TextSize } from './data/metrics';

export const TEXT = 'text';

export interface TextBlock extends TextFormat {
	text: string;
}

export interface Text extends Component, Pivot {
	text?: string | Array<TextBlock | string>;
	format?: TextFormat;
	width?: number;
	height?: number;
	border?: number;
	background?: number;
	wordWrap?: boolean;
	multiline?: boolean;
	metrics?: TextSize | TextMetrics;
	updateMetrics?: boolean;
}

export namespace Text {
	export function getText(component: Text): string {
		const { text } = component;
		if (!text) {
			return '';
		}

		if (typeof text === 'string') {
			return text;
		}

		if (Array.isArray(text)) {
			let result = '';
			for (let i = 0; i < text.length; i++) {
				const block = text[i];
				if (typeof block === 'string') {
					result += block;
				} else {
					result += block.text;
				}
			}
			return result;
		}

		return '';
	}

	export function isUpdateMetrics(component: Text): boolean {
		return component.updateMetrics ?? true;
	}

	export function isAutoSize(component: Text): boolean {
		return !component.width && !component.height;
	}

	export function isSimple(component: Text): boolean {
		return typeof component.text === 'string' && isAutoSize(component);
	}

	export function isMultiline(component: Text): boolean {
		return component.multiline ?? true;
	}

	export function updateMetrics(component: Text) {
		if (isSimple(component)) {
			component.metrics = TextMetrics.getSimpleMetrics(component);
		} else {
			component.metrics = TextMetrics.getMetrics(component);
		}
	}

	export function calculateBounds(component: Text, bounds: Rectangle) {
		if (isUpdateMetrics(component)) {
			updateMetrics(component);
		}

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
			height = metrics.height;
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
