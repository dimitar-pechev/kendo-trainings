import { UserGuardService } from './guards/user-guard.service';
import { AdminGuardService } from './guards/admin-guard.service';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './components/app.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
	declarations: [
		AppComponent,
		RegisterComponent,
		HomeComponent,
		LoginComponent,
		ProfileComponent,
		AdminComponent
	],
	imports: [
		BrowserModule,
		ButtonsModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpModule,
		GridModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService)
	],
	providers: [
		AuthService,
		AdminGuardService,
		UserGuardService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
