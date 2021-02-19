import { Matrix } from '@e2d/geom';
import {
	BitmapFill,
	CapsStyle,
	FillStyle,
	GradientFill,
	GradientType,
	InterpolationMethod,
	JointStyle,
	LineScaleMode,
	SolidFill,
	SpreadMethod,
	StrokeStyle,
} from './data/style';
import {
	CubicCurveTo,
	CurveTo, LineTo, MoveTo, PathCommand,
} from './data/path';
import { Shape } from './shape';
import {
	EllipseData,
	GraphicsData,
	PathData,
	RectangleData,
} from './data/data';

export default class Graphics {
	shape: Shape;

	private fill?: FillStyle;
	private stroke?: StrokeStyle;

	constructor(shape: Shape) {
		this.shape = shape;
	}

	beginFill(color: number = 0, alpha: number = 1) {
		this.fill = {
			type: 'solid',
			color,
			alpha,
		} as SolidFill;
	}

	beginBitmapFill(
		src: string,
		matrix?: Matrix,
		repeat: boolean = true,
		smooth: boolean = false,
	) {
		this.fill = {
			type: 'bitmap',
			src,
			matrix,
			repeat,
			smooth,
		} as BitmapFill;
	}

	beginGradientFill(
		type: GradientType,
		color: number[],
		alpha: number[],
		ratio: number[],
		matrix: Matrix,
		spread: SpreadMethod = 'repeat',
		interpolation: InterpolationMethod = 'rgb',
		focalPointRatio: number = 0,
	) {
		this.fill = {
			type,
			color,
			alpha,
			ratio,
			matrix,
			spread,
			interpolation,
			focalPointRatio,
		} as GradientFill;
	}

	lineStyle(
		thickness: number = 0,
		color: number = 0,
		alpha: number = 1,
		pixelHinting: boolean = false,
		scaleMode: LineScaleMode = 'none',
		caps: CapsStyle = 'round',
		joints: JointStyle = 'round',
		miterLimit: number = 3,
	) {
		this.stroke = {
			thickness,
			pixelHinting,
			scaleMode,
			caps,
			joints,
			miterLimit,
			fill: {
				type: 'solid',
				color,
				alpha,
			} as SolidFill,
		};
	}

	lineGradientStyle(
		type: GradientType,
		color?: number[],
		alpha?: number[],
		ratio?: number[],
		matrix?: Matrix,
		spread: SpreadMethod = 'repeat',
		interpolation: InterpolationMethod = 'rgb',
		focalPointRatio: number = 0,
	) {
		if (!this.stroke) {
			return;
		}
		this.stroke.fill = {
			type,
			color,
			alpha,
			ratio,
			matrix,
			spread,
			interpolation,
			focalPointRatio,
		} as GradientFill;
	}

	lineBitmapStyle(
		src: string,
		matrix?: Matrix,
		repeat: boolean = true,
		smooth: boolean = false,
	) {
		if (!this.stroke) {
			return;
		}
		this.stroke.fill = {
			type: 'bitmap',
			src,
			matrix,
			repeat,
			smooth,
		} as BitmapFill;
	}

	moveTo(x: number, y: number) {
		const path = this.beginPath();
		path.push({ type: 'moveTo', x, y } as MoveTo);
	}

	lineTo(x: number, y: number) {
		const path = this.getPath();
		if (!path) {
			return;
		}
		path.push({ type: 'lineTo', x, y } as LineTo);
	}

	curveTo(
		cx: number, cy: number,
		x: number, y: number,
	) {
		const path = this.getPath();
		if (!path) {
			return;
		}
		path.push({
			type: 'curveTo', cx, cy, x, y,
		} as CurveTo);
	}

	cubicCurveTo(
		cx: number, cy: number,
		sx: number, sy: number,
		x: number, y: number,
	) {
		const path = this.getPath();
		if (!path) {
			return;
		}
		path.push({
			type: 'curveTo', cx, cy, sx, sy, x, y,
		} as CubicCurveTo);
	}

	drawRoundRect(
		x: number, y: number,
		width: number, height: number,
		ellipseWidth: number = 0, ellipseHeight: number = 0,
	) {
		const path = this.beginPath();

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

		path.push({
			type: 'moveTo',
			x,
			y: ym,
		} as MoveTo);

		path.push({
			type: 'cubicCurveTo',
			cx: x,
			cy: ym - oy,
			sx: xm - ox,
			sy: y,
			x: xm,
			y,
		} as CubicCurveTo);

		path.push({
			type: 'lineTo',
			x: xm + dx,
			y,
		} as LineTo);

		path.push({
			type: 'cubicCurveTo',
			cx: xm + ox + dx,
			cy: y,
			sx: xe + dx,
			sy: ym - oy,
			x: xe + dx,
			y: ym,
		} as CubicCurveTo);

		path.push({
			type: 'lineTo',
			x: xe + dx,
			y: ym + dy,
		} as LineTo);

		path.push({
			type: 'cubicCurveTo',
			cx: xe + dx,
			cy: ym + oy + dy,
			sx: xm + ox + dx,
			sy: ye + dy,
			x: xm + dx,
			y: ye + dy,
		} as CubicCurveTo);

		path.push({
			type: 'lineTo',
			x: xm,
			y: ye + dy,
		} as LineTo);

		path.push({
			type: 'cubicCurveTo',
			cx: xm - ox,
			cy: ye + dy,
			sx: x,
			sy: ym + oy + dy,
			x,
			y: ym + dy,
		} as CubicCurveTo);
	}

	drawRect(x: number, y: number, width: number, height: number) {
		const data = this.createData() as RectangleData;
		data.type = 'rectangle';
		data.x = x;
		data.y = y;
		data.width = width;
		data.height = height;
	}

	drawCircle(x: number, y: number, radius: number) {
		const data = this.createData() as EllipseData;
		data.type = 'ellipse';
		data.x = x;
		data.y = y;
		data.radius = radius;
	}

	drawEllipse(x: number, y: number, width: number, height: number) {
		const data = this.createData() as EllipseData;
		data.type = 'ellipse';
		data.radiusX = width / 2;
		data.radiusY = height / 2;
		data.x = x - data.radiusX;
		data.y = y - data.radiusY;
	}

	clear() {
		delete this.shape.data;
	}

	private createData(): GraphicsData {
		const { shape, fill, stroke } = this;

		if (Array.isArray(shape.data)) {
			// skip
		} else if (typeof shape.data === 'object') {
			shape.data = [shape.data];
		} else {
			shape.data = [];
		}

		const graphicsData: GraphicsData = { type: 'path', fill, stroke };
		shape.data.push(graphicsData);
		return graphicsData;
	}

	private beginPath(): PathCommand[] {
		const data: PathData = this.createData() as PathData;
		data.data = [];
		return data.data;
	}

	private getPath(): PathCommand[] | undefined {
		const { shape } = this;
		if (!Array.isArray(shape.data) || !shape.data.length) {
			return undefined;
		}
		const data = shape.data[shape.data.length - 1] as PathData;
		if (!Array.isArray(data.data)) {
			return undefined;
		}
		return data.data;
	}
}
