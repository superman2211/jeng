/* eslint-disable no-mixed-operators */
// eslint-disable-next-line no-unused-vars
import { Rectangle, Matrix } from '@e2d/geom';
import {
	// eslint-disable-next-line no-unused-vars
	GraphicsPath,
	// eslint-disable-next-line no-unused-vars
	GraphicsEndFill,
	// eslint-disable-next-line no-unused-vars
	GraphicsSolidFill,
	// eslint-disable-next-line no-unused-vars
	GradientType,
	// eslint-disable-next-line no-unused-vars
	GraphicsGradientFill,
	// eslint-disable-next-line no-unused-vars
	GraphicsStroke,
	// eslint-disable-next-line no-unused-vars
	GraphicsData,
	GraphicsType,
	GraphicsPathCommand,
	SpreadMethod,
	InterpolationMethod,
} from './types';

export default class Graphics {
	private _bounds: Rectangle | null = null;
	private _makeGraphicsDirty: () => void;
	private _data: GraphicsData[] = [];
	private _path: GraphicsPath | null = null;
	private _stroke: number = 0;
	private _hasFill: boolean = false;

	constructor(makeGraphicsDirty: () => void) {
		this._makeGraphicsDirty = makeGraphicsDirty;
	}

	get bounds(): Rectangle | null {
		return this._bounds;
	}

	get data(): GraphicsData[] {
		return this._data;
	}

	get hasFill(): boolean {
		return this._hasFill;
	}

	addFill(data: any) {
		this._hasFill = true;

		const index = this._path ? this._data.indexOf(this._path) : -1;

		if (index !== -1) {
			this._data.splice(index, data);
		} else {
			this._data.push(data);
		}

		this._makeGraphicsDirty();
	}

	beginFill(color: number = 0, alpha: number = 1) {
		const data: GraphicsSolidFill = {
			type: GraphicsType.SOLID_FILL,
			color,
			alpha,
		};

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
		const data: GraphicsGradientFill = {
			type: GraphicsType.GRADIENT_FILL,
			gradient: type,
			colors,
			alphas,
			ratios,
			matrix,
			spreadMethod,
			interpolationMethod,
			focalPointRatio,
		};

		this.addFill(data);
	}

	endFill() {
		const data: GraphicsEndFill = {
			type: GraphicsType.END_FILL,
		};

		this._data.push(data);

		this.closePath();

		this._makeGraphicsDirty();
	}

	lineStyle(
		thickness: number = 0,
		color: number = 0,
		alpha: number = 1,
		pixelHinting: boolean = false,
		caps: CanvasLineCap = 'round',
		joints: CanvasLineJoin = 'round',
		miterLimit: number = 3,
	) {
		if (thickness && this._stroke < thickness) {
			this._stroke = thickness;
		} else {
			this._stroke = 0;
		}

		const data: GraphicsStroke = {
			type: GraphicsType.STROKE,
			thickness,
			color,
			alpha,
			pixelHinting,
			caps,
			joints,
			miterLimit,
		};

		this._data.push(data);

		this._makeGraphicsDirty();
	}

	moveTo(x: number, y: number) {
		this.beginPath();

		const path = <GraphicsPath> this._path;

		path.commands.push(GraphicsPathCommand.MOVE_TO);
		path.data.push(x);
		path.data.push(y);

		this.inflateBounds(x, y);

		this._makeGraphicsDirty();
	}

	lineTo(x: number, y: number) {
		this.beginPath();

		const path = <GraphicsPath> this._path;

		path.commands.push(GraphicsPathCommand.LINE_TO);
		path.data.push(x);
		path.data.push(y);

		this.inflateBounds(x, y);

		this._makeGraphicsDirty();
	}

	curveTo(
		controlX: number, controlY: number,
		anchorX: number, anchorY: number,
	) {
		this.beginPath();

		const path = <GraphicsPath> this._path;

		path.commands.push(GraphicsPathCommand.CURVE_TO);
		path.data.push(controlX);
		path.data.push(controlY);
		path.data.push(anchorX);
		path.data.push(anchorY);

		this.inflateBounds(controlX, controlY);
		this.inflateBounds(anchorX, anchorY);

		this._makeGraphicsDirty();
	}

	cubicCurveTo(
		controlX1: number, controlY1: number,
		controlX2: number, controlY2: number,
		anchorX: number, anchorY: number,
	) {
		this.beginPath();

		const path = <GraphicsPath> this._path;

		path.commands.push(GraphicsPathCommand.CUBIC_CURVE_TO);
		path.data.push(controlX1);
		path.data.push(controlY1);
		path.data.push(controlX2);
		path.data.push(controlY2);
		path.data.push(anchorX);
		path.data.push(anchorY);

		this.inflateBounds(controlX1, controlY1);
		this.inflateBounds(controlX2, controlY2);
		this.inflateBounds(anchorX, anchorY);

		this._makeGraphicsDirty();
	}

	drawRoundRect(
		x: number, y: number,
		width: number, height: number,
		ellipseWidth: number = 0, ellipseHeight: number = 0,
	) {
		this.beginPath(true);

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

		const path = <GraphicsPath> this._path;

		path.commands.push(GraphicsPathCommand.MOVE_TO);
		path.data.push(x);
		path.data.push(ym);

		path.commands.push(GraphicsPathCommand.CUBIC_CURVE_TO);
		path.data.push(x);
		path.data.push(ym - oy);
		path.data.push(xm - ox);
		path.data.push(y);
		path.data.push(xm);
		path.data.push(y);

		path.commands.push(GraphicsPathCommand.LINE_TO);
		path.data.push(xm + dx);
		path.data.push(y);

		path.commands.push(GraphicsPathCommand.CUBIC_CURVE_TO);
		path.data.push(xm + ox + dx);
		path.data.push(y);
		path.data.push(xe + dx);
		path.data.push(ym - oy);
		path.data.push(xe + dx);
		path.data.push(ym);

		path.commands.push(GraphicsPathCommand.LINE_TO);
		path.data.push(xe + dx);
		path.data.push(ym + dy);

		path.commands.push(GraphicsPathCommand.CUBIC_CURVE_TO);
		path.data.push(xe + dx);
		path.data.push(ym + oy + dy);
		path.data.push(xm + ox + dx);
		path.data.push(ye + dy);
		path.data.push(xm + dx);
		path.data.push(ye + dy);

		path.commands.push(GraphicsPathCommand.LINE_TO);
		path.data.push(xm);
		path.data.push(ye + dy);

		path.commands.push(GraphicsPathCommand.CUBIC_CURVE_TO);
		path.data.push(xm - ox);
		path.data.push(ye + dy);
		path.data.push(x);
		path.data.push(ym + oy + dy);
		path.data.push(x);
		path.data.push(ym + dy);

		this.closePath();

		this.inflateBounds(x, y);
		this.inflateBounds(x + width, y + height);

		this._makeGraphicsDirty();
	}

	drawRect(x: number, y: number, width: number, height: number) {
		this.beginPath(true);

		const path = <GraphicsPath> this._path;

		path.commands.push(GraphicsPathCommand.MOVE_TO);
		path.data.push(x);
		path.data.push(y);

		path.commands.push(GraphicsPathCommand.LINE_TO);
		path.data.push(x + width);
		path.data.push(y);

		path.commands.push(GraphicsPathCommand.LINE_TO);
		path.data.push(x + width);
		path.data.push(y + height);

		path.commands.push(GraphicsPathCommand.LINE_TO);
		path.data.push(x);
		path.data.push(y + height);

		path.commands.push(GraphicsPathCommand.LINE_TO);
		path.data.push(x);
		path.data.push(y);

		this.closePath();

		this.inflateBounds(x, y);
		this.inflateBounds(x + width, y + height);

		this._makeGraphicsDirty();
	}

	drawCircle(x: number, y: number, radius: number) {
		const size: number = radius * 2;

		this.drawEllipse(x - radius, y - radius, size, size);

		this.inflateBounds(x - radius, y - radius);
		this.inflateBounds(x + radius, y + radius);

		this._makeGraphicsDirty();
	}

	drawEllipse(x: number, y: number, width: number, height: number) {
		this.beginPath(true);

		const k: number = 0.5522848;
		const ox: number = width / 2 * k;
		const oy: number = height / 2 * k;
		const xe: number = x + width;
		const ye: number = y + height;
		const xm: number = x + width / 2;
		const ym: number = y + height / 2;

		const path = <GraphicsPath> this._path;

		path.commands.push(GraphicsPathCommand.MOVE_TO);
		path.data.push(x);
		path.data.push(ym);

		path.commands.push(GraphicsPathCommand.CUBIC_CURVE_TO);
		path.data.push(x);
		path.data.push(ym - oy);
		path.data.push(xm - ox);
		path.data.push(y);
		path.data.push(xm);
		path.data.push(y);

		path.commands.push(GraphicsPathCommand.CUBIC_CURVE_TO);
		path.data.push(xm + ox);
		path.data.push(y);
		path.data.push(xe);
		path.data.push(ym - oy);
		path.data.push(xe);
		path.data.push(ym);

		path.commands.push(GraphicsPathCommand.CUBIC_CURVE_TO);
		path.data.push(xe);
		path.data.push(ym + oy);
		path.data.push(xm + ox);
		path.data.push(ye);
		path.data.push(xm);
		path.data.push(ye);

		path.commands.push(GraphicsPathCommand.CUBIC_CURVE_TO);
		path.data.push(xm - ox);
		path.data.push(ye);
		path.data.push(x);
		path.data.push(ym + oy);
		path.data.push(x);
		path.data.push(ym);

		this.closePath();

		this.inflateBounds(x, y);
		this.inflateBounds(x + width, y + height);

		this._makeGraphicsDirty();
	}

	clear() {
		this._stroke = 0;
		this._hasFill = false;

		Rectangle.dispose(this._bounds);

		this._bounds = null;

		this.closePath();

		this._data = [];

		this._makeGraphicsDirty();
	}

	inflateBounds(x: number, y: number) {
		if (this._bounds == null) {
			this._bounds = Rectangle.create();
			this._bounds.setTo(x + this._stroke, y + this._stroke);
		} else {
			this._bounds.extend(x + this._stroke, y + this._stroke);
		}

		this._bounds.extend(x - this._stroke, y - this._stroke);
	}

	beginPath(clear: boolean = false) {
		if (clear || !this._path) {
			this._path = {
				type: GraphicsType.PATH,
				commands: [],
				data: [],
				winding: 'evenodd',
			};

			this._data.push(this._path);
		}
	}

	closePath() {
		this._path = {
			type: GraphicsType.PATH,
			commands: [],
			data: [],
			winding: 'evenodd',
		};
	}
}
