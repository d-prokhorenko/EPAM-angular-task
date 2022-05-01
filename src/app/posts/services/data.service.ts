import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { data } from 'src/app/data.mock';
import { Data } from '../models/data.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  posts: Data[] = [];

  posts$ = new Subject<Data[]>();

  getPosts() {
    this.posts = data;
    this.posts$.next(this.posts);
  }

  getPost(id: number): Data | undefined {
    return this.posts.find((p) => p.id === id);
  }

  deletePost(id: number) {
    this.posts = this.posts.filter((p) => p.id !== id);
    this.posts$.next(this.posts);
  }
}
