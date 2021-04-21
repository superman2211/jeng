import { CanvasEngine, CanvasPlatform } from '@jeng/canvas-engine';
import { Pivot } from '@jeng/core';
import { ImageExtension, IMAGE, Image } from '@jeng/image';
import { ImageResource } from '@jeng/resources';

export namespace CustomImageExtension {
	export function render(image: Image, engine: CanvasEngine): void {
		if (!image.src) {
			return;
		}

		const { matrix, colorTransform } = engine.renderer.getContext();

		if (colorTransform.alphaMultiplier <= 0) {
			return;
		}

		const resource = engine.resources.get(image.src) as ImageResource | null;

		if (!resource?.loaded || !resource?.image) {
			return;
		}

		const context2d = (engine.platform as CanvasPlatform).getContext();

		context2d.setTransform(
			matrix.a,
			matrix.b,
			matrix.c,
			matrix.d,
			matrix.tx,
			matrix.ty,
		);

		const { width, height } = resource.image;
		const x = Pivot.getX(image, width);
		const y = Pivot.getY(image, height);

		context2d.globalAlpha = 1;
		context2d.fillStyle = '';
		context2d.strokeStyle = 'lightgray';
		context2d.strokeRect(x, y, width, height);
	}

	export function init(engine: CanvasEngine) {
		ImageExtension.init(engine);
		engine.components.render.set(IMAGE, render);
	}
}
