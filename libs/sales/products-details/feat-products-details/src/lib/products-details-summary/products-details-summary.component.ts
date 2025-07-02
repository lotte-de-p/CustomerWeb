import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductsDetailsFacade, ProductsDetailsNgrxModule } from '@sales/products-details/data-access';
import { DetailedSpec, Product, ProductUtils } from '@sales/shared/data-access';
import { TranslatePipe } from '@ngx-translate/core';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { SummaryItemComponent } from './summary-item/summary-item.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ProductsDetailsSummaryVM {
  title: string;
  internetSpecs: string[];
  mobileSpecs: string[];
  tvSpecs: string[];
  fixedTelephoneSpecs: string[];
}

@Component({
  selector: 'tg-sales-products-details-summary',
  standalone: true,
  templateUrl: './products-details-summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, ProductsDetailsNgrxModule, SummaryItemComponent, AsyncPipe, NgForOf],
})
export class ProductsDetailsSummaryComponent {
  productsDetailsSummaryVM$: Observable<ProductsDetailsSummaryVM> = this.productsDetailsFacade.products$.pipe(
    map((products: Product[]): ProductsDetailsSummaryVM => {
      const c5Product: Product | undefined = this.findC5Product(products);
      const uniqueProducts: Product[] = ProductUtils.getUniqueProducts(products);

      return {
        title: ProductUtils.createTitle(products),
        internetSpecs: this.getTranslatedLabelKeyByType(uniqueProducts, 'INTERNET'),
        mobileSpecs: this.createMobileSpecs(products, uniqueProducts, c5Product),
        tvSpecs: this.getTranslatedLabelKeyByType(uniqueProducts, 'TV'),
        fixedTelephoneSpecs: this.getTranslatedLabelKeyByType(uniqueProducts, 'FIXED_TELEPHONE'),
      };
    })
  );

  constructor(
    private readonly productsDetailsFacade: ProductsDetailsFacade,
    private readonly translate: TranslatePipe
  ) {}

  private findC5Product(products: Product[]): Product | undefined {
    return products.find((product: Product) => product.omapiProduct.isConnect5());
  }

  private createMobileSpecs(products: Product[], uniqueProducts: Product[], c5Product: Product | undefined): string[] {
    const maxMobileLines: number = +(c5Product?.omapiProduct.getMaxMobileLines() ?? 0);
    const amountOfLimitedSims: number = c5Product?.amountOfLimitedSims ?? 0;
    const amountOfUnlimitedSims: number = maxMobileLines - amountOfLimitedSims;

    return uniqueProducts.flatMap((product: Product) =>
      product.productSpec.detailedSpecs
        .filter((detailedSpec: DetailedSpec) => detailedSpec.type === 'MOBILE')
        .map((detailedSpec: DetailedSpec) => {
          const numberOfTimes: number = ProductUtils.getNumberOfTimesMobileProductOccurs(
            products,
            product.omapiProduct.externalProductCode
          );

          return this.translate.transform(detailedSpec.labelKey, {
            numberOfTimes,
            amountOfLimitedSims,
            amountOfUnlimitedSims,
          });
        })
    );
  }

  private getTranslatedLabelKeyByType(uniqueProducts: Product[], type: string): string[] {
    return uniqueProducts.flatMap((product: Product) =>
      product.productSpec.detailedSpecs
        .filter((detailedSpec: DetailedSpec) => detailedSpec.type === type)
        .map((detailedSpec: DetailedSpec) => this.translate.transform(detailedSpec.labelKey))
    );
  }
}
