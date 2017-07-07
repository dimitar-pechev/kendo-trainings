import { ChartSettings } from './../models/chart-settings.model';
import { GridSettings } from './../models/grid-settings.model';
import { Injectable, ViewContainerRef, ReflectiveInjector, ComponentFactoryResolver } from '@angular/core';
import { PartialItem } from './../models/partial-item.model';
import { PositionsChartComponent } from './../components/positions-chart/positions-chart.component';
import { PlayersGridComponent } from './../components/players-grid/players-grid.component';
import { PlayerProfileComponent } from './../components/player-profile/player-profile.component';

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
			new PartialItem(PlayersGridComponent, 'LFC Players', new GridSettings(gridSettings), 'grid'),
			new PartialItem(PositionsChartComponent, 'Players by Positions', new ChartSettings(chartSettings), 'chart')
		];
	}

	loadPartial(partial: PartialItem, viewContainerRef: ViewContainerRef, componentsCache: Object) {
		viewContainerRef.detach();

		if (componentsCache[partial.name]) {
			viewContainerRef.insert(componentsCache[partial.name]);
			return;
		}

		const injector = ReflectiveInjector.resolveAndCreate([{
			provide: partial.data.constructor,
			useValue: partial.data
		}]);

		const componentFactory = this.componentFactoryResolver.resolveComponentFactory(partial.component);
		const componentRef = viewContainerRef.createComponent(componentFactory, 0, injector);

		componentsCache[partial.name] = componentRef.hostView;
	}
}
