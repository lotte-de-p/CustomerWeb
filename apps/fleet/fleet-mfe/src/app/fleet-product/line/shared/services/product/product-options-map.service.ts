import { Injectable } from '@angular/core';
import each from 'lodash-es/each';
import sortBy from 'lodash-es/sortBy';
import groupBy from 'lodash-es/groupBy';
import { OmapiProduct, ServiceInterface, SpecificationInterface } from '@telenet/ng-lib-omapi';
import { LineOption } from '../../models/line-option.model';
import { ProductConstants } from '../../constants/product.constant';
import { GroupedOptions } from '../../models/grouped-options.model';
import { CustomerProductHolding } from '../../models/customer-product-holding.model';
import { Option } from '../../models/option.model';
import { EligibleProductInterface } from '../../interfaces/eligible-product.interface';
import { OptionProductsModel } from '../../models/option-products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductOptionsMapService {
  public mapOptionCategory(lines: CustomerProductHolding[]): CustomerProductHolding[] {
    if (!lines || lines.length === 0) {
      return;
    }
    each(lines, (line: CustomerProductHolding) => {
      each(line.options, (option: Option) => {
        if (option.productInfo) {
          option.productId = option.productInfo.productId;
          if (option.productInfo.subCategory) {
            option.category = option.productInfo.subCategory.localizedName;
          }
          option.name = option.productInfo.name;

          option.volume = option.productInfo.services[0]?.specifications[0]?.value;
          if (option.volume && option.productInfo.services[0]?.specifications[0].unit) {
            option.volume = option.volume + ' ' + option.productInfo.services[0].specifications[0].unit;
          }
        } else {
          option.name = option.label;
        }
      });
    });
    return lines;
  }

  public groupOptionsByCategory(response: EligibleProductInterface[]) {
    const groupedOptions = this.getGroupedOptions(response[0].optionProducts);
    const categorisedOptions: GroupedOptions[] = [];
    each(groupedOptions, (value: OptionProductsModel[], key: string) => {
      const categorisedOption: GroupedOptions = {
        category: key,
      } as GroupedOptions;
      const lineOptions: LineOption[] = [];
      const models: OptionProductsModel[] = this.sortOptionsByWeight(value);
      each(models, (item: OptionProductsModel) => {
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
      categorisedOption.subcategory = lineOptions;
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

  private getGroupedOptions(optionProducts: OptionProductsModel[]): Record<string, GroupedOptions[]> {
    optionProducts.filter((currentObject: OptionProductsModel) => {
      return !!currentObject.productInfo.subCategory;
    });
    optionProducts = this.sortOptionsByWeight(optionProducts);
    return groupBy(optionProducts, (currentObject: OptionProductsModel) => {
      return currentObject.productInfo.subCategory.localizedName;
    });
  }

  private sortOptionsByWeight(optionProducts: OptionProductsModel[]): OptionProductsModel[] {
    return sortBy(optionProducts, (currentObject: OptionProductsModel) => {
      return currentObject.productInfo.weight;
    });
  }

  private createLineOption(
    option: OptionProductsModel,
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
    } as LineOption;
  }
}
