import { Platform } from '@e2d/core';

export class CanvasPlatform extends Platform {
	readonly view: HTMLCanvasElement = document.createElement('canvas');
	private contexts: CanvasRenderingContext2D[] = [this.view.getContext('2d') as CanvasRenderingContext2D];
	private customContexts: CanvasRenderingContext2D[] = [];

	getContext(): CanvasRenderingContext2D {
		return this.contexts[this.contexts.length - 1];
	}

	saveContext(context: CanvasRenderingContext2D) {
		this.contexts.push(context);
	}

	restoreContext() {
		if (this.contexts.length > 1) {
			this.contexts.pop();
		} else {
			this.engine.debug.warning('Trying to restore main context');
		}
	}

	createCustomContext(): CanvasRenderingContext2D {
		let context: CanvasRenderingContext2D;
		if (this.customContexts.length) {
			context = this.customContexts.pop()!;
		} else {
			const canvas: HTMLCanvasElement = document.createElement('canvas');
			context = canvas.getContext('2d') as CanvasRenderingContext2D;
		}

		const { width, height } = this.view;

		if (context.canvas.width !== width) {
			context.canvas.width = width;
		}
		if (context.canvas.height !== height) {
			context.canvas.height = height;
		}
		return context;
	}

	destroyCustomContext(context: CanvasRenderingContext2D) {
		this.customContexts.push(context);
	}

	begin(): void {
		this.clear();
		this.updateSize();
	}

	clear(): void {
		const { view } = this;
		const context = this.getContext();
		context.setTransform();
		context.clearRect(0, 0, view.width, view.height);
	}

	updateSize() {
		const width = this.engine.screen.getWidth();
		const height = this.engine.screen.getHeight();
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
