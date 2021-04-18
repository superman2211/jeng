/* eslint-disable no-console */
import { Engine, Resource } from '@e2d/core';

export interface ImageResource extends Resource {
	image?: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
}

export namespace ImageResource {
	export function resolve(asset: string, engine: Engine): ImageResource | null {
		const extension = asset.split('.').pop();
		switch (extension) {
			case 'png':
			case 'jpg':
			case 'webp':
				const resource: ImageResource = {
					asset,
					loaded: false,
					bytesLoaded: 0,
					bytesTotal: 0,
				};

				const image = document.createElement('img') as HTMLImageElement;
				image.src = asset;
				image.onload = () => {
					console.log(`image loaded: ${asset}`);
					resource.image = image;
					resource.loaded = true;
				};
				image.onerror = (e) => {
					engine.debug.warning('image load error', e);
				};

				return resource;
			default:
				break;
		}
		return null;
	}

	export function init(engine: Engine) {
		engine.resources.resolvers.add(resolve);
	}
}
