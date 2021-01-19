// /* eslint-disable class-methods-use-this */
// import { CanvasSupport } from '@e2d/canvas-support';
// import { UpdateContext } from '@e2d/engine';
// import { CanvasImageExtension, Image, ImageResource } from '@e2d/image';

// export default class CustomImage extends CanvasImageExtension {
// 	update(image: Image, context: UpdateContext): void {
// 		if (!image.src) {
// 			return;
// 		}

// 		const { matrix, colorTransform } = context;

// 		if (colorTransform.alphaMultiplier <= 0) {
// 			return;
// 		}

// 		const { support } = context;

// 		const resource = support.resources.get(image.src) as ImageResource | null;

// 		if (!resource?.loaded || !resource?.image) {
// 			return;
// 		}

// 		const { context2d } = support as CanvasSupport;

// 		context2d.setTransform(
// 			matrix.a,
// 			matrix.b,
// 			matrix.c,
// 			matrix.d,
// 			matrix.tx,
// 			matrix.ty,
// 		);

// 		const { width, height } = resource.image;

// 		context2d.globalAlpha = 1;
// 		context2d.fillStyle = '';
// 		context2d.strokeStyle = 'gray';
// 		context2d.strokeRect(0, 0, width, height);
// 	}
// }
