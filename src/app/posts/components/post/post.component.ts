import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from '../../models/data.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit {
  post: Data | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.post = this.dataService.getPost(+p?.['id']);
    });
  }

  editPost(id: number | undefined): void {
    if (id) {
      this.router.navigate(['posts', 'edit', id]);
    }
  }
}
