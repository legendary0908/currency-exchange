import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PasswordInputComponent } from './password-input/password-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PasswordValidationComponent } from './password-validation.component';

@NgModule({
  declarations: [
    PasswordValidationComponent,
    PasswordInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    PasswordValidationComponent
  ],
  providers: [],
  bootstrap: [PasswordValidationComponent]
})
export class PasswordValidationModule { }
