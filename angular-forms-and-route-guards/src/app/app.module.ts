import { CustomValidators } from './utils/custom-validators';
import { PartialsService } from './services/partials.service';
import { PlayersService } from './services/players.service';
import { UserGuardService } from './guards/user.guard';
import { AdminGuardService } from './guards/admin.guard';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { GridModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';

import { AppComponent } from './components/app.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { PlayersGridComponent } from './components/players-grid/players-grid.component';
import { ChartPartialComponent } from './components/positions-chart/chart-partial.component';
import { PlayersStatsComponent } from './components/players-stats/players-stats.component';
import { PlayerProfileComponent } from './components/player-profile/player-profile.component';
import { SortPipe } from './pipes/sort.pipe';
import { CustomPipePreviewComponent } from './components/custom-pipe-preview/custom-pipe-preview.component';
import { AnimationsComponent } from './components/animations/animations.component';

@NgModule({
	declarations: [
		AppComponent,
		RegisterComponent,
		HomeComponent,
		LoginComponent,
		ProfileComponent,
		AdminComponent,
		PlayersGridComponent,
		ChartPartialComponent,
		PlayersStatsComponent,
		PlayerProfileComponent,
		SortPipe,
		CustomPipePreviewComponent,
		AnimationsComponent
	],
	entryComponents: [
		PlayersGridComponent,
		ChartPartialComponent
	],
	imports: [
		BrowserModule,
		ButtonsModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpModule,
		GridModule,
		ChartsModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true })
	],
	providers: [
		AuthService,
		AdminGuardService,
		UserGuardService,
		PlayersService,
		PartialsService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
