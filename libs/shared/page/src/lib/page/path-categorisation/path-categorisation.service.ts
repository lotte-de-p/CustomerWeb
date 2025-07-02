import { Inject, Injectable } from '@angular/core';
import { CustomerCategoryEnum } from '../enums/customer-category.enum';
import { CustomerBrandEnum } from '../enums/customer-brand.enum';

type TranslationLabelPostfixes = 'BRAND_POSTFIX' | 'CATEGORY_POSTFIX' | 'BRAND_CATEGORY_POSTFIX';
type PostfixMapping = {
  [Key in TranslationLabelPostfixes]: string;
};

@Injectable({
  providedIn: 'root',
})
export class PathCategorisationService {
  constructor(@Inject('Window') private readonly window: Window) {}

  getPostfixVariables(): PostfixMapping {
    return {
      BRAND_POSTFIX: this.getBrandPostfix(),
      CATEGORY_POSTFIX: this.getCategoryPostfix(),
      BRAND_CATEGORY_POSTFIX: this.getBrandPostfix() + this.getCategoryPostfix(),
    };
  }

  getBrandPostfix(): string {
    const brandSuffix = this.getBrandLabelSuffix();
    return brandSuffix ? `.${brandSuffix}` : '';
  }

  getCategoryPostfix(): string {
    const categoryLabelSuffix = this.getValueFromWindowByProperty('categoryLabelSuffix');
    if (categoryLabelSuffix) {
      return `.${categoryLabelSuffix}`;
    }
    if (window.location.pathname.indexOf('/business/') !== -1) {
      return '.tfb';
    }
    return '';
  }

  getBrandLabelSuffix(): string {
    return this.getValueFromWindowByProperty('brandLabelSuffix');
  }

  getValueFromWindowByProperty(property: string): string {
    return this.window['TelenetGroup']?.pathCategorisation?.[property];
  }

  getLabelSuffix(): string {
    return this.getValueFromWindowByProperty('labelSuffix');
  }

  getCustomerBrand(): string {
    return this.getValueFromWindowByProperty('customerBrand');
  }

  getCustomerCategory(): string {
    return this.getValueFromWindowByProperty('customerCategory');
  }

  isCustomerOfBrandTypes(customerBrandEnums: CustomerBrandEnum[] = []): boolean {
    return customerBrandEnums.includes(this.getCustomerBrand() as CustomerBrandEnum);
  }

  isCustomerOfBrand(customerBrand: CustomerBrandEnum): boolean {
    return this.getCustomerBrand() === customerBrand;
  }

  isCustomerOfType(type: CustomerCategoryEnum): boolean {
    return this.getCustomerCategory()?.toUpperCase() === type.toUpperCase();
  }

  isBrandBaseAndCategoryResidential() {
    return (
      this.getCustomerBrand() === CustomerBrandEnum.BRAND_BASE &&
      this.isCustomerOfType(CustomerCategoryEnum.RESIDENTIAL)
    );
  }

  isBrandBaseAndCategoryBusiness() {
    return (
      this.getCustomerBrand() === CustomerBrandEnum.BRAND_BASE && this.isCustomerOfType(CustomerCategoryEnum.BUSINESS)
    );
  }

  isBrandTelenetAndCategoryResidential() {
    return (
      this.getCustomerBrand() === CustomerBrandEnum.BRAND_TELENET &&
      this.isCustomerOfType(CustomerCategoryEnum.RESIDENTIAL)
    );
  }

  isBrandTelenetAndCategoryBusiness() {
    return (
      this.getCustomerBrand() === CustomerBrandEnum.BRAND_TELENET &&
      this.isCustomerOfType(CustomerCategoryEnum.BUSINESS)
    );
  }

  isBrandTelenetAndCategoryFleetPortal(): boolean {
    return (
      this.getCustomerBrand() === CustomerBrandEnum.BRAND_TELENET &&
      this.isCustomerOfType(CustomerCategoryEnum.FLEET_PORTAL)
    );
  }

  isBrandTelenetAndCategoryResidentialOrFleet() {
    return this.isBrandTelenetAndCategoryResidential() || this.isBrandTelenetAndCategoryFleetPortal();
  }

  isBrandBaseAndCategoryResidentialOrBusiness() {
    return this.isBrandBaseAndCategoryResidential() || this.isBrandBaseAndCategoryBusiness();
  }
}
