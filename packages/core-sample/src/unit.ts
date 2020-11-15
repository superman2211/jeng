import {
	Text, Image, Container, Transform,
} from '@e2d/core';

interface Header extends Container, Transform {
}

interface HeaderProperties {
	title: string,
	onClick: () => void;
}

export default function unit(props: HeaderProperties): Header {
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
			} as Text,
			{
				type: 'image',
				src: 'logo.png',
				x: 0,
				y: 0,
				scaleX: 2,
				alpha: 0.5,
			} as Image,
			{
				type: 'container',
				children: [
					{
						type: 'image',
						src: 'logo.png',
						x: 20,
						y: 30,
						scaleX: 0.5,
						scaleY: 0.5,
						rotation: 0.3,
					} as Image,
				],
			} as Container,
		],
	};
}
