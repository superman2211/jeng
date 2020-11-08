import { Text } from '../src/extensions/Text';
import { Image } from '../src/extensions/Image';
import { Container } from '../src/core/Container';

interface Header extends Container {

}

interface HeaderProperties {
	title: string,
	onClick: () => void;
}

export default function header(props: HeaderProperties): Header {
	return {
		type: 'container',
		children: [
			{ type: 'text', text: props.title, onClick: props.onClick } as Text,
			{ type: 'image', src: 'logo.png' } as Image,
		],
	};
}
