import { Component, Input, OnInit } from '@angular/core';
import { MockMarketingProduct } from './models/mock-marketing-product.model';
import {
  CustomerChosenDiscountInterFace,
  CustomerChosenDomainInterface,
  CustomerChosenManualDiscountInterface,
  MockCreateSalesOrderRequest,
  MockCreateSalesOrderRequestBody,
  MockSelectedProductInterface,
} from './models/mock-create-sales-order-request.model';
import { PathCategorisationService } from '@telenet/ng-lib-page';
import { capitalize, first, isEmpty, isUndefined, upperCase } from 'lodash-es';
import { AbstractControl, FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductTypeEnum } from '../../../http/netcracker/sales/enums/product-type.enum';
import { MockProductsService } from './services/mock-products.service';
import { TranslateModule } from '@ngx-translate/core';
import { OptionsContentpackComponent } from './partials/options-contentpack/options-contentpack.component';
import { DomainNameComponent } from './partials/domain-name/domain-name.component';
import { ApplyManualDiscountComponent } from './partials/apply-manual-discount/apply-manual-discount/apply-manual-discount.component';
import { SelectDiscountTypeComponent } from './partials/select-discount-type/select-discount-type.component';
import { NgIf, NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'tg-marketing-nc-mock-marketing',
  templateUrl: 'mock-marketing.component.html',
  styleUrls: ['mock-marketing.component.css'],
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgClass,
    ReactiveFormsModule,
    SelectDiscountTypeComponent,
    ApplyManualDiscountComponent,
    DomainNameComponent,
    OptionsContentpackComponent,
    TranslateModule,
  ],
})
export class MockMarketingComponent implements OnInit {
  @Input() title: string;
  @Input() salesUrl: string;
  @Input() productConfiguratorUrl: string;
  @Input() productListJSONString: MockMarketingProduct[];

  productList: MockMarketingProduct[];
  hasProducts: boolean;
  discountFormArr = new FormArray<AbstractControl>([]);
  BASIC_DISCOUNT = 'Basic Discount';
  ON_TOP_DISCOUNT = 'On-Top Discount with Yugo Slot';
  BASIC_DISCOUNT_ID = '9155501914465272430';
  BASIC_DISCOUNT_PRICE = '200,00';
  customerBrand: string;
  selectedProducts: MockSelectedProductInterface[];
  soRequestBody: MockCreateSalesOrderRequest;
  isProductTypeHardwareCheck: boolean;
  manualDiscount: CustomerChosenManualDiscountInterface;
  noOfProductsAdded: number;

  constructor(
    private readonly pathCategorisationService: PathCategorisationService,
    private readonly mockProductsService: MockProductsService
  ) {}

  ngOnInit(): void {
    this.customerBrand = this.pathCategorisationService.getCustomerBrand();
    this.productList = this.productListJSONString;
    this.hasProducts = !isEmpty(this.productList);
    this.buildForm();
    this.selectedProducts = [];
  }

  createReqBody(product: MockMarketingProduct, formGroup: FormGroup): void {
    if (formGroup.valid) {
      this.soRequestBody = this.getRequestBody(product, formGroup, this.manualDiscount);
      const productObj = {
        product: product,
        isProductTypeHardwareCheck: this.isProductTypeHardware(product),
        manualDiscount: this.getCustomerChosenManualDiscount(formGroup),
      };
      this.mockProductsService.addProducts(productObj, this.soRequestBody.offers[0]);
    }
  }

  private buildForm(): void {
    if (this.hasProducts) {
      this.productList.forEach(() => {
        this.discountFormArr.push(new FormArray([new FormGroup({})]));
      });
    }
  }

  private getRequestBody(
    product: MockMarketingProduct,
    form: FormGroup,
    _manualDiscount?: CustomerChosenManualDiscountInterface
  ): MockCreateSalesOrderRequest {
    const optionsAndContentPacks = this.addOptionsAndContentpacks(form);
    const mockCreateSalesOrderRequest = {
      offers: [
        {
          id: product.sku,
          type: capitalize(this.normalizeProductType(product.type)),
        },
      ],
    } as MockCreateSalesOrderRequest;
    if (product.addOns?.length) {
      const offerProduct = first(mockCreateSalesOrderRequest.offers) || ({} as MockCreateSalesOrderRequestBody);
      offerProduct.offers = [];
      product.addOns.forEach((addOn) => {
        const productKey: keyof MockCreateSalesOrderRequestBody = product.isPimConfiguredProduct ? 'itemCode' : 'id';
        const offer = {} as MockCreateSalesOrderRequestBody;
        offer[productKey] = addOn.sku;
        offer.type = capitalize(this.normalizeProductType(addOn.type));
        const chosenDiscount = this.getCustomerChosenDiscount(form);
        if (!isEmpty(chosenDiscount)) {
          offer.customerChosenDiscount = chosenDiscount;
        }
        offerProduct.offers.push(offer);
      });
    }
    if (upperCase(product.type) === ProductTypeEnum.DOMAIN_NAME) {
      const offerProduct = first(mockCreateSalesOrderRequest.offers) || ({} as MockCreateSalesOrderRequestBody);
      offerProduct.chars = [this.getCustomerChosenDomain(form)];
    }
    if (optionsAndContentPacks?.length) {
      const offerProduct = first(mockCreateSalesOrderRequest.offers) || ({} as MockCreateSalesOrderRequestBody);
      offerProduct.offers = offerProduct.offers === undefined ? [] : offerProduct.offers;
      offerProduct.offers.push(...optionsAndContentPacks);
    }
    return mockCreateSalesOrderRequest;
  }

  private getCustomerChosenDomain(formGroup: FormGroup): CustomerChosenDomainInterface {
    const customerChosenDomain = {} as CustomerChosenDomainInterface;
    if (
      !isEmpty(formGroup.get('domainName')) &&
      !isEmpty(formGroup.get('domainName')?.value) &&
      !isEmpty(formGroup.get('domainExtension')) &&
      !isEmpty(formGroup.get('domainExtension')?.value) &&
      !isEmpty(formGroup.get('orderType')) &&
      !isEmpty(formGroup.get('orderType')?.value)
    ) {
      customerChosenDomain.orderType = formGroup.get('orderType')?.value;
      customerChosenDomain.domainName = formGroup.get('domainName')?.value;
      customerChosenDomain.extention = formGroup.get('domainExtension')?.value;
    }
    return customerChosenDomain;
  }

  private getCustomerChosenDiscount(formGroup: FormGroup): CustomerChosenDiscountInterFace {
    const customerChosenDiscount = {} as CustomerChosenDiscountInterFace;
    if (!isEmpty(formGroup.get('selectedDiscountType')) && !isEmpty(formGroup.get('selectedDiscountType')?.value)) {
      if (formGroup.get('selectedDiscountType')?.value === this.BASIC_DISCOUNT) {
        customerChosenDiscount.type = this.BASIC_DISCOUNT;
        customerChosenDiscount.id = this.BASIC_DISCOUNT_ID;
        customerChosenDiscount.price = this.BASIC_DISCOUNT_PRICE;
      } else {
        const endValidityDate = formGroup.get('endValidityDate')?.value;
        const price = formGroup.get('price')?.value;
        customerChosenDiscount.type = this.ON_TOP_DISCOUNT;
        customerChosenDiscount.endvalidityDate = endValidityDate;
        customerChosenDiscount.price = price;
      }
    }
    return customerChosenDiscount;
  }

  private getCustomerChosenManualDiscount(formGroup: FormGroup): CustomerChosenManualDiscountInterface {
    const manaualDiscount = {} as CustomerChosenManualDiscountInterface;
    if (
      formGroup.get('manualSelectedDiscount') &&
      !isEmpty(formGroup.get('manualSelectedDiscount')?.value) &&
      !isEmpty(formGroup.get('discountCode')) &&
      !isEmpty(formGroup.get('discountCode')?.value)
    ) {
      manaualDiscount.type = formGroup.get('manualSelectedDiscount')?.value;
      manaualDiscount.discountCode = formGroup.get('discountCode')?.value;
    }
    return manaualDiscount;
  }

  private normalizeProductType(productType: string): string {
    if (productType === 'mobile-plan') {
      productType = 'mobile';
    } else if (productType === 'fixed-telephone') {
      productType = 'telephone';
    }
    return productType;
  }

  private isProductTypeHardware(product: MockMarketingProduct): boolean {
    return (
      !isUndefined(product.enableDiscount) &&
      product.enableDiscount &&
      !isEmpty(product.addOns) &&
      !isUndefined(product.addOns) &&
      product.addOns.filter((mockProduct) => mockProduct.type === 'smartphone').length > 0
    );
  }

  private addOptionsAndContentpacks(formGroup: FormGroup): MockCreateSalesOrderRequestBody[] {
    const optionsAndContentPacks = [] as MockCreateSalesOrderRequestBody[];
    if (!isEmpty(formGroup.get('options')) && !isEmpty(formGroup.get('options')?.value)) {
      const values = formGroup.get('options')?.value;
      if (values) {
        values.forEach((value: MockCreateSalesOrderRequestBody) => {
          const option = {} as MockCreateSalesOrderRequestBody;
          option.id = value.id;
          option.type = value.type;
          optionsAndContentPacks.push(option);
        });
      }
    }
    return optionsAndContentPacks;
  }

  getFormGroup(idx: number): FormGroup {
    return (this.discountFormArr.controls[idx] as FormGroup).controls[0] as FormGroup;
  }
}
