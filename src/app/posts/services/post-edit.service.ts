import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostEditService {
  isCancelEditPost$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
}
