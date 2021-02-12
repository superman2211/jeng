const SPEED = 100;

interface Unit {
	[key: string]: any;
}

export interface UnitProperties {
	name: string,
	health: number,
	image: string,
	onClick: (data: UnitProperties) => void;
}

export function unit(props: UnitProperties): Unit {
	function getTitle() {
		return `${props.name}\n${Math.round(props.health * 100)}%`;
	}

	return {
		type: 'container',
		x: 50 + Math.random() * 400,
		y: 200,
		rotation: 0,
		updateMove(time: number) {
			this.x += this.children.image.scaleX * time * SPEED;
			if (this.x < 50) {
				this.children.image.scaleX = 1;
			} else if (this.x > 400) {
				this.children.image.scaleX = -1;
			}
		},
		onUpdate(time: number) {
			this.updateMove(time);
		},
		children: {
			text: {
				type: 'text',
				text: getTitle(),
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
				onUpdate() {
					this.text = getTitle();
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
