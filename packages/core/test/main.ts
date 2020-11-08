import { Container } from '../src/core/Container';
import header from './header';

interface Main extends Container {
	start(): void;
}

export default function main(): Main {
	function onHeaderClick() {

	}

	return {
		type: 'container',
		children: [
			header({ title: 'test', onClick: onHeaderClick }),
		],
		start: () => {
			// eslint-disable-next-line no-console
			console.log('start');
		},
	};
}
