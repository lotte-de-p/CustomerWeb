import { Component, Input, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { ServiceInterface, SpecificationInterface } from '@telenet/ng-lib-omapi';
import { take } from 'rxjs/operators';
import { ProductOverviewFacade } from '../../../../store/product-overview.facade';
import { ProductOverviewConstants } from '../../../../../../../shared/common/constants/product-overview.constant';
import { Product } from '../../../../../../shared/models/product.model';
import { NgIf, NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'tg-product-level-specifications',
  templateUrl: './product-level-specifications.component.html',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, TranslateModule],
})
export class ProductLevelSpecificationsComponent implements OnInit {
  @Input() product: Product;
  @Input() isBundle: boolean;

  specifications: SpecificationInterface[];

  DATA_ONLY_MOBILE_LINE = 'DATA ONLY MOBILE LINE';

  constructor(
    private readonly translateService: TranslateService,
    private readonly productOverviewFacade: ProductOverviewFacade
  ) {}

  ngOnInit(): void {
    const filteredSpecifications = this.product.productInfo.getSortedSpecifications();
    this.specifications = filteredSpecifications;

    if (this.isBundle) {
      this.specifications = filteredSpecifications.filter(
        (spec) => spec.productType?.toUpperCase() === this.product.productType?.toUpperCase()
      );
      if (this.isDataOnlyMobileLine()) {
        this.specifications = this.removeLimitedIfBothLimitedAndUnlimitedExist(this.specifications);
      }
    }

    // For some reason, OMAPI/back-end is not sending specifications for some
    // options. You're supposed to get these from the root product.
    // The idea is to check if there are specs or not. If not, search for
    // them on the correct root product and child, and get them from there.
    if (!this.specifications || !this.specifications.length) {
      this.retrieveAndSetSpecifications();
      if (this.isBundle && this.isDataOnlyMobileLine()) {
        this.specifications = this.removeLimitedIfBothLimitedAndUnlimitedExist(this.specifications);
      }
    }
  }

  getLocalizedLabel(value: string): string {
    if (!value) {
      return value;
    }

    const valueUpperCased = value.toUpperCase();

    if (valueUpperCased === ProductOverviewConstants.UNLIMITED) {
      return this.translateService.instant('ng.fleet-user-product-overview.lbl.unlimited');
    } else if (valueUpperCased === ProductOverviewConstants.SMS_UNIT) {
      return this.translateService.instant('ng.fleet-user-product-overview.lbl.sms-unit');
    }

    return value;
  }

  retrieveAndSetSpecifications(): void {
    this.productOverviewFacade.selectedAccountProducts$.pipe(take(1)).subscribe((products) => {
      const rootProduct =
        products.find((product) => product.productType === 'bundle' && product.children.length) || products[0];
      const specifications = this.getSpecificationsForProductType(rootProduct, this.product.productType);
      this.specifications = specifications;
    });
  }

  getSpecificationsForProductType(product: Product | undefined, productType: string): SpecificationInterface[] {
    if (!product || !product.productInfo.services) return [];

    const services = product.productInfo.services.filter((spec) => {
      switch (productType) {
        case 'internet':
          return spec.serviceType?.toLowerCase() === 'fixed_internet';
        case 'mobile': {
          const isDataOnlyMobileLine = /data[\s-]only[\s-]mobile[\s-]line/i.test(
            this.product.productInfo.productType || ''
          );
          return this.filterMobileSpecs(spec, isDataOnlyMobileLine);
        }
        case 'dtv':
          return spec.serviceType?.toLowerCase() === 'dtv';
        case 'telephone':
          return spec.serviceType?.toLowerCase() === 'fixed_calling';
        case 'streaming':
          return spec.serviceType?.toLowerCase() === 'streaming';
        default:
          return false;
      }
    });

    return services.map((service) => service.specifications || []).flat();
  }

  filterMobileSpecs(spec: ServiceInterface, isDataOnlyMobileLine: boolean): boolean {
    if (isDataOnlyMobileLine) {
      return spec.serviceType?.toLowerCase() === 'mobile_internet';
    } else {
      return (
        spec.serviceType?.toLowerCase() === 'mobile_internet' || spec.serviceType?.toLowerCase() === 'mobile_calling'
      );
    }
  }

  isDataOnlyMobileLine() {
    return this.product.productInfo?.productType === this.DATA_ONLY_MOBILE_LINE;
  }

  removeLimitedIfBothLimitedAndUnlimitedExist(specs: SpecificationInterface[]) {
    const limitedIndex = this.getLimitedSpecIndex(specs);
    const unlimitedIndex = this.getUnlimitedSpecIndex(specs);

    if (limitedIndex !== -1 && unlimitedIndex !== -1) {
      specs.splice(limitedIndex, 1);
    }
    return specs;
  }

  getLimitedSpecIndex(specs: SpecificationInterface[]) {
    return specs.findIndex((spec) => spec.labelKey.includes('mobile-data-allowance-limited'));
  }

  getUnlimitedSpecIndex(specs: SpecificationInterface[]) {
    return specs.findIndex((spec) => spec.labelKey.endsWith('mobile-data-allowance-unlimited'));
  }
}
