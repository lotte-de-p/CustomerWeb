import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ErrorMessage, MessageService, MessagesModule } from '@telenet/ng-lib-message';
import {
  CharsEnum,
  OmapiFamilyService,
  OmapiProduct,
  OmapiProductTestfactory,
  KlikMobileData,
  KlikOmapiProduct,
  KlikOmapiFamily,
} from '@telenet/ng-lib-omapi';
import { PathCategorisationService, UrlService } from '@telenet/ng-lib-page';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { of, throwError } from 'rxjs';
import {
  MockCreateSalesOrderRequest,
  MockCreateSalesOrderRequestBody,
} from '../mock-marketing/models/mock-create-sales-order-request.model';
import { SelectedAddOnInterface } from '../mock-product-configurator/mock-product-configurator.component';
import { KlikMockProductConfiguratorComponent, TierInfo } from './klik-mock-product-configurator.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import {
  klikFamilyBUND111MobileDataFactory,
  klikFamilyBUND112MobileDataFactory,
  klikFamilyEntertainmentFactory,
  klikFamilyEntertainmentWithoutTierProductsFactory,
  klikFamilyEntertainmentWithoutTiersFactory,
  klikFamilyNoMobileProductFactory,
  klikFamilyWithoutMobileDataFactory,
  klikFamilyWithoutProductInfoFactory,
  klikOmapiFamilyTierFactory,
  klikOmapiOptinsFactory,
  klikOmapiOptionsFactory,
  klikOmapiProductFactory,
  klikOmapiTierFactory,
} from './klik-omapi-family.interface.testfactory';

const salesBaseUrl = 'https://www.int.base.be/en/sales';
const encodedString = 'XQAAAAIjAAAAAAAAAABAqYnmbFEIbVbO7gEot3B4b5SZE4CcYhLtXznaU-11lNN2skEPH_5a__-ONgAA';
const mockProductConfigurator = 'mock-product-configurator';
const mobileline = 'MOBILE LINE';
describe('KlikMockProductConfiguratorComponent', () => {
  let component: KlikMockProductConfiguratorComponent,
    fixture: ComponentFixture<KlikMockProductConfiguratorComponent>,
    formBuilder: FormBuilder,
    urlService: UrlService,
    messageService: MessageService,
    omapiFamilyService: OmapiFamilyService,
    pathCategorisationService: PathCategorisationService;
  let klikFamily: KlikOmapiFamily;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        MessagesModule,
        CommonModule,
        BrowserModule,
        MatButtonModule,
        HttpClientTestingModule,
      ],
      providers: [FormBuilder, { provide: 'Window', useValue: window }],
    });

    jest.spyOn(console, 'error').mockImplementation(jest.fn);
    fixture = TestBed.createComponent(KlikMockProductConfiguratorComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    urlService = TestBed.inject(UrlService);
    messageService = TestBed.inject(MessageService);
    omapiFamilyService = TestBed.inject(OmapiFamilyService);
    pathCategorisationService = TestBed.inject(PathCategorisationService);

    component.klikMockProductConfiguratorForm = formBuilder.group({
      tier: ['', [Validators.required]],
      mobilePAX: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      entertainment: [''],
      locationId: [''],
    });
    klikFamily = klikOmapiFamilyTierFactory.build({
      tiers: [klikOmapiTierFactory.build()],
      products: [
        klikOmapiProductFactory.build({
          type: 'mobile',
          tiers: [
            {
              key: 'klik',
              products: [
                {
                  omapiId: 'KLIK0001',
                  mobileData: [
                    {
                      key: 'limited',
                      omapiId: 'KLIK0001',
                      productInfo: OmapiProductTestfactory.build({
                        productConstituents: [
                          {
                            type: 'mobile_line',
                            maxCount: '1',
                          },
                          {
                            type: 'internet_line',
                            maxCount: '1',
                          },
                        ],
                      }),
                    },
                    {
                      key: 'unlimited',
                      omapiId: 'KLIK0005',
                      productInfo: OmapiProductTestfactory.build({
                        productConstituents: [
                          {
                            type: 'mobile_line',
                            maxCount: '1',
                          },
                          {
                            type: 'internet_line',
                            maxCount: '1',
                          },
                        ],
                      }),
                    },
                  ],
                },
              ],
            },
          ],
        }),
        klikOmapiProductFactory.build({
          type: 'entertainment',
          tiers: [
            {
              key: 'klik',
              products: [
                {
                  omapiId: 'TEOS0101',
                  mobileData: [],
                },
              ],
            },
          ],
        }),
        klikOmapiProductFactory.build({
          type: 'fixedTelephony',
          tiers: [
            {
              key: 'klik',
              products: [
                {
                  omapiId: 'FLIN0101',
                  mobileData: [],
                },
              ],
            },
          ],
        }),
      ],
      optins: [klikOmapiOptinsFactory.build()],
      options: [klikOmapiOptionsFactory.build()],
    });
  });

  describe('ngOnInit', () => {
    it('should create the component', () => {
      expect(component).toBeDefined();
    });
  });

  describe('buildForm', () => {
    it('should build the klikMockProductConfiguratorForm', () => {
      component.klikMockProductConfiguratorForm.reset();
      component['buildForm']();
      expect(component.klikMockProductConfiguratorForm.get('tier')?.value).toEqual('');
    });
  });

  describe('getKlikFamilyDetails', () => {
    it('should subscribe getKlikFamily method in omapiFamilyService for family klik with mobile product', () => {
      component.tiersInfo = [];
      jest.spyOn(omapiFamilyService, 'getKlikFamily').mockReturnValue(of(klikFamily));
      component['getKlikFamilyDetails']();
      expect(component.omapiFamilyResponse).toEqual(klikFamily);
      expect(component.tiersInfo.length).toBe(2);
      expect(component.paxList).toEqual(['1']);
    });

    it('should subscribe getKlikFamily method in omapiFamilyService for family klik without mobile product', () => {
      jest.spyOn(omapiFamilyService, 'getKlikFamily').mockReturnValue(of(klikFamilyNoMobileProductFactory.build()));
      component['getKlikFamilyDetails']();
      expect(component.omapiFamilyResponse).toEqual(klikFamilyNoMobileProductFactory.build());
      expect(component.tiersInfo.length).toBe(0);
    });

    it('should subscribe getKlikFamily method in omapiFamilyService for family klik for BUND112', () => {
      jest.spyOn(omapiFamilyService, 'getKlikFamily').mockReturnValue(of(klikFamilyBUND112MobileDataFactory.build()));
      component['getKlikFamilyDetails']();
      expect(component.omapiFamilyResponse).toEqual(klikFamilyBUND112MobileDataFactory.build());
      expect(component.tiersInfo.length).toBe(0);
      expect(component.paxList).toEqual(['NA']);
    });

    it('should subscribe getKlikFamily method in omapiFamilyService for family klik for BUND111', () => {
      jest.spyOn(omapiFamilyService, 'getKlikFamily').mockReturnValue(of(klikFamilyBUND111MobileDataFactory.build()));
      component['getKlikFamilyDetails']();
      expect(component.omapiFamilyResponse).toEqual(klikFamilyBUND111MobileDataFactory.build());
      expect(component.tiersInfo.length).toBe(0);
      expect(component.paxList).toEqual(['NA']);
    });

    it('should subscribe getKlikFamily method in omapiFamilyService for family klik without mobile data', () => {
      jest.spyOn(omapiFamilyService, 'getKlikFamily').mockReturnValue(of(klikFamilyWithoutMobileDataFactory.build()));
      component['getKlikFamilyDetails']();
      expect(component.omapiFamilyResponse).toEqual(klikFamilyWithoutMobileDataFactory.build());
      expect(component.tiersInfo.length).toBe(0);
      expect(component.paxList.length).toBe(0);
    });

    it('should subscribe getKlikFamily method in omapiFamilyService for family klik without product info', () => {
      jest.spyOn(omapiFamilyService, 'getKlikFamily').mockReturnValue(of(klikFamilyWithoutProductInfoFactory.build()));
      component['getKlikFamilyDetails']();
      expect(component.omapiFamilyResponse).toEqual(klikFamilyWithoutProductInfoFactory.build());
      expect(component.tiersInfo.length).toBe(0);
      expect(component.paxList.length).toBe(0);
    });

    it('should handle error for omapiFamilyService', () => {
      jest
        .spyOn(omapiFamilyService, 'getKlikFamily')
        .mockReturnValue(throwError(() => ({ status: 400, error: { code: 'ERR-CODE' } })));
      component['getKlikFamilyDetails']();
      expect(component.omapiFamilyResponse).toEqual(undefined);
    });
  });

  describe('setEntertainments', () => {
    it('should put a product in the entertainment array', () => {
      component.omapiFamilyResponse = klikFamilyEntertainmentFactory.build();
      component['setEntertainments']();
      expect(component.entertainments).toEqual([
        {
          omapiId: 'TEOS0101',
          mobileData: [{ omapiId: 'KLIK' }],
        },
      ]);
    });

    it('should have zero elements entertainment array', () => {
      component.omapiFamilyResponse = klikFamilyWithoutProductInfoFactory.build();
      component['setEntertainments']();
      expect(component.entertainments).toEqual([]);
    });

    it('should have zero elements entertainment array with no tier products', () => {
      component.omapiFamilyResponse = klikFamilyEntertainmentWithoutTierProductsFactory.build();
      component['setEntertainments']();
      expect(component.entertainments).toEqual([]);
    });

    it('should have zero elements entertainment array with no tiers', () => {
      component.entertainments = [];
      component.omapiFamilyResponse = klikFamilyEntertainmentWithoutTiersFactory.build();
      component['setEntertainments']();
      expect(component.entertainments).toEqual([]);
    });
  });

  describe('setContentPacks', () => {
    it('should return empty array', function () {
      component['setContentPacks']();
      expect(component.contentPacks).toEqual([]);
    });

    it('should put contentPacks from options of response', function () {
      component.omapiFamilyResponse = klikOmapiFamilyTierFactory.build();
      component['setContentPacks']();
      expect(component.contentPacks).toEqual([klikOmapiOptionsFactory.build()]);
    });
  });

  describe('setTierInfo', () => {
    it('should set tier based on mobile pax selected', () => {
      component.tiersInfo = [
        {
          count: '1',
          tierName: 'limited',
          id: 'KLIK0001',
        },
      ] as TierInfo[];
      component['setTierInfo']('1');
      expect(component.tiers.length).toEqual(1);
    });

    it('should not set tier', () => {
      component.tiers = [];
      component.tiersInfo = [] as TierInfo[];
      component['setTierInfo']('1');
      expect(component.tiers.length).toEqual(0);
    });
  });

  describe('resetForm', () => {
    it('should reset klik family form', () => {
      component['resetForm']();
      expect(component.tiers.length).toEqual(0);
      expect(component.selectedAddOns.length).toEqual(0);
      expect(component.contentPacks.length).toEqual(0);
    });
  });

  describe('setEntertainments', () => {
    it('should set entertainment', () => {
      component.omapiFamilyResponse = klikFamily;
      component['setEntertainments']();
      expect(component.entertainments.length).toEqual(1);
    });
  });

  describe('setOtherOptins', () => {
    it('should set entertainment', () => {
      component.omapiFamilyResponse = klikFamily;
      component['setOtherOptins']();
      expect(component.otherOptins.length).toEqual(1);
    });
  });

  describe('onEntertainmentSelection', () => {
    it('should set content pack', () => {
      const entertainment = {
        omapiId: 'TEOS0101',
      } as KlikOmapiProduct;
      component.omapiFamilyResponse = klikFamily;

      component.onEntertainmentSelection(entertainment);
      expect(component.contentPacks.length).toEqual(1);
    });

    it('should set empty content pack', () => {
      component.onEntertainmentSelection(undefined);
      expect(component.contentPacks.length).toEqual(0);
    });
  });

  describe('setOptins', () => {
    it('should set optins', () => {
      component.omapiFamilyResponse = klikFamily;
      component['setOptins']();
      expect(component.optins.length).toEqual(1);
    });
  });

  describe('onTierSelection', () => {
    it('should set selected tier', () => {
      const tier = {
        key: 'limited',
        omapiId: 'KLIK0001',
      } as KlikMobileData;
      component.onTierSelection(tier);
      expect(component.selectedTier).toEqual(tier);
    });
  });

  describe('isChecked', () => {
    it('should return false if content pack is mututal exclusive: klik', () => {
      component.mutuallyExclusiveContentPacks = ['TVPK0014', 'TVPK0015'];
      const contentPack = {
        productId: 'TVPK0014',
        productType: 'OPTION',
      } as OmapiProduct;
      component.selectedAddOns = [
        {
          id: 'TVPK0014',
          type: 'contentPack',
          toggleType: 'OPTION',
        },
      ];
      contentPack.getCharValue = () => ['TVPK0018', 'TVPK0015'];
      const actual = component.isChecked(contentPack);
      expect(component.selectedAddOns).toEqual([]);
      expect(component.mutuallyExclusiveContentPacks).toEqual([]);
      expect(actual).toEqual(false);
    });
  });

  describe('isDisabled', () => {
    it('should return true if content pack is mututal exclusive', () => {
      component.mutuallyExclusiveContentPacks = ['TVPK0014', 'TVPK0015'];
      const contentPack = {
        productId: 'TVPK0014',
        productType: 'OPTION',
      } as OmapiProduct;
      const actual = component.isDisabled(contentPack);
      expect(actual).toEqual(true);
    });
  });

  describe('onToggleSelection todo fix test setup', () => {
    it('should push the selected optin to selectedAddOns variable when toggle checked is true: klik', () => {
      const product = {
        productId: 'MBLN0002',
        productType: mobileline,
      } as OmapiProduct;

      const event = {
        target: {
          checked: true,
        },
      } as unknown as Event;

      const selectedAddOn = [
        {
          id: 'MBLN0002',
          type: mobileline,
          toggleType: 'optin',
        },
      ] as SelectedAddOnInterface[];
      jest
        .spyOn(
          component as unknown as {
            setMutuallyExclusiveContentPack: KlikMockProductConfiguratorComponent['setMutuallyExclusiveContentPack'];
          },
          'setMutuallyExclusiveContentPack'
        )
        .mockImplementation();
      component.onToggleSelection(product, event, 'optin');
      expect(component['setMutuallyExclusiveContentPack']).toHaveBeenCalled();
      expect(component.selectedAddOns).toEqual(selectedAddOn);
    });
    it('should remove the optin from selectedAddOns variable when toggle checked is false: klik', () => {
      const product = {
        productId: 'MBLN0002',
        productType: mobileline,
      } as OmapiProduct;
      const event = {
        target: {
          checked: false,
        },
      } as unknown as Event;
      component.selectedAddOns = [
        {
          id: 'MBLN0002',
          type: mobileline,
          toggleType: 'optin',
        },
      ];
      jest
        .spyOn(
          component as unknown as {
            setMutuallyExclusiveContentPack: KlikMockProductConfiguratorComponent['setMutuallyExclusiveContentPack'];
          },
          'setMutuallyExclusiveContentPack'
        )
        .mockImplementation();
      component.onToggleSelection(product, event, 'optin');
      expect(component['setMutuallyExclusiveContentPack']).toHaveBeenCalled();
      expect(component.selectedAddOns).toEqual([]);
    });
  });

  describe('setMutuallyExclusiveContentPack', () => {
    it('should set mutually exclusive content pack: klik', () => {
      component.mutuallyExclusiveContentPacks = [];
      const selectedContentPack = {
        chars: [
          {
            key: 'mutuallyexclusivetocontentpack',
            values: ['TVPK0018', 'TVPK0015'],
          },
        ],
        productId: 'TVPK0014',
        productType: 'OPTION',
      } as OmapiProduct;
      selectedContentPack.getCharValue = () => ['TVPK0018', 'TVPK0015'];
      const isChecked = true;
      const result = selectedContentPack.getCharValue(CharsEnum.MUTUALLY_EXCLUSIVE_TO_CONTENT_PACK);
      component['setMutuallyExclusiveContentPack'](selectedContentPack, isChecked);
      expect(component.mutuallyExclusiveContentPacks).toEqual(result);
    });

    it('should remove mutually exclusive content pack: klik', () => {
      const selectedContentPack = {
        chars: [
          {
            key: 'mutuallyexclusivetocontentpack',
            values: ['TVPK0018', 'TVPK0015'],
          },
        ],
        productId: 'TVPK0014',
        productType: 'OPTION',
      } as OmapiProduct;
      selectedContentPack.getCharValue = () => ['TVPK0018', 'TVPK0015'];
      const isChecked = false;
      jest
        .spyOn(
          component as unknown as {
            removeMutuallyExclusiveContentPacks: KlikMockProductConfiguratorComponent['removeMutuallyExclusiveContentPacks'];
          },
          'removeMutuallyExclusiveContentPacks'
        )
        .mockImplementation();
      component['setMutuallyExclusiveContentPack'](selectedContentPack, isChecked);
      expect(component['removeMutuallyExclusiveContentPacks']).toHaveBeenCalled();
    });
  });

  describe('removeMutuallyExclusiveContentPacks', () => {
    it('should remoeve content packs from mututal exclusive', () => {
      const values = ['TVPK0014', 'TVPK0015'];
      component.mutuallyExclusiveContentPacks = ['TVPK0014', 'TVPK0015', 'TVPK0018'];
      component['removeMutuallyExclusiveContentPacks'](values);
      expect(component.mutuallyExclusiveContentPacks).toEqual(['TVPK0018']);
    });
  });

  describe('updateSelectedAddons', () => {
    it('should add the addOn is not already present', () => {
      component.selectedAddOns = [
        {
          id: 'TVPK0002',
          type: 'OPTION',
          toggleType: 'option',
        },
        {
          id: 'TVPK0003',
          type: 'OPTION',
          toggleType: 'option',
        },
      ] as SelectedAddOnInterface[];

      const product = {} as OmapiProduct;
      product.productId = 'TVPK0004';
      product.productType = 'OPTION';

      component['updateSelectedAddons'](product, 'option');
      expect(component.selectedAddOns.length).toBe(3);
      expect(component.selectedAddOns[0].id).toBe('TVPK0002');
      expect(component.selectedAddOns[1].id).toBe('TVPK0003');
      expect(component.selectedAddOns[2].id).toBe('TVPK0004');
    });

    it('should NOT add the addOn is already present', () => {
      component.selectedAddOns = [
        {
          id: 'TVPK0002',
          type: 'OPTION',
          toggleType: 'option',
        },
        {
          id: 'TVPK0003',
          type: 'OPTION',
          toggleType: 'option',
        },
      ] as SelectedAddOnInterface[];

      const product = {} as OmapiProduct;
      product.productId = 'TVPK0002';
      product.productType = 'OPTION';

      component['updateSelectedAddons'](product, 'option');
      expect(component.selectedAddOns.length).toBe(2);
      expect(component.selectedAddOns[0].id).toBe('TVPK0002');
      expect(component.selectedAddOns[1].id).toBe('TVPK0003');
    });
  });

  describe('onSubmit', () => {
    it('should call the methods clearErrorMessages, getRequestBody and setRequestJSONAndRedirectwhen form is valid TODO fix window setup', () => {
      const requestBody = {} as MockCreateSalesOrderRequest;
      jest.spyOn(messageService, 'clearErrorMessages');
      jest
        .spyOn(
          component as unknown as { getRequestBody: KlikMockProductConfiguratorComponent['getRequestBody'] },
          'getRequestBody'
        )
        .mockReturnValue(requestBody);
      jest
        .spyOn(
          component as unknown as {
            setRequestJSONAndRedirect: KlikMockProductConfiguratorComponent['setRequestJSONAndRedirect'];
          },
          'setRequestJSONAndRedirect'
        )
        .mockImplementation();
      component.selectedTier = {
        productInfo: {
          productId: 'KLIK0001',
          productType: 'BUNDLE',
        } as OmapiProduct,
      } as KlikMobileData;
      component.klikMockProductConfiguratorForm.controls['mobilePAX'].setValue('2');
      component.klikMockProductConfiguratorForm.controls['tier'].setValue('KLIK0001');
      component.onSubmit();
      expect(messageService.clearErrorMessages).toHaveBeenCalled();
      expect(component['getRequestBody']).toHaveBeenCalled();
      expect(component['setRequestJSONAndRedirect']).toHaveBeenCalledWith(requestBody);
    });
    it('should markAllAsTouched and add respective error message when form is invalid', () => {
      component.klikMockProductConfiguratorForm.controls['mobilePAX'].setValue('11');
      jest.spyOn(component.klikMockProductConfiguratorForm, 'markAllAsTouched');
      jest.spyOn(messageService, 'addMessage');
      component.onSubmit();
      expect(component.klikMockProductConfiguratorForm.markAllAsTouched).toHaveBeenCalled();
      expect(messageService.addMessage).toHaveBeenCalledWith(
        new ErrorMessage(mockProductConfigurator, 'mock-product-configurator.form-error')
      );
    });
  });

  describe('clearErrorMessages', () => {
    it('should clear all the error messages', () => {
      jest.spyOn(messageService, 'clearErrorMessages');
      component['clearErrorMessages']();
      expect(messageService.clearErrorMessages).toHaveBeenCalledWith(mockProductConfigurator);
    });
  });

  describe('getRequestBody', () => {
    it('should return the request body for selected entertainment, contentpack and optin - klik flow', () => {
      component.selectedTier = {
        productInfo: {
          productId: 'KLIK0001',
          productType: 'BUNDLE',
        } as OmapiProduct,
      } as KlikMobileData;
      component.selectedAddOns = [
        {
          id: 'TVPK0003',
          type: 'play_more',
          toggleType: 'contentPack',
        },
      ];
      const mockCreateSalesOrderRequest = {
        offers: [
          {
            id: 'KLIK0001',
            type: 'BUNDLE',
            offers: [
              {
                id: 'TEOS0001',
                type: 'IDTV LINE',
                offers: [
                  {
                    id: 'TVPK0003',
                    type: 'play_more',
                  },
                ],
              },
            ],
          },
        ],
      } as MockCreateSalesOrderRequest;
      component.klikMockProductConfiguratorForm.controls['entertainment'].setValue('TEOS0001');
      component.entertainments = [
        {
          omapiId: 'TEOS0001',
          productInfo: {
            productId: 'TEOS0001',
            productType: 'IDTV LINE',
          },
        },
      ] as KlikOmapiProduct[];
      jest.spyOn(pathCategorisationService, 'getCustomerCategory').mockReturnValue('BUSINESS');
      const returnRequestBody = component['getRequestBody']();
      expect(returnRequestBody).toEqual(mockCreateSalesOrderRequest);
    });

    it('should return the request body for selected entertainment and optin - klik flow', () => {
      component.selectedTier = {
        productInfo: {
          productId: 'KLIK0001',
          productType: 'BUNDLE',
        } as OmapiProduct,
      } as KlikMobileData;
      component.selectedAddOns = [];
      const mockCreateSalesOrderRequest = {
        offers: [
          {
            id: 'KLIK0001',
            type: 'BUNDLE',
            offers: [
              {
                id: 'TEOS0001',
                type: 'IDTV LINE',
              },
            ],
          },
        ],
      } as MockCreateSalesOrderRequest;
      component.klikMockProductConfiguratorForm.controls['entertainment'].setValue('TEOS0001');
      component.entertainments = [
        {
          omapiId: 'TEOS0001',
          productInfo: {
            productId: 'TEOS0001',
            productType: 'IDTV LINE',
          },
        },
      ] as KlikOmapiProduct[];
      jest.spyOn(pathCategorisationService, 'getCustomerCategory').mockReturnValue('BUSINESS');
      const returnRequestBody = component['getRequestBody']();
      expect(returnRequestBody).toEqual(mockCreateSalesOrderRequest);
    });

    it('should return the request body for selected entertainment and optin - klik', () => {
      component.selectedTier = {
        productInfo: {
          productId: 'KLIK0001',
          productType: 'BUNDLE',
        } as OmapiProduct,
      } as KlikMobileData;
      component.selectedAddOns = [
        {
          id: 'FLIN0101',
          type: 'FIXED LINE',
          toggleType: 'optin',
        },
      ];
      component.entertainments = [];
      const mockCreateSalesOrderRequest = {
        offers: [
          {
            id: 'KLIK0001',
            type: 'BUNDLE',
            offers: [
              {
                id: 'FLIN0101',
                type: 'FIXED LINE',
              },
            ],
          },
        ],
      } as MockCreateSalesOrderRequest;
      jest.spyOn(pathCategorisationService, 'getCustomerCategory').mockReturnValue('BUSINESS');
      const returnRequestBody = component['getRequestBody']();
      expect(returnRequestBody).toEqual(mockCreateSalesOrderRequest);
    });
  });

  describe('setRequestJSONAndRedirect', () => {
    it('should redirect to sales url with location id if present and correct sdata', fakeAsync(() => {
      component.klikMockProductConfiguratorForm.controls['locationId'].setValue('9150308784313768880');
      const mockCreateSalesOrderRequest: MockCreateSalesOrderRequest = {
        offers: [
          {
            id: 'C5FA0001',
            type: 'Bundle',
          } as MockCreateSalesOrderRequestBody,
        ],
      };
      window['JsonUrl'] = function (_: object) {
        return {
          compress: function () {
            return new Promise((resolve) => {
              resolve(encodedString);
            });
          },
          decompress: function () {
            return new Promise((resolve) => {
              resolve(mockCreateSalesOrderRequest);
            });
          },
        };
      };
      jest.spyOn(pathCategorisationService, 'isBrandTelenetAndCategoryResidential').mockReturnValue(true);
      jest.spyOn(urlService, 'redirectTo');
      component.salesUrl = salesBaseUrl;
      const redirectUrl =
        component.salesUrl +
        '?flow=marketing&installationLocationId=' +
        '9150308784313768880' +
        '&sdata=' +
        encodedString;
      component['setRequestJSONAndRedirect'](mockCreateSalesOrderRequest);
      tick();
      expect(urlService.redirectTo).toHaveBeenCalledWith(redirectUrl);
    }));

    it('should redirect to sales url with correct sdata', fakeAsync(() => {
      component.klikMockProductConfiguratorForm.controls['locationId'].setValue('');
      const mockCreateSalesOrderRequest: MockCreateSalesOrderRequest = {
        offers: [
          {
            id: 'C5FA0001',
            type: 'Bundle',
          } as MockCreateSalesOrderRequestBody,
        ],
      };

      window['JsonUrl'] = function (_: object) {
        return {
          compress: function () {
            return new Promise((resolve) => {
              resolve(encodedString);
            });
          },
          decompress: function () {
            return new Promise((resolve) => {
              resolve(mockCreateSalesOrderRequest);
            });
          },
        };
      };
      jest.spyOn(pathCategorisationService, 'isBrandTelenetAndCategoryResidential').mockReturnValue(false);
      jest.spyOn(urlService, 'redirectTo');
      component.salesUrl = salesBaseUrl;
      const redirectUrl = component.salesUrl + '?flow=marketing&sdata=' + encodedString;
      component['setRequestJSONAndRedirect'](mockCreateSalesOrderRequest);
      tick();
      expect(urlService.redirectTo).toHaveBeenCalledWith(redirectUrl);
    }));

    it('should redirect to sales url with location id and action if present with correct sdata', fakeAsync(() => {
      component.klikMockProductConfiguratorForm.controls['locationId'].setValue('9150308784313768880');
      const mockCreateSalesOrderRequest: MockCreateSalesOrderRequest = {
        offers: [
          {
            id: 'C5FA0001',
            type: 'Bundle',
          } as MockCreateSalesOrderRequestBody,
        ],
      };

      window['JsonUrl'] = function (_: object) {
        return {
          compress: function () {
            return new Promise((resolve) => {
              resolve(encodedString);
            });
          },
          decompress: function () {
            return new Promise((resolve) => {
              resolve(mockCreateSalesOrderRequest);
            });
          },
        };
      };
      jest.spyOn(urlService, 'redirectTo');
      component.salesUrl = salesBaseUrl;
      const redirectUrl = `${salesBaseUrl}?flow=marketing&action=register&installationLocationId=9150308784313768880&sdata=${encodedString}`;
      component['setRequestJSONAndRedirect'](mockCreateSalesOrderRequest, 'register');
      tick();
      expect(urlService.redirectTo).toHaveBeenCalledWith(redirectUrl);
    }));

    it('should redirect to sales url with  action if present with correct sdata', fakeAsync(() => {
      component.klikMockProductConfiguratorForm.patchValue({ locationId: '' });
      const mockCreateSalesOrderRequest: MockCreateSalesOrderRequest = {
        offers: [
          {
            id: 'C5FA0001',
            type: 'Bundle',
          } as MockCreateSalesOrderRequestBody,
        ],
      };

      window['JsonUrl'] = function (_: object) {
        return {
          compress: function () {
            return new Promise((resolve) => {
              resolve(encodedString);
            });
          },
          decompress: function () {
            return new Promise((resolve) => {
              resolve(mockCreateSalesOrderRequest);
            });
          },
        };
      };
      jest.spyOn(urlService, 'redirectTo');
      component.salesUrl = salesBaseUrl;
      const redirectUrl =
        component.salesUrl + '?flow=marketing' + '&action=register-via-itsme' + '&sdata=' + encodedString;
      component['setRequestJSONAndRedirect'](mockCreateSalesOrderRequest, 'register-via-itsme');
      tick();
      expect(urlService.redirectTo).toHaveBeenCalledWith(redirectUrl);
    }));
  });

  describe('registration', () => {
    it('should call the methods clearErrorMessages, setRequestJSONAndRedirect and set selectedAddons when form is valid', () => {
      jest.spyOn(messageService, 'clearErrorMessages');
      jest.spyOn(urlService, 'redirectTo');
      component.selectedTier = {
        productInfo: {
          productId: 'KLIK0001',
          productType: 'BUNDLE',
        } as OmapiProduct,
      } as KlikMobileData;

      component.selectedAddOns = [
        {
          id: 'TVPK0014',
          type: 'contentPack',
          toggleType: 'OPTION',
        },
      ];

      component.klikMockProductConfiguratorForm.controls['mobilePAX'].patchValue('2');
      component.klikMockProductConfiguratorForm.controls['tier'].patchValue('KLIK0001');

      component.registration('register');
      expect(messageService.clearErrorMessages).toHaveBeenCalled();
      expect(component.selectedAddOns).toEqual([
        {
          id: 'TVPK0014',
          toggleType: 'OPTION',
          type: 'contentPack',
        },
      ]);
    });

    it('should markAllAsTouched and add respective error message when form is invalid', () => {
      component.klikMockProductConfiguratorForm.controls['mobilePAX'].setValue('11');
      jest.spyOn(component.klikMockProductConfiguratorForm, 'markAllAsTouched');
      jest.spyOn(messageService, 'addMessage');
      component.registration('register-via-itsme');
      expect(component.klikMockProductConfiguratorForm.markAllAsTouched).toHaveBeenCalled();
      expect(messageService.addMessage).toHaveBeenCalledWith(
        new ErrorMessage(mockProductConfigurator, 'mock-product-configurator.form-error')
      );
    });
  });

  describe('isPresentInAddOns', () => {
    it('should return true add is present in array', () => {
      const productInfo = {
        productId: 'TVPK0014',
      } as OmapiProduct;
      component.selectedAddOns = [
        {
          id: 'TVPK0014',
          type: 'contentPack',
          toggleType: 'OPTION',
        },
      ];
      const actual = component.isPresentInAddOns(productInfo);
      expect(actual).toEqual(true);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
