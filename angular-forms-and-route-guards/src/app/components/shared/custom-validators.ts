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

    static equality(firstFieldName: string, secondFieldName: string, control: AbstractControl) {
		const firstField = control.get(firstFieldName);
		const secondField = control.get(secondFieldName);

		if (firstField.value !== secondField.value) {
            secondField.setErrors({ [firstFieldName]: true });
		}
	}
}
