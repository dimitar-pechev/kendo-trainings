import { Injectable } from '@angular/core';
import { CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AdminComponent } from './../components/admin/admin.component';

@Injectable()
export class ExitPageGuard implements CanDeactivate<AdminComponent> {
	canDeactivate(component: AdminComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		return confirm('Are you sure you want to leave this page?');
	}
}
