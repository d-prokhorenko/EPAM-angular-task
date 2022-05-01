import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-posts-settings',
  templateUrl: './posts-settings.component.html',
  styleUrls: ['./posts-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsSettingsComponent {
  constructor(private readonly filterService: FilterService) {}

  onFilter(e: Event, value: string): void {
    e.preventDefault();
    this.filterService.filterValue$.next(value);
  }
}
