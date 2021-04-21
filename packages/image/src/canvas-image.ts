import { Pivot } from '@jeng/core';
import { CanvasEngine, CanvasPlatform } from '@jeng/canvas-engine';
import { ImageResource } from '@jeng/resources';
import { ImageExtension, IMAGE, Image } from './image';

export namespace CanvasImageExtension {
	export function render(image: Image, engine: CanvasEngine): void {
		const { src } = image;
		if (!src) {
			return;
		}

		const resource = engine.resources.get(src) as ImageResource;
		if (!resource?.image) {
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
