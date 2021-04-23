import { Font } from './font';
import { TextFormat } from './format';
import { Text } from '../text';

const defaultTextFormat: TextFormat = {};

export interface TextSymbol {
	symbol: string;
	advance: number;
	format: TextFormat;
}

export interface TextSize {
	width: number;
	height: number;
}

export interface TextLine extends TextSize {
	symbols: TextSymbol[];
}

export interface TextMetrics extends TextSize {
	lines: TextLine[];
}

export namespace TextLine {
	export function create(): TextLine {
		return {
			symbols: [],
			width: 0,
			height: 0,
		};
	}

	export function empty(line: TextLine) {
		line.symbols.length = 0;
		line.width = 0;
		line.height = 0;
	}

	export function add(line: TextLine, symbol: TextSymbol) {
		line.symbols.push(symbol);
		line.width += symbol.advance;
		line.height = Math.max(line.height, symbol.format.size! + symbol.format.leading!);
	}

	export function concat(target: TextLine, source: TextLine) {
		if (source.symbols.length) {
			target.symbols.push(...source.symbols);
			target.width += source.width;
			target.height = Math.max(target.height, source.height);
		}
	}

	export function correctWidth(line: TextLine) {
		const { symbols } = line;
		if (symbols.length) {
			const last = symbols[symbols.length - 1];
			if (/\s/.test(last.symbol)) {
				symbols.pop();
				line.width -= last.advance;
			}
		}
	}

	export function correctHeight(line: TextLine) {
		const { symbols } = line;
		if (symbols.length) {
			const symbol = symbols[0];
			line.height -= symbol.format.leading!;
		}
	}
}

export namespace TextMetrics {
	export function getSymbols(component: Text): TextSymbol[] | undefined {
		const { text } = component;

		if (!text || !text.length) {
			return undefined;
		}

		TextFormat.combine(component.format, TextFormat.defaultTextFormat, defaultTextFormat);

		const symbols: TextSymbol[] = [];

		if (typeof text === 'string') {
			const symbolFormat: TextFormat = {};
			TextFormat.copy(defaultTextFormat, symbolFormat);
			const symbolFont = Font.getFont(symbolFormat.font!);
			for (let i = 0; i < text.length; i++) {
				const symbol = text[i];
				const symbolNext = text[i + 1];
				const advance = Font.getAdvance(symbolFont, symbolFormat.size!, symbol, symbolNext) + symbolFormat.letterSpacing!;
				symbols.push({
					symbol,
					advance,
					format: symbolFormat,
				});
			}
		} else if (Array.isArray(text)) {
			for (let i = 0; i < text.length; i++) {
				const block = text[i];
				if (typeof block === 'string') {
					const symbolFormat: TextFormat = {};
					TextFormat.copy(defaultTextFormat, symbolFormat);
					const symbolFont = Font.getFont(symbolFormat.font!);
					for (let j = 0; j < block.length; j++) {
						const symbol = block[j];
						const symbolNext = block[j + 1];
						const advance = Font.getAdvance(symbolFont, symbolFormat.size!, symbol, symbolNext) + symbolFormat.letterSpacing!;
						symbols.push({
							symbol,
							advance,
							format: symbolFormat,
						});
					}
				} else {
					const symbolFormat: TextFormat = {};
					TextFormat.combine(block, defaultTextFormat, symbolFormat);
					const symbolFont = Font.getFont(symbolFormat.font!);
					for (let j = 0; j < block.text.length; j++) {
						const symbol = block.text[j];
						const symbolNext = block.text[j + 1];
						const advance = Font.getAdvance(symbolFont, symbolFormat.size!, symbol, symbolNext) + symbolFormat.letterSpacing!;
						symbols.push({
							symbol,
							advance,
							format: symbolFormat,
						});
					}
				}
			}
		}

		return symbols;
	}

	export function getLines(component: Text): TextLine[] | undefined {
		const symbols = getSymbols(component);
		if (!symbols || !symbols.length) {
			return undefined;
		}

		const { width } = component;
		const wordWrap = Text.isWordWrap(component);
		const multiline = Text.isMultiline(component);

		const lines: TextLine[] = [];

		let line = TextLine.create();

		if (multiline) {
			if (width) {
				if (wordWrap) {
					const word = TextLine.create();
					for (let i = 0; i < symbols.length; i++) {
						const symbol = symbols[i];
						if (symbol.symbol === '\n') {
							TextLine.concat(line, word);
							lines.push(line);
							line = TextLine.create();
							TextLine.empty(word);
						} else {
							TextLine.add(word, symbol);
							if (line.width + word.width > width) {
								lines.push(line);
								line = TextLine.create();
							} else if (/\s/.test(symbol.symbol)) {
								TextLine.concat(line, word);
								TextLine.empty(word);
							}
						}
					}
					TextLine.concat(line, word);
				} else {
					for (let i = 0; i < symbols.length; i++) {
						const symbol = symbols[i];
						if (symbol.symbol === '\n') {
							lines.push(line);
							line = TextLine.create();
						} else if (line.width + symbol.advance > width) {
							lines.push(line);
							line = TextLine.create();
							TextLine.add(line, symbol);
						} else {
							TextLine.add(line, symbol);
						}
					}
				}
			} else {
				for (let i = 0; i < symbols.length; i++) {
					const symbol = symbols[i];
					if (symbol.symbol === '\n') {
						lines.push(line);
						line = TextLine.create();
					} else {
						TextLine.add(line, symbol);
					}
				}
			}
		} else {
			for (let i = 0; i < symbols.length; i++) {
				const symbol = symbols[i];
				TextLine.add(line, symbol);
			}
		}

		if (line.symbols.length) {
			lines.push(line);
		}

		if (lines.length) {
			for (let i = 0; i < lines.length; i++) {
				line = lines[i];
				TextLine.correctWidth(line);
				if (!line.height) {
					line.height = defaultTextFormat.size!;
				}
			}
			line = lines[lines.length - 1];
			TextLine.correctHeight(line);
		}

		return lines;
	}

	export function getMetrics(component: Text): TextMetrics | undefined {
		const lines = getLines(component);

		if (!lines || !lines.length) {
			return undefined;
		}

		const metrics: TextMetrics = {
			lines,
			width: 0,
			height: 0,
		};

		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];
			metrics.width = Math.max(metrics.width, line.width);
			metrics.height += line.height;
		}

		return metrics;
	}

	export function getSimpleMetrics(component: Text): TextSize | undefined {
		const { text } = component;
		if (typeof text !== 'string') {
			return undefined;
		}

		TextFormat.combine(component.format, TextFormat.defaultTextFormat, defaultTextFormat);
		const { size, letterSpacing, leading } = defaultTextFormat;
		const font = Font.getFont(defaultTextFormat.font!);

		let width = 0;
		let height = size!;

		for (let i = 0; i < text.length; i++) {
			const symbol = text[i];
			if (symbol === '\n') {
				height += size! + leading!;
				width = 0;
			} else {
				const symbolNext = text[i + 1];
				const advance = Font.getAdvance(font, size!, symbol, symbolNext) + letterSpacing!;
				width += advance;
			}
		}

		return {
			width,
			height,
		};
	}
}
