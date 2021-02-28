import { Platform } from '@e2d/core';

export class CanvasPlatform extends Platform {
	readonly view: HTMLCanvasElement = document.createElement('canvas');
	readonly context2d: CanvasRenderingContext2D = this.view.getContext('2d') as CanvasRenderingContext2D;

	begin(): void {
		this.clear();
		this.updateSize();
	}

	clear(): void {
		const { view, context2d } = this;
		context2d.setTransform();
		context2d.clearRect(0, 0, view.width, view.height);
	}

	updateSize() {
		const { width, height } = this.engine.screen;
		const pixelRatio = this.engine.screen.getPixelRatio();

		const viewWidth = Math.floor(width * pixelRatio);
		const viewHeight = Math.floor(height * pixelRatio);

		const { view } = this;

		if (view.width !== viewWidth || view.height !== viewHeight) {
			view.width = viewWidth;
			view.height = viewHeight;
			view.style.width = `${width}px`;
			view.style.height = `${height}px`;
		}
	}
}
