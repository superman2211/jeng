import { Container } from '@e2d/core';
import header from './header';

interface Main extends Container {
	start(): void;
	update(): void;
}

export default function main(): Main {
	function onHeaderClick() {

	}

	return {
		type: 'container',
		children: [
			header({ title: 'test', onClick: onHeaderClick }),
		],
		start() {
			// eslint-disable-next-line no-console
			console.log('start');
		},
		update() {
			const temp = (this.children as any)[0] as any;
			temp.update();
		},
	};
}
