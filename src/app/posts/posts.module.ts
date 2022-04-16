import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostComponent } from './components/post/post.component';
import { PostEditFormComponent } from './components/post-edit-form/post-edit-form.component';
import { CoreModule } from '../core/core.module';
import { PostsSettingsComponent } from './components/posts-settings/posts-settings.component';

@NgModule({
  declarations: [
    PostsPageComponent,
    PostsListComponent,
    PostComponent,
    PostEditFormComponent,
    PostsSettingsComponent,
  ],
  imports: [CommonModule, PostsRoutingModule, CoreModule],
})
export class PostsModule {}
