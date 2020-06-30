export type FillRule = 'nonzero' | 'evenodd' | undefined;

export interface IRenderingContext {
	save(): void;
	restore(): void;
	setTransform(a: number, b: number, c: number, d: number, tx: number, ty: number): void;
	beginPath(): void;
	rect(x: number, y: number, width: number, height: number): void;
	clip(fillRule?: FillRule): void;
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
