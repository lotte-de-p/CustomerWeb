import { MapperInterface } from '@telenet/ng-lib-shared';
import { RawSimActivationStatusInterface } from '../../interfaces/raw-sim-activation-status.interface';
import { SimActivationStatusInterface } from '../../interfaces/sim-activation-status.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SimActivationStatusMapper
  implements MapperInterface<RawSimActivationStatusInterface, SimActivationStatusInterface>
{
  toModel(rawSimActivationStatusInterface: RawSimActivationStatusInterface): SimActivationStatusInterface {
    return { status: rawSimActivationStatusInterface.status } as SimActivationStatusInterface;
  }
}
