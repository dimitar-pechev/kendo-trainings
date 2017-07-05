import { AnimationsComponent } from './components/animations/animations.component';
import { CustomPipePreviewComponent } from './components/custom-pipe-preview/custom-pipe-preview.component';
import { PlayerProfileComponent } from './components/player-profile/player-profile.component';
import { PlayersStatsComponent } from './components/players-stats/players-stats.component';
import { UserGuardService } from './guards/user.guard';
import { AdminGuardService } from './guards/admin.guard';
import { AdminComponent } from './components/admin/admin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'stats/players/:id', component: PlayerProfileComponent },
	{ path: 'stats/:tab', component: PlayersStatsComponent },
	{ path: 'pipes', component: CustomPipePreviewComponent },
	{ path: 'animations', component: AnimationsComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'profile', component: ProfileComponent, canActivate: [UserGuardService] },
	{ path: 'admin', component: AdminComponent, canActivate: [AdminGuardService] },
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
