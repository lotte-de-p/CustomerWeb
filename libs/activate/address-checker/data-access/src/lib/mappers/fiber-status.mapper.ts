import { MapperInterface } from '@telenet/ng-lib-shared';
import { FiberStatusEnum } from '../models/fiber-status.enum';
import { Injectable } from '@angular/core';
import { RawFiberStatusInterface } from '../interfaces/raw-fiber-status.interface';

@Injectable({
  providedIn: 'root',
})
export class FiberStatusMapper implements MapperInterface<RawFiberStatusInterface, FiberStatusEnum> {
  toModel(rawFiberStatusInterface: RawFiberStatusInterface): FiberStatusEnum {
    return FiberStatusEnum[rawFiberStatusInterface.eligible as keyof typeof FiberStatusEnum];
  }
}
