import { Matrix } from '@e2d/geom';
import { IGraphicsData, IGraphicsFill } from './interfaces';
import GraphicsPath from './graphics-path';
import GraphicsSolidFill from './graphics-solid-fill';
import GraphicsBitmapFill from './graphics-bitmap-fill';
import GraphicsGradientFill from './graphics-gradient-fill';
import GraphicsEndFill from './graphics-end-fill';
import GraphicsStroke from './graphics-stroke';
import {
	GradientType,
	SpreadMethod,
	InterpolationMethod,
	CapsStyle,
	JointStyle,
	LineScaleMode,
	GraphicsPathWinding,
	TriangleCulling,
} from './enums';
import { GraphicsTrianglePath } from '.';

export default class Graphics {
	private _data: IGraphicsData[];
	private _path: GraphicsPath;
	private _stroke?: GraphicsStroke;

	constructor() {
		this._path = new GraphicsPath();
		this._data = [this._path];
	}

	beginFill(color: number = 0, alpha: number = 1) {
		const data = new GraphicsSolidFill(color, alpha);
		this.addFill(data);
	}

	beginBitmapFill(
		bitmap: CanvasImageSource,
		matrix?: Matrix,
		repeat: boolean = true,
		smooth: boolean = false,
	) {
		const data = new GraphicsBitmapFill(bitmap, matrix, repeat, smooth);
		this.addFill(data);
	}

	beginGradientFill(
		type: GradientType,
		colors: number[],
		alphas: number[],
		ratios: number[],
		matrix: Matrix,
		spreadMethod: SpreadMethod = SpreadMethod.REPEAT,
		interpolationMethod: InterpolationMethod = InterpolationMethod.RGB,
		focalPointRatio: number = 0,
	) {
		const data = new GraphicsGradientFill(
			type,
			colors,
			alphas,
			ratios,
			matrix,
			spreadMethod,
			interpolationMethod,
			focalPointRatio,
		);

		this.addFill(data);
	}

	lineStyle(
		thickness: number = 0,
		color: number = 0,
		alpha: number = 1,
		pixelHinting: boolean = false,
		scaleMode: LineScaleMode = LineScaleMode.NONE,
		caps: CapsStyle = CapsStyle.ROUND,
		joints: JointStyle = JointStyle.ROUND,
		miterLimit: number = 3,
	) {
		const fill = new GraphicsSolidFill(color, alpha);

		const data = new GraphicsStroke(
			thickness,
			pixelHinting,
			scaleMode,
			caps,
			joints,
			miterLimit,
			fill,
		);

		this._data.push(data);
		this._stroke = data;
	}

	lineGradientStyle(
		type: GradientType = GradientType.LINEAR,
		colors?: number[],
		alphas?: number[],
		ratios?: number[],
		matrix?: Matrix,
		spreadMethod: SpreadMethod = SpreadMethod.PAD,
		interpolationMethod: InterpolationMethod = InterpolationMethod.RGB,
		focalPointRatio: number = 0,
	) {
		const fill = new GraphicsGradientFill(
			type,
			colors,
			alphas,
			ratios,
			matrix,
			spreadMethod,
			interpolationMethod,
			focalPointRatio,
		);

		if (this._stroke) {
			this._stroke.fill = fill;
		}
	}

	lineBitmapStyle(
		bitmap: CanvasImageSource,
		matrix?: Matrix,
		repeat: boolean = true,
		smooth: boolean = false,
	) {
		const fill = new GraphicsBitmapFill(bitmap, matrix, repeat, smooth);

		if (this._stroke) {
			this._stroke.fill = fill;
		}
	}

	drawPath(
		commands: number[],
		data: number[],
		winding: GraphicsPathWinding = GraphicsPathWinding.EVEN_ODD,
	) {
		const path = new GraphicsPath(commands, data, winding);
		this._data.push(path);
		this.beginPath();
	}

	drawTriangles(
		vertices: number[],
		indices?: number[],
		uvtData?: number[],
		culling: TriangleCulling = TriangleCulling.NONE,
	) {
		const path = new GraphicsTrianglePath(vertices, indices, uvtData, culling);
		this._data.push(path);
		this.beginPath();
	}

	drawRoundRect(
		x: number, y: number,
		width: number, height: number,
		ellipseWidth: number = 0, ellipseHeight: number = 0,
	) {
		this.beginPath();

		const path = this._path;

		const w: number = ellipseWidth;
		const h: number = ellipseHeight;

		const k: number = 0.5522848;

		const ox: number = (w / 2) * k;
		const oy: number = (h / 2) * k;

		const xe: number = x + w;
		const ye: number = y + h;

		const xm: number = x + w / 2;
		const ym: number = y + h / 2;

		const dx: number = width - w;
		const dy: number = height - h;

		path.moveTo(x, ym);
		path.cubicCurveTo(x, ym - oy, xm - ox, y, xm, y);
		path.lineTo(xm + dx, y);
		path.cubicCurveTo(xm + ox + dx, y, xe + dx, ym - oy, xe + dx, ym);
		path.lineTo(xe + dx, ym + dy);
		path.cubicCurveTo(xe + dx, ym + oy + dy, xm + ox + dx, ye + dy, xm + dx, ye + dy);
		path.lineTo(xm, ye + dy);
		path.cubicCurveTo(xm - ox, ye + dy, x, ym + oy + dy, x, ym + dy);

		this.beginPath();
	}

	drawRect(x: number, y: number, width: number, height: number) {
		this.beginPath();

		const path = this._path;

		path.moveTo(x, y);
		path.lineTo(x + width, y);
		path.lineTo(x + width, y + height);
		path.lineTo(x, y + height);
		path.lineTo(x, y);

		this.beginPath();
	}

	drawCircle(x: number, y: number, radius: number) {
		const size: number = radius * 2;
		this.drawEllipse(x - radius, y - radius, size, size);
	}

	drawEllipse(x: number, y: number, width: number, height: number) {
		this.beginPath();

		const path = this._path;

		const k: number = 0.5522848;
		const ox: number = width / 2 * k;
		const oy: number = height / 2 * k;
		const xe: number = x + width;
		const ye: number = y + height;
		const xm: number = x + width / 2;
		const ym: number = y + height / 2;

		path.moveTo(x, ym);
		path.cubicCurveTo(x, ym - oy, xm - ox, y, xm, y);
		path.cubicCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
		path.cubicCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
		path.cubicCurveTo(xm - ox, ye, x, ym + oy, x, ym);

		this.beginPath();
	}

	drawGraphicsData(graphicsData: IGraphicsData[]) {
		this._data.push(...graphicsData);
		this.beginPath();
	}

	endFill() {
		const data = new GraphicsEndFill();
		this._data.push(data);

		this._stroke = undefined;
		this.beginPath();
	}

	clear() {
		this._path = new GraphicsPath();
		this._data = [this._path];
		this._stroke = undefined;
	}

	copyFrom(sourceGraphics: Graphics) {
		this._data = sourceGraphics.readGraphicsData();
		this._stroke = undefined;
		this.beginPath();
	}

	readGraphicsData(): IGraphicsData[] {
		return this._data;
	}

	private addFill(data: IGraphicsFill) {
		if (this._path.commands.length) {
			const index = this._data.indexOf(this._path);
			this._data.splice(index, 0, data);
		} else {
			this._data.push(data);
		}
	}

	private beginPath() {
		if (this._path.commands.length) {
			this._path = new GraphicsPath();
			this._data.push(this._path);
		}
	}
}
