import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  isPostsPage: boolean = true;

  toggleLinks(): void {
    this.isPostsPage = !this.isPostsPage;
  }
}
