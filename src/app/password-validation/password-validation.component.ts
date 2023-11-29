import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { passwordStrengthValidator, confirmPasswordValidator } from './password-input/password-input.service'

@Component({
    selector: 'password-validation',
    templateUrl: './password-validation.component.html',
    styleUrls: ['./password-validation.component.css']
})
export class PasswordValidationComponent implements OnInit {
    formGroup: FormGroup ;

    confirmPasswordMessage = 'The passwords do not match.';
    invalidPasswordMessage = 'Must contain at least 1 number, 1 uppercase letter, 1 lowercase letter and at least 8 characters.';


    constructor(private _formBuilder: FormBuilder) {
      this.formGroup = new FormGroup({
        // Define your form controls here
      });
    }

    ngOnInit() {
        const passwordControl = this._formBuilder.control({
            disabled: false,
            value: null
        }, [Validators.required, Validators.minLength(8), passwordStrengthValidator()]);

        const confirmPasswordControl = this._formBuilder.control({
            disabled: false,
            value: null
        }, [Validators.required, Validators.minLength(8), confirmPasswordValidator(passwordControl)]);

        this.formGroup = this._formBuilder.group({
            confirm: confirmPasswordControl,
            password: passwordControl
        });
    }
}
