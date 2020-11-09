import { Text } from '../src/extensions/Text';
import { Image } from '../src/extensions/Image';
import { Container } from '../src/core/Container';
import { Transform } from '../src/enigne2d/Transform';

interface Header extends Container, Transform {

}

interface HeaderProperties {
	title: string,
	onClick: () => void;
}

export default function header(props: HeaderProperties): Header {
	return {
		type: 'container',
		x: 100,
		y: 200,
		children: [
			{
				type: 'text',
				text: props.title,
				onClick: props.onClick,
				x: 10,
				y: 20,
				scaleX: 2,
			} as Text,
			{
				type: 'image',
				src: 'logo.png',
				x: 1,
				y: 2,
				rotation: 0.1,
			} as Image,
		],
	};
}
