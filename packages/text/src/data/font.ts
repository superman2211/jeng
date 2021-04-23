const canvas = document.createElement('canvas');
const context = canvas.getContext('2d')!;

export const EM = 1024;

export interface Font {
	name: string,
	kernings: Map<string, number>;
	widths: Map<string, number>;
}

const fonts = new Map<string, Font>();

export namespace Font {
	export function getStyleFont(font: string, size: number): string {
		return `${size}px ${font}`;
	}

	export function measureText(font: string, size: number, text: string): number {
		context.font = getStyleFont(font, size);
		return context.measureText(text).width;
	}

	export function getCharWidth(font: Font, char: string): number {
		let width = font.widths.get(char);
		if (!width) {
			width = measureText(font.name, EM, char);
			font.widths.set(char, width);
		}
		return width;
	}

	export function getKerning(font: Font, first: string, second: string): number {
		const pair = first + second;
		let kerning = font.kernings.get(pair);
		if (!kerning) {
			const widthSecond = getCharWidth(font, second);
			const widthTotal = measureText(font.name, EM, first + second);
			kerning = widthTotal - widthSecond;
			font.kernings.set(pair, kerning);
		}
		return kerning;
	}

	export function getAdvance(font: Font, size: number, first: string, second?: string): number {
		const scale = size / EM;
		const width = getCharWidth(font, first);
		if (!second) {
			return width * scale;
		}
		const kerning = getKerning(font, first, second);
		return kerning * scale;
	}

	export function getFont(name: string): Font {
		let font = fonts.get(name);
		if (!font) {
			font = {
				name,
				widths: new Map<string, number>(),
				kernings: new Map<string, number>(),
			};
			fonts.set(name, font);
		}
		return font;
	}
}
