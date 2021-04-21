import { Component, Engine } from '@jeng/core';
import { easing, LINEAR } from './easing';

export const TWEEN = 'tween';

export interface TweenState {
	[key: string]: number;
}

export interface TweenPhase {
	offset?: number;
	time: number;
	easing?: string;
	from?: TweenState;
	to: TweenState;
	values?: number[];
	onStart?: () => void;
	onFinish?: () => void;
}

export interface Tween {
	[TWEEN]: {
		time?: number;
		loop?: boolean;
		phases: TweenPhase[];
	}
}

export namespace TweenExtension {
	export function update(component: Component, engine: Engine) {
		const { tween } = component as any as Tween;
		const { phases } = tween;

		if (!phases?.length) {
			engine.debug.warning('Animation parts not found');
			return;
		}

		if (tween.time === undefined) {
			tween.time = 0;
		}
		tween.time += engine.updater.time;
		const { time } = tween;

		let offset: number = 0;

		phases.forEach((phase) => {
			if (!phase.time) {
				engine.debug.warning('Animation time not set');
				return;
			}

			if (phase.offset !== undefined) {
				offset = phase.offset;
			}

			const easingName = phase?.easing?.toLowerCase() ?? LINEAR;
			const easingMethod = (easing as any)[easingName];
			if (!easingMethod) {
				engine.debug.warning(`Unknown easing type: ${easing}`);
				return;
			}

			const value = (time - offset) / phase.time;

			offset += phase.time;

			if (value < 0 || value > 1) {
				return;
			}
			const easingValue = easingMethod(value);

			if (!phase.to) {
				engine.debug.warning('Animation "to" state not found');
				return;
			}

			if (!phase.from) {
				phase.from = {};
			}

			const { to, from } = phase;
			const state = component as any as TweenState;

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

		if (tween.loop && tween.time > offset) {
			tween.time = 0;
		}
	}

	export function init(engine: Engine) {
		engine.components.properties.set(TWEEN, update);
	}
}
