import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data } from '../../models/data.model';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  filterValue: string = '';

  @Input() data: Data[] = [];

  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  constructor(private readonly filterService: FilterService) {}

  ngOnInit(): void {
    this.filterService.filterValue$.subscribe((value) => {
      this.filterValue = value;
    });
  }

  deletePost(id: number | undefined): void {
    if (id) {
      this.delete.emit(id);
    }
  }
}
