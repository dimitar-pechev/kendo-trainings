import { AdminComponent } from './components/admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: 'home', component: AdminComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)]
})
export class AdminRoutingModule { }
