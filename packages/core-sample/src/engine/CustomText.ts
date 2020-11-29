import {
	Text, Context, Context2d, ContextState2d,
} from '@e2d/core';

export default function updateText(text: Text, context: Context): void {
	if (text.text) {
		const context2d = context as Context2d;
		const state = context2d.getState(text) as ContextState2d;
		const { matrix } = state;

		const fontSize = text.fontSize ?? 10;
		const fontName = text.fontName ?? 'arial';

		const renderingContext = context2d.context;
		renderingContext.setTransform(
			matrix.a,
			matrix.b,
			matrix.c,
			matrix.d,
			matrix.tx,
			matrix.ty,
		);
		renderingContext.globalAlpha = 1;
		renderingContext.font = `${fontSize}px ${fontName}`;
		renderingContext.textBaseline = 'alphabetic';
		renderingContext.strokeStyle = 'red';
		renderingContext.fillStyle = '';
		renderingContext.strokeText(text.text, 0, fontSize);
	}
}
