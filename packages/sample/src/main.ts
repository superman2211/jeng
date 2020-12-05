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
		children: {
			unit: unit({ title: 'test', onClick: onHeaderClick }),
			recursiveObject: {
				type: 'container',
				x: 200,
				y: 200,
				children: [recursive()],
			},
			displayCanvas: {
				type: 'image',
				y: 400,
				scaleX: 0.2,
				scaleY: 0.2,
				src: 'test.canvas',
			},
			pngSample: {
				type: 'image',
				x: 100,
				y: 400,
				scaleX: 0.2,
				scaleY: 0.2,
				src: SAMPLE,
			},
			tintSample: {
				type: 'image',
				x: 200,
				y: 400,
				scaleX: 0.2,
				scaleY: 0.2,
				tint: {
					color: 0xff0000,
					value: 1,
				},
				onUpdate(time: number) {
					this.tint.value += time;
					if (this.tint.value >= 1) {
						this.tint.value = 0;
					}
				},
				src: SAMPLE,
			},
		},
		start() {
			// eslint-disable-next-line no-console
			console.log('start');
		},
	};
}
