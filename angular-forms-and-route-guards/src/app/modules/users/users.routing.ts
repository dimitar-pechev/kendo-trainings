import { UserGuard } from './../core/guards/user.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'profile', component: ProfileComponent, canActivate: [UserGuard] }
];

@NgModule({
	imports: [RouterModule.forChild(routes)]
})
export class UsersRoutingModule { }
