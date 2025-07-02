import { MapperInterface } from '@telenet/ng-lib-shared';
import { Injectable } from '@angular/core';
import { RawRequestSuccessInterface } from '../interfaces/raw-request-success.interface';

@Injectable({
  providedIn: 'root',
})
export class RequestSuccessMapper implements MapperInterface<RawRequestSuccessInterface, boolean> {
  toModel(rawRequestSuccessInterface: RawRequestSuccessInterface): boolean {
    if (rawRequestSuccessInterface) {
      return rawRequestSuccessInterface?.status === 204;
    }
    return false;
  }
}
