import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsListComponent implements OnInit, OnDestroy, OnChanges {
  filterValue: string = '';

  sub: Subscription | null = null;

  @Input() data: Data[] = [];

  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private readonly filterService: FilterService,
    private readonly cd: ChangeDetectorRef
  ) {
    this.cd.detach();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.cd.reattach();

    setTimeout(() => {
      this.cd.detach();
    });
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

  editPost() {
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
