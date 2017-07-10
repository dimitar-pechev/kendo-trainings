import { ChartsModule } from '@progress/kendo-angular-charts';
import { GridModule } from '@progress/kendo-angular-grid';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'hammerjs';
import { PlayersStatsComponent } from './components/players-stats/players-stats.component';
import { PositionsChartComponent } from './components/positions-chart/positions-chart.component';
import { PlayersGridComponent } from './components/players-grid/players-grid.component';
import { PlayerProfileComponent } from './components/player-profile/player-profile.component';
import { PlayersService } from './services/players.service';
import { PartialsService } from './services/partials.service';
import { DynamicComponentsRoutingModule } from './dynamic-components.routing';

@NgModule({
	imports: [
		CommonModule,
		GridModule,
		ChartsModule,
		DynamicComponentsRoutingModule
	],
	declarations: [
		PlayerProfileComponent,
		PlayersGridComponent,
		PositionsChartComponent,
		PlayersStatsComponent
	],
	entryComponents: [
		PlayerProfileComponent,
		PlayersGridComponent,
		PositionsChartComponent
	],
	providers: [
		PartialsService,
		PlayersService
	]
})
export class DynamicComponentsModule { }
