import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Data } from '../../models/data.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit, OnDestroy {
  post: Data | undefined = undefined;

  sub: Subscription | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    this.sub = this.route.params.subscribe((p) => {
      this.post = this.dataService.getPost(+p?.['id']);
    });
  }

  deletePost(id: number | undefined): void {
    if (typeof id == 'number') {
      this.dataService.deletePost(id);
      this.router.navigate(['posts']);
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
