import { Http } from '@angular/http';
import { PlayersGridComponent } from './../players-grid/players-grid.component';
import { GridPartial } from './../../models/gird-partial.interface';
import { PartialDirective } from './../../directives/partial.directive';
import { PartialItem } from './../../models/partial-item';
import { PartialsService } from './../../services/partials.service';
import { Component, OnInit, ComponentFactoryResolver, ViewChild, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
	partials: PartialItem[];
	@ViewChild(PartialDirective) partialHost: PartialDirective;
	@ViewChild('tmpl') template: TemplateRef<any>;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private partialsService: PartialsService
	) { }

	ngOnInit() {
		this.partials = this.partialsService.getAds();
		this.loadComponent(this.partials[0]);
	}

	private loadComponent(partial) {
		const componentFactory = this.componentFactoryResolver.resolveComponentFactory(partial.component);
		const viewContainerRef = this.partialHost.viewContainerRef;
		viewContainerRef.clear();
		const componentRef = viewContainerRef.createComponent(componentFactory);

		Object
			.keys(partial)
			.forEach(key => componentRef.instance[key] = partial[key]);
	}

	private renderSimpleTemplate() {
		const viewContainerRef = this.partialHost.viewContainerRef;
		viewContainerRef.clear();
		viewContainerRef.createEmbeddedView(this.template, { data: 'something' });
	}
}
