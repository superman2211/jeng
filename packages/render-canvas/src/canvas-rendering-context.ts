import {
	IRenderingContext,
	RenderingPattern,
	FillStyle,
	StrokeStyle,
	ColorPattern,
	LinearGradientPattern,
	RadialGradientPattern,
	ImagePattern,
} from '@e2d/render';

export default class CanvasRenderingContext implements IRenderingContext {
	private _context: CanvasRenderingContext2D;
	private _canvas: HTMLCanvasElement;

	constructor(canvas: HTMLCanvasElement) {
		this._canvas = canvas;
		this._context = canvas.getContext('2d') as CanvasRenderingContext2D;
	}

	getWidth(): number {
		return this._canvas.width;
	}

	getHeight(): number {
		return this._canvas.height;
	}

	save(): void {
		this._context.save();
	}

	restore(): void {
		this._context.restore();
	}

	setTransform(a: number, b: number, c: number, d: number, tx: number, ty: number): void {
		this._context.setTransform(a, b, c, d, tx, ty);
	}

	moveTo(x: number, y: number): void {
		this._context.moveTo(x, y);
	}

	lineTo(x: number, y: number): void {
		this._context.lineTo(x, y);
	}

	bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void {
		this._context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
	}

	quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void {
		this._context.quadraticCurveTo(cpx, cpy, x, y);
	}

	fill(pattern: RenderingPattern, style: FillStyle): void {
		this._context.fillStyle = this.formatPattern(pattern);
		this._context.globalAlpha = style.alpha;
		this._context.fill();
	}

	stroke(pattern: RenderingPattern, style: StrokeStyle): void {
		this._context.strokeStyle = this.formatPattern(pattern);
		this._context.lineWidth = style.thikness;
		this._context.lineCap = style.cap;
		this._context.lineJoin = style.join;
		this._context.miterLimit = style.miterLimit;
		this._context.globalAlpha = style.alpha;
		this._context.stroke();
	}

	private formatPattern(pattern: RenderingPattern): string | CanvasGradient | CanvasPattern {
		if (pattern instanceof ColorPattern) {
			if (pattern.a < 1) {
				return `rgba(${pattern.r}, ${pattern.g}, ${pattern.b}, ${pattern.a})`;
			} else {
				return `rgb(${pattern.r}, ${pattern.g}, ${pattern.b})`;
			}
		} else if (pattern instanceof LinearGradientPattern) {
			const gradient = this._context.createLinearGradient(
				pattern.
			);
			return gradient;
		}
	}

	clip(): void {
		this._context.clip();
	}
}
