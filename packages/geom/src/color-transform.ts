export interface ColorTransform {
	alphaMultiplier: number;
	redMultiplier: number;
	greenMultiplier: number;
	blueMultiplier: number;

	alphaOffset: number;
	redOffset: number;
	greenOffset: number;
	blueOffset: number;
}

export namespace ColorTransform {
	export function empty(): ColorTransform {
		return {
			alphaMultiplier: 1,
			redMultiplier: 1,
			greenMultiplier: 1,
			blueMultiplier: 1,

			alphaOffset: 0,
			redOffset: 0,
			greenOffset: 0,
			blueOffset: 0,
		};
	}

	export function isEmpty(ct: ColorTransform): boolean {
		return ct.redMultiplier === 1
			&& ct.greenMultiplier === 1
			&& ct.blueMultiplier === 1
			&& ct.alphaMultiplier === 1
			&& ct.redOffset === 0
			&& ct.greenOffset === 0
			&& ct.blueOffset === 0
			&& ct.alphaOffset === 0;
	}

	export function isEmptyWithAlpha(ct: ColorTransform): boolean {
		return ct.redMultiplier === 1
			&& ct.greenMultiplier === 1
			&& ct.blueMultiplier === 1
			&& ct.redOffset === 0
			&& ct.greenOffset === 0
			&& ct.blueOffset === 0
			&& ct.alphaOffset === 0;
	}

	export function setEmpty(ct: ColorTransform) {
		ct.redMultiplier = 1;
		ct.greenMultiplier = 1;
		ct.blueMultiplier = 1;
		ct.alphaMultiplier = 1;
		ct.redOffset = 0;
		ct.greenOffset = 0;
		ct.blueOffset = 0;
		ct.alphaOffset = 0;
	}

	export function copy(from: ColorTransform, to: ColorTransform) {
		to.alphaMultiplier = from.alphaMultiplier;
		to.redMultiplier = from.redMultiplier;
		to.greenMultiplier = from.greenMultiplier;
		to.blueMultiplier = from.blueMultiplier;
		to.alphaOffset = from.alphaOffset;
		to.redOffset = from.redOffset;
		to.greenOffset = from.greenOffset;
		to.blueOffset = from.blueOffset;
	}

	export function concat(ct1: ColorTransform, ct0: ColorTransform, result: ColorTransform) {
		const alphaMultiplier = ct1.alphaMultiplier * ct0.alphaMultiplier;
		const redMultiplier = ct1.redMultiplier * ct0.redMultiplier;
		const greenMultiplier = ct1.greenMultiplier * ct0.greenMultiplier;
		const blueMultiplier = ct1.blueMultiplier * ct0.blueMultiplier;
		const alphaOffset = ct1.alphaMultiplier * ct0.alphaOffset + ct1.alphaOffset;
		const redOffset = ct1.redMultiplier * ct0.redOffset + ct1.redOffset;
		const greenOffset = ct1.greenMultiplier * ct0.greenOffset + ct1.greenOffset;
		const blueOffset = ct1.blueMultiplier * ct0.blueOffset + ct1.blueOffset;

		result.alphaMultiplier = alphaMultiplier;
		result.redMultiplier = redMultiplier;
		result.greenMultiplier = greenMultiplier;
		result.blueMultiplier = blueMultiplier;
		result.alphaOffset = alphaOffset;
		result.redOffset = redOffset;
		result.greenOffset = greenOffset;
		result.blueOffset = blueOffset;
	}
}
