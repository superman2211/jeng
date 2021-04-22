import { TextFormat } from './format';

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

	export function getLines(font: Font, format: TextFormat, text: string, wordWrap: boolean, width?: number): string[] {
		if (width) {
			const { length } = text;
			const lines: string[] = [];
			let line = '';
			let lineWidth = 0;
			let word = '';
			let wordWidth = 0;
			if (wordWrap) {
				for (let i = 0; i < length; i++) {
					const first = text.charAt(i);
					if (first === '\n') {
						line += word;
						lines.push(line);
						line = '';
						lineWidth = 0;
						word = '';
						wordWidth = 0;
					} else {
						const second = text.charAt(i + 1);
						const advance = getAdvance(font, format.size!, first, second);
						wordWidth += advance;
						if (lineWidth + wordWidth > width) {
							lines.push(line);
							line = '';
							lineWidth = 0;
						} else {
							word += first;
							if (/\s/.test(first)) {
								line += word;
								lineWidth += wordWidth;
								word = '';
								wordWidth = 0;
							}
						}
					}
				}
				if (word) {
					line += word;
				}
				if (line) {
					lines.push(line);
				}
			} else {
				for (let i = 0; i < length; i++) {
					const first = text.charAt(i);
					if (first === '\n') {
						lines.push(line);
						line = '';
						lineWidth = 0;
					} else {
						const second = text.charAt(i + 1);
						const advance = getAdvance(font, format.size!, first, second);
						if (lineWidth + advance > width) {
							lines.push(line);
							line = first;
							lineWidth = 0;
						} else {
							lineWidth += advance;
							line += first;
						}
					}
				}
				if (line) {
					lines.push(line);
				}
			}
			return lines;
		}
		return text.split('\n');
	}

	export function getLineWidth(font: Font, format: TextFormat, line: string): number {
		let width = 0;
		for (let i = 0; i < line.length; i++) {
			const first = line.charAt(i);
			const second = line.charAt(i + 1);
			const advance = getAdvance(font, format.size!, first, second);
			width += advance;
		}
		if (format.letterSpacing && line.length > 1) {
			width += format.letterSpacing * (line.length - 1);
		}
		return width;
	}

	export function getTextWidth(font: Font, format: TextFormat, lines: string[]): number {
		let width = 0;
		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];
			const lineWidth = getLineWidth(font, format, line);
			if (width < lineWidth) {
				width = lineWidth;
			}
		}
		return width;
	}

	export function getTextHeight(format: TextFormat, lines: string[]): number {
		let height = format.size! * lines.length;
		if (format.leading && lines.length > 1) {
			height += format.leading * (lines.length - 1);
		}
		return height;
	}
}
