import { LOGO } from './assets';

export default function recursive() {
	const container = {
		type: 'container',
		children: [{
			type: 'container',
			x: 30,
			y: 30,
			scaleX: 0.9,
			scaleY: 0.9,
			rotation: 0.1,
			alpha: 0.9,
			children: [
				{
					type: 'image',
					src: LOGO,
				},
			],
		}],
	};

	container.children[0].children.push(container as never);

	return container;
}
