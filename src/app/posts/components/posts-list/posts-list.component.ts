import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Data } from '../../models/data.model';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit, OnDestroy, OnChanges {
  filterValue: string = '';

  sub: Subscription | null = null;

  @Input() data: Data[] = [];

  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  constructor(private readonly filterService: FilterService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

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
