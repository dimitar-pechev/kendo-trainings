import { Router } from '@angular/router';
import { AuthService } from './../../../core/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
	form: FormGroup;
	showErrorMessage: boolean;
	isLoginButtonDisabled: boolean;

	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService,
		private router: Router
	) { }

	ngOnInit() {
		this.showErrorMessage = false;
		this.isLoginButtonDisabled = false;
		this.form = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	submitForm(form: FormGroup) {
		this.isLoginButtonDisabled = true;

		this.authService.login(form.value)
			.subscribe((isLoginSuccessful: boolean) => {
				if (!isLoginSuccessful) {
					this.showErrorMessage = true;
					this.isLoginButtonDisabled = false;
					return;
				}

				this.router.navigate(['/profile']);
			});
	}
}
