export enum CapsStyle {
	BUTT = 'butt',
	ROUND = 'round',
	SQUARE = 'square'
}

export enum JointStyle {
	BEVEL = 'bevel',
	MITER = 'miter',
	ROUND = 'round',
}

export enum GraphicsPathWinding {
	EVEN_ODD = 'evenOdd',
	NON_ZERO = 'nonZero'
}

export enum GraphicsPathCommand {
	NO_OP = 0,
	MOVE_TO = 1,
	LINE_TO = 2,
	CURVE_TO = 3,
	WIDE_MOVE_TO = 4,
	WIDE_LINE_TO = 5,
	CUBIC_CURVE_TO = 6,
}

export enum GradientType {
	LINEAR = 'linear',
	RADIAL = 'radial',
}

export enum InterpolationMethod {
	LINEAR_RGB = 'linearRgb',
	RGB = 'rgb',
}

export enum SpreadMethod {
	PAD = 'pad',
	REFLECT = 'reflect',
	REPEAT = 'repeat',
}

export enum LineScaleMode {
	NORMAL = 'normal',
	NONE = 'none',
	VERTICAL = 'vertical',
	HORIZONTAL = 'horizontal',
}

export enum TriangleCulling {
	NEGATIVE = 'negative',
	NONE = 'none',
	POSITIVE = 'positive',
}
