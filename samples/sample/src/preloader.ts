import { Shape } from '@jeng/shape';

export interface PreloaderInfo {
	getProgress(): number;
	getWidth(): number;
	getHeight(): number;
}

export function preloader(info: PreloaderInfo) {
	const height = 20;
	return {
		type: 'shape',
		scaleX: 1,
		y: info.getHeight() - height,
		data: {
			type: 'rectangle',
			width: 1,
			height,
			fill: 0xff0000,
		},
		onUpdate() {
			this.scaleX! += (info.getWidth() * info.getProgress() - this.scaleX!) / 2;
		},
	} as Shape;
}
