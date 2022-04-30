import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Data } from '../../models/data.model';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit, OnDestroy {
  filterValue: string = '';

  sub: Subscription | null = null;

  @Input() data: Data[] = [];

  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  constructor(private readonly filterService: FilterService) {}

  ngOnInit(): void {
    this.sub = this.filterService.filterValue$.subscribe((value) => {
      this.filterValue = value;
    });
  }

  deletePost(id: number | undefined): void {
    if (id) {
      this.delete.emit(id);
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
