import { MapperInterface } from '@telenet/ng-lib-shared';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginCustomerNameMapper implements MapperInterface<null, null> {
  toModel() {
    return null;
  }
}
