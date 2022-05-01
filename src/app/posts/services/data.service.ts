import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { data } from 'src/app/data.mock';
import { Data } from '../models/data.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  posts: Data[] = data;

  posts$ = new BehaviorSubject<Data[]>(this.posts);

  getPosts() {
    this.triggerSubject();
  }

  getPost(id: number): Data | undefined {
    return this.posts.find((p) => p.id === id);
  }

  deletePost(id: number) {
    this.posts = this.posts.filter((p) => p.id !== id);
    this.triggerSubject();
  }

  updatePost(updatedPost: Data) {
    const oldPostIndex = this.posts.findIndex((p) => p.id === updatedPost.id);
    this.posts[oldPostIndex] = updatedPost;
    this.triggerSubject();
  }

  triggerSubject() {
    this.posts$.next([...this.posts]);
  }
}
