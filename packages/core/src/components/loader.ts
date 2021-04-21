import { Engine } from '../core/engine';
import { Container, ContainerExtension } from './container';

export const LOADER = 'loader';

export interface Loader extends Container {
	loadingProgress?: number;
	loaded?: boolean;
	loadingCheck?: boolean;
	onLoaded?: () => void;
}

export namespace Loader {
	export function getLoadingProgress(loader: Loader): number {
		return loader.loadingProgress ?? 0;
	}

	export function isLoaded(loader: Loader): boolean {
		return loader.loaded ?? false;
	}

	export function needLoadingCheck(loader: Loader): boolean {
		return loader.loadingCheck ?? true;
	}
}

export namespace LoaderExtension {
	export function loaded(loader: Loader, engine: Engine): void {
		if (!Loader.needLoadingCheck(loader)) {
			return;
		}

		ContainerExtension.loaded(loader, engine);

		const context = engine.loading.getContext();
		loader.loadingProgress = context.progress;
		if (context.loaded && !loader.loaded) {
			loader.loaded = true;
			if (loader.onLoaded) {
				loader.onLoaded();
			}
		}
	}

	export function init(engine: Engine) {
		engine.components.update.set(LOADER, ContainerExtension.update);
		engine.components.render.set(LOADER, ContainerExtension.render);
		engine.components.hitTest.set(LOADER, ContainerExtension.hitTest);
		engine.components.loaded.set(LOADER, loaded);
	}
}
