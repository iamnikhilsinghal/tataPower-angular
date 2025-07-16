import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

function noNumbersValidator(element: AbstractControl) {
  const hasNumber = /\d/.test(element.value);
  return hasNumber ? { noNumbers: true } : null;
}

@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive.html',
  styleUrl: './reactive.scss',
})
export class Reactive {
  loginForm: any;
  isFormSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      fname: [
        '',
        [Validators.required, Validators.minLength(4), noNumbersValidator],
      ],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submitForm() {
    this.isFormSubmitted = true;
    if (this.loginForm.valid) {
      console.log('Form data:', this.loginForm.value);
    } else {
      console.log('form is invalid');
    }
  }
}
