import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
})
export class UserDetail {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    console.log('new id', this.activatedRoute.snapshot.params['id']);
  }
}
