import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Data } from '../../models/data.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent {
  @Input() data: Data[] = [];

  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  deletePost(id: number | undefined): void {
    if (id) {
      this.delete.emit(id);
    }
  }
}
