import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function confirmPasswordValidator(passwordControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (passwordControl?.value !== control?.value) {
            return {
                passwordMismatch: true
            }
        }

        return null;
    }
}

const passwordRegularExpression: RegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

export function passwordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (!control?.value) {
            return null;
        }

        if (!passwordRegularExpression.test(control.value)) {
            return {
                passwordStrength: true
            }
        }

        return null;
    }
}
