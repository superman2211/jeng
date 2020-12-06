/* eslint-disable no-console */
/* eslint-disable no-continue */
import { Entity } from '../components/Entity';
import { Context } from '../engine/Context';

export const ANIMATION = 'animation';

export const LINEAR = 'linear';
export const QUADRATIC = 'quadratic';
export const QUADRATIC_IN = 'quadraticIn';
export const QUADRATIC_OUT = 'quadraticOut';

const easingTable: any = {
	[LINEAR]: (value: number): number => value,
	[QUADRATIC]: (value: number): number => {
		// eslint-disable-next-line no-cond-assign
		if ((value *= 2) < 1) {
			return 0.5 * value * value;
		}
		return -0.5 * (--value * (value - 2) - 1);
	},
	[QUADRATIC_IN]: (value: number): number => (value * value),
	[QUADRATIC_OUT]: (value: number): number => (value * (2 - value)),
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
		// eslint-disable-next-line no-console
		console.warn('Animation keys not found');
		return;
	}

	if (animation.time === undefined) {
		animation.time = 0;
	}
	animation.time += context.time;

	let offset: number = 0;

	for (let i = 0; i < parts.length; i++) {
		const part = parts[i];

		if (!part.time) {
			console.warn('Animation time not set');
			continue;
		}

		if (part.offset !== undefined) {
			offset = part.offset;
		}

		const easing = part.easing ?? LINEAR;
		const easingMethod = easingTable[easing];
		if (!easingMethod) {
			console.warn(`Unknown easing type: ${easing}`);
			continue;
		}

		const value = (animation.time - offset) / part.time;
		if (value < 0 || value > 1) {
			continue;
		}
		const easingValue = easingMethod(value);

		if (!part.to) {
			console.warn('Animation "to" state not found');
			continue;
		}

		if (!part.from) {
			part.from = {};
		}

		const { to, from } = part;
		const state = entity as any as AnimationState;

		const keys = Object.keys(to);
		for (let j = 0; j < keys.length; j++) {
			const key = keys[i];
			if (from[key] === undefined) {
				from[key] = state[key] ?? 0;
			}
			const fromValue = from[key];
			const toValue = to[key];
			if (typeof fromValue === 'number' && typeof toValue === 'number') {
				const stateValue = fromValue + easingValue * (toValue - fromValue);
				state[key] = stateValue;
			}
		}

		offset += part.time;
	}
}
