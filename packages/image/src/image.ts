import {
	Source, Component, Context, Support, PointerContext, Pivot,
} from '@e2d/engine';
import { Rectangle } from '@e2d/geom';
import { ImageResource, resolveImage } from '@e2d/resources';

export const IMAGE = 'image';

export interface Image extends Component, Source, Pivot {
}

export namespace Image {
	export function getBounds(image: Image, context: Context): Rectangle | undefined {
		const { src } = image;
		if (!src) {
			return undefined;
		}

		const { support } = context;

		const resource = support.resources.get(src) as ImageResource | null;

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

export function hitTest(image: Image, context: PointerContext): boolean {
	const { local } = context;
	const bounds = Image.getBounds(image, context);
	return !!bounds && Rectangle.contains(bounds, local);
}

export function applyImageExtension(support: Support) {
	support.hitTestHandlers.set(IMAGE, hitTest);
	support.resources.resolvers.add(resolveImage);
}
