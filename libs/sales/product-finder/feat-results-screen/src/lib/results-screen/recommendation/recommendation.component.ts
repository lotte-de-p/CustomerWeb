import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductRecommendation } from '@sales/product-finder/data-access';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { DetailedSpec, Product, ProductUtils, SalesOffer, ShortSummarySpec } from '@sales/shared/data-access';
import { PricingComponent } from '@sales/shared/ui';
import { DetailedSpecComponent } from './detailed-spec/detailed-spec.component';
import { AlignRecommendationHtmlElementsDirective } from './directive/align-recommendation-html-elements.directive';

@Component({
  selector: 'tg-sales-recommendation',
  standalone: true,
  templateUrl: './recommendation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf,
    TranslateModule,
    NgClass,
    NgForOf,
    PricingComponent,
    DetailedSpecComponent,
    AlignRecommendationHtmlElementsDirective,
  ],
})
export class RecommendationComponent {
  @Input() isMostRecommended!: boolean;
  @Input() index!: number;
  containsC5Product!: boolean;
  isMultipleTLO!: boolean;
  title!: string;
  shortSummaries!: string[];
  salesOffer!: SalesOffer;
  internetDetailedSpecsTitle!: string;
  internetDetailedSpecs!: DetailedSpec[];
  tvDetailedSpecs!: DetailedSpec[];
  mobileDetailedSpecs!: DetailedSpec[];
  fixedTelephoneDetailedSpecs!: DetailedSpec[];

  readonly specOrder = {
    INTERNET: 1,
    TV: 2,
    MOBILE: 3,
    FIXED_TELEPHONE: 4,
  };

  @Output() orderEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() resultDetailsEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private readonly translate: TranslatePipe) {}

  @Input() set productRecommendation(productRecommendation: ProductRecommendation) {
    this.isMultipleTLO = productRecommendation.offers.length > 1;
    const products: Product[] = productRecommendation.products;
    const c5Product: Product | undefined = ProductUtils.findC5Product(products);
    this.containsC5Product = c5Product !== undefined;

    this.title = ProductUtils.createTitle(products);

    const uniqueProducts: Product[] = ProductUtils.getUniqueProducts(products);
    const maxMobileLines: number = +(c5Product?.omapiProduct.getMaxMobileLines() ?? 0);
    const amountOfLimitedSims: number = c5Product?.amountOfLimitedSims ?? 0;
    const amountOfUnlimitedSims: number = maxMobileLines - amountOfLimitedSims;
    this.shortSummaries = this.createShortSummaries(
      products,
      uniqueProducts,
      amountOfLimitedSims,
      amountOfUnlimitedSims
    );

    this.salesOffer = productRecommendation.salesOffer;

    this.internetDetailedSpecsTitle = this.createInternetDetailedSpecTitle(uniqueProducts);
    this.internetDetailedSpecs = this.getTranslatedDetailedSpecByType(uniqueProducts, 'INTERNET');
    this.tvDetailedSpecs = this.getTranslatedDetailedSpecByType(uniqueProducts, 'TV');
    this.mobileDetailedSpecs = this.createMobileDetailedSpecs(
      products,
      uniqueProducts,
      amountOfLimitedSims,
      amountOfUnlimitedSims
    );
    this.fixedTelephoneDetailedSpecs = this.getTranslatedDetailedSpecByType(uniqueProducts, 'FIXED_TELEPHONE');
  }

  private createShortSummaries(
    products: Product[],
    uniqueProducts: Product[],
    amountOfLimitedSims: number,
    amountOfUnlimitedSims: number
  ): string[] {
    return uniqueProducts
      .flatMap((product: Product) => {
        const numberOfTimes: number = ProductUtils.getNumberOfTimesMobileProductOccurs(
          products,
          product.omapiProduct.externalProductCode
        );
        return product.productSpec.shortSummaries.map((shortSummary: ShortSummarySpec) => ({
          ...shortSummary,
          labelKey: this.translate.transform(shortSummary.labelKey, {
            numberOfTimes,
            amountOfLimitedSims,
            amountOfUnlimitedSims,
          }),
        }));
      })
      .sort((a: ShortSummarySpec, b: ShortSummarySpec) => this.specOrder[a.type] - this.specOrder[b.type])
      .map((shortSummary: ShortSummarySpec) => shortSummary.labelKey);
  }

  private createInternetDetailedSpecTitle(uniqueProducts: Product[]): string {
    return uniqueProducts
      .filter((product: Product) => this.isInternetProduct(product))
      .map((product: Product) => product.localizedOmapiProductName)
      .join(' + ');
  }

  private isInternetProduct(product: Product): boolean {
    return product.productSpec.detailedSpecs.some((detailedSpec: DetailedSpec) => detailedSpec.type === 'INTERNET');
  }

  private createMobileDetailedSpecs(
    products: Product[],
    uniqueProducts: Product[],
    amountOfLimitedSims: number,
    amountOfUnlimitedSims: number
  ): DetailedSpec[] {
    return uniqueProducts.flatMap((product: Product) =>
      product.productSpec.detailedSpecs
        .filter((detailedSpec: DetailedSpec) => detailedSpec.type === 'MOBILE')
        .map((detailedSpec: DetailedSpec) => {
          const numberOfTimes: number = ProductUtils.getNumberOfTimesMobileProductOccurs(
            products,
            product.omapiProduct.externalProductCode
          );

          return {
            ...detailedSpec,
            labelKey: this.translate.transform(detailedSpec.labelKey, {
              numberOfTimes,
              amountOfLimitedSims,
              amountOfUnlimitedSims,
            }),
          };
        })
    );
  }

  private getTranslatedDetailedSpecByType(uniqueProducts: Product[], type: string): DetailedSpec[] {
    return uniqueProducts.flatMap((product: Product) =>
      product.productSpec.detailedSpecs
        .filter((detailedSpec: DetailedSpec) => detailedSpec.type === type)
        .map((detailedSpec: DetailedSpec) => ({
          ...detailedSpec,
          labelKey: this.translate.transform(detailedSpec.labelKey),
        }))
    );
  }
}
