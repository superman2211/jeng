import { Engine } from '../core/engine';
import { PointerEventType } from '../extensions/pointer';

function dispatchEvent(engine: Engine, event: TouchEvent, type: PointerEventType) {
	const { view } = engine.platform;
	const clientRect = view.getBoundingClientRect();
	for (let i = 0; i < event.changedTouches.length; i++) {
		const touch = event.changedTouches[i];
		const x = touch.clientX - clientRect.left - view.clientLeft;
		const y = touch.clientY - clientRect.top - view.clientTop;
		engine.pointers.dispatch(type, x, y, touch.identifier);
	}
	event.preventDefault();
}

export namespace TouchExtension {
	export function init(engine: Engine) {
		const { view } = engine.platform;

		view.addEventListener('touchstart', (event: TouchEvent) => {
			dispatchEvent(engine, event, 'pointerDown');
		});

		view.addEventListener('touchend', (event: TouchEvent) => {
			dispatchEvent(engine, event, 'pointerUp');
		});

		view.addEventListener('touchmove', (event: TouchEvent) => {
			dispatchEvent(engine, event, 'pointerMove');
		});

		view.addEventListener('touchcancel', (event: TouchEvent) => {
			dispatchEvent(engine, event, 'pointerCancel');
		});
	}
}
