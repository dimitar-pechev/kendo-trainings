import { CustomValidators } from './../shared/custom-validators';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
	form: FormGroup;
	minLengthUsername: number;
	maxLengthUsername: number;
	minLengthPassword: number;
	maxLengthPassword: number;
	minLengthFullName: number;
	maxLengthFullName: number;
	usernameRegexPattern: string;
	fullNameRegexPattern: string;


	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService,
		private router: Router
	) { }

	ngOnInit() {
		this.minLengthUsername = 6;
		this.maxLengthUsername = 15;
		this.minLengthPassword = 6;
		this.maxLengthPassword = 15;
		this.minLengthFullName = 5;
		this.maxLengthFullName = 25;
		this.usernameRegexPattern = '[a-zA-Z0-9]+';
		this.fullNameRegexPattern = '[a-zA-Z]+';

		this.form = this.formBuilder.group({
			username: ['', Validators.compose([
				Validators.required,
				Validators.minLength(this.minLengthUsername),
				Validators.maxLength(this.maxLengthUsername),
				Validators.pattern(this.usernameRegexPattern)]
			)],
			passwords: this.formBuilder.group({
				password: ['', Validators.compose([
					Validators.required,
					Validators.minLength(this.minLengthPassword),
					Validators.maxLength(this.maxLengthPassword)
				])],
				confirmPassword: ['', Validators.required],
			}, {
                validator: CustomValidators
                        .equality
                        .bind(CustomValidators, 'password', 'confirmPassword')
            }),
			fullName: ['', Validators.compose([
				Validators.required,
				Validators.minLength(this.minLengthFullName),
				Validators.maxLength(this.maxLengthFullName),
				Validators.pattern(this.fullNameRegexPattern)
			])],
			email: ['', Validators.compose([
				Validators.required,
				Validators.email
			])],
			admin: [false, Validators.required]
		});
	}


	submitForm(form: FormGroup) {
		this.authService.register(form.value)
			.subscribe(res => {
				this.router.navigate(['/profile']);

			});
	}
}
