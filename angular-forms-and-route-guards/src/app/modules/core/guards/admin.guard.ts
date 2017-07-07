import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminGuard implements CanActivate {
	constructor(private router: Router, private authService: AuthService) { }

	canActivate() {
		return this.authService.isAdmin();
	}
}
