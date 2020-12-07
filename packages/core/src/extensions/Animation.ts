/* eslint-disable no-return-assign */
/* eslint-disable no-cond-assign */
/* eslint-disable no-console */
import { Entity } from '../components/Entity';
import { Context } from '../engine/Context';

export const ANIMATION = 'animation';

export const LINEAR = 'linear';
export const QUADRATIC = 'quadratic';
export const QUADRATIC_IN = 'quadraticin';
export const QUADRATIC_OUT = 'quadraticout';
export const CUBIC = 'cubic';
export const CUBIC_IN = 'cubicin';
export const CUBIC_OUT = 'cubicout';
export const QUARTIC = 'quartic';
export const QUARTIC_IN = 'quarticIn';
export const QUARTIC_OUT = 'quarticOut';
export const QUINTIC = 'quintic';
export const QUINTIC_IN = 'quinticIn';
export const QUINTIC_OUT = 'quinticOut';

const easingTable: any = {
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

	[QUINTIC]: (amount: number): number => {
		if ((amount *= 2) < 1) {
			return 0.5 * amount * amount * amount * amount * amount;
		}
		return 0.5 * ((amount -= 2) * amount * amount * amount * amount + 2);
	},
	[QUINTIC_IN]: (amount: number): number => (amount * amount * amount * amount * amount),
	[QUINTIC_OUT]: (amount: number): number => (--amount * amount * amount * amount * amount + 1),
};

export interface AnimationState {
	[key: string]: number | string;
}

export interface AnimationPart {
	offset?: number;
	time: number;
	easing?: typeof LINEAR | typeof QUADRATIC;
	from?: AnimationState;
	to: AnimationState;
	values?: number[] | string[];
	onStart?: () => void;
	onFinish?: () => void;
}

export interface Animation {
	[ANIMATION]: {
		time?: number;
		loop?: boolean;
		parts: AnimationPart[];
	}
}

export function updateAnimation(entity: Entity, context: Context) {
	const { animation } = entity as any as Animation;
	const { parts } = animation;

	if (!parts?.length) {
		console.warn('Animation parts not found');
		return;
	}

	if (animation.time === undefined) {
		animation.time = 0;
	}
	animation.time += context.time;
	const { time } = animation;

	let offset: number = 0;

	parts.forEach((part) => {
		if (!part.time) {
			console.warn('Animation time not set');
			return;
		}

		if (part.offset !== undefined) {
			offset = part.offset;
		}

		const easing = part?.easing?.toLowerCase() ?? LINEAR;
		const easingMethod = easingTable[easing];
		if (!easingMethod) {
			console.warn(`Unknown easing type: ${easing}`);
			return;
		}

		const value = (time - offset) / part.time;

		offset += part.time;

		if (value < 0 || value > 1) {
			return;
		}
		const easingValue = easingMethod(value);

		if (!part.to) {
			console.warn('Animation "to" state not found');
			return;
		}

		if (!part.from) {
			part.from = {};
		}

		const { to, from } = part;
		const state = entity as any as AnimationState;

		Object.keys(to).forEach((key) => {
			if (from[key] === undefined) {
				from[key] = state[key] ?? 0;
			}
			const fromValue = from[key];
			const toValue = to[key];
			if (typeof fromValue === 'number' && typeof toValue === 'number') {
				const stateValue = fromValue + easingValue * (toValue - fromValue);
				state[key] = stateValue;
			}
		});
	});

	if (animation.loop && animation.time > offset) {
		animation.time = 0;
	}
}
