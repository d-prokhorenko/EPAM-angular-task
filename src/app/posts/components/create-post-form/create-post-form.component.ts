import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatePostFormComponent implements OnInit {
  form: FormGroup | null = null;

  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly dataService: DataService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      imageUrl: [''],
      date: ['', [Validators.required]],
      shortDescription: ['', [Validators.required]],
      content: ['', [Validators.required]],
      author: ['', [Validators.required]],
      sourceUrl: [''],
    });
  }

  submit(): void {
    if (this.form?.valid) {
      const newPost = this.form?.value;
      newPost.custom = true;
      this.dataService.createPost(newPost);
      this.router.navigate(['posts']);
    } else {
      throw new Error('form is invalid');
    }
  }

  cancel(): void {
    this.router.navigate(['posts']);
  }
}
