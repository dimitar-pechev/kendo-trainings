import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
	user: Object;
	constructor(private authService: AuthService) { }

	ngOnInit() {
		this.user = this.authService.getUserInfo();
	}
}
