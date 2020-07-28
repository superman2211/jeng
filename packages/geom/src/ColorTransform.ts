export default class ColorTransform {
	redMultiplier: number;
	greenMultiplier: number;
	blueMultiplier: number;
	alphaMultiplier: number;

	redOffset: number;
	greenOffset: number;
	blueOffset: number;
	alphaOffset: number;

	constructor(redMultiplier: number = 1, greenMultiplier: number = 1, blueMultiplier: number = 1, alphaMultiplier: number = 1, redOffset: number = 0, greenOffset: number = 0, blueOffset: number = 0, alphaOffset: number = 0) {
		this.redMultiplier = redMultiplier;
		this.greenMultiplier = greenMultiplier;
		this.blueMultiplier = blueMultiplier;
		this.alphaMultiplier = alphaMultiplier;

		this.redOffset = redOffset;
		this.greenOffset = greenOffset;
		this.blueOffset = blueOffset;
		this.alphaOffset = alphaOffset;
	}

	get color(): number {
		return (this.redOffset << 16) | (this.greenOffset << 8) | this.blueOffset;
	}

	set color(value: number) {
		this.redOffset = (value >> 16) & 0xff;
		this.greenOffset = (value >> 8) & 0xff;
		this.blueOffset = value & 0xff;

		this.redMultiplier = 0;
		this.greenMultiplier = 0;
		this.blueMultiplier = 0;
	}

	toString(): string {
		return `{ redMultiplier: ${this.redMultiplier}, greenMultiplier: ${this.greenMultiplier}, blueMultiplier: ${this.blueMultiplier}, alphaMultiplier: ${this.alphaMultiplier}, redOffset: ${this.redOffset}, greenOffset: ${this.greenOffset}, blueOffset: ${this.blueOffset}, alphaOffset: ${this.alphaOffset} }`;
	}

	clone(): ColorTransform {
		return new ColorTransform(
			this.redMultiplier,
			this.greenMultiplier,
			this.blueMultiplier,
			this.alphaMultiplier,

			this.redOffset,
			this.greenOffset,
			this.blueOffset,
			this.alphaOffset,
		);
	}

	concat(ct: ColorTransform) {
		this.redMultiplier *= ct.redMultiplier;
		this.greenMultiplier *= ct.greenMultiplier;
		this.blueMultiplier *= ct.blueMultiplier;
		this.alphaMultiplier *= ct.alphaMultiplier;

		this.redOffset = ct.redMultiplier * this.redOffset + ct.redOffset;
		this.greenOffset = ct.greenMultiplier * this.greenOffset + ct.greenOffset;
		this.blueOffset = ct.blueMultiplier * this.blueOffset + ct.blueOffset;
		this.alphaOffset = ct.alphaMultiplier * this.alphaOffset + ct.alphaOffset;
	}

	copyFrom(ct: ColorTransform) {
		this.redMultiplier = ct.redMultiplier;
		this.greenMultiplier = ct.greenMultiplier;
		this.blueMultiplier = ct.blueMultiplier;
		this.alphaMultiplier = ct.alphaMultiplier;

		this.redOffset = ct.redOffset;
		this.greenOffset = ct.greenOffset;
		this.blueOffset = ct.blueOffset;
		this.alphaOffset = ct.alphaOffset;
	}

	combine(ct: ColorTransform) {
		this.redMultiplier *= ct.redMultiplier;
		this.greenMultiplier *= ct.greenMultiplier;
		this.blueMultiplier *= ct.blueMultiplier;
		this.alphaMultiplier *= ct.alphaMultiplier;

		this.redOffset += ct.redOffset;
		this.greenOffset += ct.greenOffset;
		this.blueOffset += ct.blueOffset;
		this.alphaOffset += ct.alphaOffset;
	}

	identity() {
		this.redMultiplier = 1;
		this.greenMultiplier = 1;
		this.blueMultiplier = 1;
		this.alphaMultiplier = 1;

		this.redOffset = 0;
		this.greenOffset = 0;
		this.blueOffset = 0;
		this.alphaOffset = 0;
	}

	equals(ct: ColorTransform, skipAlphaMultiplier: boolean = false): boolean {
		return ct != null
			&& this.redMultiplier === ct.redMultiplier
			&& this.greenMultiplier === ct.greenMultiplier
			&& this.blueMultiplier === ct.blueMultiplier
			&& (skipAlphaMultiplier || this.alphaMultiplier === ct.alphaMultiplier)
			&& this.redOffset === ct.redOffset
			&& this.greenOffset === ct.greenOffset
			&& this.blueOffset === ct.blueOffset
			&& this.alphaOffset === ct.alphaOffset;
	}

	isDefault(): boolean {
		return this.redMultiplier === 1
			&& this.greenMultiplier === 1
			&& this.blueMultiplier === 1
			&& this.alphaMultiplier === 1
			&& this.redOffset === 0
			&& this.greenOffset === 0
			&& this.blueOffset === 0
			&& this.alphaOffset === 0;
	}
}
