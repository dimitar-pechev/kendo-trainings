import { GridPartial } from './gird-partial.interface';
import { Type } from '@angular/core';

export class PartialItem {
	constructor(public component: Type<GridPartial>, public data: Object) { }
}
