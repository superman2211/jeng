import {
	Container, Transform,
} from '@e2d/core';

interface Unit extends Container, Transform {
}

interface UnitProperties {
	title: string,
	onClick: () => void;
}

export default function unit(props: UnitProperties): Unit {
	return {
		type: 'container',
		x: 100,
		y: 50,
		rotation: 0.2,
		children: [
			{
				type: 'text',
				text: props.title,
				fontSize: 50,
				color: 0xff0000,
				onClick: props.onClick,
				x: 0,
				y: 0,
				scaleX: 2,
			},
			{
				type: 'image',
				src: 'logo.png',
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
				type: 'container',
				x: 0,
				onUpdate(time: number) {
					this.x += time * 10;
				},
				children: [
					{
						type: 'image',
						src: 'logo.png',
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
