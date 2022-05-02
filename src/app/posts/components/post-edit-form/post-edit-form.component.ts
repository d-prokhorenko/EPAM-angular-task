import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Data } from '../../models/data.model';
import { DataService } from '../../services/data.service';
import { PostEditService } from '../../services/post-edit.service';

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
    private readonly fb: FormBuilder,
    private readonly dataService: DataService,
    private readonly postEditService: PostEditService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
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

  save(): void {
    const newPost = this.form.value;
    newPost.id = this._post?.id;
    this.dataService.updatePost(this.form.value);
  }

  onCancel(): void {
    this.postEditService.isCancelEditPost$.next(true);
  }
}
