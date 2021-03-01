import { Pivot, Source } from '@e2d/core';
import { CanvasEngine, CanvasPlatform } from '@e2d/canvas-engine';
import { ImageResource } from '@e2d/resources';
import { ImageExtension, IMAGE, Image } from './image';

export namespace CanvasImageExtension {
	export function render(image: Image, engine: CanvasEngine): void {
		const resource = Source.getResource(image, engine) as ImageResource;
		if (!resource?.loaded || !resource?.image) {
			return;
		}

		const context = engine.renderer.getContext();

		const { colorTransform } = context;
		if (colorTransform.alphaMultiplier <= 0) {
			return;
		}

		const context2d = (engine.platform as CanvasPlatform).getContext();

		const { matrix } = context;
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

		context2d.globalAlpha = colorTransform.alphaMultiplier;
		context2d.drawImage(resource.image, x, y);
	}

	export function init(engine: CanvasEngine) {
		ImageExtension.init(engine);
		engine.components.render.set(IMAGE, render);
	}
}
