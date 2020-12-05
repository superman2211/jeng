import { Context } from '../engine/Context';

export const ANIMATION = 'animation';

export const LINEAR = 'linear';
export const QUADRATIC = 'quadratic';
export const QUADRATIC_IN = 'quadraticIn';
export const QUADRATIC_OUT = 'quadraticOut';

const easing = {
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

export interface AnimationPart {
	offset?: number;
	time: number;
	easing?: LINEAR | QUADRATIC;
	from?: { [key: string]: number | string };
	to: { [key: string]: number | string };
	onStart?: () => void;
	onFinish?: () => void;
}

export interface Animation {
	animation: {
		time?: number;
		parts: AnimationPart[];
	}
}

export function updateAnimation(entity: Animation, context: Context) {
	const { animation } = entity;
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

		offset += part.time;
	}
}
