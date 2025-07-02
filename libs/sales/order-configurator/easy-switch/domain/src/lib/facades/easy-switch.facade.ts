import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EasySwitchFacade {
  submitChoice(_choice: boolean) {
    return of(true);
  }
}
