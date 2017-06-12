import { PartialItem } from './../models/partial-item';
import { PlayersGridComponent } from './../components/players-grid/players-grid.component';
import { Injectable } from '@angular/core';

@Injectable()
export class PartialsService {

	constructor() { }
	getAds() {
		return [
			new PartialItem(PlayersGridComponent, {
				sourceUrl: 'http://api.football-data.org/v1/teams/64/players',
				title: 'Liverpool FC',
				kur: []
			}),
			new PartialItem(PlayersGridComponent, {
				sourceUrl: 'http://api.football-data.org/v1/teams/70/players',
				title: 'Stoke City FC'
			}),
			new PartialItem(PlayersGridComponent, {
				sourceUrl: 'http://api.football-data.org/v1/teams/72/players',
				title: 'Swansea FC'
			})
		];
	}
}
