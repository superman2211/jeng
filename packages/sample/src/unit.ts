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
				type: 'container',
				animation: {
					loop: true,
					parts: [
						{
							time: 1,
							to: { x: 100 },
						},
						{
							easing: 'cubicout',
							time: 1,
							to: { y: 100 },
						},
						{
							easing: 'quadraticIn',
							time: 1,
							to: { x: 0 },
						},
						{
							easing: 'quadraticOut',
							time: 1,
							to: { y: 0 },
						},
					],
				},
				child: {
					type: 'image',
					src: LOGO,
					x: 20,
					y: 30,
					scaleX: 0.5,
					scaleY: 0.5,
					rotation: 0.3,
				},
			},
		],
	};
}
