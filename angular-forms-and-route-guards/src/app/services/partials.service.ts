import { ChartSettings } from './../models/chart-settings.model';
import { GridSettings } from './../models/grid-settings.model';
import { ChartPartialComponent } from './../components/chart-partial/chart-partial.component';
import { PartialItem } from './../models/partial-item.model';
import { PlayersGridComponent } from './../components/players-grid/players-grid.component';
import { Injectable, Injector } from '@angular/core';

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

export class PartialsService {
	getPartials() {
		return [
			new PartialItem(PlayersGridComponent, 'LFC Players', new GridSettings(gridSettings), 'grid'),
			new PartialItem(ChartPartialComponent, 'Players by Positions', new ChartSettings(chartSettings), 'chart')
		];
	}
}
