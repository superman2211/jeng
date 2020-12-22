/* eslint-disable class-methods-use-this */
import { ComponentExtension, PointerContext } from '@e2d/engine';
import { Rectangle } from '@e2d/geom';
import { Image } from './Image';
import { ImageResource } from '../resources/ImageResource';

export default abstract class ImageExtension extends ComponentExtension {
	getBounds(image: Image, context: PointerContext): Rectangle | undefined {
		if (!image.src) {
			return undefined;
		}

		const { support } = context;

		const resource = support.resources.get(image.src) as ImageResource | null;

		if (!resource?.loaded || !resource?.image) {
			return undefined;
		}

		const { width, height } = resource.image;

		return {
			x: 0, y: 0, width, height,
		};
	}
}
