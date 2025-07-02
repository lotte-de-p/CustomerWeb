import { inject, Injectable } from '@angular/core';
import { ProductDatalayerService } from '../../shared/services/datalayer/product-datalayer.service';
import { EventTypeEnum } from '@telenet/ng-lib-datalayer';
import { SalesOrder } from '../../shared/models/sales-order/sales-order.model';
import { ProductDatalayerConstants } from '../../shared/constants/product-datalayer.constants';
import { LineChangeTariffPlanConstants } from '../constants/line-change-tariff-plan.constants';

@Injectable({
  providedIn: 'root',
})
export class ChangeTariffPlanEventingService {
  readonly #productDatalayerService = inject(ProductDatalayerService);

  SCRemovedEvent(salesOrder: SalesOrder, hasActiveTariff: boolean) {
    this.#productDatalayerService.addEventToUDL(
      LineChangeTariffPlanConstants.EVENT_NAME_LINE_DETAILS_CHANGED,
      EventTypeEnum.EVENT_TYPE_SC_REMOVE,
      salesOrder,
      true,
      hasActiveTariff,
      false
    );
  }

  selfServiceFlowEndEvent(salesOrder: SalesOrder, hasActiveTariff: boolean) {
    this.#productDatalayerService.addEventToUDL(
      LineChangeTariffPlanConstants.EVENT_NAME_CHANGE_LINE_DETAILS_ENDED,
      ProductDatalayerConstants.EVENT_TYPE_SELF_SERVICE_FLOW_END,
      salesOrder,
      false,
      hasActiveTariff,
      false
    );
  }
}
