import PointerEvent from './PointerEvent';
import MouseEvent from './MouseEvent';
import TouchEvent from './TouchEvent';
import KeyboardEvent from './KeyboardEvent';

export const RENDER = 'render';
export const RESIZE = 'resize';
export const ENTER_FRAME = 'enterFrame';
export const ADDED_TO_STAGE = 'addedToStage';
export const REMOVED_FROM_STAGE = 'removedFromStage';

export const TOUCH_START = 'touchStart';
export const TOUCH_MOVE = 'touchMove';
export const TOUCH_END = 'touchEnd';
export const TOUCH_CANCEL = 'touchCancel';

export const MOUSE_DOWN = 'mouseDown';
export const MOUSE_MOVE = 'mouseMove';
export const MOUSE_UP = 'mouseUp';
export const MOUSE_LEAVE = 'mouseLeave';
export const MOUSE_WHEEL = 'mouseWheel';
export const MOUSE_OVER = 'mouseOver';
export const MOUSE_OUT = 'mouseOut';
export const CLICK = 'click';
export const DOUBLE_CLICK = 'doubleClick';

export const KEY_DOWN = 'keyDown';
export const KEY_UP = 'keyUp';

export {
	PointerEvent,
	MouseEvent,
	TouchEvent,
	KeyboardEvent,
};
