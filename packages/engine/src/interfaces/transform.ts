import { ColorTransform, Matrix } from '@e2d/geom';

export interface TintColor {
	color?: number;
	value?: number;
}

export interface Transform {
	x?: number;
	y?: number;
	scale?: number;
	scaleX?: number;
	scaleY?: number;
	rotation?: number;
	matrix?: Matrix;
	alpha?: number;
	tint?: TintColor,
	colorTransform?: ColorTransform;
}

export namespace Transform {
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
		const scaleX = transform.scaleX ?? transform.scale ?? 1;
		const scaleY = transform.scaleY ?? transform.scale ?? 1;
		const tx = transform.x ?? 0;
		const ty = transform.y ?? 0;

		if (rotation) {
			const cos = Math.cos(rotation);
			const sin = Math.sin(rotation);

			return {
				a: cos * scaleX,
				b: sin * scaleX,
				c: -sin * scaleY,
				d: cos * scaleY,
				tx,
				ty,
			};
		}

		return {
			a: scaleX,
			b: 0,
			c: 0,
			d: scaleY,
			tx,
			ty,
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
}
