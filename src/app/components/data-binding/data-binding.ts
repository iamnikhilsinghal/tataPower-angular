import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss',
})
export class DataBinding {
  city = 'Noida';
  inputType = 'number';
  isLoginDisabled = true;
  user = '';

  handleRegister() {
    this.isLoginDisabled = false;
  }
}
