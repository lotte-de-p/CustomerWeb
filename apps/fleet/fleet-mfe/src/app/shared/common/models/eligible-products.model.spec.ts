import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { EligibleProductsModel } from './eligible-products.model';
import { EligibleProductInterface } from '../interfaces/products/eligible-product.interface';

import { TestBed } from '@angular/core/testing';
import { describe, it, beforeEach, expect, afterEach } from '@jest/globals';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { cloneDeep, isEmpty } from 'lodash-es';

const mockEligibleProducts: EligibleProductInterface[] = cloneDeep(
  require('../../../../../../../../fixtures/http/netcracker/products/eligible-products-with-mapped-omapi-product.json')
);

function hasCategory(searchCategory) {
  return (
    !isEmpty(this.categories) &&
    this.categories.some((category) => category.toUpperCase() === searchCategory.toUpperCase())
  );
}

mockEligibleProducts[0].optionProducts[0].productInfo.hasCategory = hasCategory;
mockEligibleProducts[0].optionProducts[1].productInfo.hasCategory = hasCategory;

describe('EligibleProductsModel', () => {
  let eligibleProductsModel: EligibleProductsModel;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
  });

  describe('getGroupedOptions', () => {
    it('should return categorized options', () => {
      const eligibleProducts = getEligiblePlans();

      eligibleProductsModel = Object.assign(new EligibleProductsModel(), eligibleProducts[0]);
      const actual = eligibleProductsModel.getGroupedOptions(eligibleProducts[0].optionProducts);
      expect(actual).toEqual(getGroupedOptions());
    });

    it('should return undefined if passed products is empty', () => {
      eligibleProductsModel = new EligibleProductsModel();
      const actual = eligibleProductsModel.getGroupedOptions([]);
      expect(actual).toBeUndefined();
    });
  });

  describe('getOptionsByCategory', () => {
    it('should return options grouped by category name', () => {
      const eligibleProducts = getEligiblePlans();
      eligibleProductsModel = Object.assign(new EligibleProductsModel(), eligibleProducts[0]);
      const actual = eligibleProductsModel.getOptionsByCategory(true);
      expect(actual).toEqual(getGroupedOptions());
    });
  });

  function getEligiblePlans(): any {
    return mockEligibleProducts.slice();
  }

  function getGroupedOptions(): any {
    return [
      [
        {
          productInfo: {
            productType: 'OPTION',
            hasCategory: hasCategory,
            productId: 'VOEU0060',
            categories: ['voice-options', 'voice-options', 'options-with-etf'],
            weight: 60,
            subCategory: {
              name: 'Calls to numbers in Europe',
              weight: 40,
              mutualExclusion: true,
              localizedName: 'Calling to numbers in Europe',
              normalizedName: 'calls-to-numbers-in-europe',
            },
          },
          weight: 60,
          category: 'mobile',
          parentId: '015895154',
        },
        {
          productInfo: {
            productType: 'OPTION',
            hasCategory: hasCategory,
            productId: 'MINE0005',
            externalProductCode: 'MINE0005',
            categories: ['options-with-etf', 'voice-options', 'voice-options'],
            subCategory: {
              name: 'Calls to numbers in Europe',
              weight: 40,
              mutualExclusion: true,
              localizedName: 'Calling to numbers in Europe',
              normalizedName: 'calls-to-numbers-in-europe',
            },
          },
          weight: 70,
          category: 'mobile',
        },
      ],
    ];
  }

  afterEach(() => {
    cleanStylesFromDom();
  });
});
