import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[appPartial]'
})
export class PartialDirective {
	constructor(public viewContainerRef: ViewContainerRef) { }
}
