import { Font } from './font';
import { TextFormat } from './format';
import { Text } from './text';

const validTextFormat: TextFormat = {};

function hashString(str: string) {
	let hash = 5381;
	let i = str.length;
	while (i) {
		hash = (hash * 33) ^ str.charCodeAt(--i);
	}
	return hash >>> 0;
}

export interface TextLine {
	symbols: string;
	advance: number[];
	width: number;
}

export interface TextMetrics {
	hash: number;
	lines: TextLine[];
	width: number;
}

export namespace TextLine {
	export function create(): TextLine {
		return {
			symbols: '',
			advance: [],
			width: 0,
		};
	}

	export function empty(line: TextLine) {
		line.symbols = '';
		line.advance.length = 0;
		line.width = 0;
	}

	export function concat(target: TextLine, source: TextLine) {
		target.symbols += source.symbols;
		target.width += source.width;
		target.advance.push(...source.advance);
	}
}

export namespace TextMetrics {
	export function getHeight(metrics: TextMetrics, format: TextFormat): number {
		const { lines } = metrics;
		let height = format.size! * lines.length;
		if (format.leading && lines.length > 1) {
			height += format.leading * (lines.length - 1);
		}
		return height;
	}

	export function update(component: Text) {
		const { text } = component;

		if (!text) {
			delete component.metrics;
			return;
		}

		if (!component.metrics) {
			component.metrics = {
				hash: 0,
				lines: [],
				width: 0,
			};
		}

		const {
			width, height, textFormat, metrics,
		} = component;

		const wordWrap = Text.isWordWrap(component);

		TextFormat.getValidTextFormat(textFormat, validTextFormat);
		const { size, font, letterSpacing } = validTextFormat;

		const hash = hashString(text)
			+ (width ?? 0) + (height ?? 0) + (wordWrap ? 1 : 0)
			+ size! + hashString(font!) + letterSpacing!;

		if (metrics.hash !== hash) {
			metrics.hash = hash;

			const { lines } = component.metrics;
			lines.length = 0;

			const textFont = Font.getFont(validTextFormat.font!);

			const { length } = text;

			let line: TextLine = {
				symbols: '',
				advance: [],
				width: 0,
			};

			if (width && wordWrap) {
				const word = TextLine.create();
				for (let i = 0; i < length; i++) {
					const first = text.charAt(i);
					if (first === '\n') {
						TextLine.concat(line, word);
						lines.push(line);
						metrics.width = Math.max(metrics.width, line.width);
						line = TextLine.create();
						TextLine.empty(word);
					} else {
						const second = text.charAt(i + 1);
						const advance = Font.getAdvance(textFont, validTextFormat.size!, first, second) + letterSpacing!;
						word.symbols += first;
						word.advance.push(advance);
						word.width += advance;
						if (line.width + word.width > width) {
							lines.push(line);
							metrics.width = Math.max(metrics.width, line.width);
							line = TextLine.create();
						} else if (/\s/.test(first)) {
							TextLine.concat(line, word);
							TextLine.empty(word);
						}
					}
				}
				if (word.symbols) {
					TextLine.concat(line, word);
				}
			} else if (width) {
				for (let i = 0; i < length; i++) {
					const first = text.charAt(i);
					if (first === '\n') {
						lines.push(line);
						metrics.width = Math.max(metrics.width, line.width);
						line = TextLine.create();
					} else {
						const second = text.charAt(i + 1);
						const advance = Font.getAdvance(textFont, validTextFormat.size!, first, second) + letterSpacing!;
						if (line.width + advance > width) {
							lines.push(line);
							metrics.width = Math.max(metrics.width, line.width);
							line = TextLine.create();
						}
						line.symbols += first;
						line.advance.push(advance);
						line.width += advance;
					}
				}
			} else {
				for (let i = 0; i < length; i++) {
					const first = text.charAt(i);
					if (first === '\n') {
						lines.push(line);
						metrics.width = Math.max(metrics.width, line.width);
						line = TextLine.create();
					} else {
						const second = text.charAt(i + 1);
						const advance = Font.getAdvance(textFont, validTextFormat.size!, first, second) + letterSpacing!;
						line.symbols += first;
						line.advance.push(advance);
						line.width += advance;
					}
				}
			}

			if (line && line.symbols) {
				lines.push(line);
				metrics.width = Math.max(metrics.width, line.width);
			}
		}
	}
}
