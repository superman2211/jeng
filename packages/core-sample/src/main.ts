import {
	CONTAINER, CONTAINER_ALIGNED, IMAGE,
	Container, Image,
} from '@e2d/core';
import unit from './unit';

interface Main extends Container {
	start(): void;
}

export default function main(): Main {
	function onHeaderClick() {

	}

	const image: Image = {
		type: IMAGE,
		src: 'logo.png',
		scaleX: 0.2,
		scaleY: 0.3,
	};

	return {
		type: CONTAINER,
		children: [
			unit({ title: 'test', onClick: onHeaderClick }),
			{
				type: CONTAINER_ALIGNED,
				y: 200,
				alpha: 0.3,
				stepX: 20,
				stepY: 30,
				stepRotation: 0.1,
				children: Array<Image>(10).fill(image, 0, 10).map(() => ({ type: CONTAINER, children: [image] })),
			},
		],
		start() {
			// eslint-disable-next-line no-console
			console.log('start');
		},
	};
}
