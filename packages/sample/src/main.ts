import { SAMPLE } from './assets';
import recursive from './recursive';
import unit from './unit';

interface Main {
	start(): void;
	[key: string]: any;
}

export default function main(): Main {
	function onHeaderClick() {

	}

	return {
		type: 'container',
		children: [
			unit({ title: 'test', onClick: onHeaderClick }),
			{
				type: 'container',
				x: 200,
				y: 200,
				children: [recursive()],
			},
			{
				type: 'image',
				y: 400,
				scaleX: 0.2,
				scaleY: 0.2,
				src: 'test.canvas',
			},
			{
				type: 'image',
				x: 100,
				y: 400,
				rotation: -0.1,
				scaleX: 0.2,
				scaleY: 0.2,
				src: SAMPLE,
			},
		],
		start() {
			// eslint-disable-next-line no-console
			console.log('start');
		},
	};
}
