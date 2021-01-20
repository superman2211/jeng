import { ABILITY_WOLF } from './assets';

export default function recursive() {
	const container = {
		type: 'container',
		child: {
			type: 'container',
			x: 30,
			y: 30,
			scaleX: 0.9,
			scaleY: 0.9,
			rotation: 0.2,
			alpha: 0.9,
			children: [{
				type: 'image',
				src: ABILITY_WOLF,
				scale: 0.3,
			}],
			onUpdate(time: number) {
				this.rotation += time * 0.05;
			},
		},
	};

	container.child.children.push(container as never);

	return container;
}
