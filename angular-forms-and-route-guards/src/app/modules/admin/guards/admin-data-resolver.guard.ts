import { AuthService } from './../../core/services/auth.service';
import { Injectable } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { Resolve } from '@angular/router';
import { AdminComponent } from './../components/admin/admin.component';

@Injectable()
export class AdminDataResolver implements Resolve<GridDataResult> {
	constructor(private authService: AuthService) { }

	resolve() {
		return this.authService.getAllUsers(10, 0);
	}
}
