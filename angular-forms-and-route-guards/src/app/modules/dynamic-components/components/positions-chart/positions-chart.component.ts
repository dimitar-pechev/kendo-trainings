import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartSettings } from './../../models/chart-settings.model';
import { PlayersService } from './../../services/players.service';

@Component({
	selector: 'app-chart-partial',
	templateUrl: './positions-chart.component.html'
})
export class PositionsChartComponent implements OnInit {
	title: string;
	sourceUrl: string;
	chartData: any[];

	constructor(
		private playersService: PlayersService,
		private settings: ChartSettings,
		private router: Router
	) { }

	ngOnInit() {
		this.sourceUrl = this.settings.sourceUrl;
		this.title = this.settings.title;
		this.loadChartData();
	}

	private loadChartData() {
		this.playersService.getPlayersPositionsData(this.sourceUrl)
			.subscribe(data => {
				this.chartData = data;
			});
	}
}
