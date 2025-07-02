import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { Observable, of } from 'rxjs';
import { ProductRequest } from './product-request.interface';
import { OfferRequest } from './offer-request.interface';
import { Product } from '../../../entities/product-finder/product/product.interface';
import { OmapiProduct, OmapiProductService } from '@telenet/ng-lib-omapi';
import { LanguageEnum, LanguageService } from '@telenet/ng-lib-page';
import { DetailedSpec, ShortSummarySpec } from '../../../entities/product-finder/product/product-spec.interface';

describe('ProductService', () => {
  let productService: ProductService;
  let omapiProductService: OmapiProductService;
  let languageService: LanguageService;

  const getLocalizedContentNames = 'getLocalizedContentNames';
  const internetVolumeIcon = 'icon icon-wifi-signal';
  const internetDownloadSpeedIcon = 'icon icon-download';
  const internetUploadSpeedIcon = 'icon icon-upload';
  const mobileIcon = 'icon icon-mobile';
  const messageGroup = 'product-finder';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: 'Window',
          useValue: {},
        },
      ],
    });

    productService = TestBed.inject(ProductService);
    omapiProductService = TestBed.inject(OmapiProductService);
    languageService = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    expect(productService).toBeTruthy();
  });

  describe('getProductSpec', () => {
    describe('C5', () => {
      let omapiProduct: OmapiProduct;
      const omapiId = 'C5FU0007';
      let c5FU0007Product: Product;
      const limitedMobileShortSummary = 'ng.product-finder.results-screen.short-summary-limited-mobile-volume-C5';
      const limitedMobileDetailedSpec = 'ng.product-finder.results-screen.detailed-specs-limited-mobile-volume-C5';
      const unlimitedMobileShortSummary = 'ng.product-finder.results-screen.short-summary-unlimited-mobile-volume-C5';
      const unlimitedMobileDetailedSpec = 'ng.product-finder.results-screen.detailed-specs-unlimited-mobile-volume-C5';

      beforeEach(() => {
        const localizedOmapiProductName = 'ONEup for 2';
        omapiProduct = new OmapiProduct();
        omapiProduct.externalProductCode = omapiId;
        jest
          .spyOn(omapiProduct, getLocalizedContentNames)
          .mockReturnValue({ en: '', nl: localizedOmapiProductName, fr: '' });
        jest.spyOn(omapiProductService, 'getProductById').mockReturnValue(of(omapiProduct));
        jest.spyOn(languageService, 'getLanguage').mockReturnValue(LanguageEnum.NL);

        c5FU0007Product = {
          localizedOmapiProductName,
          omapiProduct,
          productSpec: {
            shortSummaries: [
              {
                labelKey: 'ng.product-finder.results-screen.short-summary-internet-speed-C5FU',
                type: 'INTERNET',
              },
              {
                labelKey: unlimitedMobileShortSummary,
                type: 'MOBILE',
              },
              {
                labelKey: limitedMobileShortSummary,
                type: 'MOBILE',
              },
            ],
            detailedSpecs: [
              {
                icon: internetVolumeIcon,
                labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-volume-C5FU',
                type: 'INTERNET',
              },
              {
                icon: internetDownloadSpeedIcon,
                labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-download-speed-C5FU',
                type: 'INTERNET',
              },
              {
                icon: internetUploadSpeedIcon,
                labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-upload-speed-C5FU',
                type: 'INTERNET',
              },
              {
                icon: mobileIcon,
                labelKey: unlimitedMobileDetailedSpec,
                type: 'MOBILE',
              },
              {
                icon: mobileIcon,
                labelKey: limitedMobileDetailedSpec,
                type: 'MOBILE',
              },
            ],
          },
          amountOfLimitedSims: 1,
        };
      });

      it('should return product specs with limited and unlimited sims spec', (done) => {
        const productRequest: ProductRequest = {
          offers: [
            {
              id: omapiId,
              type: 'BUNDLE',
              offers: [],
              amountOfLimitedSims: 1,
            },
          ],
        };

        const expected: Product[] = [c5FU0007Product];

        const result$: Observable<Product[]> = productService.getProducts(productRequest);

        result$.subscribe((actual: Product[]) => {
          expect(actual).toEqual(expected);
          expect(omapiProductService.getProductById).toHaveBeenCalledWith(messageGroup, omapiId);
          expect(languageService.getLanguage).toHaveBeenCalled();
          done();
        });
      });

      it('should return product specs without limited sims spec', (done) => {
        const productRequest: ProductRequest = {
          offers: [
            {
              id: omapiId,
              type: 'BUNDLE',
              offers: [],
            },
          ],
        };

        const expected: Product[] = [
          {
            ...c5FU0007Product,
            productSpec: {
              ...c5FU0007Product.productSpec,
              shortSummaries: c5FU0007Product.productSpec.shortSummaries.filter(
                (shortSummary: ShortSummarySpec) => shortSummary.labelKey !== limitedMobileShortSummary
              ),
              detailedSpecs: c5FU0007Product.productSpec.detailedSpecs.filter(
                (detailedSpec: DetailedSpec) => detailedSpec.labelKey !== limitedMobileDetailedSpec
              ),
            },
            amountOfLimitedSims: undefined,
          },
        ];

        const result$: Observable<Product[]> = productService.getProducts(productRequest);

        result$.subscribe((actual: Product[]) => {
          expect(actual).toEqual(expected);
          expect(omapiProductService.getProductById).toHaveBeenCalledWith(messageGroup, omapiId);
          expect(languageService.getLanguage).toHaveBeenCalled();
          done();
        });
      });

      it('should return product specs without unlimited sims spec', (done) => {
        const amountOfLimitedSims = 2;
        const productRequest: ProductRequest = {
          offers: [
            {
              id: omapiId,
              type: 'BUNDLE',
              offers: [],
              amountOfLimitedSims,
            },
          ],
        };

        jest.spyOn(omapiProduct, 'getMaxMobileLines').mockReturnValue('2');

        const expected: Product[] = [
          {
            ...c5FU0007Product,
            productSpec: {
              ...c5FU0007Product.productSpec,
              shortSummaries: c5FU0007Product.productSpec.shortSummaries.filter(
                (shortSummary: ShortSummarySpec) => shortSummary.labelKey !== unlimitedMobileShortSummary
              ),
              detailedSpecs: c5FU0007Product.productSpec.detailedSpecs.filter(
                (detailedSpec: DetailedSpec) => detailedSpec.labelKey !== unlimitedMobileDetailedSpec
              ),
            },
            amountOfLimitedSims,
          },
        ];

        const result$: Observable<Product[]> = productService.getProducts(productRequest);

        result$.subscribe((actual: Product[]) => {
          expect(actual).toEqual(expected);
          expect(omapiProductService.getProductById).toHaveBeenCalledWith(messageGroup, omapiId);
          expect(languageService.getLanguage).toHaveBeenCalled();
          done();
        });
      });
    });

    describe('none C5', () => {
      it('should return products with All-Internet specs empty when having speedboost', (done) => {
        const allInternetOmapiId = 'INTF0200';
        const speedboostOmapiId = 'IOPT0005';
        const offer: OfferRequest = {
          id: allInternetOmapiId,
          type: 'INTERNET',
          offers: [
            {
              id: speedboostOmapiId,
              type: 'OPTION',
              offers: [],
            },
          ],
        };
        const productRequest: ProductRequest = { offers: [offer] };
        const allInternetOmapiProduct: OmapiProduct = new OmapiProduct();
        allInternetOmapiProduct.externalProductCode = allInternetOmapiId;
        const speedboostOmapiProduct: OmapiProduct = new OmapiProduct();
        speedboostOmapiProduct.externalProductCode = speedboostOmapiId;
        jest.spyOn(allInternetOmapiProduct, getLocalizedContentNames).mockReturnValue({
          en: '',
          nl: 'All-Internet',
          fr: '',
        });
        jest.spyOn(speedboostOmapiProduct, getLocalizedContentNames).mockReturnValue({
          en: '',
          nl: 'Giga Speedboost',
          fr: '',
        });
        jest
          .spyOn(omapiProductService, 'getProductById')
          .mockReturnValueOnce(of(allInternetOmapiProduct))
          .mockReturnValueOnce(of(speedboostOmapiProduct));
        jest.spyOn(languageService, 'getLanguage').mockReturnValue(LanguageEnum.NL);

        const expected: Product[] = [
          {
            localizedOmapiProductName: 'All-Internet',
            omapiProduct: allInternetOmapiProduct,
            productSpec: {
              shortSummaries: [],
              detailedSpecs: [],
            },
          },
          {
            localizedOmapiProductName: 'Giga Speedboost',
            omapiProduct: speedboostOmapiProduct,
            productSpec: {
              shortSummaries: [
                {
                  labelKey: 'ng.product-finder.results-screen.short-summary-IOPT0005',
                  type: 'INTERNET',
                },
              ],
              detailedSpecs: [
                {
                  icon: internetVolumeIcon,
                  labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-volume-IOPT0005',
                  type: 'INTERNET',
                },
                {
                  icon: internetDownloadSpeedIcon,
                  labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-download-speed-IOPT0005',
                  type: 'INTERNET',
                },
                {
                  icon: internetUploadSpeedIcon,
                  labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-upload-speed-IOPT0005',
                  type: 'INTERNET',
                },
              ],
            },
          },
        ];

        const result$: Observable<Product[]> = productService.getProducts(productRequest);

        result$.subscribe((actual: Product[]) => {
          expect(actual).toEqual(expected);
          expect(omapiProductService.getProductById).toHaveBeenNthCalledWith(1, messageGroup, allInternetOmapiId);
          expect(omapiProductService.getProductById).toHaveBeenNthCalledWith(2, messageGroup, speedboostOmapiId);
          expect(languageService.getLanguage).toHaveBeenCalled();
          done();
        });
      });
    });
  });
});
