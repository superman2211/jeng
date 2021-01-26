import Engine from '../engine/engine';
import { PointerEventType } from '../extensions/pointer';

function dispatchEvent(engine: Engine, event: TouchEvent, type: PointerEventType) {
	const { element } = engine.support;
	const clientRect = element.getBoundingClientRect();
	for (let i = 0; i < event.changedTouches.length; i++) {
		const touch: Touch = event.changedTouches[i];
		const x = touch.clientX - clientRect.left - element.clientLeft;
		const y = touch.clientY - clientRect.top - element.clientTop;
		const id = touch.identifier;
		engine.dispatchPointerEvent({
			type, x, y, id,
		});
	}
	event.preventDefault();
}

// eslint-disable-next-line import/prefer-default-export
export function applyTouchSupportExtension(engine: Engine) {
	const { element } = engine.support;

	element.addEventListener('touchstart', (event: TouchEvent) => {
		dispatchEvent(engine, event, 'pointerDown');
	});

	element.addEventListener('touchend', (event: TouchEvent) => {
		dispatchEvent(engine, event, 'pointerUp');
	});

	element.addEventListener('touchmove', (event: TouchEvent) => {
		dispatchEvent(engine, event, 'pointerMove');
	});
}
