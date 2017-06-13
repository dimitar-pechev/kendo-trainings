import { ChartPartialComponent } from './../components/chart-partial/chart-partial.component';
import { PartialItem } from './../models/partial-item';
import { PlayersGridComponent } from './../components/players-grid/players-grid.component';
import { Injectable } from '@angular/core';

@Injectable()
export class PartialsService {
	getPartials() {
		return [
			new PartialItem(PlayersGridComponent, 'LFC Players', {
				sourceUrl: 'http://api.football-data.org/v1/teams/64/players',
				state: {
					skip: 0,
					take: 10
				},
				sortable: false,
				pageable: true,
				noRecordsMessage: 'Loading players data...'
			}),
			new PartialItem(ChartPartialComponent, 'Players by Positions', {
				sourceUrl: 'http://api.football-data.org/v1/teams/64/players',
				title: 'LFC Players Grouped by Positions'
			})
		];
	}
}
