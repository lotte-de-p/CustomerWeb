import { inject, Injectable } from '@angular/core';
import { OrderItem } from '../../shared/models/sales-order/order-item.model';
import { Option } from '../../shared/models/option.model';
import { TariffPlanOption } from '../interfaces/tariff-plan-option.interface';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { LineChangeTariffPlanConstants } from '../constants/line-change-tariff-plan.constants';
import { SpecificationsService } from '../services/specifications.service';
import { OmapiProductInfo } from '../../shared/interfaces/omapi-products.interface';

@Injectable({
  providedIn: 'root',
})
export class TariffPlanOptionMapper {
  readonly #specificationsService = inject(SpecificationsService);

  public mapNonDisconnectedTariffPlanOptions(items: OrderItem[] | Option[]): TariffPlanOption[] {
    return items
      .filter((item) => item.status !== LineChangeTariffPlanConstants.DISCONNECT_STATUS)
      .map(this.mapToTariffPlanOption());
  }

  public mapDisconnectedTariffPlanOptions(items: OrderItem[] | Option[]): TariffPlanOption[] {
    return items
      .filter((item) => item.status === LineChangeTariffPlanConstants.DISCONNECT_STATUS)
      .map(this.mapToTariffPlanOption());
  }

  public mapToTariffPlanOption() {
    return (option: Option | OrderItem) =>
      ({
        volume: this.getVolume(option.productInfo),
        shortDescription: option instanceof Option ? option.label : option.name,
      }) as TariffPlanOption;
  }

  private getVolume(mappedSpec: OmapiProductInfo | OmapiProduct): string {
    const showFullSpec = LineChangeTariffPlanConstants.FULL_SPECS_LINE_OPTIONS.includes(mappedSpec.productId);
    const service = mappedSpec.services[0];
    const serviceSpecifications = service.specifications[0];
    return showFullSpec
      ? this.#specificationsService.retrieveAllSpecData(mappedSpec)
      : service && serviceSpecifications && serviceSpecifications.value + ' ' + serviceSpecifications.unit;
  }
}
