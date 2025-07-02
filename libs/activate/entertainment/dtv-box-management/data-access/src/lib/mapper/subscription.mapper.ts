import { Injectable } from '@angular/core';
import { DtvBox } from '../entities/dtv-box.model';
import { RawDtvBoxSubscription } from '../entities/raw/raw-dtv-box-subscription.model';
import { RawDtvBox } from '../entities/raw/raw-dtv-box.model';
import { DtvBoxSubscription } from '../entities/subscription.model';
import { NormalizationService } from '@telenet/ng-lib-page';

@Injectable({ providedIn: 'root' })
export class DtvBoxSubscriptionMapper {
  constructor(private readonly normalizationService: NormalizationService) {}

  toModel(rawSubscriptions: RawDtvBoxSubscription[]): DtvBoxSubscription[] {
    return rawSubscriptions.map((raw: RawDtvBoxSubscription) => ({
      id: raw.id,
      identifier: raw.identifier,
      addressId: raw.addressId,
      dtvBoxes: this.mapDtvBoxes(raw.devices),
    }));
  }

  mapDtvBoxes(dtvBoxes: RawDtvBox[]): DtvBox[] {
    return dtvBoxes.map((raw: RawDtvBox) => ({
      id: raw.id,
      name: raw.name,
      type: raw.type,
      saleType: raw.saleType,
      macAddress: raw.macAddress,
      serialNumber: raw.serialNumber,
      modelNumber: raw.modelNumber,
      modelImageName: this.getModelImageName(raw.modelNumber),
    }));
  }

  getModelImageName(modelNumber: string | undefined): string {
    return modelNumber ? this.normalizationService.normalizeKey(modelNumber) + '.png' : 'dtv-default.png';
  }
}
