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

export function concat(ct0: ColorTransform, ct1: ColorTransform) {
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
