/* eslint-disable no-restricted-properties */
/* eslint-disable no-return-assign */
/* eslint-disable no-cond-assign */

export const LINEAR = 'linear';
export const QUADRATIC = 'quadratic';
export const QUADRATIC_IN = 'quadraticin';
export const QUADRATIC_OUT = 'quadraticout';
export const CUBIC = 'cubic';
export const CUBIC_IN = 'cubicin';
export const CUBIC_OUT = 'cubicout';
export const QUARTIC = 'quartic';
export const QUARTIC_IN = 'quarticin';
export const QUARTIC_OUT = 'quarticout';
export const QUINTIC = 'quintic';
export const QUINTIC_IN = 'quinticin';
export const QUINTIC_OUT = 'quinticout';
export const SINUSOIDAL = 'quintic';
export const SINUSOIDAL_IN = 'quinticin';
export const SINUSOIDAL_OUT = 'quinticout';
export const EXPONENTIAL = 'exponential';
export const EXPONENTIAL_IN = 'exponentialin';
export const EXPONENTIAL_OUT = 'exponentialout';
export const CIRCULAR = 'circular';
export const CIRCULAR_IN = 'circularin';
export const CIRCULAR_OUT = 'circularout';
export const ELASTIC = 'elastic';
export const ELASTIC_IN = 'elasticin';
export const ELASTIC_OUT = 'elasticout';
export const BACK = 'back';
export const BACK_IN = 'backin';
export const BACK_OUT = 'backout';
export const BOUNCE = 'bounce';
export const BOUNCE_IN = 'bouncein';
export const BOUNCE_OUT = 'bounceout';

export const easing = {
	[LINEAR]: (value: number): number => value,

	[QUADRATIC]: (value: number): number => {
		if ((value *= 2) < 1) {
			return 0.5 * value * value;
		}
		return -0.5 * (--value * (value - 2) - 1);
	},
	[QUADRATIC_IN]: (value: number): number => (value * value),
	[QUADRATIC_OUT]: (value: number): number => (value * (2 - value)),

	[CUBIC]: (value: number): number => {
		if ((value *= 2) < 1) {
			return 0.5 * value * value * value;
		}
		return 0.5 * ((value -= 2) * value * value + 2);
	},
	[CUBIC_IN]: (value: number): number => (value * value * value),
	[CUBIC_OUT]: (value: number): number => (--value * value * value + 1),

	[QUARTIC]: (value: number): number => {
		if ((value *= 2) < 1) {
			return 0.5 * value * value * value * value;
		}
		return -0.5 * ((value -= 2) * value * value * value - 2);
	},
	[QUARTIC_IN]: (value: number): number => (value * value * value * value),
	[QUARTIC_OUT]: (value: number): number => (1 - --value * value * value * value),

	[QUINTIC]: (value: number): number => {
		if ((value *= 2) < 1) {
			return 0.5 * value * value * value * value * value;
		}
		return 0.5 * ((value -= 2) * value * value * value * value + 2);
	},
	[QUINTIC_IN]: (value: number): number => (value * value * value * value * value),
	[QUINTIC_OUT]: (value: number): number => (--value * value * value * value * value + 1),

	[SINUSOIDAL]: (value: number): number => (0.5 * (1 - Math.cos(Math.PI * value))),
	[SINUSOIDAL_IN]: (value: number): number => (1 - Math.cos((value * Math.PI) / 2)),
	[SINUSOIDAL_OUT]: (value: number): number => (Math.sin((value * Math.PI) / 2)),

	[EXPONENTIAL]: (value: number): number => {
		if (value === 0) {
			return 0;
		}
		if (value === 1) {
			return 1;
		}
		if ((value *= 2) < 1) {
			return 0.5 * Math.pow(1024, value - 1);
		}
		return 0.5 * (-Math.pow(2, -10 * (value - 1)) + 2);
	},
	[EXPONENTIAL_IN]: (value: number): number => (value === 0 ? 0 : Math.pow(1024, value - 1)),
	[EXPONENTIAL_OUT]: (value: number): number => (value === 1 ? 1 : 1 - Math.pow(2, -10 * value)),

	[CIRCULAR]: (value: number): number => {
		if ((value *= 2) < 1) {
			return -0.5 * (Math.sqrt(1 - value * value) - 1);
		}
		return 0.5 * (Math.sqrt(1 - (value -= 2) * value) + 1);
	},
	[CIRCULAR_IN]: (value: number): number => (1 - Math.sqrt(1 - value * value)),
	[CIRCULAR_OUT]: (value: number): number => Math.sqrt(1 - --value * value),

	[ELASTIC]: (value: number): number => {
		if (value === 0) {
			return 0;
		}
		if (value === 1) {
			return 1;
		}
		value *= 2;
		if (value < 1) {
			return -0.5 * Math.pow(2, 10 * (value - 1)) * Math.sin((value - 1.1) * 5 * Math.PI);
		}
		return 0.5 * Math.pow(2, -10 * (value - 1)) * Math.sin((value - 1.1) * 5 * Math.PI) + 1;
	},
	[ELASTIC_IN]: (value: number): number => {
		if (value === 0) {
			return 0;
		}
		if (value === 1) {
			return 1;
		}
		return -Math.pow(2, 10 * (value - 1)) * Math.sin((value - 1.1) * 5 * Math.PI);
	},
	[ELASTIC_OUT]: (value: number): number => {
		if (value === 0) {
			return 0;
		}
		if (value === 1) {
			return 1;
		}
		return Math.pow(2, -10 * value) * Math.sin((value - 0.1) * 5 * Math.PI) + 1;
	},

	[BACK]: (value: number): number => {
		const s = 1.70158 * 1.525;
		if ((value *= 2) < 1) {
			return 0.5 * (value * value * ((s + 1) * value - s));
		}
		return 0.5 * ((value -= 2) * value * ((s + 1) * value + s) + 2);
	},
	[BACK_IN]: (value: number): number => {
		const s = 1.70158;
		return value * value * ((s + 1) * value - s);
	},
	[BACK_OUT]: (value: number): number => {
		const s = 1.70158;
		return --value * value * ((s + 1) * value + s) + 1;
	},

	[BOUNCE]: (value: number): number => {
		if (value < 0.5) {
			return easing[BOUNCE_IN](value * 2) * 0.5;
		}
		return easing[BOUNCE_OUT](value * 2 - 1) * 0.5 + 0.5;
	},
	[BOUNCE_IN]: (value: number): number => (1 - easing[BOUNCE_OUT](1 - value)),
	[BOUNCE_OUT]: (value: number): number => {
		if (value < 1 / 2.75) {
			return 7.5625 * value * value;
		}
		if (value < 2 / 2.75) {
			return 7.5625 * (value -= 1.5 / 2.75) * value + 0.75;
		}
		if (value < 2.5 / 2.75) {
			return 7.5625 * (value -= 2.25 / 2.75) * value + 0.9375;
		}
		return 7.5625 * (value -= 2.625 / 2.75) * value + 0.984375;
	},
};
