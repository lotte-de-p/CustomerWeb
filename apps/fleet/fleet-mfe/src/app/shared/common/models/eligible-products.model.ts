import { PriceInterface } from '../interfaces/price.interface';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { EligibleOfferInterface } from '../interfaces/eligible-offers.interface';
import { map, sortBy, filter, groupBy, head, isEmpty } from 'lodash-es';
import { OptionProductsModel } from './option-products.model';
import { ProductOptionsConstants } from '../constants/products/product-options.constant';

export class EligibleProductsModel {
  public readonly id: string;
  public readonly label: string;
  public readonly productInfo: OmapiProduct;
  public readonly eligibleOffers: EligibleOfferInterface[];
  public optionProducts: OptionProductsModel[];
  public readonly price: PriceInterface;
  public readonly isIncluded?: boolean;

  getGroupedOptions(optionProduct: OptionProductsModel[]): OptionProductsModel[][] {
    if (!isEmpty(optionProduct)) {
      return this.getSortedGroups(optionProduct);
    }
  }

  getOptionsByCategory(isBundleOption: boolean): OptionProductsModel[][] {
    return this.getSortedGroups(this.optionProducts, isBundleOption);
  }

  private getSortedGroups(options: OptionProductsModel[], isBundleOption?: boolean): OptionProductsModel[][] {
    return sortBy(this.getSortedOptions(options, isBundleOption), (currentOptions: OptionProductsModel[]) =>
      isBundleOption ? head(currentOptions).rank : head(currentOptions).productInfo.subCategory.weight
    );
  }

  private getSortedOptions(options: OptionProductsModel[], isBundleOption?: boolean): OptionProductsModel[][] {
    return map(this.getCategorizedOptions(options, isBundleOption), (currentOptions: OptionProductsModel[]) => {
      return sortBy(currentOptions, (option: OptionProductsModel) => {
        return option.parentId ? option.parentId : option.productInfo.weight;
      });
    });
  }

  private getCategorizedOptions(options: OptionProductsModel[], isBundleOption?: boolean) {
    if (isBundleOption) {
      return groupBy(this.getFilteredOptions(options), (option: OptionProductsModel) => option && option.category);
    }
    if (head(options).category === ProductOptionsConstants.TELEPHONE) {
      return groupBy(this.getFilteredOptions(options), (option: OptionProductsModel) => option && option.parentId);
    }
    return groupBy(
      this.getFilteredOptions(options),
      (option: OptionProductsModel) =>
        option && option.productInfo && option.productInfo.subCategory && option.productInfo.subCategory.name
    );
  }

  private getFilteredOptions(options: OptionProductsModel[]) {
    return filter(options, (option: OptionProductsModel) =>
      ProductOptionsConstants.OPTION_TYPES.includes(option.productInfo.productType)
    );
  }
}
