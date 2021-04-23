import { CanvasEngine, CanvasPlatform } from '@jeng/canvas-engine';
import { Pivot } from '@jeng/core';
import { ColorTransform, Matrix, Rectangle } from '@jeng/geom';
import { ImageResource } from '@jeng/resources';
import { ImageExtension, IMAGE, Image } from './image';

const bounds = Rectangle.empty();
const screenBounds = Rectangle.empty();

export namespace CanvasImageColorExtension {
	export function render(image: Image, engine: CanvasEngine) {
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

		const { matrix } = context;
		const platform = engine.platform as CanvasPlatform;
		const context2d = platform.getContext();

		const { width, height } = resource.image;
		const x = Pivot.getX(image, width);
		const y = Pivot.getY(image, height);

		if (ColorTransform.isEmptyWithAlpha(colorTransform)) {
			context2d.setTransform(
				matrix.a,
				matrix.b,
				matrix.c,
				matrix.d,
				matrix.tx,
				matrix.ty,
			);

			context2d.globalAlpha = colorTransform.alphaMultiplier;
			context2d.drawImage(resource.image, x, y);
		} else {
			const customContext = platform.createCustomContext();

			bounds.x = x;
			bounds.y = y;
			bounds.width = width;
			bounds.height = height;

			Matrix.transformBounds(matrix, bounds, bounds);

			if (Rectangle.isEmpty(bounds)) {
				return;
			}

			screenBounds.width = customContext.canvas.width;
			screenBounds.height = customContext.canvas.height;

			Rectangle.intersection(bounds, screenBounds, bounds);

			if (Rectangle.isEmpty(bounds)) {
				return;
			}

			Rectangle.round(bounds);

			customContext.setTransform();
			customContext.clearRect(bounds.x, bounds.y, bounds.width, bounds.height);
			customContext.setTransform(
				matrix.a,
				matrix.b,
				matrix.c,
				matrix.d,
				matrix.tx,
				matrix.ty,
			);
			customContext.drawImage(resource.image, x, y);

			const imageData = customContext.getImageData(bounds.x, bounds.y, bounds.width, bounds.height);

			const rm = colorTransform.redMultiplier;
			const gm = colorTransform.greenMultiplier;
			const bm = colorTransform.blueMultiplier;
			const am = colorTransform.alphaMultiplier;

			const ro = colorTransform.redOffset;
			const go = colorTransform.greenOffset;
			const bo = colorTransform.blueOffset;
			const ao = colorTransform.alphaOffset;

			const { data } = imageData;
			const { length } = data;

			for (let i = 0; i < length;) {
				data[i] = data[i++] * rm + ro;
				data[i] = data[i++] * gm + go;
				data[i] = data[i++] * bm + bo;
				data[i] = data[i++] * am + ao;
			}

			customContext.putImageData(imageData, bounds.x, bounds.y);

			context2d.setTransform();
			context2d.globalAlpha = 1;
			context2d.drawImage(
				customContext.canvas,
				bounds.x, bounds.y, bounds.width, bounds.height,
				bounds.x, bounds.y, bounds.width, bounds.height,
			);

			platform.destroyCustomContext(customContext);
		}
	}

	export function init(engine: CanvasEngine) {
		ImageExtension.init(engine);
		engine.components.render.set(IMAGE, render);
	}
}
