import { Injectable, ViewContainerRef, ReflectiveInjector, ComponentFactoryResolver } from '@angular/core';
import { partialsSettings } from './../models/index';
import { PartialItem } from './../models/partial-item.model';
import { ChartPartialComponent } from './../components/positions-chart/chart-partial.component';
import { PlayersGridComponent } from './../components/players-grid/players-grid.component';

const gridSettings = {
	sourceUrl: 'http://api.football-data.org/v1/teams/64/players',
	state: {
		skip: 0,
		take: 10,
		sort: []
	},
	selectable: true,
	sortable: true,
	pageable: true,
	noRecordsMessage: 'Loading players data...'
};

const chartSettings = {
	sourceUrl: 'http://api.football-data.org/v1/teams/64/players',
	title: 'LFC Players Grouped by Positions'
};

@Injectable()
export class PartialsService {
	constructor(private componentFactoryResolver: ComponentFactoryResolver, ) { }

	getPartials() {
		return [
			new PartialItem(PlayersGridComponent, 'LFC Players', new partialsSettings.GridSettings(gridSettings), 'grid'),
			new PartialItem(ChartPartialComponent, 'Players by Positions', new partialsSettings.ChartSettings(chartSettings), 'chart')
		];
	}

	loadPartial(partial: PartialItem, viewContainerRef: ViewContainerRef, componentsCache: Object) {
		viewContainerRef.detach();

		if (componentsCache[partial.name]) {
			viewContainerRef.insert(componentsCache[partial.name]);
			return;
		}

		const injector = ReflectiveInjector.resolveAndCreate([{
			provide: partialsSettings[partial.data.constructor.name],
			useValue: partial.data
		}]);

		const componentFactory = this.componentFactoryResolver.resolveComponentFactory(partial.component);
		const componentRef = viewContainerRef.createComponent(componentFactory, 0, injector);

		componentsCache[partial.name] = componentRef.hostView;
	}
}
