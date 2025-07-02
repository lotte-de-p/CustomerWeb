import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FormErrorService {
  submit$ = new Subject<Event | null>();
  reset$ = new Subject<Event | null>();
}
