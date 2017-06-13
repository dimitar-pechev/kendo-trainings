import { HttpModule } from '@angular/http';
import { PlayersService } from './../../services/players.service';
import { GridDataResult } from '@progress/kendo-angular-grid/dist/es/main';
import { State } from '@progress/kendo-data-query/dist/es/state';
import { Component, OnInit, Input, OnDestroy, Injector } from '@angular/core';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid/dist/es/change-event-args.interface';

@Component({
	selector: 'app-players-grid',
	templateUrl: './players-grid.component.html'
})
export class PlayersGridComponent implements OnInit {
	sourceUrl: string;
	sortable: boolean;
	pageable: boolean;
	noRecordsMessage: string;
	state: State;
	data: GridDataResult;

	constructor(
		private playersService: PlayersService,
		private injector: Injector
	) { }

	ngOnInit() {
		this.sourceUrl = this.injector.get('sourceUrl');
		this.state = this.injector.get('state');
		this.sortable = this.injector.get('sortable');
		this.pageable = this.injector.get('pageable');
		this.noRecordsMessage = this.injector.get('noRecordsMessage');
		this.getPlayersData();
	}

	dataStateChange(state: DataStateChangeEvent) {
		this.state = state;
		this.getPlayersData();
	}

	private getPlayersData() {
		this.playersService.getPlayers(this.sourceUrl, this.state.take, this.state.skip)
			.subscribe(data => {
				this.data = data;
			});
	}
}
