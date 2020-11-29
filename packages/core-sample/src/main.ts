import {
	CONTAINER, CONTAINER_ALIGNED, IMAGE,
	Container, Image,
} from '@e2d/core';
import { LOGO } from './assets';
import recursive from './recursive';
import unit from './unit';

interface Main {
	start(): void;
	[key: string]: any;
}

function getImages(count: number): Container[] {
	const image: Image = {
		type: IMAGE,
		src: LOGO,
		scaleX: 0.2,
		scaleY: 0.3,
	};

	return new Array<Image>(count)
		.fill(image, 0, count)
		.map(() => ({ type: CONTAINER, children: [image] }));
}

export default function main(): Main {
	function onHeaderClick() {

	}

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
				children: getImages(10),
			},
			{
				type: CONTAINER,
				x: 200,
				y: 200,
				children: [recursive()],
			},
		],
		start() {
			// eslint-disable-next-line no-console
			console.log('start');
		},
	};
}
