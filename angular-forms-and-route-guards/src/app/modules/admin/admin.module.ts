import { GridModule } from '@progress/kendo-angular-grid';
import { AdminRoutingModule } from './admin.routing';
import { AdminComponent } from './components/admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		CommonModule,
		AdminRoutingModule,
		GridModule
	],
	declarations: [
		AdminComponent
	]
})
export class AdminModule { }
