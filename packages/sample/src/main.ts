/* eslint-disable no-console */
import {
	ABILITY_FOX, ABILITY_WOLF, ANIMALIST, ARCHER, BACKGROUND,
} from './assets';
import artifact from './artifact';
import { unit, UnitProperties } from './unit';

interface Main {
	start(): void;
	[key: string]: any;
}

export default function main(): Main {
	function onUnitClick(data: UnitProperties) {
		console.log('onUnitClick', data.title);
	}

	return {
		type: 'container',
		children: {
			background: {
				type: 'image',
				src: BACKGROUND,
				scaleX: 1,
				scaleY: 1,
			},
			units: {
				type: 'container',
				children: [
					unit({ title: 'Archer!\nHealth: 100%', image: ARCHER, onClick: onUnitClick }),
					unit({ title: 'Animalist!\nHealth: 100%', image: ANIMALIST, onClick: onUnitClick }),
				],
			},
			artifact: {
				type: 'container',
				x: 300,
				y: 350,
				children: [artifact()],
			},
			map: {
				type: 'image',
				y: 450,
				scaleX: 0.2,
				scaleY: 0.2,
				alpha: 0.8,
				src: 'test.canvas',
			},
			abilityFox: {
				type: 'image',
				src: ABILITY_FOX,
				x: 450,
				y: 500,
				scale: 0.5,
				tint: {
					color: 0x00ff00,
					value: 1,
				},
				onUpdate(time: number) {
					this.tint.value += time;
					if (this.tint.value >= 1) {
						this.tint.value = 0;
					}
				},
				onPointerDown(e: any) {
					console.log('fox', e);
				},
			},
			abilityWolf: {
				type: 'container',
				x: 350,
				y: 400,
				child: {
					type: 'image',
					src: ABILITY_WOLF,
					scale: 0.5,
					alpha: 1,
					tween: {
						loop: true,
						phases: [
							{
								time: 1,
								to: { x: 200 },
							},
							{
								easing: 'cubicout',
								time: 1,
								to: { y: 200, alpha: 0.5 },
							},
							{
								easing: 'quadraticIn',
								time: 1,
								to: { x: 0, alpha: 1 },
							},
							{
								easing: 'quadraticOut',
								time: 1,
								to: { y: 0 },
							},
						],
					},
				},
			},
		},
		start() {
			console.log('start');
		},
	};
}
