export interface IRenderingContext {
}

export interface IRenderSupport {
	getContext(): IRenderingContext;
}

export interface IBitmapDrawable {
	render(support: IRenderSupport): void;
}
