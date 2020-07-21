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
import { Screen } from '@e2d/system';

const { pixelRatio } = Screen;

export default class CanvasRenderingContext implements IRenderingContext {
	private _context: CanvasRenderingContext2D;
	private _canvas: HTMLCanvasElement;

	constructor() {
		this._canvas = document.createElement('canvas');
		this._context = this._canvas.getContext('2d') as CanvasRenderingContext2D;

		this.width = 400;
		this.height = 300;
	}

	get element(): HTMLElement {
		return this._canvas;
	}

	get width(): number {
		return this._canvas.width / pixelRatio;
	}

	set width(value: number) {
		const canvasValue = value * pixelRatio;
		if (this._canvas.width !== canvasValue) {
			this._canvas.width = canvasValue;
			this._canvas.style.width = `${value}px`;
		}
	}

	get height(): number {
		return this._canvas.height / pixelRatio;
	}

	set height(value: number) {
		const canvasValue = value * pixelRatio;
		if (this._canvas.height !== canvasValue) {
			this._canvas.height = canvasValue;
			this._canvas.style.height = `${value}px`;
		}
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
		this._context.setTransform(
			a * pixelRatio,
			b * pixelRatio,
			c * pixelRatio,
			d * pixelRatio,
			tx * pixelRatio,
			ty * pixelRatio,
		);
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

		if (pattern.a < 0xff) {
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
