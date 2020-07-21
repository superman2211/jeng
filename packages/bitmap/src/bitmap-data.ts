/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	Rectangle, Point, Matrix, Color, ColorTransform,
} from '@e2d/geom';
import { BitmapFilter } from '@e2d/filters';
import { ByteArray } from '@e2d/utils';
import { IBitmapDrawable, IRenderingContext, IRenderingPattern } from '@e2d/render';
import { IBitmapCompressor } from './interfaces';
import { BitmapDataCompare } from './enums';

export default class BitmapData {
	private _canvas: HTMLCanvasElement;
	private _context: CanvasRenderingContext2D;
	private _transparent: boolean;

	constructor(width: number, height: number, transparent: boolean = true, fillColor: number = 0xffffffff) {
		this._canvas = new HTMLCanvasElement();
		this._canvas.width = width;
		this._canvas.height = height;

		this._context = this._canvas.getContext('2d') as CanvasRenderingContext2D;

		this._transparent = transparent;

		this.fillRect(this.rect, fillColor);
	}

	get canvas() {
		return this._canvas;
	}

	get transparent() {
		return this._transparent;
	}

	get width() {
		return this._canvas.width;
	}

	get height() {
		return this._canvas.height;
	}

	get rect() {
		return new Rectangle(
			0,
			0,
			this._canvas.width,
			this._canvas.height,
		);
	}

	applyFilter(sourceBitmapData: BitmapData, sourceRect: Rectangle, targetPoint: Point, filter: BitmapFilter) {
		const targetRect = sourceRect.clone();
		targetRect.topLeft = targetPoint;

		const sourceImageData = sourceBitmapData._context.getImageData(sourceRect.x, sourceRect.y, sourceRect.width, sourceRect.height);
		const targetImageData = this._context.getImageData(targetRect.x, targetRect.y, targetRect.width, targetRect.height);

		const sourcePixels = <number[]><any> sourceImageData.data;
		const targetPixels = <number[]><any> targetImageData.data;

		filter.apply(sourceRect.width, sourceRect.height, sourcePixels, targetPixels);

		this._context.putImageData(targetImageData, targetRect.x, targetRect.y);
	}

	clone(): BitmapData {
		const { width, height } = this;
		const imageData = this._context.getImageData(0, 0, width, height);

		const target = new BitmapData(this.width, this.height, this.transparent, 0);
		target._context.putImageData(imageData, 0, 0);
		return target;
	}

	colorTransform(rect: Rectangle, colorTransform: ColorTransform) {
		const {
			redMultiplier,
			greenMultiplier,
			blueMultiplier,
			alphaMultiplier,

			redOffset,
			greenOffset,
			blueOffset,
			alphaOffset,
		} = colorTransform;

		const imageData = this._context.getImageData(rect.x, rect.y, rect.width, rect.height);
		const { data } = imageData;
		const { length } = data;

		let r = 0;
		while (r < length) {
			const g = r + 1;
			const b = r + 2;
			const a = r + 3;

			data[r] = data[r] * redMultiplier + redOffset;
			data[g] = data[g] * blueMultiplier + blueOffset;
			data[b] = data[b] * greenMultiplier + greenOffset;
			data[a] = data[a] * alphaMultiplier + alphaOffset;

			r += 4;
		}
		this._context.putImageData(imageData, rect.x, rect.y);
	}

	compare(otherBitmapData: BitmapData): BitmapDataCompare | BitmapData {
		throw 'Not implemented';
	}

	copyChannel(sourceBitmapData: BitmapData, sourceRect: Rectangle, destPoint: Point, sourceChannel: number, destChannel: number) {
		throw 'Not implemented';
	}

	copyPixels(sourceBitmapData: BitmapData, sourceRect: Rectangle, destPoint: Point, alphaBitmapData?: BitmapData, alphaPoint?: Point, mergeAlpha: boolean = false) {
		throw 'Not implemented';
	}

	copyPixelsToByteArray(rect: Rectangle, data: ByteArray) {
		throw 'Not implemented';
	}

	dispose() {
		delete this._canvas;
		delete this._context;
	}

	draw(source: IBitmapDrawable, matrix?: Matrix, colorTransform?: ColorTransform, blendMode?: String, clipRect?: Rectangle, smoothing: Boolean = false) {
		throw 'Not implemented';
	}

	drawWithQuality(source: IBitmapDrawable, matrix?: Matrix, colorTransform?: ColorTransform, blendMode?: String, clipRect?: Rectangle, smoothing?: Boolean, quality?: String) {
		throw 'Not implemented';
	}

	encode(rect: Rectangle, compressor: IBitmapCompressor, byteArray?: ByteArray): ByteArray {
		throw 'Not implemented';
	}

	fillRect(rect: Rectangle, color: number) {
		this._context.strokeStyle = '';
		this._context.fillStyle = Color.formatARGB(color);
		this._context.fillRect(rect.x, rect.y, rect.width, rect.height);
	}

	floodFill(x: number, y: number, color: number) {
		throw 'Not implemented';
	}

	generateFilterRect(sourceRect: Rectangle, filter: BitmapFilter): Rectangle {
		throw 'Not implemented';
	}

	getColorBoundsRect(mask: number, color: number, findColor: Boolean = true): Rectangle {
		throw 'Not implemented';
	}

	getPixel(x: number, y: number): number {
		throw 'Not implemented';
	}

	getPixel32(x: number, y: number): number {
		throw 'Not implemented';
	}

	getPixels(rect: Rectangle): ByteArray {
		throw 'Not implemented';
	}

	getVector(rect: Rectangle): number[] {
		throw 'Not implemented';
	}

	histogram(hRect?: Rectangle): number[][] {
		throw 'Not implemented';
	}

	hitTest(firstPoint: Point, firstAlphaThreshold: number, secondObject: Object, secondBitmapDataPoint?: Point, secondAlphaThreshold: number = 1): boolean {
		throw 'Not implemented';
	}

	lock() {
		throw 'Not implemented';
	}

	merge(sourceBitmapData: BitmapData, sourceRect: Rectangle, destPoint: Point, redMultiplier: number, greenMultiplier: number, blueMultiplier: number, alphaMultiplier: number) {
		throw 'Not implemented';
	}

	noise(randomSeed: number, low: number = 0, high: number = 255, channelOptions: number = 7, grayScale: Boolean = false) {
		throw 'Not implemented';
	}

	paletteMap(sourceBitmapData: BitmapData, sourceRect: Rectangle, destPoint: Point, redArray?: number[], greenArray?: number[], blueArray?: number[], alphaArray?: number[]) {
		throw 'Not implemented';
	}

	perlinNoise(baseX: Number, baseY: Number, numOctaves: number, randomSeed: number, stitch: Boolean, fractalNoise: Boolean, channelOptions: number = 7, grayScale: Boolean = false, offsets: number[]) {
		throw 'Not implemented';
	}

	pixelDissolve(sourceBitmapData: BitmapData, sourceRect: Rectangle, destPoint: Point, randomSeed: number = 0, numPixels: number = 0, fillColor: number = 0): number {
		throw 'Not implemented';
	}

	scroll(x: number, y: number) {
		throw 'Not implemented';
	}

	setPixel(x: number, y: number, color: number) {
		throw 'Not implemented';
	}

	setPixel32(x: number, y: number, color: number) {
		throw 'Not implemented';
	}

	setPixels(rect: Rectangle, inputByteArray: ByteArray) {
		throw 'Not implemented';
	}

	setVector(rect: Rectangle, inputVector: number[]) {
		throw 'Not implemented';
	}

	threshold(sourceBitmapData: BitmapData, sourceRect: Rectangle, destPoint: Point, operation: String, threshold: number, color: number = 0, mask: number = 0xFFFFFFFF, copySource: Boolean = false): number {
		throw 'Not implemented';
	}

	unlock(changeRect?: Rectangle) {
		throw 'Not implemented';
	}
}
