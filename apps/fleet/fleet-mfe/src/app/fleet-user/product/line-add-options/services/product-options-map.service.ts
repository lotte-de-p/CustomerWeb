import { Injectable } from '@angular/core';
import each from 'lodash-es/each';
import sortBy from 'lodash-es/sortBy';
import groupBy from 'lodash-es/groupBy';
import { OmapiProduct, ServiceInterface, SpecificationInterface } from '@telenet/ng-lib-omapi';
import { LineOption } from '../models/line-option.model';
import { GroupedOptions } from '../models/grouped-options.model';
import { EligibleProductInterface } from '../../../shared/interfaces/eligible-product.interface';
import { ProductConstants } from '../../../shared/constants/product/product.constant';
import { OptionProductInterface } from '../../../shared/interfaces/option-products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductOptionsMapService {
  public groupOptionsByCategory(response: EligibleProductInterface[]) {
    const groupedOptions = this.getGroupedOptions(response[0].optionProducts);
    const categorisedOptions: GroupedOptions[] = [];
    each(groupedOptions, (value: OptionProductInterface[], key: string) => {
      const categorisedOption: GroupedOptions = {
        category: key,
      } as GroupedOptions;
      const lineOptions: LineOption[] = [];
      const models: OptionProductInterface[] = this.sortOptionsByWeight(value);
      each(models, (item: OptionProductInterface) => {
        const isFullSpec: boolean = ProductConstants.FULL_SPECS_LINE_OPTIONS.includes(item.productInfo.productId);
        const hasServices: boolean = !!item.productInfo.services[0] && !!item.productInfo.services[0].specifications[0];
        let productVolume;
        if (isFullSpec) {
          productVolume = this.retrieveAllSpecData(item.productInfo);
        } else if (hasServices) {
          productVolume =
            item.productInfo.services[0].specifications[0].value +
            ' ' +
            item.productInfo.services[0].specifications[0].unit;
        }
        const lineOption = this.createLineOption(item, key, productVolume, hasServices);
        lineOptions.push(lineOption);
      });
      categorisedOption.lineOptions = lineOptions;
      categorisedOptions.push(categorisedOption);
    });
    return categorisedOptions;
  }

  retrieveAllSpecData(mappedSpec: OmapiProduct): string {
    const specs: string[] = [];
    each(mappedSpec.services, (service: ServiceInterface) => {
      each(service.specifications, (spec: SpecificationInterface) => {
        if (spec.value && spec.unit) {
          specs.push(spec.value + ' ' + spec.unit.replace('minuten', 'min'));
        }
      });
    });
    return specs.join('/');
  }

  private getGroupedOptions(optionProducts: OptionProductInterface[]): Record<string, GroupedOptions[]> {
    optionProducts.filter((currentObject: OptionProductInterface) => {
      return !!currentObject.productInfo.subCategory;
    });
    optionProducts = this.sortOptionsByWeight(optionProducts);
    return groupBy(optionProducts, (currentObject: OptionProductInterface) => {
      return currentObject.productInfo.subCategory.localizedName;
    });
  }

  private sortOptionsByWeight(optionProducts: OptionProductInterface[]): OptionProductInterface[] {
    return sortBy(optionProducts, (currentObject: OptionProductInterface) => {
      return currentObject.productInfo.weight;
    });
  }

  private createLineOption(
    option: OptionProductInterface,
    category: string,
    volume: string,
    hasServices: boolean
  ): LineOption {
    return {
      id: option.productInfo.productId,
      label: option.productInfo.name,
      weight: option.productInfo.weight,
      category: category,
      volume: volume,
      visible: hasServices && option.productInfo.services[0].specifications[0].visible,
      price: option.price,
      description: hasServices && option.productInfo.services[0].specifications[0].localizedContent?.name,
    } as LineOption;
  }
}
