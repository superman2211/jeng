import {
	Source, Engine, Resource, Container, ContainerExtension,
} from '@jeng/core';
import { StringResource } from '@jeng/resources';

export const SCENE = 'scene';

export interface Scene extends Container, Source {
}

export namespace SceneExtension {
	export function loaded(scene: Scene, engine: Engine): void {
		const context = engine.loading.getContext();

		if (scene.children) {
			ContainerExtension.loaded(scene, engine);
		} else {
			const { src } = scene;
			if (!src) {
				context.progress = 1;
				context.loaded = true;
				return;
			}

			const resource = engine.resources.get(src) as StringResource;
			context.progress = Resource.getProgress(resource);
			context.loaded = !!resource?.loaded && !!resource?.data;

			if (resource && resource.data) {
				try {
					scene.children = JSON.parse(resource.data);
				} catch (e) {
					engine.debug.warning(`scene parsing error: ${e.message}`);
				}
			}
		}
	}

	export function init(engine: Engine) {
		engine.components.hitTest.set(SCENE, ContainerExtension.hitTest);
		engine.components.render.set(SCENE, ContainerExtension.render);
		engine.components.update.set(SCENE, ContainerExtension.update);
		engine.components.loaded.set(SCENE, loaded);
		StringResource.init(engine);
	}
}
