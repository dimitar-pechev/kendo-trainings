import { Type, Injector } from '@angular/core';

export class PartialItem {
	constructor(
		public component: Type<any>,
		public name: string,
		public data: Object,
		public routeValue: string
	) { }
}
