import { PathCategorisationService, UrlService } from '@telenet/ng-lib-page';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MockProductConfiguratorComponent, SelectedAddOnInterface } from './mock-product-configurator.component';
import { ErrorMessage, MessageService, MessagesModule } from '@telenet/ng-lib-message';
import {
  CharsEnum,
  OmapiFamily,
  omapiFamilyFactory,
  OmapiFamilyOptin,
  omapiFamilyOptinFactory,
  OmapiFamilyOption,
  OmapiFamilyService,
  OmapiFamilyTier,
  omapiFamilyTierFactory,
  OmapiProduct,
  OmapiProductInfo,
  omapiProductInfoFactory,
  OmapiProductTestfactory,
} from '@telenet/ng-lib-omapi';
import {
  MockCreateSalesOrderRequest,
  MockCreateSalesOrderRequestBody,
} from '../mock-marketing/models/mock-create-sales-order-request.model';
import { of } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';

const spyOn = jest.spyOn;

const ENCODED_STRING = 'XQAAAAIjAAAAAAAAAABAqYnmbFEIbVbO7gEot3B4b5SZE4CcYhLtXznaU-11lNN2skEPH_5a__-ONgAA';
const MOCK_PRODUCT_CONFIGURATOR = 'mock-product-configurator';
const MOBILE_LINE = 'MOBILE LINE';
const SALES_URL = 'https://www.int.base.be/en/sales';
describe('MockProductConfiguratorComponent', () => {
  let component: MockProductConfiguratorComponent,
    fixture: ComponentFixture<MockProductConfiguratorComponent>,
    formBuilder: FormBuilder,
    urlService: UrlService,
    messageService: MessageService,
    omapiFamilyService: OmapiFamilyService,
    pathCategorisationService: PathCategorisationService;

  let family: OmapiFamily;

  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { assign: jest.fn(), search: '' },
    });
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        MessagesModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        HttpClientTestingModule,
      ],
      providers: [FormBuilder, { provide: 'Window', useValue: window }],
      schemas: [],
    });

    fixture = TestBed.createComponent(MockProductConfiguratorComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    urlService = TestBed.inject(UrlService);
    messageService = TestBed.inject(MessageService);
    omapiFamilyService = TestBed.inject(OmapiFamilyService);
    pathCategorisationService = TestBed.inject(PathCategorisationService);

    component.mockProductConfiguratorForm = formBuilder.group({
      tier: [''],
      mobilePAX: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      entertainment: [''],
      locationId: [''],
    });
  });

  beforeEach(() => {
    family = omapiFamilyFactory.build({
      tiers: [
        omapiFamilyTierFactory.build({
          key: 'ONE',
          omapiId: 'C5FA0001',
          entertainment: [
            omapiProductInfoFactory.build({ omapiId: 'TEOS0001' }),
            omapiProductInfoFactory.build({ omapiId: 'OTT0000' }),
          ],
          mobile: [
            omapiProductInfoFactory.build({
              omapiId: 'C5FA0001',
              productInfo: OmapiProductTestfactory.build({
                productConstituents: [
                  {
                    type: 'mobile_line',
                    maxCount: '1',
                  },
                ],
              }),
            }),
          ],
          optins: [
            omapiFamilyOptinFactory.build({ omapiId: 'MBLN0002' }),
            omapiFamilyOptinFactory.build({ omapiId: 'FLIN0001' }),
          ],
          options: [omapiFamilyOptinFactory.build({ omapiId: 'BERU0001' })],
        }),
        omapiFamilyTierFactory.build({
          key: 'ONEup',
          omapiId: 'C5FU0001',
          entertainment: [
            omapiProductInfoFactory.build({ omapiId: 'TEOS0001' }),
            omapiProductInfoFactory.build({ omapiId: 'OTT0000' }),
          ],
          mobile: [
            omapiProductInfoFactory.build({
              omapiId: 'C5FU0001',
              productInfo: OmapiProductTestfactory.build({
                productConstituents: [
                  {
                    type: 'mobile_line',
                    maxCount: '1',
                  },
                ],
              }),
            }),
            omapiProductInfoFactory.build({
              omapiId: 'C5FU0002',
              productInfo: OmapiProductTestfactory.build({
                productConstituents: [
                  {
                    type: 'mobile_line',
                    maxCount: '2',
                  },
                ],
              }),
            }),
            omapiProductInfoFactory.build({
              omapiId: 'C5FU0003',
              productInfo: OmapiProductTestfactory.build({
                productConstituents: [
                  {
                    type: 'mobile_line',
                    maxCount: '3',
                  },
                  {
                    type: 'mobile_line',
                    maxCount: '1',
                  },
                ],
              }),
            }),
          ],
          optins: [
            omapiFamilyOptinFactory.build({ omapiId: 'MBLN0002' }),
            omapiFamilyOptinFactory.build({ omapiId: 'FLIN0001' }),
          ],
          options: [omapiFamilyOptinFactory.build({ omapiId: 'BERU0001' })],
        }),
        omapiFamilyTierFactory.build({
          key: 'Limited Internet',
          omapiId: 'KLIK001',
          entertainment: [omapiProductInfoFactory.build({ omapiId: 'TEOS0101' })],
          mobile: [
            omapiProductInfoFactory.build({
              omapiId: 'BUND112',
              productInfo: OmapiProductTestfactory.build({
                productConstituents: [
                  {
                    type: 'mobile_line',
                    maxCount: '1',
                  },
                ],
              }),
            }),
            omapiProductInfoFactory.build({
              omapiId: 'KLIK001',
              productInfo: OmapiProductTestfactory.build({
                productConstituents: [
                  {
                    type: 'mobile_line',
                    maxCount: '2',
                  },
                ],
              }),
            }),
            omapiProductInfoFactory.build({
              omapiId: 'KLIK002',
              productInfo: OmapiProductTestfactory.build({
                productConstituents: [
                  {
                    type: 'mobile_line',
                    maxCount: '3',
                  },
                  {
                    type: 'mobile_line',
                    maxCount: '1',
                  },
                ],
              }),
            }),
          ],
          optins: [
            omapiFamilyOptinFactory.build({ omapiId: 'MBLN0002' }),
            omapiFamilyOptinFactory.build({ omapiId: 'FLIN0001' }),
          ],
          options: [omapiFamilyOptinFactory.build({ omapiId: 'BERU0001' })],
        }),
      ],
    });
  });

  describe('ngOnInit', () => {
    it('should create the component', () => {
      expect(component).toBeDefined();
    });
  });

  describe('getCategoryBasedBundle', () => {
    it('should get product family connect5', () => {
      spyOn(pathCategorisationService, 'isBrandTelenetAndCategoryResidential').mockReturnValue(true);
      const expectedProductFamilies = [{ key: 'Connect 5', value: 'connect5' }];
      component.getCategoryBasedBundle();
      expect(component.productFamilies).toEqual(expectedProductFamilies);
    });
    it('should get product family Klik', () => {
      spyOn(pathCategorisationService, 'isBrandTelenetAndCategoryResidential').mockReturnValue(false);
      const expectedProductFamilies = [{ key: 'Klik', value: 'klik' }];
      component.getCategoryBasedBundle();
      expect(component.productFamilies).toEqual(expectedProductFamilies);
    });
  });

  describe('onFamilySelection', () => {
    it('should subscribe getFamily method in omapiFamilyService and assign the response to object omapiFamilyResponse for family connect5', () => {
      spyOn(omapiFamilyService, 'getFamily').mockReturnValue(of(family));
      component.onFamilySelection('connect5');
      expect(component.omapiFamilyResponse).toEqual(family);
    });
    it('should subscribe getFamily method in omapiFamilyService for family kilk', () => {
      spyOn(omapiFamilyService, 'getFamily').mockReturnValue(of(family));
      component.onFamilySelection('klik');
      expect(component.omapiFamilyResponse).toEqual(family);
    });
  });

  describe('onTierSelection', () => {
    it('should select the tier and call the methods setEntertainments, setOptins and setOptions for mapping', () => {
      component.onTierSelection(family.tiers[0]);
      expect(component.selectedTier).toEqual(family.tiers[0]);
    });
  });

  describe('setEntertainments', () => {
    it('should assign the available entertainment based on selected tier', () => {
      component.selectedTier = family.tiers[0];
      component['setEntertainments']();
      expect(component.entertainments).toEqual(family.tiers[0].entertainment);
    });
  });

  describe('setOptins', () => {
    it('should assign the available optins based on selected tier', () => {
      const availableOptins: OmapiFamilyOptin[] = [];

      if (family.tiers[0].optins) {
        availableOptins.push(family.tiers[0].optins[0]);
        availableOptins.push(family.tiers[0].optins[1]);
      }

      component.selectedTier = family.tiers[0];
      component['setOptins']();
      expect(component.optins).toEqual(availableOptins);
    });
  });

  describe('setOptions', () => {
    it('should assign the available options based on selected tier', () => {
      const availableOptions: OmapiFamilyOption[] = [];
      if (family.tiers[0].options) availableOptions.push(family.tiers[0].options[0]);
      component.selectedTier = family.tiers[0];
      component['setOptions']();
      expect(component.options).toEqual(availableOptions);
    });
  });

  describe('onEntertainmentSelection', () => {
    it('should call method setContentPacks when one of the available entertainment is selected', () => {
      component.mockProductConfiguratorForm.controls['tier'].setValue('C5FA0001');
      component['setContentPacks'] = jest.fn();
      if (!family.tiers[0].entertainment) {
        fail();
      }
      component.onEntertainmentSelection(family.tiers[0].entertainment[0]);
      expect(component['setContentPacks']).toHaveBeenCalledWith(family.tiers[0].entertainment[0], 'C5FA0001');
    });
    it('should assign undefined to contentPacks when none of the entertainment selected', () => {
      component.mockProductConfiguratorForm.controls['tier'].setValue('C5FA0001');

      component.onEntertainmentSelection(undefined);
      expect(component.contentPacks).toEqual(undefined);
    });
  });

  describe('setContentPacks', () => {
    it('should assign the available content packs based on selected entertainment, tier and parents', () => {
      const entertainment = {
        productInfo: {
          productId: 'TEOS0001',
        },
      } as OmapiProductInfo;
      component.omapiFamilyResponse = {
        tiers: [
          {
            productInfo: {
              productId: 'C5FA0001',
            },
            options: [
              {
                type: 'entertainment',
                key: 'option_fr',
                omapiId: 'TVPK0012',
                parents: ['TEOS0001'],
              },
            ],
          },
        ],
      } as OmapiFamily;
      const availableContentPacks = [
        {
          type: 'entertainment',
          key: 'option_fr',
          omapiId: 'TVPK0012',
          parents: ['TEOS0001'],
        },
      ] as OmapiFamilyOption[];
      component['setContentPacks'](entertainment, 'C5FA0001');
      expect(component.contentPacks).toEqual(availableContentPacks);
    });
    it('should assign the available content packs based on selected entertainment and tier', () => {
      const entertainment = {} as OmapiProductInfo;
      component.omapiFamilyResponse = {
        tiers: [
          {
            productInfo: {
              productId: 'C5FA0001',
            },
            options: [
              {
                type: 'entertainment',
                key: 'basic_content_pack',
                omapiId: 'TVPK0002',
              },
            ],
          },
        ],
      } as OmapiFamily;
      const availableContentPacks = [
        {
          type: 'entertainment',
          key: 'basic_content_pack',
          omapiId: 'TVPK0002',
        },
      ] as OmapiFamilyOption[];
      component['setContentPacks'](entertainment, 'C5FA0001');
      expect(component.contentPacks).toEqual(availableContentPacks);
    });
  });

  describe('onToggleSelection', () => {
    it('should push the selected optin to selectedAddOns variable when toggle checked is true', () => {
      const product = new OmapiProduct();
      product.productId = 'MBLN0002';
      product.productType = MOBILE_LINE;
      const event: unknown = {
        target: {
          checked: true,
        },
      };
      const selectedAddOn = [
        {
          id: 'MBLN0002',
          type: MOBILE_LINE,
          toggleType: 'optin',
        },
      ] as { id: string; type: string; toggleType: string }[];
      component['setMutuallyExclusiveContentPack'] = jest.fn();
      component.onToggleSelection(product, event as Event, 'optin');
      expect(component['setMutuallyExclusiveContentPack']).toHaveBeenCalled();
      expect(component.selectedAddOns).toEqual(selectedAddOn);
    });
    it('should remove the optin from selectedAddOns variable when toggle checked is false', () => {
      const product = new OmapiProduct();
      product.productId = 'MBLN0002';
      product.productType = MOBILE_LINE;
      const event: unknown = {
        target: {
          checked: false,
        },
      };
      component.selectedAddOns = [
        {
          id: 'MBLN0002',
          type: MOBILE_LINE,
          toggleType: 'optin',
        },
      ];

      component.onToggleSelection(product, event as Event, 'optin');
      expect(component.selectedAddOns).toEqual([]);
    });
  });

  describe('onSubmit', () => {
    it('should call the methods clearErrorMessages, getRequestBody and setRequestJSONAndRedirectwhen form is valid', () => {
      const requestBody = {} as MockCreateSalesOrderRequest;
      spyOn(
        component as unknown as { getRequestBody: MockProductConfiguratorComponent['getRequestBody'] },
        'getRequestBody'
      ).mockReturnValue(requestBody);

      component['setRequestJSONAndRedirect'] = jest.fn();
      component.selectedTier = {
        mobile: [
          {
            productInfo: {
              productConstituents: [
                {
                  type: 'mobile_line',
                  minCount: '0',
                  maxCount: '2',
                },
              ],
            },
          },
        ],
      } as OmapiFamilyTier;
      component.mockProductConfiguratorForm.controls['mobilePAX'].setValue('2');
      component.onSubmit();
      expect(component['getRequestBody']).toHaveBeenCalled();
      expect(component['setRequestJSONAndRedirect']).toHaveBeenCalledWith(requestBody);
    });
    it('should markAllAsTouched and add respective error message when form is invalid', () => {
      component.mockProductConfiguratorForm.controls['mobilePAX'].setValue('11');
      spyOn(component.mockProductConfiguratorForm, 'markAllAsTouched');
      spyOn(messageService, 'addMessage');
      component.onSubmit();
      expect(component.mockProductConfiguratorForm.markAllAsTouched).toHaveBeenCalled();
      expect(messageService.addMessage).toHaveBeenCalledWith(
        new ErrorMessage(MOCK_PRODUCT_CONFIGURATOR, 'mock-product-configurator.form-error')
      );
    });
  });

  describe('buildForm', () => {
    it('should build the mockProductConfigurtorForm', () => {
      component.mockProductConfiguratorForm.reset();
      component['buildForm']();

      expect(component.mockProductConfiguratorForm.get('tier')?.value).toEqual('');
    });
  });

  describe('getRequestBody', () => {
    it('should return the request body for selected entertainment, contentpack and optin', () => {
      const selectedMobileLine = {
        productInfo: {
          productId: 'C5FA0001',
          productType: '',
        },
      } as OmapiProductInfo;
      component.selectedAddOns = [
        {
          id: 'TVPK0002',
          type: 'basic_content_pack',
          toggleType: 'contentPack',
        },
        {
          id: 'TVPK0003',
          type: 'play_more',
          toggleType: 'contentPack',
        },
        {
          id: 'MBLN0002',
          type: MOBILE_LINE,
          toggleType: 'optin',
        },
      ];
      const mockCreateSalesOrderRequest = {
        offers: [
          {
            id: 'C5FA0001',
            type: '',
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
              {
                id: 'MBLN0002',
                type: MOBILE_LINE,
              },
            ],
          },
        ],
      } as MockCreateSalesOrderRequest;
      component.mockProductConfiguratorForm.controls['entertainment'].setValue('TEOS0001');
      component.selectedTier = {
        entertainment: [
          {
            productInfo: {
              productId: 'TEOS0001',
              productType: 'IDTV LINE',
            },
          },
        ],
      } as OmapiFamilyTier;
      spyOn(
        component as unknown as { getSelectedMobileLine: MockProductConfiguratorComponent['getSelectedMobileLine'] },
        'getSelectedMobileLine'
      ).mockReturnValue(selectedMobileLine);
      const returnRequestBody = component['getRequestBody']();
      expect(returnRequestBody).toEqual(mockCreateSalesOrderRequest);
    });

    it('should return the request body for selected entertainment, contentpack and optin - business flow', () => {
      const selectedMobileLine = {
        productInfo: {
          productId: 'C5FA0001',
          productType: '',
        },
      } as OmapiProductInfo;
      component.selectedAddOns = [];
      const mockCreateSalesOrderRequest = {
        offers: [
          {
            id: 'C5FA0001',
            type: '',
            offers: [
              {
                id: 'TEOS0001',
                type: 'IDTV LINE',
              },
            ],
          },
        ],
      } as MockCreateSalesOrderRequest;
      component.mockProductConfiguratorForm.controls['entertainment'].setValue('TEOS0001');
      component.selectedTier = {
        entertainment: [
          {
            productInfo: {
              productId: 'TEOS0001',
              productType: 'IDTV LINE',
            },
          },
        ],
      } as OmapiFamilyTier;

      spyOn(
        component as unknown as { getSelectedMobileLine: MockProductConfiguratorComponent['getSelectedMobileLine'] },
        'getSelectedMobileLine'
      ).mockReturnValue(selectedMobileLine);
      spyOn(pathCategorisationService, 'getCustomerCategory').mockReturnValue('BUSINESS');
      const returnRequestBody = component['getRequestBody']();
      expect(returnRequestBody).toEqual(mockCreateSalesOrderRequest);
    });
  });

  describe('getSelectedMobileLine', () => {
    it('should return the selectedMobileLine based on mobilepax selected', () => {
      component.mockProductConfiguratorForm.controls['mobilePAX'].setValue('1');
      const selectedMobileLine = {
        productInfo: {
          productConstituents: [
            {
              type: 'mobile_line',
              maxCount: '1',
            },
          ],
        },
      } as OmapiProductInfo;
      component.selectedTier = {
        mobile: [
          {
            productInfo: {
              productConstituents: [
                {
                  type: 'mobile_line',
                  maxCount: '1',
                },
              ],
            },
          },
        ],
      } as OmapiFamilyTier;
      const returnMobileLine = component['getSelectedMobileLine']();
      expect(returnMobileLine).toEqual(selectedMobileLine);
    });
    it('should return the selectedMobileLine based on mobilepax selected', () => {
      component.selectedTier = family.tiers[2];
      component.mockProductConfiguratorForm.controls['mobilePAX'].setValue('NA');
      const product = {
        productInfo: {
          productConstituents: [
            {
              type: 'mobile_line',
              maxCount: '1',
            },
          ],
        },
        omapiId: 'BUND112',
      } as OmapiProductInfo;
      component.selectedTier = {
        mobile: [
          {
            omapiId: 'BUND112',
            productInfo: {
              productConstituents: [
                {
                  type: 'mobile_line',
                  maxCount: '1',
                },
              ],
            },
          },
        ],
      } as OmapiFamilyTier;
      const returnMobileLine = component['getSelectedMobileLine']();
      expect(returnMobileLine).toEqual(product);
    });
  });

  describe('setRequestJSONAndRedirect', () => {
    it('should redirect to sales url with location id if present and correct sdata', fakeAsync(() => {
      component.mockProductConfiguratorForm.controls['locationId'].setValue('9150308784313768880');
      const mockCreateSalesOrderRequest: MockCreateSalesOrderRequest = {
        offers: [
          {
            id: 'C5FA0001',
            type: 'Bundle',
          } as MockCreateSalesOrderRequestBody,
        ],
      };
      const encodedString = ENCODED_STRING;

      window['JsonUrl'] = function (_parameter: object) {
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
      spyOn(pathCategorisationService, 'isBrandTelenetAndCategoryResidential').mockReturnValue(true);
      spyOn(urlService, 'redirectTo');
      component.salesUrl = SALES_URL;
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
      component.mockProductConfiguratorForm.controls['locationId'].setValue('');
      const mockCreateSalesOrderRequest: MockCreateSalesOrderRequest = {
        offers: [
          {
            id: 'C5FA0001',
            type: 'Bundle',
          } as MockCreateSalesOrderRequestBody,
        ],
      };
      const encodedString = ENCODED_STRING;

      window['JsonUrl'] = function (_parameter: object) {
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
      spyOn(pathCategorisationService, 'isBrandTelenetAndCategoryResidential').mockReturnValue(false);
      spyOn(urlService, 'redirectTo');
      component.salesUrl = SALES_URL;
      const redirectUrl = component.salesUrl + '?flow=marketing&sdata=' + encodedString;
      component['setRequestJSONAndRedirect'](mockCreateSalesOrderRequest);
      tick();
      expect(urlService.redirectTo).toHaveBeenCalledWith(redirectUrl);
    }));

    it('should redirect to sales url with location id and action if present with correct sdata', fakeAsync(() => {
      component.mockProductConfiguratorForm.controls['locationId'].setValue('9150308784313768880');
      const mockCreateSalesOrderRequest: MockCreateSalesOrderRequest = {
        offers: [
          {
            id: 'C5FA0001',
            type: 'Bundle',
          } as MockCreateSalesOrderRequestBody,
        ],
      };
      const encodedString = ENCODED_STRING;
      window['JsonUrl'] = function (_parameter: object) {
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
      spyOn(urlService, 'redirectTo');
      component.salesUrl = SALES_URL;
      const redirectUrl =
        component.salesUrl +
        '?flow=marketing&installationLocationId=' +
        '9150308784313768880' +
        '&action=register' +
        '&sdata=' +
        encodedString;
      component['setRequestJSONAndRedirect'](mockCreateSalesOrderRequest, 'register');
      tick();
      expect(urlService.redirectTo).toHaveBeenCalledWith(redirectUrl);
    }));

    it('should redirect to sales url with  action if present with correct sdata', fakeAsync(() => {
      component.mockProductConfiguratorForm.controls['locationId'].setValue('');
      const mockCreateSalesOrderRequest: MockCreateSalesOrderRequest = {
        offers: [
          {
            id: 'C5FA0001',
            type: 'Bundle',
          } as MockCreateSalesOrderRequestBody,
        ],
      };
      const encodedString = ENCODED_STRING;
      window['JsonUrl'] = function (_parameter: object) {
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
      spyOn(urlService, 'redirectTo');
      component.salesUrl = SALES_URL;
      const redirectUrl =
        component.salesUrl + '?flow=marketing' + '&action=register-via-itsme' + '&sdata=' + encodedString;
      component['setRequestJSONAndRedirect'](mockCreateSalesOrderRequest, 'register-via-itsme');
      tick();
      expect(urlService.redirectTo).toHaveBeenCalledWith(redirectUrl);
    }));
  });

  describe('clearErrorMessages', () => {
    it('should clear all the error messages', () => {
      spyOn(messageService, 'clearErrorMessages');
      component['clearErrorMessages']();
      expect(messageService.clearErrorMessages).toHaveBeenCalledWith(MOCK_PRODUCT_CONFIGURATOR);
    });
  });

  describe('isCheckedByDefault', () => {
    it('should return TRUE if product is to be checked by default', () => {
      const product = {} as OmapiProduct;
      product.productId = 'TVPK0002';
      const actual = component['isCheckedByDefault'](product, 'contentPack');
      expect(actual).toBe(true);
    });

    it('should return FALSE if product is NOT to be checked by default', () => {
      const product = {} as OmapiProduct;
      product.productId = 'TVPK0003';
      const actual = component['isCheckedByDefault'](product, 'contentPack');
      expect(actual).toBe(false);
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

  describe('setPaxList', () => {
    it('should set to paxList for the available mobile lines', () => {
      component.selectedTier = family.tiers[1];
      component['setPaxList']();
      expect(component.paxList.length).toBe(3);
      expect(component.paxList[0]).toBe('1');
      expect(component.paxList[1]).toBe('2');
      expect(component.paxList[2]).toBe('3');
    });
    it('should set to paxList for the BUND111/112', () => {
      component.selectedTier = family.tiers[2];
      component['setPaxList']();
      expect(component.paxList.length).toBe(4);
      expect(component.paxList[0]).toBe('NA');
    });
  });

  describe('isConnect5', () => {
    it('should return true if selected product is connect5', () => {
      component.selectedProductFamily = 'connect5';
      const actual = component['isConnect5']();
      expect(actual).toBe(true);
    });

    it('should return false if selected product is not connect5', () => {
      component.selectedProductFamily = 'klik';
      const actual = component['isConnect5']();
      expect(actual).toBe(false);
    });
  });

  describe('setMutuallyExclusiveContentPack', () => {
    it('should set mutually exclusive content pack', () => {
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

    it('should remove mutually exclusive content pack', () => {
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
      spyOn(
        component as unknown as {
          removeMutuallyExclusiveContentPacks: MockProductConfiguratorComponent['removeMutuallyExclusiveContentPacks'];
        },
        'removeMutuallyExclusiveContentPacks'
      );
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

  describe('isChecked', () => {
    it('should return false if content pack is mututal exclusive', () => {
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
      spyOn(
        component as unknown as {
          removeMutuallyExclusiveContentPacks: MockProductConfiguratorComponent['removeMutuallyExclusiveContentPacks'];
        },
        'removeMutuallyExclusiveContentPacks'
      );
      const actual = component.isChecked(contentPack);
      expect(component.selectedAddOns).toEqual([]);
      expect(component['removeMutuallyExclusiveContentPacks']).toHaveBeenCalled();
      expect(actual).toEqual(false);
    });
  });

  describe('registration', () => {
    it('should call the methods clearErrorMessages, getRequestBody and setRequestJSONAndRedirect when form is valid', () => {
      const requestBody = {} as MockCreateSalesOrderRequest;
      spyOn(messageService, 'clearErrorMessages');
      spyOn(
        component as unknown as { getRequestBody: MockProductConfiguratorComponent['getRequestBody'] },
        'getRequestBody'
      ).mockReturnValue(requestBody);
      spyOn(
        component as unknown as {
          setRequestJSONAndRedirect: MockProductConfiguratorComponent['setRequestJSONAndRedirect'];
        },
        'setRequestJSONAndRedirect'
      );

      component.selectedTier = {
        mobile: [
          {
            productInfo: {
              productConstituents: [
                {
                  type: 'mobile_line',
                  minCount: '0',
                  maxCount: '2',
                },
              ],
            },
          },
        ],
      } as OmapiFamilyTier;
      component.mockProductConfiguratorForm.controls['mobilePAX'].setValue('2');
      component.registration('register');
      expect(messageService.clearErrorMessages).toHaveBeenCalled();
      expect(component['getRequestBody']).toHaveBeenCalled();
      expect(component['setRequestJSONAndRedirect']).toHaveBeenCalledWith(requestBody, 'register');
    });

    it('should markAllAsTouched and add respective error message when form is invalid', () => {
      component.mockProductConfiguratorForm.controls['mobilePAX'].setValue('11');
      spyOn(component.mockProductConfiguratorForm, 'markAllAsTouched');
      spyOn(messageService, 'addMessage');
      component.registration('register-via-itsme');
      expect(component.mockProductConfiguratorForm.markAllAsTouched).toHaveBeenCalled();
      expect(messageService.addMessage).toHaveBeenCalledWith(
        new ErrorMessage(MOCK_PRODUCT_CONFIGURATOR, 'mock-product-configurator.form-error')
      );
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
