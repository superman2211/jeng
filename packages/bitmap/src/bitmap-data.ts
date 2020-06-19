/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	Rectangle, Point, Matrix, Color, ColorTransform,
} from '@e2d/geom';
import { BitmapFilter } from '@e2d/filters';
import { ByteArray } from '@e2d/utils';
import { IBitmapDrawable, IRenderSupport, IBitmapCompressor } from './interfaces';
import { BitmapDataCompare } from './enums';

export default class BitmapData implements IBitmapDrawable {
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

	applyFilter(sourceBitmapData: BitmapData, sourceRect: Rectangle, destPoint: Point, filter: BitmapFilter) {
		throw 'Not implemented';
	}

	clone(): BitmapData {
		throw 'Not implemented';
	}

	colorTransform(rect: Rectangle, colorTransform: ColorTransform) {
		throw 'Not implemented';
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

	histogram(hRect: Rectangle = null): number[][] {
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

	paletteMap(sourceBitmapData: BitmapData, sourceRect: Rectangle, destPoint: Point, redArray: Array = null, greenArray: Array = null, blueArray: Array = null, alphaArray: Array = null) {
		throw 'Not implemented';
	}

	perlinNoise(baseX: Number, baseY: Number, numOctaves: number, randomSeed: number, stitch: Boolean, fractalNoise: Boolean, channelOptions: number = 7, grayScale: Boolean = false, offsets: Array = null) {
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

	// eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
	render(support: IRenderSupport) {
		// TODO implement it
	}
}
