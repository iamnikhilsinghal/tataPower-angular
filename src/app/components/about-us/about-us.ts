import { Component } from '@angular/core';
import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'app-about-us',
  imports: [Highlight],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {}
