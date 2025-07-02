import { Component, Input } from '@angular/core';
import { Option, Product } from '../../models/product.model';
import { SpecificationInterface } from '@telenet/ng-lib-omapi';
import { ProductOverviewConstants } from '../../constants/product-overview.constant';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NgIf, NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'tg-product-c5-mobile-specifications',
  templateUrl: './product-c5-mobile-specifications.component.html',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, TranslateModule],
})
export class ProductC5MobileSpecificationsComponent {
  @Input() set c5product(product: Product) {
    this.product = product;
    this.specifications = this.product.productInfo.getSortedSpecifications();
  }
  @Input() plan: Product;

  specifications: SpecificationInterface[];
  product: Product;

  DATA_ONLY_MOBILE_LINE = 'data-only-mobile-line';

  constructor(private readonly translateService: TranslateService) {}

  getLineSpecification(option?: Option): SpecificationInterface[] | undefined {
    const bundleSpecs = this.getBundleSpecifications(option);
    if (this.product.productInfo.productType === this.DATA_ONLY_MOBILE_LINE && bundleSpecs) {
      return this.removeLimitedIfBothLimitedAndUnlimitedExist(bundleSpecs);
    }
    return bundleSpecs;
  }

  getBundleSpecifications(option?: Option): SpecificationInterface[] | undefined {
    return this.specifications?.filter((spec) => {
      switch (option ? option.productType : this.product.productType) {
        case 'internet':
          return spec.serviceType?.toLowerCase() === 'fixed_internet';
        case 'mobile':
          return this.filterMobileSpecs(spec, option);
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
  }

  filterMobileSpecs(spec: SpecificationInterface, option?: Option): boolean {
    if (
      this.product.productInfo.productType === this.DATA_ONLY_MOBILE_LINE ||
      option?.productInfo.productType === this.DATA_ONLY_MOBILE_LINE
    ) {
      return spec.serviceType?.toLowerCase() === 'mobile_internet';
    }
    return (
      spec.serviceType?.toLowerCase() === 'mobile_internet' || spec.serviceType?.toLowerCase() === 'mobile_calling'
    );
  }

  // STILLTOCHECK this function --> still viable??
  removeLimitedIfBothLimitedAndUnlimitedExist(specs: SpecificationInterface[]) {
    const limitedIndex = specs.findIndex((spec) => spec.labelKey.includes('mobile-data-allowance-limited'));
    const unlimitedIndex = specs.findIndex((spec) => spec.labelKey.endsWith('mobile-data-allowance-unlimited'));

    if (limitedIndex !== -1 && unlimitedIndex !== -1) {
      specs?.splice(limitedIndex, 1);
    }
    return specs;
  }

  getLocalizedLabel(value: string): string {
    if (!value) {
      return value;
    }

    const valueUpperCased = value.toUpperCase();

    if (valueUpperCased === ProductOverviewConstants.UNLIMITED) {
      return this.translateService.instant('ng.product-overview.lbl.unlimited');
    } else if (valueUpperCased === ProductOverviewConstants.SMS_UNIT) {
      return this.translateService.instant('ng.product-overview.lbl.sms-unit');
    }

    return value;
  }

  getFormattedSpecifications(specification?: string): string {
    if (specification) {
      return specification.replace(/\n/g, '<li>');
    }
    return '';
  }
}
