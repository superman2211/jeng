/* eslint-disable no-console */
import { Engine, Resource } from '@jeng/core';

export interface StringResource extends Resource {
	data?: string;
}

export namespace StringResource {
	export function resolve(asset: string, engine: Engine): StringResource | null {
		const extension = asset.split('.').pop();
		switch (extension) {
			case 'txt':
			case 'json':
				const resource: StringResource = {
					asset,
					loaded: false,
					bytesLoaded: 0,
					bytesTotal: 0,
				};

				const xhr = new XMLHttpRequest();
				xhr.open('GET', asset, true);

				xhr.onprogress = (e) => {
					resource.bytesLoaded = e.loaded;
					resource.bytesTotal = e.total;
				};
				xhr.onload = () => {
					engine.debug.log(`string loaded: ${asset}`);
					resource.data = xhr.responseText;
					resource.loaded = true;
					resource.bytesLoaded = resource.bytesTotal;
				};
				xhr.onerror = (e) => {
					engine.debug.warning('string load error', e);
				};

				xhr.send();

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
