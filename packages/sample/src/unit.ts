const SPEED = 100;

interface Unit {
	[key: string]: any;
}

export interface UnitProperties {
	title: string,
	image: string,
	onClick: (data: UnitProperties) => void;
}

export function unit(props: UnitProperties): Unit {
	return {
		type: 'container',
		x: 50 + Math.random() * 400,
		y: 200,
		rotation: 0,
		onUpdate(time: number) {
			this.x += this.children.image.scaleX * time * SPEED;
			if (this.x < 50) {
				this.children.image.scaleX = 1;
			} else if (this.x > 400) {
				this.children.image.scaleX = -1;
			}
		},
		children: {
			text: {
				type: 'text',
				text: props.title,
				textFormat: {
					size: 15,
					color: 0xffdddd,
					align: 'center',
					verticalAlign: 'middle',
				},
				border: 0x00ff00,
				y: -30,
				height: 35,
				pivotX: 0.5,
				onPointerDown: () => {
					props.onClick(props);
				},
			},
			image: {
				type: 'image',
				src: props.image,
				scaleX: Math.random() > 0.5 ? 1 : -1,
				pivotX: 0.5,
				onPointerDown: () => {
					props.onClick(props);
				},
			},
		},
	};
}
