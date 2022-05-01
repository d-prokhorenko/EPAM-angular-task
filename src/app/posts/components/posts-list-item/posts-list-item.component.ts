import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data } from '../../models/data.model';

@Component({
  selector: 'app-posts-list-item',
  templateUrl: './posts-list-item.component.html',
  styleUrls: ['./posts-list-item.component.scss'],
})
export class PostsListItemComponent implements OnInit {
  @Input() post: Data | null = null;

  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  deletePost(id: number | undefined): void {
    if (id) {
      this.delete.emit(id);
    }
  }
}
