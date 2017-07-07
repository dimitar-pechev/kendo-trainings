import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersStatsComponent } from './components/players-stats/players-stats.component';
import { PlayerProfileComponent } from './components/player-profile/player-profile.component';

const routes: Routes = [
	{ path: 'profiles/:id', component: PlayerProfileComponent },
	{ path: 'stats/:tab', component: PlayersStatsComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DynamicComponentsRoutingModule { }
