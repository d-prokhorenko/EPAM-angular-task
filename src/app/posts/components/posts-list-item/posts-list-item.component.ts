import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Data } from '../../models/data.model';

@Component({
  selector: 'app-posts-list-item',
  templateUrl: './posts-list-item.component.html',
  styleUrls: ['./posts-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsListItemComponent {
  @Input() post: Data | null = null;

  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  @Output() edit: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('editPostButton') editPostButton: ElementRef | null = null;

  @ViewChild('view', { read: ViewContainerRef }) view: ViewContainerRef | null =
    null;

  constructor(private readonly cfr: ComponentFactoryResolver) {}

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
}
