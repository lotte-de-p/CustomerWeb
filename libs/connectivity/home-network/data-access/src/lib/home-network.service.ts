import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HomeNetwork } from './home-network.model';

@Injectable({
  providedIn: 'root',
})
export class HomeNetworkService {
  getHomeNetworkList(): Observable<HomeNetwork[]> {
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
