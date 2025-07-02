import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadHardwareDiscount } from './hardware-discount.actions';
import { HardwareDiscountState } from './hardware-discount.reducer';
import {
  selectHardwareDiscountError,
  selectHardwareDiscountOverview,
  selectHardwareDiscountLoading,
} from './hardware-discount.selectors';
import { HardwareDiscountDatalayerEvent } from '../entities/hardware-discount.interface';
import { HardwareDiscountDatalayerService } from '../services/hardware-discount-datalayer.service';
import { DataLayerAttributes } from '@telenet/ng-lib-datalayer';

@Injectable({ providedIn: 'root' })
export class HardwareDiscountFacade {
  private readonly store = inject(Store<HardwareDiscountState>);
  private readonly hardwareDiscountDatalayerService = inject(HardwareDiscountDatalayerService);

  selectHardwareDiscountOverview$ = this.store.select(selectHardwareDiscountOverview);
  selectHardwareDiscountError$ = this.store.select(selectHardwareDiscountError);
  selectHardwareDiscountLoading$ = this.store.select(selectHardwareDiscountLoading);

  loadHardwareDiscount(): void {
    this.store.dispatch(loadHardwareDiscount());
  }

  sendDatalayerEvent(event: HardwareDiscountDatalayerEvent, attributes: DataLayerAttributes) {
    this.hardwareDiscountDatalayerService.sendDataLayerEventWithAttributes(event, attributes);
  }
}
