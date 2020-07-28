import { Matrix, ColorTransform } from '@e2d/geom';

export default class Transform {
	private _getParent: () => Transform | null;
	private _matrix = new Matrix();
	private _colorTransform = new ColorTransform();

	constructor(getParent: () => Transform | null) {
		this._getParent = getParent;
	}

	get matrix(): Matrix {
		return this._matrix.clone();
	}

	set matrix(value: Matrix) {
		this._matrix.copyFrom(value);
	}

	get colorTransform(): ColorTransform {
		return this._colorTransform.clone();
	}

	set colorTransform(value: ColorTransform) {
		this._colorTransform.copyFrom(value);
	}

	get concatenatedMatrix(): Matrix {
		const value = new Matrix();
		const parent = this._getParent();
		if (parent) {
			const parentMatrix = parent.concatenatedMatrix;
			value.copyFrom(this._matrix);
			value.concat(parentMatrix);
		} else {
			value.copyFrom(this._matrix);
		}
		return value;
	}

	get concatenatedColorTransform(): ColorTransform {
		const value = new ColorTransform();
		const parent = this._getParent();
		if (parent) {
			const parentColorTransform = parent.concatenatedColorTransform;
			value.copyFrom(this._colorTransform);
			value.concat(parentColorTransform);
		} else {
			value.copyFrom(this._colorTransform);
		}
		return value;
	}
}
