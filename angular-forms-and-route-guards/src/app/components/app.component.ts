import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	isLoggedIn: boolean;
	isAdmin: boolean;
	title: string;

	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit() {
		this.authService.checkLogin()
			.subscribe(isLoggedIn => {
				this.isLoggedIn = isLoggedIn;
			});

		this.isAdmin = this.authService.isAdmin();

		this.authService.verifyUser();
	}

	logout() {
		localStorage.clear();
		this.isAdmin = false;
		this.isLoggedIn = false;
		this.router.navigate(['/home']);
	}
}
