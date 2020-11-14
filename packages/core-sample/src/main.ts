import { Container } from '@e2d/core';
import unit from './unit';

interface Main extends Container {
	start(): void;
}

export default function main(): Main {
	function onHeaderClick() {

	}

	return {
		type: 'container',
		children: [
			unit({ title: 'test', onClick: onHeaderClick }),
		],
		start() {
			// eslint-disable-next-line no-console
			console.log('start');
		},
	};
}
