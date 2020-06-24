import { EventDispatcher } from '@e2d/events';
import { IBitmapDrawable, IRenderSupport } from '@e2d/render';
import {
	Rectangle,
	TO_DEGREE,
	TO_RADIAN,
	Matrix,
} from '@e2d/geom';
import Transform from './transform';
import { BlendMode } from './enums';

let globalId: number = 0;

export default abstract class DisplayObject extends EventDispatcher implements IBitmapDrawable {
	private _transform: Transform;
	private _mask: DisplayObject | null = null;
	private _isMask: boolean = false;
	private _scrollRect: Rectangle | null = null;

	/* @internal */_parent: DisplayObject | null = null;

	readonly id = globalId++;
	name = `instance${this.id}`;
	visible = true;
	cacheAsBitmap = false;
	blendMode = BlendMode.NORMAL;

	constructor() {
		super();
		this._transform = new Transform(this.getParentTransform);
	}

	get transform(): Transform {
		return this._transform;
	}

	get alpha(): number {
		return this._transform.colorTransform.alphaMultiplier;
	}

	set alpha(value: number) {
		const { colorTransform } = this._transform;
		if (colorTransform.alphaMultiplier !== value) {
			colorTransform.alphaMultiplier = value;
			this._transform.colorTransform = colorTransform;
		}
	}

	get isMask(): boolean {
		return this._isMask;
	}

	get mask(): DisplayObject | null {
		return this._mask;
	}

	set mask(value: DisplayObject | null) {
		if (this._mask !== value) {
			if (this._mask) {
				this._mask._isMask = false;
			}

			this._mask = value;

			if (this._mask) {
				this._mask._isMask = true;
			}
		}
	}

	get x(): number {
		return this._transform.matrix.tx;
	}

	set x(value: number) {
		if (Number.isNaN(value)) {
			value = 0;
		}

		const { matrix } = this._transform;
		if (matrix.tx !== value) {
			matrix.tx = value;
			this._transform.matrix = matrix;
		}
	}

	get y(): number {
		return this._transform.matrix.ty;
	}

	set y(value: number) {
		if (Number.isNaN(value)) {
			value = 0;
		}

		const { matrix } = this._transform;
		if (matrix.ty !== value) {
			matrix.ty = value;
			this._transform.matrix = matrix;
		}
	}

	get rotation(): number {
		return this._transform.matrix.ortX.angle * TO_DEGREE;
	}

	set rotation(value: number) {
		if (Number.isNaN(value)) {
			value = 0;
		}

		const { rotation } = this;
		if (rotation !== value) {
			const delta = (rotation - value) * TO_RADIAN;
			const { matrix } = this._transform;
			matrix.rotate(delta);
			this._transform.matrix = matrix;
		}
	}

	get scaleX(): number {
		return this._transform.matrix.ortX.length;
	}

	set scaleX(value: number) {
		if (Number.isNaN(value)) {
			value = 1;
		}

		if (this.scaleX !== value) {
			const { matrix } = this._transform;
			const point = matrix.ortX;
			const scale = value / point.length;
			point.x *= scale;
			point.y *= scale;
			matrix.ortX = point;
			this._transform.matrix = matrix;
		}
	}

	get scaleY(): number {
		return this._transform.matrix.ortY.length;
	}

	set scaleY(value: number) {
		if (Number.isNaN(value)) {
			value = 1;
		}

		if (this.scaleY !== value) {
			const { matrix } = this._transform;
			const point = matrix.ortY;
			const scale = value / point.length;
			point.x *= scale;
			point.y *= scale;
			matrix.ortY = point;
			this._transform.matrix = matrix;
		}
	}

	get width(): number {
		const bounds = new Rectangle();
		this.calculateBounds(bounds, this._transform.matrix);
		return bounds.width;
	}

	set width(value: number) {
		if (Number.isNaN(value)) {
			value = 0;
		}

		const bounds = new Rectangle();
		const matrix = new Matrix();
		this.calculateBounds(bounds, matrix);

		if (bounds.width !== value) {
			this.scaleX = value / bounds.width;
		} else {
			this.scaleX = 1;
		}
	}

	get height(): number {
		const bounds = new Rectangle();
		this.calculateBounds(bounds, this._transform.matrix);
		return bounds.height;
	}

	set height(value: number) {
		if (Number.isNaN(value)) {
			value = 0;
		}

		const bounds = new Rectangle();
		const matrix = new Matrix();
		this.calculateBounds(bounds, matrix);

		if (bounds.height !== value) {
			this.scaleY = value / bounds.height;
		} else {
			this.scaleY = 1;
		}
	}

	get mouseX(): number {
		const { stage } = this;
		if (stage) {
			return this._transform.concatenatedMatrix.transformInverseX(stage.mouseX, stage.mouseY);
		}
		return 0;
	}

	get mouseY(): number {
		const { stage } = this;
		if (stage) {
			return this._transform.concatenatedMatrix.transformInverseX(stage.mouseX, stage.mouseY);
		}
		return 0;
	}

	get scrollRect(): Rectangle | null {
		if (this._scrollRect) {
			return this._scrollRect.clone();
		}
		return null;
	}

	set scrollRect(value: Rectangle | null) {
		if (this._scrollRect !== value) {
			this._scrollRect = value ? value.clone() : null;
		}
	}

	get parent(): DisplayObject | null {
		return this._parent;
	}

	get root(): DisplayObject {
		let value: DisplayObject = this;
		while (value._parent) {
			value = value._parent;
		}
		return value;
	}

	get stage(): DisplayObject | null {
		const { root } = this;

		if ('stageWidth' in root) {
			return root;
		}

		return null;
	}

	// eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
	private calculateBounds(bounds: Rectangle, matrix: Matrix) {
	}

	private getParentTransform(): Transform | null {
		if (this._parent) {
			return this._parent._transform;
		}
		return null;
	}

	// eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
	render(support: IRenderSupport) {
		// TODO implement it
	}
}
