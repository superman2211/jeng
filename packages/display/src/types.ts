export type BitmapData = HTMLCanvasElement;

export enum BitmapDataChannel {
	RED = 1,
	GREEN = 2,
	BLUE = 4,
	ALPHA = 8,
}

export enum BlendMode {
	ADD = 'add',
	ALPHA = 'alpha',
	DARKEN = 'darken',
	DIFFERENCE = 'difference',
	ERASE = 'erase',
	HARDLIGHT = 'hardlight',
	INVERT = 'invert',
	LAYER = 'layer',
	LIGHTEN = 'lighten',
	MULTIPLY = 'multiply',
	NORMAL = 'normal',
	OVERLAY = 'overlay',
	SCREEN = 'screen',
	SHADER = 'shader',
	SUBTRACT = 'subtract',
}

export enum StageQuality {
	BEST = 'best',
	HIGH = 'high',
	HIGH_16X16 = '16x16',
	HIGH_16X16_LINEAR = '16x16linear',
	HIGH_8X8 = '8x8',
	HIGH_8X8_LINEAR = '8x8linear',
	LOW = 'low',
	MEDIUM = 'medium',
}

export enum PixelSnapping {
	AUTO = 'auto',
	ALWAYS = 'always',
	NEVER = 'never',
}

export interface IRenderSupport {
}

export interface IBitmapDrawable {
	render(support: IRenderSupport): void;
}
