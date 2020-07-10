import { IRenderingPattern } from './interfaces';

export default class ImagePattern implements IRenderingPattern {
	image: CanvasImageSource | null = null;
	repeat: boolean = true;
	smooth: boolean = true;
	a: number = 0;
	b: number = 0;
	c: number = 0;
	d: number = 0;
	tx: number = 0;
	ty: number = 0;
}