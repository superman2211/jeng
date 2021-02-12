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
			figure: {
				type: 'shape',
				data: {
					type: 'rect',
					x: 0,
					y: 0,
					width: 100,
					height: 100,
					fill: 0xff00ff,
					stroke: {
						thickness: 2,
						fill: 0x00ff00,
					},
				},
			},
			shapes: {
				type: 'shape',
				data: [
					{
						type: 'circle',
						x: 100,
						y: 100,
						radius: 50,
						fill: { type: 'solid', color: 0xffff00, alpha: 0.5 },
					},
					{
						type: 'path',
						data: 'M 10 10 H 90 V 90 H 10 Z',
						fill: 0xff00ff,
					},
					{
						type: 'path',
						data: [
							{ type: 'moveTo', x: 0, y: 0 },
							{ type: 'lineTo', x: 100, y: 0 },
							{ type: 'lineTo', x: 100, y: 100 },
							{ type: 'lineTo', x: 0, y: 100 },
							{ type: 'lineTo', x: 0, y: 0 },
						],
						fill: 0xff00ff,
						stroke: 0x000000,
					},
				],
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
				alpha: 0.5,
				src: 'test.canvas',
				onPointerOver() {
					this.alpha = 1;
				},
				onPointerOut() {
					this.alpha = 0.5;
				},
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
