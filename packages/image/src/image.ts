import {
	Source, Component, Pivot, Engine,
} from '@e2d/core';
import { Rectangle } from '@e2d/geom';
import { ImageResource } from '@e2d/resources';

export const IMAGE = 'image';

export interface Image extends Component, Source, Pivot {
}

export namespace Image {
	export function getBounds(image: Image, engine: Engine): Rectangle | undefined {
		const { src } = image;
		if (!src) {
			return undefined;
		}

		const resource = engine.resources.get(src) as ImageResource | null;

		if (!resource?.loaded || !resource?.image) {
			return undefined;
		}

		const { width, height } = resource.image;
		const x = Pivot.getX(image, width);
		const y = Pivot.getY(image, height);

		return {
			x, y, width, height,
		};
	}
}

export function hitTest(image: Image, engine: Engine): boolean {
	const { local } = engine.pointerEvents;
	const bounds = Image.getBounds(image, engine);
	return !!bounds && Rectangle.contains(bounds, local);
}

export namespace ImageExtension {
	export function init(engine: Engine) {
		engine.components.hitTest.set(IMAGE, hitTest);
		ImageResource.init(engine);
	}
}
