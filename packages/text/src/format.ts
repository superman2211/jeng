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

	export function getValidTextFormat(source: TextFormat | undefined, result: TextFormat) {
		result.font = source?.font ?? defaultTextFormat.font!;
		result.size = source?.size ?? defaultTextFormat.size!;
		result.color = source?.color ?? defaultTextFormat.color!;
		result.alpha = source?.alpha ?? defaultTextFormat.alpha!;
		result.bold = source?.bold ?? defaultTextFormat.bold!;
		result.italic = source?.italic ?? defaultTextFormat.italic!;
		result.underline = source?.underline ?? defaultTextFormat.underline!;
		result.letterSpacing = source?.letterSpacing ?? defaultTextFormat.letterSpacing!;
		result.leading = source?.leading ?? defaultTextFormat.leading!;
		result.align = source?.align ?? defaultTextFormat.align!;
		result.verticalAlign = source?.verticalAlign ?? defaultTextFormat.verticalAlign!;
	}

	export function getAlignValue(align: TextAlign): number {
		switch (align) {
			case 'left': return 0;
			case 'center': return 0.5;
			case 'right': return 1;
			default: return 0;
		}
	}

	export function getVerticalAlignValue(align: TextVerticalAlign): number {
		switch (align) {
			case 'top': return 0;
			case 'middle': return 0.5;
			case 'bottom': return 1;
			default: return 0;
		}
	}
}
