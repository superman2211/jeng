import { Display } from '../extensions/display';
import { Key } from '../extensions/key';
import { Pointer } from '../extensions/pointer';
import { Transform } from '../extensions/transform';
import { Update } from '../extensions/update';

export interface Component extends Transform, Pointer, Key, Display, Update {
	type: string;
	id?: string;
}
