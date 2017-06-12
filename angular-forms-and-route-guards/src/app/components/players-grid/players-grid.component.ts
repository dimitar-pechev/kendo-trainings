import { HttpModule } from '@angular/http';
import { PlayersService } from './../../services/players.service';
import { GridDataResult } from '@progress/kendo-angular-grid/dist/es/main';
import { State } from '@progress/kendo-data-query/dist/es/state';
import { GridPartial } from './../../models/gird-partial.interface';
import { Component, OnInit, Input } from '@angular/core';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid/dist/es/change-event-args.interface';

@Component({
	selector: 'app-players-grid',
	templateUrl: './players-grid.component.html'
})
export class PlayersGridComponent implements OnInit, GridPartial {
	@Input() data: Object;
	gridView: GridDataResult;
	state: State;
	sortable: boolean;
	pageable: boolean;
	noRecordsMessage: string;

	constructor(private playersService: PlayersService) { }

	ngOnInit() {
		this.state = {
			skip: 0,
			take: 10
		};

		this.sortable = false;
		this.pageable = true;
		this.noRecordsMessage = 'Loading players data...';
		this.getPlayersData();
	}

	dataStateChange(state: DataStateChangeEvent) {
		this.state = state;
		this.getPlayersData();
	}

	private getPlayersData() {
		this.playersService.getPlayers(this.data['sourceUrl'], this.state.take, this.state.skip)
			.subscribe(data => {
				this.gridView = data;
			});
	}
}
