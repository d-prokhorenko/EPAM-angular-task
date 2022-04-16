import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostEditFormComponent } from './components/post-edit-form/post-edit-form.component';
import { PostComponent } from './components/post/post.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';

const routes: Routes = [
  {
    path: '',
    component: PostsPageComponent,
  },
  {
    path: ':id',
    component: PostComponent,
  },
  {
    path: 'edit/:id',
    component: PostEditFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
