import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Data } from '../../models/data.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsPageComponent implements OnInit {
  data: Data[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.dataService.posts$.subscribe((posts) => {
      this.data = posts;
    });
    this.dataService.getPosts();
  }

  deletePost(id: number) {
    this.dataService.deletePost(id);
  }
}
