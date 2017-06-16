import { GridSettings } from './../../models/grid-settings.model';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SortDescriptor } from '@progress/kendo-data-query/dist/es/sort-descriptor';
import { HttpModule } from '@angular/http';
import { PlayersService } from './../../services/players.service';
import { GridDataResult } from '@progress/kendo-angular-grid/dist/es/main';
import { State } from '@progress/kendo-data-query/dist/es/state';
import { Component, OnInit, Injector, AfterViewChecked } from '@angular/core';
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
	selectable: boolean;
	queryParams: Object;

	constructor(
		private playersService: PlayersService,
		private settings: GridSettings,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		this.sourceUrl = this.settings.sourceUrl;
		this.state = this.settings.state;
		this.sortable = this.settings.sortable;
		this.pageable = this.settings.pageable;
		this.noRecordsMessage = this.settings.noRecordsMessage;
		this.selectable = this.settings.selectable;

		this.route
			.queryParams
			.subscribe(query => {
				if (query['dir']) {
					this.state.sort = [{
						field: query['sort'],
						dir: query['dir']
					}];

					this.queryParams = {
						sort: this.state.sort[0].field,
						dir: this.state.sort[0].dir
					};
				}

				this.getPlayersData();
			});
	}

	dataStateChange(state: DataStateChangeEvent) {
		this.state = state;
		this.getPlayersData();

		if (this.state.sort.length) {
			const dir = this.state.sort[0].dir;
			const sort = dir ? this.state.sort[0].field : null;
			this.router.navigate([], { queryParams: { sort, dir } });
		}
	}

	selectionChange(selection) {
		const id = this.data.data[selection.index % 10].jerseyNumber;
		window.open(`/stats/players/${id}`, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
	}

	private getPlayersData() {
		this.playersService.getPlayers(this.sourceUrl, this.state.take, this.state.skip, this.state.sort)
			.subscribe(data => {
				this.data = data;
			});
	}
}
