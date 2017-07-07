import { ActivatedRoute } from '@angular/router';
import { GridSettings } from './../../models/grid-settings.model';
import { SortDescriptor } from '@progress/kendo-data-query/dist/es/sort-descriptor';
import { PartialItem } from './../../models/partial-item.model';
import { PartialsService } from './../../services/partials.service';
import {
	Component,
	OnInit,
	ComponentFactoryResolver,
	ViewChild,
	TemplateRef,
	ViewContainerRef,
	ReflectiveInjector,
	OnDestroy
} from '@angular/core';

@Component({
	selector: 'app-players-stats',
	templateUrl: './players-stats.component.html'
})
export class PlayersStatsComponent implements OnInit, OnDestroy {
	partials: PartialItem[];
	@ViewChild('container', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;
	private componentsCache: Object;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private partialsService: PartialsService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.componentsCache = {};
		this.partials = this.partialsService.getPartials();
		this.route.params
			.subscribe(params => {
				const targetPartial = this.partials.find(p => p.routeValue === params.tab);
				this.partialsService.loadPartial(targetPartial || this.partials[0], this.viewContainerRef, this.componentsCache);
			});
	}

	ngOnDestroy() {
		this.viewContainerRef.clear();
		this.componentsCache = {};
	}
}
