import { CanvasPlatform } from '@jeng/canvas-engine';
import {
	Source, Component, Pivot, Engine, Resource,
} from '@jeng/core';
import { Rectangle } from '@jeng/geom';
import { ImageResource } from '@jeng/resources';

export const IMAGE = 'image';

export interface Image extends Component, Source, Pivot {
}

export namespace Image {
	export function calculateBounds(image: Image, bounds: Rectangle, engine: Engine) {
		const { src } = image;
		if (!src) {
			Rectangle.setEmpty(bounds);
			return;
		}

		const resource = engine.resources.get(src) as ImageResource | null;
		if (!resource?.image) {
			Rectangle.setEmpty(bounds);
			return;
		}

		const { width, height } = resource.image;
		const x = Pivot.getX(image, width);
		const y = Pivot.getY(image, height);

		bounds.x = x;
		bounds.y = y;
		bounds.width = width;
		bounds.height = height;
	}
}

const bounds = Rectangle.empty();

export namespace ImageExtension {
	export function hitTest(image: Image, engine: Engine): boolean {
		const { local } = engine.pointers;
		Image.calculateBounds(image, bounds, engine);
		let contains = Rectangle.contains(bounds, local);
		if (contains) {
			if (image.pointerTestShape) {
				const resource = engine.resources.get(image.src!) as ImageResource | null;
				if (resource?.image) {
					const x = local.x - bounds.x;
					const y = local.y - bounds.y;
					if (resource.image instanceof HTMLCanvasElement) {
						const canvasContext = resource.image.getContext('2d');
						const imageData = canvasContext!.getImageData(x, y, 1, 1);
						contains = imageData.data[3] > 0;
					} else {
						const platform = engine.platform as CanvasPlatform;
						const customContext = platform.createCustomContext();
						customContext.setTransform();
						customContext.clearRect(0, 0, 1, 1);
						customContext.drawImage(
							resource.image,
							x, y, 1, 1,
							0, 0, 1, 1,
						);
						const imageData = customContext.getImageData(0, 0, 1, 1);
						contains = imageData.data[3] > 0;
						platform.destroyCustomContext(customContext);
					}
				} else {
					contains = false;
				}
			}
		}
		return contains;
	}

	export function loaded(image: Image, engine: Engine): void {
		const context = engine.loading.getContext();

		const { src } = image;
		if (!src) {
			context.progress = 1;
			context.loaded = true;
			return;
		}

		const resource = engine.resources.get(src) as ImageResource;
		context.progress = Resource.getProgress(resource);
		context.loaded = !!resource?.loaded && !!resource?.image;
	}

	export function init(engine: Engine) {
		engine.components.hitTest.set(IMAGE, hitTest);
		engine.components.loaded.set(IMAGE, loaded);
		ImageResource.init(engine);
	}
}
