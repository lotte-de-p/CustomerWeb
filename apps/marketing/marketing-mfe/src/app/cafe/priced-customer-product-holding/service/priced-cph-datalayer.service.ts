import { Injectable, inject } from '@angular/core';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { PricedCphConstants } from '../util/priced-cph.constants';

@Injectable({ providedIn: 'root' })
export class PricedCphDatalayerService {
  private readonly dataLayerService = inject(DataLayerService);
  private readonly category = this.dataLayerService.createCategory('general');
  private readonly viewedEventInfo = this.dataLayerService.createEventInfo(
    'Priced product holding banner viewed',
    'impression',
    [PricedCphConstants.MESSAGE_GROUP]
  );
  private readonly openedEventInfo = this.dataLayerService.createEventInfo(
    'Priced product holding banner opened',
    'click',
    [PricedCphConstants.MESSAGE_GROUP]
  );

  public pushComponentViewed(): void {
    this.dataLayerService.sendEvent({ eventInfo: this.viewedEventInfo, attributes: {}, category: this.category });
  }

  public pushComponentOpened(): void {
    this.dataLayerService.sendEvent({ eventInfo: this.openedEventInfo, attributes: {}, category: this.category });
  }
}
