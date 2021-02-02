import {
	Component, Support, PointerContext, Pivot,
} from '@e2d/engine';
import { Bounds, Rectangle } from '@e2d/geom';
import { GraphicsData } from './data/data';
import Graphics from './graphics';

export const SHAPE = 'shape';

export interface Shape extends Component, Pivot {
	data?: GraphicsData | GraphicsData[];
}

export namespace Shape {
	export function getGraphics(shape: Shape): Graphics {
		return new Graphics(shape);
	}

	export function getBounds(shape: Shape): Rectangle | undefined {
		const { data } = shape;
		if (!data) {
			return undefined;
		}

		const bounds = Bounds.empty();

		if (Array.isArray(data)) {
			for (let i = 0; i < data.length; i++) {
				GraphicsData.calculateBounds(data[i], bounds);
			}
		} else if (typeof data === 'object') {
			GraphicsData.calculateBounds(data, bounds);
		} else {
			return undefined;
		}

		if (Bounds.isEmpty(bounds)) {
			return undefined;
		}

		const width = bounds.maxX - bounds.minX;
		const height = bounds.maxY - bounds.minY;
		const x = bounds.minX + Pivot.getX(shape, width);
		const y = bounds.minY + Pivot.getY(shape, height);

		return {
			x, y, width, height,
		};
	}
}

export function hitTest(shape: Shape, context: PointerContext): boolean {
	const { local } = context;
	const bounds = Shape.getBounds(shape);
	return !!bounds && Rectangle.contains(bounds, local);
}

export function applyImageExtension(support: Support) {
	support.hitTestHandlers.set(SHAPE, hitTest);
	support.resources.resolvers.add(resolveImage);
}
