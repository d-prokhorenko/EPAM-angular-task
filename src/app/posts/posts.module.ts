import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostComponent } from './components/post/post.component';
import { PostEditFormComponent } from './components/post-edit-form/post-edit-form.component';
import { CoreModule } from '../core/core.module';
import { PostsSettingsComponent } from './components/posts-settings/posts-settings.component';
import { CreatePostFormComponent } from './components/create-post-form/create-post-form.component';
import { PostsListItemComponent } from './components/posts-list-item/posts-list-item.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    PostsPageComponent,
    PostsListComponent,
    PostComponent,
    PostEditFormComponent,
    PostsSettingsComponent,
    CreatePostFormComponent,
    PostsListItemComponent,
    FilterPipe,
  ],
  imports: [CommonModule, PostsRoutingModule, CoreModule, ReactiveFormsModule],
})
export class PostsModule {}
