import { PlayersService } from './../../services/players.service';
import { Component, OnInit, Input, Injector } from '@angular/core';

@Component({
	selector: 'app-chart-partial',
	templateUrl: './chart-partial.component.html'
})
export class ChartPartialComponent implements OnInit {
	title: string;
	sourceUrl: string;
	chartData: any[];

	constructor(
		private playersService: PlayersService,
		private injector: Injector
	) { }

	ngOnInit() {
		this.sourceUrl = this.injector.get('sourceUrl');
		this.title = this.injector.get('title');
		this.loadChartData();
	}

	private loadChartData() {
		this.playersService.getPlayersPositionsData(this.sourceUrl)
			.subscribe(data => {
				this.chartData = data;
			});
	}
}
