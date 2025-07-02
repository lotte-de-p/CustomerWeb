import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EasySwitchService {
  submitEasySwitchChoice(_choice: boolean): Observable<void> {
    return of();
  }
}
