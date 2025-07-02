import { Injectable } from '@angular/core';
import { filter, forkJoin, Observable, of } from 'rxjs';
import { RawProductSpec } from './raw-product-spec.interface';
import { ProductRequest } from './product-request.interface';
import {
  DetailedSpec,
  ProductSpec,
  ShortSummarySpec,
} from '../../../entities/product-finder/product/product-spec.interface';
import { defaultIfEmpty, map, switchMap, take } from 'rxjs/operators';
import { Offer } from '../../../entities/product-finder/sales-data/offer.interface';
import { Product } from '../../../entities/product-finder/product/product.interface';
import { OmapiProduct, OmapiProductService } from '@telenet/ng-lib-omapi';
import { LanguageEnum, LanguageService } from '@telenet/ng-lib-page';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly internetVolumeIcon = 'icon icon-wifi-signal';
  private readonly internetDownloadSpeedIcon = 'icon icon-download';
  private readonly internetUploadSpeedIcon = 'icon icon-upload';
  private readonly tvIcon = 'icon icon-tv';
  private readonly mobileIcon = 'icon icon-mobile';
  private readonly fixedTelephoneIcon = 'icon icon-telephone';
  private readonly limitedMobileShortSummary =
    'ng.product-finder.results-screen.short-summary-limited-mobile-volume-C5';
  private readonly limitedMobileDetailedSpec =
    'ng.product-finder.results-screen.detailed-specs-limited-mobile-volume-C5';
  private readonly unlimitedMobileShortSummary =
    'ng.product-finder.results-screen.short-summary-unlimited-mobile-volume-C5';
  private readonly unlimitedMobileDetailedSpec =
    'ng.product-finder.results-screen.detailed-specs-unlimited-mobile-volume-C5';

  private readonly C5FARawProductSpec: RawProductSpec = {
    omapiId: '',
    shortSummaries: [
      {
        labelKey: 'ng.product-finder.results-screen.short-summary-internet-speed-C5FA',
        type: 'INTERNET',
      },
      {
        labelKey: this.unlimitedMobileShortSummary,
        type: 'MOBILE',
      },
      {
        labelKey: this.limitedMobileShortSummary,
        type: 'MOBILE',
      },
    ],
    detailedSpecs: [
      {
        icon: this.internetVolumeIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-volume-C5FA',
        type: 'INTERNET',
      },
      {
        icon: this.internetDownloadSpeedIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-download-speed-C5FA',
        type: 'INTERNET',
      },
      {
        icon: this.internetUploadSpeedIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-upload-speed-C5FA',
        type: 'INTERNET',
      },
      {
        icon: this.mobileIcon,
        labelKey: this.unlimitedMobileDetailedSpec,
        type: 'MOBILE',
      },
      {
        icon: this.mobileIcon,
        labelKey: this.limitedMobileDetailedSpec,
        type: 'MOBILE',
      },
    ],
  };

  private readonly C5FURawProductSpec: RawProductSpec = {
    omapiId: '',
    shortSummaries: [
      {
        labelKey: 'ng.product-finder.results-screen.short-summary-internet-speed-C5FU',
        type: 'INTERNET',
      },
      {
        labelKey: this.unlimitedMobileShortSummary,
        type: 'MOBILE',
      },
      {
        labelKey: this.limitedMobileShortSummary,
        type: 'MOBILE',
      },
    ],
    detailedSpecs: [
      {
        icon: this.internetVolumeIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-volume-C5FU',
        type: 'INTERNET',
      },
      {
        icon: this.internetDownloadSpeedIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-download-speed-C5FU',
        type: 'INTERNET',
      },
      {
        icon: this.internetUploadSpeedIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-upload-speed-C5FU',
        type: 'INTERNET',
      },
      {
        icon: this.mobileIcon,
        labelKey: this.unlimitedMobileDetailedSpec,
        type: 'MOBILE',
      },
      {
        icon: this.mobileIcon,
        labelKey: this.limitedMobileDetailedSpec,
        type: 'MOBILE',
      },
    ],
  };

  private readonly productSpecs$: Observable<RawProductSpec[]> = of([
    {
      omapiId: 'TWOP0010',
      shortSummaries: [
        {
          labelKey: 'ng.product-finder.results-screen.short-summary-internet-speed-TWOP0010',
          type: 'INTERNET',
        },
        {
          labelKey: 'ng.product-finder.results-screen.short-summary-tv-TWOP0010',
          type: 'TV',
        },
      ],
      detailedSpecs: [
        {
          icon: this.internetVolumeIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-volume-TWOP0010',
          type: 'INTERNET',
        },
        {
          icon: this.internetDownloadSpeedIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-download-speed-TWOP0010',
          type: 'INTERNET',
        },
        {
          icon: this.internetUploadSpeedIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-upload-speed-TWOP0010',
          type: 'INTERNET',
        },
        {
          icon: this.tvIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-tv-TWOP0010',
          type: 'TV',
        },
      ],
    },
    {
      omapiId: 'TWOP0011',
      shortSummaries: [
        {
          labelKey: 'ng.product-finder.results-screen.short-summary-internet-speed-TWOP0011',
          type: 'INTERNET',
        },
        {
          labelKey: 'ng.product-finder.results-screen.short-summary-tv-TWOP0011',
          type: 'TV',
        },
      ],
      detailedSpecs: [
        {
          icon: this.internetVolumeIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-volume-TWOP0011',
          type: 'INTERNET',
        },
        {
          icon: this.internetDownloadSpeedIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-download-speed-TWOP0011',
          type: 'INTERNET',
        },
        {
          icon: this.internetUploadSpeedIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-upload-speed-TWOP0011',
          type: 'INTERNET',
        },
        {
          icon: this.tvIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-tv-TWOP0011',
          type: 'TV',
        },
      ],
    },
    {
      omapiId: 'TWOP0012',
      shortSummaries: [
        {
          labelKey: 'ng.product-finder.results-screen.short-summary-internet-speed-TWOP0012',
          type: 'INTERNET',
        },
        {
          labelKey: 'ng.product-finder.results-screen.short-summary-tv-TWOP0012',
          type: 'TV',
        },
      ],
      detailedSpecs: [
        {
          icon: this.internetVolumeIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-volume-TWOP0012',
          type: 'INTERNET',
        },
        {
          icon: this.internetDownloadSpeedIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-download-speed-TWOP0012',
          type: 'INTERNET',
        },
        {
          icon: this.internetUploadSpeedIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-upload-speed-TWOP0012',
          type: 'INTERNET',
        },
        {
          icon: this.tvIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-tv-TWOP0012',
          type: 'TV',
        },
      ],
    },
    {
      omapiId: 'TWOP0013',
      shortSummaries: [
        {
          labelKey: 'ng.product-finder.results-screen.short-summary-internet-speed-TWOP0013',
          type: 'INTERNET',
        },
        {
          labelKey: 'ng.product-finder.results-screen.short-summary-tv-TWOP0013',
          type: 'TV',
        },
      ],
      detailedSpecs: [
        {
          icon: this.internetVolumeIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-volume-TWOP0013',
          type: 'INTERNET',
        },
        {
          icon: this.internetDownloadSpeedIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-download-speed-TWOP0013',
          type: 'INTERNET',
        },
        {
          icon: this.internetUploadSpeedIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-upload-speed-TWOP0013',
          type: 'INTERNET',
        },
        {
          icon: this.tvIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-tv-TWOP0013',
          type: 'TV',
        },
      ],
    },
    {
      omapiId: 'INTB0001',
      shortSummaries: [
        {
          labelKey: 'ng.product-finder.results-screen.short-summary-internet-speed-INTB0001',
          type: 'INTERNET',
        },
      ],
      detailedSpecs: [
        {
          icon: this.internetVolumeIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-volume-INTB0001',
          type: 'INTERNET',
        },
        {
          icon: this.internetDownloadSpeedIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-download-speed-INTB0001',
          type: 'INTERNET',
        },
        {
          icon: this.internetUploadSpeedIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-upload-speed-INTB0001',
          type: 'INTERNET',
        },
      ],
    },
    {
      omapiId: 'INTF0200',
      shortSummaries: [
        {
          labelKey: 'ng.product-finder.results-screen.short-summary-INTF0200',
          type: 'INTERNET',
        },
      ],
      detailedSpecs: [
        {
          icon: this.internetVolumeIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-volume-INTF0200',
          type: 'INTERNET',
        },
        {
          icon: this.internetDownloadSpeedIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-download-speed-INTF0200',
          type: 'INTERNET',
        },
        {
          icon: this.internetUploadSpeedIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-upload-speed-INTF0200',
          type: 'INTERNET',
        },
      ],
    },
    {
      omapiId: 'IOPT0005',
      shortSummaries: [
        {
          labelKey: 'ng.product-finder.results-screen.short-summary-IOPT0005',
          type: 'INTERNET',
        },
      ],
      detailedSpecs: [
        {
          icon: this.internetVolumeIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-volume-IOPT0005',
          type: 'INTERNET',
        },
        {
          icon: this.internetDownloadSpeedIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-download-speed-IOPT0005',
          type: 'INTERNET',
        },
        {
          icon: this.internetUploadSpeedIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-upload-speed-IOPT0005',
          type: 'INTERNET',
        },
      ],
    },
    {
      omapiId: 'TMOB0002',
      shortSummaries: [
        {
          labelKey: 'ng.product-finder.results-screen.short-summary-TMOB0002',
          type: 'MOBILE',
        },
      ],
      detailedSpecs: [
        {
          icon: this.mobileIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-TMOB0002',
          type: 'MOBILE',
        },
      ],
    },
    {
      omapiId: 'TMOB0001',
      shortSummaries: [
        {
          labelKey: 'ng.product-finder.results-screen.short-summary-TMOB0001',
          type: 'MOBILE',
        },
      ],
      detailedSpecs: [
        {
          icon: this.mobileIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-TMOB0001',
          type: 'MOBILE',
        },
      ],
    },
    {
      omapiId: 'KONG0020',
      shortSummaries: [
        {
          labelKey: 'ng.product-finder.results-screen.short-summary-KONG0020',
          type: 'MOBILE',
        },
      ],
      detailedSpecs: [
        {
          icon: this.mobileIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-KONG0020',
          type: 'MOBILE',
        },
      ],
    },
    {
      omapiId: 'FREU0000',
      shortSummaries: [
        {
          labelKey: 'ng.product-finder.results-screen.short-summary-FREU0000',
          type: 'FIXED_TELEPHONE',
        },
      ],
      detailedSpecs: [
        {
          icon: this.fixedTelephoneIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-FREU0000',
          type: 'FIXED_TELEPHONE',
        },
      ],
    },
    {
      ...this.C5FARawProductSpec,
      omapiId: 'C5FA0006',
    },
    {
      ...this.C5FARawProductSpec,
      omapiId: 'C5FA0007',
    },
    {
      ...this.C5FARawProductSpec,
      omapiId: 'C5FA0008',
    },
    {
      ...this.C5FARawProductSpec,
      omapiId: 'C5FA0009',
    },
    {
      ...this.C5FARawProductSpec,
      omapiId: 'C5FA0010',
    },
    {
      ...this.C5FURawProductSpec,
      omapiId: 'C5FU0006',
    },
    {
      ...this.C5FURawProductSpec,
      omapiId: 'C5FU0007',
    },
    {
      ...this.C5FURawProductSpec,
      omapiId: 'C5FU0008',
    },
    {
      ...this.C5FURawProductSpec,
      omapiId: 'C5FU0009',
    },
    {
      ...this.C5FURawProductSpec,
      omapiId: 'C5FU0010',
    },
    {
      omapiId: 'FLIN0001',
      shortSummaries: [
        {
          labelKey: 'ng.product-finder.results-screen.short-summary-FLIN0001',
          type: 'FIXED_TELEPHONE',
        },
      ],
      detailedSpecs: [
        {
          icon: this.fixedTelephoneIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-FLIN0001',
          type: 'FIXED_TELEPHONE',
        },
      ],
    },
    {
      omapiId: 'TEOS0001',
      shortSummaries: [
        {
          labelKey: 'ng.product-finder.results-screen.short-summary-TEOS0001',
          type: 'TV',
        },
      ],
      detailedSpecs: [
        {
          icon: this.tvIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-TEOS0001',
          type: 'TV',
        },
      ],
    },
    {
      omapiId: 'OTTV0000',
      shortSummaries: [
        {
          labelKey: 'ng.product-finder.results-screen.short-summary-OTTV0000',
          type: 'TV',
        },
      ],
      detailedSpecs: [
        {
          icon: this.tvIcon,
          labelKey: 'ng.product-finder.results-screen.detailed-specs-OTTV0000',
          type: 'TV',
        },
      ],
    },
  ]);

  constructor(
    private readonly omapiProductService: OmapiProductService,
    private readonly languageService: LanguageService
  ) {}

  getProducts(productRequest: ProductRequest): Observable<Product[]> {
    const productObservables: Observable<Product>[] = productRequest.offers
      .flatMap((offer: Offer) => this.flatten(offer))
      .map((offer: Offer) =>
        this.omapiProductService.getProductById('product-finder', offer.id).pipe(
          take(1),
          switchMap((omapiProduct: OmapiProduct) =>
            this.getProductSpec(omapiProduct.externalProductCode as string).pipe(
              take(1),
              map(
                (productSpec: ProductSpec): Product => ({
                  localizedOmapiProductName: this.getLocalizedName(omapiProduct),
                  omapiProduct,
                  productSpec,
                  amountOfLimitedSims: offer.amountOfLimitedSims,
                })
              ),
              map(
                (product: Product): Product =>
                  product.amountOfLimitedSims === undefined || product.amountOfLimitedSims === 0
                    ? this.removeLimitedSimsSpecs(product)
                    : product
              ),
              map(
                (product: Product): Product =>
                  product.amountOfLimitedSims === Number(product.omapiProduct.getMaxMobileLines())
                    ? this.removeUnlimitedSimsSpecs(product)
                    : product
              )
            )
          )
        )
      );

    return forkJoin(productObservables).pipe(
      defaultIfEmpty([]),
      map((products: Product[]) =>
        this.hasSpeedboost(products)
          ? products.map((product: Product) =>
              product.omapiProduct.externalProductCode === 'INTF0200'
                ? {
                    ...product,
                    productSpec: {
                      shortSummaries: [],
                      detailedSpecs: [],
                    },
                  }
                : product
            )
          : products
      )
    );
  }

  private flatten(offer: Offer): Offer[] {
    const offerWithoutOffers: Offer = {
      id: offer.id,
      type: offer.type,
      offers: [],
      amountOfLimitedSims: offer.amountOfLimitedSims,
    };

    return [offerWithoutOffers].concat(offer.offers.flatMap((offer: Offer) => this.flatten(offer)));
  }

  private getProductSpec(omapiId: string): Observable<ProductSpec> {
    return this.productSpecs$.pipe(
      map((rawProductSpecs: RawProductSpec[]) =>
        rawProductSpecs.find((rawProductSpec: RawProductSpec) => rawProductSpec.omapiId === omapiId)
      ),
      filter(
        (rawProductSpec: RawProductSpec | undefined): rawProductSpec is RawProductSpec => rawProductSpec !== undefined
      ),
      map(
        (rawProductSpec: RawProductSpec): ProductSpec => ({
          shortSummaries: rawProductSpec.shortSummaries,
          detailedSpecs: rawProductSpec.detailedSpecs,
        })
      )
    );
  }

  private getLocalizedName(omapiProduct: OmapiProduct): string {
    const language: LanguageEnum = this.languageService.getLanguage();

    switch (language) {
      case LanguageEnum.NL:
        return omapiProduct.getLocalizedContentNames().nl;
      case LanguageEnum.FR:
        return omapiProduct.getLocalizedContentNames().fr;
      case LanguageEnum.EN:
        return omapiProduct.getLocalizedContentNames().en;
    }
  }

  private removeLimitedSimsSpecs(product: Product): Product {
    return {
      ...product,
      productSpec: {
        shortSummaries: product.productSpec.shortSummaries.filter(
          (shortSummary: ShortSummarySpec) => shortSummary.labelKey !== this.limitedMobileShortSummary
        ),
        detailedSpecs: product.productSpec.detailedSpecs.filter(
          (detailedSpec: DetailedSpec) => detailedSpec.labelKey !== this.limitedMobileDetailedSpec
        ),
      },
    };
  }

  private removeUnlimitedSimsSpecs(product: Product): Product {
    return {
      ...product,
      productSpec: {
        shortSummaries: product.productSpec.shortSummaries.filter(
          (shortSummary: ShortSummarySpec) => shortSummary.labelKey !== this.unlimitedMobileShortSummary
        ),
        detailedSpecs: product.productSpec.detailedSpecs.filter(
          (detailedSpec: DetailedSpec) => detailedSpec.labelKey !== this.unlimitedMobileDetailedSpec
        ),
      },
    };
  }

  private hasSpeedboost(products: Product[]): boolean {
    return products.some((product: Product) => product.omapiProduct.externalProductCode === 'IOPT0005');
  }
}
