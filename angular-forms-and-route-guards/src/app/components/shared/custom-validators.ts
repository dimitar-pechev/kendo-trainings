import { AbstractControl } from '@angular/forms';

export class CustomValidators {
	static password(control: AbstractControl) {
		const password = control.get('password').value;
		const confirmPassword = control.get('confirmPassword').value;
		if (password !== confirmPassword) {
			control.get('confirmPassword').setErrors({ password: true })
		} else {
			return null
		}
	}
}
