import { Display } from '../extensions/display';
import { Pointer } from '../extensions/pointer';
import { Transform } from '../extensions/transform';
import { Update } from '../extensions/update';

export interface Component extends Transform, Pointer, Display, Update {
	type: string;
	id?: string;
}
