export type LineJoin = 'bevel' | 'round' | 'miter';
export type LineCap = 'butt' | 'round' | 'square';

export type StrokeStyle = {
	thikness: number;
	join: LineJoin;
	cap: LineCap;
	miterLimit: number;
	alpha: number;
}

export type FillStyle = {
	alpha: number;
}
