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

  createPost(post: Data) {
    post.id = this.posts.length + 1;
    this.posts.unshift(post);
    console.log(this.posts);

    this.triggerSubject();
  }

  toggleCustomPosts(isCustom: boolean) {
    isCustom
      ? this.posts$.next(this.posts.filter((p) => p.custom))
      : this.triggerSubject();
  }

  triggerSubject() {
    this.posts$.next([...this.posts]);
  }
}
