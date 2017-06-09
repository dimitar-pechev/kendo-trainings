import { Router, CanActivate } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminGuardService implements CanActivate {
	constructor(private router: Router, private authService: AuthService) { }

	canActivate() {
		return this.authService.isAdmin();
	}
}
