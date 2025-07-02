import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Engagement } from './engagement.model';

@Injectable({
  providedIn: 'root',
})
export class EngagementService {
  getEngagementList(): Observable<Engagement[]> {
    return of([
      {
        id: '1',
        name: 'Test1',
      },
      {
        id: '2',
        name: 'Test2',
      },
      {
        id: '3',
        name: 'Test3',
      },
    ]);
  }
}
