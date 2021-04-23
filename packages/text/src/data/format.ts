export type TextAlign = 'left' | 'center' | 'right';
export type TextVerticalAlign = 'top' | 'middle' | 'bottom';

export interface TextFormat {
	font?: string;
	size?: number;
	color?: number;
	alpha?: number;
	bold?: boolean;
	italic?: boolean;
	underline?: boolean;
	letterSpacing?: number;
	leading?: number;
	align?: TextAlign;
	verticalAlign?: TextVerticalAlign;
}

export namespace TextFormat {
	export const defaultTextFormat: TextFormat = {
		font: 'arial',
		size: 15,
		color: 0,
		alpha: 1,
		bold: false,
		italic: false,
		underline: false,
		letterSpacing: 0,
		leading: 0,
		align: 'left',
		verticalAlign: 'top',
	};

	export function combine(source: TextFormat | undefined, defaultFormat: TextFormat, result: TextFormat) {
		result.font = source?.font ?? defaultFormat.font!;
		result.size = source?.size ?? defaultFormat.size!;
		result.color = source?.color ?? defaultFormat.color!;
		result.alpha = source?.alpha ?? defaultFormat.alpha!;
		result.bold = source?.bold ?? defaultFormat.bold!;
		result.italic = source?.italic ?? defaultFormat.italic!;
		result.underline = source?.underline ?? defaultFormat.underline!;
		result.letterSpacing = source?.letterSpacing ?? defaultFormat.letterSpacing!;
		result.leading = source?.leading ?? defaultFormat.leading!;
		result.align = source?.align ?? defaultFormat.align!;
		result.verticalAlign = source?.verticalAlign ?? defaultFormat.verticalAlign!;
	}

	export function copy(source: TextFormat, target: TextFormat) {
		target.font = source.font;
		target.size = source.size;
		target.color = source.color;
		target.alpha = source.alpha;
		target.bold = source.bold;
		target.italic = source.italic;
		target.underline = source.underline;
		target.letterSpacing = source.letterSpacing;
		target.leading = source.leading;
		target.align = source.align;
		target.verticalAlign = source.verticalAlign;
	}

	export function getAlignValue(format: TextFormat): number {
		switch (format.align) {
			case 'left': return 0;
			case 'center': return 0.5;
			case 'right': return 1;
			default: return 0;
		}
	}

	export function getVerticalAlignValue(format: TextFormat): number {
		switch (format.verticalAlign) {
			case 'top': return 0;
			case 'middle': return 0.5;
			case 'bottom': return 1;
			default: return 0;
		}
	}
}
