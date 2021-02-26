import { Display } from '../interfaces/display';
import { Pointer } from '../interfaces/pointer';
import { Transform } from '../interfaces/transform';
import { Update } from '../interfaces/update';

export interface Component extends Transform, Pointer, Display, Update {
	type: string;
	id?: string;
}
