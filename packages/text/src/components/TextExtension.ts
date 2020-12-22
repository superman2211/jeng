/* eslint-disable class-methods-use-this */
import { ComponentExtension, PointerContext, Support } from '@e2d/engine';
import { Rectangle } from '@e2d/geom';
import { Text, TextFromat } from './Text';

export const defaultFormat: TextFromat = {
	font: 'arial',
	size: 15,
	color: 0,
};

export abstract class TextExtension extends ComponentExtension {
	abstract measureText(support: Support, font: string, size: number, text: string): number;

	getBounds(component: Text, context: PointerContext): Rectangle | undefined {
		const { text } = component;
		if (!text) {
			return undefined;
		}

		const linesCount = text.split('\n').length;
		const { support } = context;

		let { width, height } = component;
		const { textFormat } = component;

		const font = textFormat?.font ?? defaultFormat.font!;
		const size = textFormat?.size ?? defaultFormat.size!;

		if (!width) {
			width = this.measureText(support, font, size, text);
		}

		if (!height) {
			height = size * linesCount;
		}

		return {
			x: 0, y: 0, width, height,
		};
	}
}
