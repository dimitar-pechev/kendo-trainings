import { AdminDataResolver } from './guards/admin-data-resolver.guard';
import { AdminGuard } from './../core/guards/admin.guard';
import { ExitPageGuard } from './guards/exit-page.guard';
import { AdminComponent } from './components/admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanDeactivate } from '@angular/router';

const routes: Routes = [
	{ path: 'home', component: AdminComponent, resolve: [AdminDataResolver], canActivate: [AdminGuard], canDeactivate: [ExitPageGuard] }
];

@NgModule({
	imports: [RouterModule.forChild(routes)]
})
export class AdminRoutingModule { }
