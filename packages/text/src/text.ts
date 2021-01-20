import { Component, PointerContext, Support } from '@e2d/engine';
import { Rectangle } from '@e2d/geom';
import { TextFromat, getValidTextFormat } from './format';
import { getFont, getTextWidth, getTextHeight } from './font';

export const TEXT = 'text';

export interface Text extends Component {
	text?: string;
	textFormat?: TextFromat;
	width?: number;
	height?: number;
	border?: number;
	background?: number;
}

export namespace Text {
	export function getBounds(component: Text): Rectangle | undefined {
		const { text } = component;
		if (!text) {
			return undefined;
		}

		const lines = text.split('\n');
		let { width, height } = component;
		const { textFormat } = component;
		const format = getValidTextFormat(textFormat);

		if (!width) {
			const font = getFont(format.font!);
			width = getTextWidth(font, format, lines);
		}

		if (!height) {
			height = getTextHeight(format, lines);
		}

		return {
			x: 0, y: 0, width, height,
		};
	}
}

export function hitTest(text: Text, context: PointerContext): boolean {
	const { point } = context;
	const bounds = Text.getBounds(text);
	return !!bounds && Rectangle.contains(bounds, point);
}

export function applyTextExtension(support: Support) {
	support.hitTestHandlers.set(TEXT, hitTest);
}
