import { ColorTransform } from './ColorTransform';
import { Matrix } from './Matrix';

export interface TintColor {
	color?: number;
	value?: number;
}

export interface Transform {
	x?: number;
	y?: number;
	scaleX?: number;
	scaleY?: number;
	rotation?: number;
	matrix?: Matrix;
	alpha?: number;
	tint?: TintColor,
	colorTransform?: ColorTransform;
}

export function getMatrix(transform: Transform): Matrix {
	const { matrix } = transform;
	if (matrix) {
		return {
			a: matrix.a ?? 1,
			b: matrix.b ?? 0,
			c: matrix.c ?? 0,
			d: matrix.d ?? 1,
			tx: matrix.tx ?? 0,
			ty: matrix.ty ?? 0,
		};
	}

	const { rotation } = transform;
	if (rotation) {
		const cos = Math.cos(rotation);
		const sin = Math.sin(rotation);
		const scaleX = transform.scaleX ?? 1;
		const scaleY = transform.scaleY ?? 1;

		return {
			a: cos * scaleX,
			b: sin * scaleX,
			c: -sin * scaleY,
			d: cos * scaleY,
			tx: transform.x ?? 0,
			ty: transform.y ?? 0,
		};
	}

	return {
		a: transform.scaleX ?? 1,
		b: 0,
		c: 0,
		d: transform.scaleY ?? 1,
		tx: transform.x ?? 0,
		ty: transform.y ?? 0,
	};
}

export function getColorTransform(transform: Transform): ColorTransform {
	const { colorTransform } = transform;
	if (colorTransform) {
		return {
			alphaMultiplier: colorTransform.alphaMultiplier ?? 1,
			redMultiplier: colorTransform.redMultiplier ?? 1,
			greenMultiplier: colorTransform.greenMultiplier ?? 1,
			blueMultiplier: colorTransform.blueMultiplier ?? 1,

			alphaOffset: colorTransform.alphaOffset ?? 0,
			redOffset: colorTransform.redOffset ?? 0,
			greenOffset: colorTransform.greenOffset ?? 0,
			blueOffset: colorTransform.blueOffset ?? 0,
		};
	}

	const { tint } = transform;
	if (tint) {
		const { color = 0, value = 1 } = tint;

		const valueInverted = 1 - value;

		const r = (color >> 16) & 0xff;
		const g = (color >> 8) & 0xff;
		const b = color & 0xff;

		return {
			alphaMultiplier: transform.alpha ?? 1,
			redMultiplier: valueInverted,
			greenMultiplier: valueInverted,
			blueMultiplier: valueInverted,

			alphaOffset: 0,
			redOffset: r * value,
			greenOffset: g * value,
			blueOffset: b * value,
		};
	}

	return {
		alphaMultiplier: transform.alpha ?? 1,
		redMultiplier: 1,
		greenMultiplier: 1,
		blueMultiplier: 1,

		alphaOffset: 0,
		redOffset: 0,
		greenOffset: 0,
		blueOffset: 0,
	};
}
