import { Matrix } from '@e2d/geom';
import {
	CapsStyle,
	GradientType,
	GraphicsData,
	GraphicsFill,
	GraphicsStroke,
	InterpolationMethod,
	JointStyle,
	LineScaleMode,
	SpreadMethod,
} from './data/data';
import { PathCommand } from './data/path';
import { Shape } from './shape';

export default class Graphics {
	shape: Shape;

	private fill?: GraphicsFill;
	private stroke?: GraphicsStroke;

	constructor(shape: Shape) {
		this.shape = shape;
	}

	beginFill(color: number = 0, alpha: number = 1) {
		this.fill = {
			type: 'solid',
			color,
			alpha,
		};
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
		};
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
		};
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
			},
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
		};
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
		};
	}

	moveTo(x: number, y: number) {
		const path = this.beginPath();
		path.push({ type: 'moveTo', x, y });
	}

	lineTo(x: number, y: number) {
		const path = this.getPath();
		if (!path) {
			return;
		}
		path.push({ type: 'lineTo', x, y });
	}

	curveTo(
		controlX: number, controlY: number,
		anchorX: number, anchorY: number,
	) {
		const path = this.getPath();
		if (!path) {
			return;
		}
		path.push({ type: 'curveTo', data: [controlX, controlY, anchorX, anchorY] });
	}

	cubicCurveTo(
		controlX1: number, controlY1: number,
		controlX2: number, controlY2: number,
		anchorX: number, anchorY: number,
	) {
		const path = this.getPath();
		if (!path) {
			return;
		}
		path.push({ type: 'curveTo', data: [controlX1, controlY1, controlX2, controlY2, anchorX, anchorY] });
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

		path.push({ type: 'moveTo', x, y: ym });
		path.push({ type: 'cubicCurveTo', data: [x, ym - oy, xm - ox, y, xm, y] });
		path.push({ type: 'lineTo', x: xm + dx, y });
		path.push({ type: 'cubicCurveTo', data: [xm + ox + dx, y, xe + dx, ym - oy, xe + dx, ym] });
		path.push({ type: 'lineTo', x: xe + dx, y: ym + dy });
		path.push({ type: 'cubicCurveTo', data: [xe + dx, ym + oy + dy, xm + ox + dx, ye + dy, xm + dx, ye + dy] });
		path.push({ type: 'lineTo', x: xm, y: ye + dy });
		path.push({ type: 'cubicCurveTo', data: [xm - ox, ye + dy, x, ym + oy + dy, x, ym + dy] });
	}

	drawRect(x: number, y: number, width: number, height: number) {
		const data = this.createData();
		data.path = {
			type: 'rectangle',
			x,
			y,
			width,
			height,
		};
	}

	drawCircle(x: number, y: number, radius: number) {
		const data = this.createData();
		data.path = {
			type: 'circle',
			x,
			y,
			radius,
		};
	}

	drawEllipse(x: number, y: number, width: number, height: number) {
		const data = this.createData();
		data.path = {
			type: 'circle',
			x,
			y,
			width,
			height,
		};
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

		const graphicsData: GraphicsData = { fill, stroke };
		shape.data.push(graphicsData);
		return graphicsData;
	}

	private beginPath(): PathCommand[] {
		const data = this.createData();
		data.path = [];
		return data.path;
	}

	private getPath(): PathCommand[] | undefined {
		const { shape } = this;
		if (!Array.isArray(shape.data) || !shape.data.length) {
			return undefined;
		}
		const data = shape.data[shape.data.length - 1];
		if (!Array.isArray(data.path)) {
			return undefined;
		}
		return data.path;
	}
}
