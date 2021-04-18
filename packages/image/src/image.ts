import {
	Source, Component, Pivot, Engine, Resource,
} from '@e2d/core';
import { Rectangle } from '@e2d/geom';
import { ImageResource } from '@e2d/resources';

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
		const { local } = engine.pointerEvents;
		Image.calculateBounds(image, bounds, engine);
		return Rectangle.contains(bounds, local);
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
