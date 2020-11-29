import {
	CONTAINER, TEXT, IMAGE,
} from '@e2d/core';
import { LOGO } from './assets';

interface Unit {
	[key: string]: any;
}

interface UnitProperties {
	title: string,
	onClick: () => void;
}

export default function unit(props: UnitProperties): Unit {
	return {
		type: CONTAINER,
		x: 100,
		y: 50,
		rotation: 0.2,
		children: [
			{
				type: TEXT,
				text: props.title,
				fontSize: 50,
				color: 0xff0000,
				onClick: props.onClick,
				x: 0,
				y: 0,
				scaleX: 2,
			},
			{
				type: IMAGE,
				src: LOGO,
				x: 0,
				y: 0,
				scaleX: 2,
				alpha: 0.5,
				rotation: 0,
				onUpdate(time: number) {
					this.rotation += time;
				},
			},
			{
				type: CONTAINER,
				x: 0,
				onUpdate(time: number) {
					this.x += time * 10;
					this.children[0].y += 0.1;
				},
				children: [
					{
						type: IMAGE,
						src: LOGO,
						x: 20,
						y: 30,
						scaleX: 0.5,
						scaleY: 0.5,
						rotation: 0.3,
					},
				],
			},
		],
	};
}
