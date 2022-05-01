import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { data } from '../../../data.mock';
import { Data } from '../../models/data.model';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsPageComponent implements OnInit {
  data: Data[] = [];

  constructor() {}

  ngOnInit(): void {
    this.data = data;
  }

  deletePost(id: number): void {
    this.data = this.data.filter((post) => post.id !== id);
  }
}
