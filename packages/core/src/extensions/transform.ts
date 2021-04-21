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
	brightness?: number,
	colorTransform?: ColorTransform;
}

export namespace Transform {
	export function getMatrix(transform: Transform, result: Matrix) {
		const { matrix } = transform;
		if (matrix) {
			result.a = matrix.a ?? 1;
			result.b = matrix.b ?? 0;
			result.c = matrix.c ?? 0;
			result.d = matrix.d ?? 1;
			result.tx = matrix.tx ?? 0;
			result.ty = matrix.ty ?? 0;
			return;
		}

		const { rotation } = transform;
		const scaleX = transform.scaleX ?? transform.scale ?? 1;
		const scaleY = transform.scaleY ?? transform.scale ?? 1;

		result.tx = transform.x ?? 0;
		result.ty = transform.y ?? 0;

		if (rotation) {
			const cos = Math.cos(rotation);
			const sin = Math.sin(rotation);

			result.a = cos * scaleX;
			result.b = sin * scaleX;
			result.c = -sin * scaleY;
			result.d = cos * scaleY;
			return;
		}

		result.a = scaleX;
		result.b = 0;
		result.c = 0;
		result.d = scaleY;
	}

	export function getColorTransform(transform: Transform, result: ColorTransform) {
		const { colorTransform } = transform;
		if (colorTransform) {
			result.alphaMultiplier = colorTransform.alphaMultiplier ?? 1;
			result.redMultiplier = colorTransform.redMultiplier ?? 1;
			result.greenMultiplier = colorTransform.greenMultiplier ?? 1;
			result.blueMultiplier = colorTransform.blueMultiplier ?? 1;

			result.alphaOffset = colorTransform.alphaOffset ?? 0;
			result.redOffset = colorTransform.redOffset ?? 0;
			result.greenOffset = colorTransform.greenOffset ?? 0;
			result.blueOffset = colorTransform.blueOffset ?? 0;
			return;
		}

		const alpha = transform.alpha ?? 1;

		const { tint } = transform;
		if (tint) {
			const { color = 0, value = 1 } = tint;

			const valueInverted = 1 - value;

			const r = (color >> 16) & 0xff;
			const g = (color >> 8) & 0xff;
			const b = color & 0xff;

			result.alphaMultiplier = alpha;
			result.redMultiplier = valueInverted;
			result.greenMultiplier = valueInverted;
			result.blueMultiplier = valueInverted;

			result.alphaOffset = 0;
			result.redOffset = r * value;
			result.greenOffset = g * value;
			result.blueOffset = b * value;
			return;
		}

		let { brightness } = transform;
		if (brightness !== undefined) {
			if (brightness > 1) {
				brightness = 1;
			} else if (brightness < -1) {
				brightness = -1;
			}

			const percent: number = 1 - Math.abs(brightness);
			let offset: number = 0;
			if (brightness > 0) {
				offset = brightness * 255;
			}

			result.alphaMultiplier = alpha;
			result.redMultiplier = percent;
			result.greenMultiplier = percent;
			result.blueMultiplier = percent;

			result.alphaOffset = 0;
			result.redOffset = offset;
			result.greenOffset = offset;
			result.blueOffset = offset;
			return;
		}

		result.alphaMultiplier = alpha;
		result.redMultiplier = 1;
		result.greenMultiplier = 1;
		result.blueMultiplier = 1;

		result.alphaOffset = 0;
		result.redOffset = 0;
		result.greenOffset = 0;
		result.blueOffset = 0;
	}
}
