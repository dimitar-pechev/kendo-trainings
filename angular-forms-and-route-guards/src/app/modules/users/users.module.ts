import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UsersRoutingModule } from './users.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		CommonModule,
		UsersRoutingModule,
		ReactiveFormsModule
	],
	declarations: [
		LoginComponent,
		RegisterComponent,
		ProfileComponent
	]
})
export class UsersModule { }
