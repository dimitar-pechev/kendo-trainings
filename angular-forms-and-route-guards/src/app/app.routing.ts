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
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'profile', component: ProfileComponent, canActivate: [UserGuardService] },
	{ path: 'admin', component: AdminComponent, canActivate: [AdminGuardService] }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
