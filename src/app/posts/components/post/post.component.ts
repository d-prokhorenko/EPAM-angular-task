import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from '../../models/data.model';
import { data } from 'src/app/data.mock';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit {
  post: Data | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.post = data.find((el) => el.id === +p['id']) || null;
    });
  }

  editPost(id: number | undefined): void {
    if (id) {
      this.router.navigate(['posts', 'edit', id]);
    }
  }
}
