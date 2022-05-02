import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Data } from '../../models/data.model';
import { PostEditService } from '../../services/post-edit.service';

@Component({
  selector: 'app-posts-list-item',
  templateUrl: './posts-list-item.component.html',
  styleUrls: ['./posts-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsListItemComponent implements OnInit, OnDestroy {
  sub: Subscription | null = null;

  @Input() post: Data | null = null;

  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  @Output() edit: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('editPostButton') editPostButton: ElementRef | null = null;

  @ViewChild('view', { read: ViewContainerRef }) view: ViewContainerRef | null =
    null;

  constructor(
    private readonly cfr: ComponentFactoryResolver,
    private readonly postEditService: PostEditService
  ) {}

  ngOnInit(): void {
    this.sub = this.postEditService.isCancelEditPost$.subscribe(
      (isCancelEditPost) => {
        if (isCancelEditPost) {
          this.cancelEdit();
        }
      }
    );
  }

  async editPost(): Promise<void> {
    (this.editPostButton?.nativeElement as HTMLButtonElement).disabled = true;
    const { PostEditFormComponent } = await import(
      '../post-edit-form/post-edit-form.component'
    );
    const PostEditFormComponentFactory = this.cfr.resolveComponentFactory(
      PostEditFormComponent
    );
    const component = this.view?.createComponent(PostEditFormComponentFactory);
    if (component) {
      component.instance.post = this.post;
    }
    this.edit.emit();
  }

  deletePost(id: number | undefined): void {
    if (id) {
      this.delete.emit(id);
    }
  }

  cancelEdit(): void {
    this.view?.clear();
    (this.editPostButton?.nativeElement as HTMLButtonElement).disabled = false;
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
