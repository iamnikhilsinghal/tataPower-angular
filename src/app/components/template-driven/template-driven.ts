import { Component } from '@angular/core';
import { CanComponentDeactivate } from '../../guards/auth-guard';

@Component({
  selector: 'app-template-driven',
  imports: [],
  templateUrl: './template-driven.html',
  styleUrl: './template-driven.scss',
})
export class TemplateDriven implements CanComponentDeactivate {
  isDataChanged = false;

  canDeactivate(): boolean {
    if (this.isDataChanged) {
      return confirm(
        'You have unsaved changes. Are you sure you want to leave?'
      );
    }
    return true;
  }
}
