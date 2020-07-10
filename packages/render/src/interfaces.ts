import { StrokeStyle, FillStyle } from './types';

export interface IRenderingContext {
	getWidth(): number;
	getHeight(): number;
	setTransform(a: number, b: number, c: number, d: number, tx: number, ty: number): void;
	moveTo(x: number, y: number): void;
	lineTo(x: number, y: number): void;
	bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
	quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
	save(): void;
	restore(): void;
	fill(pattern: IRenderingPattern, style: FillStyle): void;
	stroke(pattern: IRenderingPattern, style: StrokeStyle): void;
	clip(): void;
}

export interface IRenderingPattern {
}

export interface IBitmapDrawable {
	render(context: IRenderingContext): void;
	renderContent(context: IRenderingContext): void;
}
