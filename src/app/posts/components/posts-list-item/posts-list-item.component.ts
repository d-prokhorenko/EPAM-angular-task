import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  Output,
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

  constructor(
    private readonly cfr: ComponentFactoryResolver,
    private readonly view: ViewContainerRef,
    private readonly cd: ChangeDetectorRef
  ) {}

  async editPost(event: Event) {
    (event.target as HTMLButtonElement).disabled = true;
    const { PostEditFormComponent } = await import(
      '../post-edit-form/post-edit-form.component'
    );
    const PostEditFormComponentFactory = this.cfr.resolveComponentFactory(
      PostEditFormComponent
    );
    const component = this.view.createComponent(PostEditFormComponentFactory);
    component.instance.post = this.post;
    this.edit.emit();
  }

  deletePost(id: number | undefined): void {
    if (id) {
      this.delete.emit(id);
    }
  }
}
