import { Shape } from '@e2d/shape';

export interface PreloaderInfo {
	getProgress(): number;
	getWidth(): number;
	getHeight(): number;
}

export function preloader(info: PreloaderInfo) {
	return {
		type: 'shape',
		scaleX: 1,
		y: info.getHeight() - 20,
		data: {
			type: 'rectangle',
			width: 1,
			height: 20,
			fill: 0xff0000,
		},
		onUpdate() {
			this.scaleX = this.scaleX ?? 0;
			this.scaleX += (info.getWidth() * info.getProgress() - this.scaleX) / 2;
		},
	} as Shape;
}
