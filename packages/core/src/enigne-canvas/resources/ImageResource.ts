/* eslint-disable no-console */
import { Resource } from '../../core/Resources';

export interface ImageResource extends Resource {
	image: HTMLImageElement | HTMLCanvasElement | null;
}

export function resolveImage(asset: any): ImageResource | null {
	if (typeof asset === 'string') {
		const extension = asset.split('.').pop();
		switch (extension) {
			case 'png':
			case 'jpg':
				const resource: ImageResource = {
					asset,
					image: null,
				};

				const image = document.createElement('img') as HTMLImageElement;
				image.src = asset;
				image.onload = () => {
					console.log(`image loaded: ${asset}`);
					resource.image = image;
				};
				image.onerror = (e) => console.warn(`image load error: ${e}`);

				return resource;
			default:
				break;
		}
	}
	return null;
}
