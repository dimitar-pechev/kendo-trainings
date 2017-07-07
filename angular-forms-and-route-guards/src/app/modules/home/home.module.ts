import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';

@NgModule({
	imports: [
		CommonModule,
		HomeRoutingModule
	],
	declarations: [
		HomeComponent
	]
})
export class HomeModule { }
