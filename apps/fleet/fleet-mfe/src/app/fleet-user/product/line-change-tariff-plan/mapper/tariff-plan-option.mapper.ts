import { inject, Injectable } from '@angular/core';
import { Option } from '../../../shared/models/product.model';
import { TariffPlanOption } from '../interfaces/tariff-plan-option.interface';
import { LineChangeTariffPlanConstants } from '../../shared/constants/line-change-tariff-plan.constants';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { SpecificationsService } from '../../../shared/services/product/specifications.service';
import { OrderItem } from '../../../shared/models/order-item.model';

@Injectable()
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
        shortDescription: option.productInfo?.shortDescription?.localizedContent?.name,
      }) as TariffPlanOption;
  }

  private getVolume(mappedSpec: OmapiProduct): string {
    const showFullSpec = LineChangeTariffPlanConstants.FULL_SPECS_LINE_OPTIONS.includes(mappedSpec.productId);
    const service = mappedSpec.services[0];
    const serviceSpecifications = service.specifications[0];
    return showFullSpec
      ? this.#specificationsService.retrieveAllSpecData(mappedSpec)
      : service && serviceSpecifications && serviceSpecifications.value + ' ' + serviceSpecifications.unit;
  }
}
