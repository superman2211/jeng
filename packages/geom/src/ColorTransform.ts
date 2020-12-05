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

export function concatColorTransform(ct1: ColorTransform, ct0: ColorTransform): ColorTransform {
	return {
		alphaMultiplier: ct1.alphaMultiplier * ct0.alphaMultiplier,
		redMultiplier: ct1.redMultiplier * ct0.redMultiplier,
		greenMultiplier: ct1.greenMultiplier * ct0.greenMultiplier,
		blueMultiplier: ct1.blueMultiplier * ct0.blueMultiplier,

		alphaOffset: ct1.alphaMultiplier * ct0.alphaOffset + ct0.alphaOffset,
		redOffset: ct1.redMultiplier * ct0.redOffset + ct0.redOffset,
		greenOffset: ct1.greenMultiplier * ct0.greenOffset + ct0.greenOffset,
		blueOffset: ct1.blueMultiplier * ct0.blueOffset + ct0.blueOffset,
	};
}

export function isDefault(ct: ColorTransform): boolean {
	return ct.redMultiplier === 1
		&& ct.greenMultiplier === 1
		&& ct.blueMultiplier === 1
		&& ct.alphaMultiplier === 1
		&& ct.redOffset === 0
		&& ct.greenOffset === 0
		&& ct.blueOffset === 0
		&& ct.alphaOffset === 0;
}
