import { Builder, cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { OptionProductsModel } from './option-products.model';

import { TestBed } from '@angular/core/testing';
import { describe, it, beforeEach, expect, afterEach } from '@jest/globals';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { cloneDeep } from 'lodash-es';
import { OmapiProduct } from '@telenet/ng-lib-omapi';

const optionMock = cloneDeep(require('./bundle.json'));

describe('OptionProductsModel', () => {
  let optionProductsModel: OptionProductsModel;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
  });

  describe('getCategoryHeading', () => {
    it('should return the category name of the option group', () => {
      optionProductsModel = Object.assign(new OptionProductsModel(), getGroupedOptions());
      const actual = optionProductsModel.getCategoryHeading();
      expect(actual).toBe('Play');
    });

    it('should return the parentId if active product have parentId', () => {
      optionProductsModel = Object.assign(new OptionProductsModel(), getGroupedOptionsByParentId());
      const actual = optionProductsModel.getCategoryHeading();
      expect(actual).toBe('015895154');
    });
  });

  describe('getProductCategory', () => {
    it('should return the product type of the option as Digital TV group when isChangeDTV is true', () => {
      optionProductsModel = Object.assign(new OptionProductsModel(), getGroupedOptions());
      const actual = optionProductsModel.getProductCategory(true);
      expect(actual).toBe('Digital TV');
    });

    it('should return the product type of the option as dtv group isChangeDTV is false', () => {
      optionProductsModel = Object.assign(new OptionProductsModel(), getGroupedOptions());
      const actual = optionProductsModel.getProductCategory(false);
      expect(actual).toBe('dtv');
    });
  });

  describe('isFixedIP', () => {
    it('should return true if FixedIP', () => {
      const productInfo = new OmapiProduct();
      productInfo.externalProductCode = 'IOPT0108';
      optionProductsModel = Object.assign(optionProductsModel, getGroupedOptions());
      optionProductsModel = Builder(OptionProductsModel).productInfo(productInfo).build();
      const actual = optionProductsModel.isFixedIP();
      expect(actual).toBe(true);
    });

    it('should return false if not FixedIP', () => {
      const productInfo = new OmapiProduct();
      productInfo.externalProductCode = 'IOPT0100';
      optionProductsModel = Object.assign(optionProductsModel, getGroupedOptions());
      optionProductsModel = Builder(OptionProductsModel).productInfo(productInfo).build();
      const actual = optionProductsModel.isFixedIP();
      expect(actual).toBe(false);
    });
  });

  describe('isSafespotPlus', () => {
    it('should return true if SafespotPlus', () => {
      const productInfo = new OmapiProduct();
      productInfo.externalProductCode = 'OIKO0103';
      optionProductsModel = Object.assign(optionProductsModel, getGroupedOptions());
      optionProductsModel = Builder(OptionProductsModel).productInfo(productInfo).build();
      const actual = optionProductsModel.isSafespotPlus();
      expect(actual).toBe(true);
    });

    it('should return false if not SafespotPlus', () => {
      const productInfo = new OmapiProduct();
      productInfo.externalProductCode = 'OIKO0100';
      optionProductsModel = Object.assign(optionProductsModel, getGroupedOptions());
      optionProductsModel = Builder(OptionProductsModel).productInfo(productInfo).build();
      const actual = optionProductsModel.isSafespotPlus();
      expect(actual).toBe(false);
    });
  });

  describe('isBackupService', () => {
    it('should return true if BackupService', () => {
      const productInfo = new OmapiProduct();
      productInfo.externalProductCode = 'IOPT0109';
      optionProductsModel = Object.assign(optionProductsModel, getGroupedOptions());
      optionProductsModel = Builder(OptionProductsModel).productInfo(productInfo).build();
      const actual = optionProductsModel.isBackupService();
      expect(actual).toBe(true);
    });

    it('should return false if not BackupService', () => {
      const productInfo = new OmapiProduct();
      productInfo.externalProductCode = 'IOPT0100';
      optionProductsModel = Object.assign(optionProductsModel, getGroupedOptions());
      optionProductsModel = Builder(OptionProductsModel).productInfo(productInfo).build();
      const actual = optionProductsModel.isBackupService();
      expect(actual).toBe(false);
    });
  });

  describe('isSafespotPro', () => {
    it('should return true if SafespotPro', () => {
      const productInfo = new OmapiProduct();
      productInfo.externalProductCode = 'OIKO0001';
      optionProductsModel = Object.assign(optionProductsModel, getGroupedOptions());
      optionProductsModel = Builder(OptionProductsModel).productInfo(productInfo).build();
      const actual = optionProductsModel.isSafespotPro();
      expect(actual).toBe(true);
    });

    it('should return false if not SafespotPro', () => {
      const productInfo = new OmapiProduct();
      productInfo.externalProductCode = 'OIKO0000';
      optionProductsModel = Object.assign(optionProductsModel, getGroupedOptions());
      optionProductsModel = Builder(OptionProductsModel).productInfo(productInfo).build();
      const actual = optionProductsModel.isSafespotPro();
      expect(actual).toBe(false);
    });
  });

  describe('isWifiBusiness', () => {
    it('should return true if Wifi Business', () => {
      const productInfo = new OmapiProduct();
      productInfo.externalProductCode = 'IOPT0104';
      optionProductsModel = Object.assign(optionProductsModel, getGroupedOptions());
      optionProductsModel = Builder(OptionProductsModel).productInfo(productInfo).build();
      const actual = optionProductsModel.isWifiBusiness();
      expect(actual).toBe(true);
    });

    it('should return false if not Wifi Buisness', () => {
      const productInfo = new OmapiProduct();
      productInfo.externalProductCode = 'IOPT0100';
      optionProductsModel = Object.assign(optionProductsModel, getGroupedOptions());
      optionProductsModel = Builder(OptionProductsModel).productInfo(productInfo).build();
      const actual = optionProductsModel.isWifiBusiness();
      expect(actual).toBe(false);
    });
  });

  function getGroupedOptions(): any {
    return optionMock.groupedOptions[1][1];
  }
  function getGroupedOptionsByParentId(): any {
    return optionMock.activeProduct.options[2];
  }

  afterEach(() => {
    cleanStylesFromDom();
  });
});
