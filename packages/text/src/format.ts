export type TextAlign = 'left' | 'center' | 'right';
export type TextVerticalAlign = 'top' | 'middle' | 'bottom';

export interface TextFromat {
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

export const defaultTextFormat: TextFromat = {
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

const format: TextFromat = {};

export function getValidTextFormat(textFormat?: TextFromat) {
	format.font = textFormat?.font ?? defaultTextFormat.font!;
	format.size = textFormat?.size ?? defaultTextFormat.size!;
	format.color = textFormat?.color ?? defaultTextFormat.color!;
	format.alpha = textFormat?.alpha ?? defaultTextFormat.alpha!;
	format.bold = textFormat?.bold ?? defaultTextFormat.bold!;
	format.italic = textFormat?.italic ?? defaultTextFormat.italic!;
	format.underline = textFormat?.underline ?? defaultTextFormat.underline!;
	format.letterSpacing = textFormat?.letterSpacing ?? defaultTextFormat.letterSpacing!;
	format.leading = textFormat?.leading ?? defaultTextFormat.leading!;
	format.align = textFormat?.align ?? defaultTextFormat.align!;
	format.verticalAlign = textFormat?.verticalAlign ?? defaultTextFormat.verticalAlign!;
	return format;
}

export function getAlingValue(align: TextAlign): number {
	switch (align) {
		case 'left': return 0;
		case 'center': return 0.5;
		case 'right': return 1;
		default: return 0;
	}
}

export function getVerticalAlingValue(align: TextVerticalAlign): number {
	switch (align) {
		case 'top': return 0;
		case 'middle': return 0.5;
		case 'bottom': return 1;
		default: return 0;
	}
}
