import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order, orderTestfactory } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class OrderFacade {
  getOrder(): Observable<Order> {
    return of(orderTestfactory.build());
  }
}
