export type FillRule = 'nonzero' | 'evenodd';
export type ImageRepetition = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';
export type LineJoin = 'bevel' | 'round' | 'miter';
export type LineCap = 'butt' | 'round' | 'square';

export interface IRenderingContext {
	strokeStyle: string | IRenderingPattern;
	fillStyle: string | IRenderingPattern;
	lineWidth: number;
	lineJoin: LineJoin;
	lineCap: LineCap;
	miterLimit: number;
	save(): void;
	restore(): void;
	setTransform(a: number, b: number, c: number, d: number, tx: number, ty: number): void;
	beginPath(): void;
	rect(x: number, y: number, width: number, height: number): void;
	clip(fillRule?: FillRule): void;
	createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): IRenderingPattern;
	createLinearGradient(x0: number, y0: number, x1: number, y1: number): IRenderingPattern;
	createPattern(image: CanvasImageSource, a: number, b: number, c: number, d: number, tx: number, ty: number, repetition: ImageRepetition, smooth: boolean): IRenderingPattern;
	moveTo(x: number, y: number): void;
	lineTo(x: number, y: number): void;
	bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
	quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
	fill(): void;
	stroke(): void;
}

export interface IRenderingPattern {
	addColorStop(offset: number, color: string): void;
}

export interface IRenderSupport {
	readonly context: IRenderingContext;
	readonly width: number;
	readonly height: number;
}

export interface IBitmapDrawable {
	render(support: IRenderSupport): void;
	renderContent(support: IRenderSupport): void;
}
