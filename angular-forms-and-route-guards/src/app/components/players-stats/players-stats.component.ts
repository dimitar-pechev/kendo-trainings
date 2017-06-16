import { ActivatedRoute } from '@angular/router';
import { GridSettings } from './../../models/grid-settings.model';
import { SortDescriptor } from '@progress/kendo-data-query/dist/es/sort-descriptor';
import { PartialItem } from './../../models/partial-item.model';
import { PartialsService } from './../../services/partials.service';
import { partialsSettings } from '../../models'
import {
	Component,
	OnInit,
	ComponentFactoryResolver,
	ViewChild,
	TemplateRef,
	ViewContainerRef,
	ReflectiveInjector
} from '@angular/core';

@Component({
	selector: 'app-players-stats',
	templateUrl: './players-stats.component.html'
})
export class PlayersStatsComponent implements OnInit {
	partials: PartialItem[];
	@ViewChild('container', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;
	@ViewChild('template') template: TemplateRef<any>;

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
				this.loadComponent(targetPartial || this.partials[0]);
			});
	}

	private loadComponent(partial: PartialItem) {
		this.viewContainerRef.detach(0);

		if (this.componentsCache[partial.name]) {
			this.viewContainerRef.insert(this.componentsCache[partial.name]);
			return;
		}

		const injector = ReflectiveInjector.resolveAndCreate([{
			provide: partialsSettings[partial.data.constructor.name],
			useValue: partial.data
		}]);

		const componentFactory = this.componentFactoryResolver.resolveComponentFactory(partial.component);
		const componentRef = this.viewContainerRef.createComponent(componentFactory, 0, injector);

		this.componentsCache[partial.name] = componentRef.hostView;
	}

	private renderSimpleTemplate() {
		this.viewContainerRef.detach(0);
		const view = this.viewContainerRef.createEmbeddedView(this.template, { data: 'this way comes...' });
	}
}
