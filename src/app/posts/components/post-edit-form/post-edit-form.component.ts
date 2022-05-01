import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewContainerRef,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Data } from '../../models/data.model';

@Component({
  selector: 'app-post-edit-form',
  templateUrl: './post-edit-form.component.html',
  styleUrls: ['./post-edit-form.component.scss'],
})
export class PostEditFormComponent implements OnInit {
  form: FormGroup = this.fb.group({});
  _post: Data | null = null;

  @Input() set post(post: Data | null) {
    this._post = post;
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private view: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      title: [this._post?.title],
      imageUrl: [this._post?.imageUrl],
      date: [this._post?.date],
      shortDescription: [this._post?.shortDescription],
      content: [this._post?.content],
      author: [this._post?.author],
      sourceUrl: [this._post?.sourceUrl],
    });
  }

  save() {
    console.log(this.form);
  }

  cancel() {
    console.log('cancel');
  }
}
