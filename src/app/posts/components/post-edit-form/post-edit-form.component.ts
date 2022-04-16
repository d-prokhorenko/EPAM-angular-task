import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-edit-form',
  templateUrl: './post-edit-form.component.html',
  styleUrls: ['./post-edit-form.component.scss'],
})
export class PostEditFormComponent {
  constructor(private router: Router) {}

  cancel() {
    this.router.navigate(['posts']);
  }
}
