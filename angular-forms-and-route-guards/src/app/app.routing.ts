import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '', loadChildren: 'app/modules/home/home.module#HomeModule'},
	{ path: 'users', loadChildren: 'app/modules/users/users.module#UsersModule'},
	{ path: 'admin', loadChildren: 'app/modules/admin/admin.module#AdminModule'},
	{ path: 'players', loadChildren: 'app/modules/dynamic-components/dynamic-components.module#DynamicComponentsModule'},
	{ path: 'custom', loadChildren: 'app/modules/custom-elements/custom-elements.module#CustomElementsModule' },
	{ path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
