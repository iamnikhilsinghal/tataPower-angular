import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven.html',
  styleUrl: './template-driven.scss',
})
export class TemplateDriven {
  userDetails = {
    fname: '',
    email: '',
  };

  submitForm(form: any): void {
    if (form.valid) {
      console.log('Form data:', this.userDetails);
    } else {
      console.log('form is invalid');
    }
  }
}
