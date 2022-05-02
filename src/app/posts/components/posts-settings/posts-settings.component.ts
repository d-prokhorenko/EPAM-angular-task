import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-posts-settings',
  templateUrl: './posts-settings.component.html',
  styleUrls: ['./posts-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsSettingsComponent {
  constructor(
    private readonly filterService: FilterService,
    private readonly dataService: DataService
  ) {}

  onFilter(e: Event, value: string): void {
    e.preventDefault();
    this.filterService.filterValue$.next(value);
  }

  showCustomPosts(event: Event): void {
    this.dataService.toggleCustomPosts(
      (event.target as HTMLInputElement).checked
    );
  }
}
