import { Matrix, Point } from '@jeng/geom';
import {
	EllipseData,
	GraphicsData,
	PathData,
	RectangleData,
} from './data/data';
import {
	CubicCurveTo,
	CurveTo,
	LineTo,
	MoveTo,
	PathCommand,
} from './data/path';
import {
	BitmapFill,
	CapsStyle,
	FillStyle,
	GradientFill,
	GradientType,
	JointStyle,
	LineScaleMode,
	RadialGradientFill,
	SolidFill,
	StrokeStyle,
} from './data/style';
import { Shape } from './shape';

const tempPoint0 = Point.empty();
const tempPoint1 = Point.empty();
const emptyMatrix = Matrix.empty();

export class Graphics {
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
		return this;
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
		return this;
	}

	beginGradientFill(
		type: GradientType,
		color: number[],
		alpha: number[],
		ratio: number[],
		matrix: Matrix,
	) {
		if (type === 'linear') {
			tempPoint0.x = -819.2;
			tempPoint0.y = 0;
			tempPoint1.x = 819.2;
			tempPoint1.y = 0;
			Matrix.transformPoint(matrix, tempPoint0, tempPoint0);
			Matrix.transformPoint(matrix, tempPoint1, tempPoint1);

			this.fill = {
				type,
				color,
				alpha,
				ratio,
				beginX: tempPoint0.x,
				beginY: tempPoint0.y,
				endX: tempPoint1.x,
				endY: tempPoint1.y,
			} as GradientFill;
		} else {
			tempPoint0.x = 1638.4;
			tempPoint0.y = 0;
			Matrix.transformPoint(matrix, tempPoint0, tempPoint0);

			this.fill = {
				type,
				color,
				alpha,
				ratio,
				beginX: tempPoint0.x,
				beginY: tempPoint0.y,
				beginRadius: 0,
				endX: tempPoint0.x,
				endY: tempPoint0.y,
				endRadius: Math.abs((tempPoint0.x - matrix.tx) / 2),
			} as RadialGradientFill;
		}
		return this;
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
		return this;
	}

	lineGradientStyle(
		type: GradientType,
		color?: number[],
		alpha?: number[],
		ratio?: number[],
		matrix: Matrix = emptyMatrix,
	) {
		if (!this.stroke) {
			return this;
		}

		if (type === 'linear') {
			tempPoint0.x = -819.2;
			tempPoint0.y = 0;
			tempPoint1.x = 819.2;
			tempPoint1.y = 0;
			Matrix.transformPoint(matrix, tempPoint0, tempPoint0);
			Matrix.transformPoint(matrix, tempPoint1, tempPoint1);

			this.stroke.fill = {
				type,
				color,
				alpha,
				ratio,
				beginX: tempPoint0.x,
				beginY: tempPoint0.y,
				endX: tempPoint1.x,
				endY: tempPoint1.y,
			} as GradientFill;
		} else {
			tempPoint0.x = 1638.4;
			tempPoint0.y = 0;
			Matrix.transformPoint(matrix, tempPoint0, tempPoint0);

			this.stroke.fill = {
				type,
				color,
				alpha,
				ratio,
				beginX: tempPoint0.x,
				beginY: tempPoint0.y,
				beginRadius: 0,
				endX: tempPoint0.x,
				endY: tempPoint0.y,
				endRadius: Math.abs((tempPoint0.x - matrix.tx) / 2),
			} as RadialGradientFill;
		}
		return this;
	}

	lineBitmapStyle(
		src: string,
		matrix?: Matrix,
		repeat: boolean = true,
		smooth: boolean = false,
	) {
		if (!this.stroke) {
			return this;
		}
		this.stroke.fill = {
			type: 'bitmap',
			src,
			matrix,
			repeat,
			smooth,
		} as BitmapFill;
		return this;
	}

	moveTo(x: number, y: number) {
		const path = this.beginPath();
		path.push({ type: 'moveTo', x, y } as MoveTo);
		return this;
	}

	lineTo(x: number, y: number) {
		const path = this.getPath();
		if (!path) {
			return this;
		}
		path.push({ type: 'lineTo', x, y } as LineTo);
		return this;
	}

	curveTo(
		cx: number, cy: number,
		x: number, y: number,
	) {
		const path = this.getPath();
		if (!path) {
			return this;
		}
		path.push({
			type: 'curveTo', cx, cy, x, y,
		} as CurveTo);
		return this;
	}

	cubicCurveTo(
		cx: number, cy: number,
		sx: number, sy: number,
		x: number, y: number,
	) {
		const path = this.getPath();
		if (!path) {
			return this;
		}
		path.push({
			type: 'cubicCurveTo', cx, cy, sx, sy, x, y,
		} as CubicCurveTo);
		return this;
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

		return this;
	}

	drawRect(x: number, y: number, width: number, height: number) {
		const data = this.createData() as RectangleData;
		data.type = 'rectangle';
		data.x = x;
		data.y = y;
		data.width = width;
		data.height = height;
		return this;
	}

	drawCircle(x: number, y: number, radius: number) {
		const data = this.createData() as EllipseData;
		data.type = 'ellipse';
		data.x = x;
		data.y = y;
		data.radius = radius;
		return this;
	}

	drawEllipse(x: number, y: number, width: number, height: number) {
		const data = this.createData() as EllipseData;
		data.type = 'ellipse';
		data.radiusX = width / 2;
		data.radiusY = height / 2;
		data.x = x - data.radiusX;
		data.y = y - data.radiusY;
		return this;
	}

	clear() {
		delete this.shape.data;
		return this;
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
		const data = this.createData() as PathData;
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
