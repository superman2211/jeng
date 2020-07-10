import {
	IRenderingContext,
	IRenderingPattern,
	FillStyle,
	StrokeStyle,
	ColorPattern,
	LinearGradientPattern,
	RadialGradientPattern,
	ImagePattern,
	GradientPattern,
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

	beginPath(): void {
		this._context.beginPath();
	}

	closePath(): void {
		this._context.closePath();
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

	rect(x: number, y: number, width: number, height: number): void {
		this._context.rect(x, y, width, height);
	}

	bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void {
		this._context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
	}

	quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void {
		this._context.quadraticCurveTo(cpx, cpy, x, y);
	}

	fill(pattern: IRenderingPattern, style: FillStyle): void {
		this._context.fillStyle = this.formatPattern(pattern);
		this._context.globalAlpha = style.alpha;
		this._context.fill();
	}

	stroke(pattern: IRenderingPattern, style: StrokeStyle): void {
		this._context.strokeStyle = this.formatPattern(pattern);
		this._context.lineWidth = style.thikness;
		this._context.lineCap = style.cap;
		this._context.lineJoin = style.join;
		this._context.miterLimit = style.miterLimit;
		this._context.globalAlpha = style.alpha;
		this._context.stroke();
	}

	private static formatColor(pattern: ColorPattern): string {
		const {
			r, g, b, a,
		} = pattern;

		if (pattern.a <= 0) {
			return '';
		}

		if (pattern.a < 1) {
			return `rgba(${r}, ${g}, ${b}, ${a / 0xff})`;
		}

		return `rgb(${r}, ${g}, ${b})`;
	}

	private formatPattern(pattern: IRenderingPattern): string | CanvasGradient | CanvasPattern {
		if (pattern instanceof ColorPattern) {
			return CanvasRenderingContext.formatColor(pattern);
		}

		if (pattern instanceof GradientPattern) {
			let gradient: CanvasGradient | undefined;

			if (pattern instanceof LinearGradientPattern) {
				const {
					x0, y0, x1, y1,
				} = pattern;

				gradient = this._context.createLinearGradient(x0, y0, x1, y1);
			}

			if (pattern instanceof RadialGradientPattern) {
				const {
					x0, y0, r0, x1, y1, r1,
				} = pattern;

				gradient = this._context.createRadialGradient(x0, y0, r0, x1, y1, r1);
			}

			if (gradient) {
				const {
					colors, offsets,
				} = pattern;

				for (let i = 0; i < colors.length; i++) {
					gradient.addColorStop(offsets[i], CanvasRenderingContext.formatColor(colors[i]));
				}

				return gradient;
			}
		} else if (pattern instanceof ImagePattern) {
			const {
				image, repeat,
			} = pattern;

			if (image) {
				const repetition = repeat ? 'repeat' : 'no-repeat';

				const canvasPattern = this._context.createPattern(image, repetition);

				if (canvasPattern) {
					return canvasPattern;
				}
			}
		}

		return '';
	}

	clip(): void {
		this._context.clip();
	}
}
