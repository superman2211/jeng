import { Container, updateContainer } from '../core/Container';
import { Context } from '../core/Context';
import { Transform } from './Transform';

export const CONTAINER_ALIGNED = 'container-aligned';

export interface ContainerAligned extends Container, Transform {
	stepX?: number;
	stepY?: number;
	stepRotation?: number;
}

export function updateContainerAligned(container: ContainerAligned, context: Context): void {
	const { children } = container;
	if (children) {
		const stepX = container.stepX ?? 0;
		const stepY = container.stepY ?? 0;
		const stepRotation = container.stepRotation ?? 0;

		if (stepX || stepY) {
			for (let i = 0; i < children.length; i++) {
				const child = children[i] as Transform;
				child.x = stepX * i;
				child.y = stepY * i;
				child.rotation = stepRotation * i;
			}
		}
	}

	updateContainer(container, context);
}
