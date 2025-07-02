import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { OptionsContentpackComponent } from './options-contentpack.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharsEnum, OmapiProduct, OmapiProductService } from '@telenet/ng-lib-omapi';
import { SelectedAddOnInterface } from '../../../mock-product-configurator/mock-product-configurator.component';
import { OptionContentPackType, ProductOptionsContentpacks } from '../../models/options-contentpacks.interface';
import { of } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';

const spyOn = jest.spyOn;

describe('OptionsContentpackComponent', () => {
  let component: OptionsContentpackComponent;
  let fixture: ComponentFixture<OptionsContentpackComponent>;
  let formBuilder: FormBuilder;
  let fbGroup: FormGroup;
  let omapiProductService: OmapiProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        HttpClientTestingModule,
      ],
      providers: [FormBuilder, OmapiProductService, { provide: 'Window', useValue: window }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    omapiProductService = TestBed.inject(OmapiProductService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsContentpackComponent);
    formBuilder = TestBed.inject(FormBuilder);
    component = fixture.componentInstance;
    fbGroup = formBuilder.group({});
    component.parentForm = fbGroup;
    component.idx = 1;
    fixture.detectChanges();
  });

  it('should create the component', waitForAsync(() => {
    expect(component).toBeTruthy();
  }));

  describe('ngOnInit', function () {
    it('should add controls', () => {
      component.parentForm = fbGroup;
      component.parentForm.addControl = jest.fn();
      jest
        .spyOn(
          component as unknown as {
            showOptionsAndContentpack: OptionsContentpackComponent['showOptionsAndContentpack'];
          },
          'showOptionsAndContentpack'
        )
        .mockReturnValue(false);

      component.ngOnInit();
      expect(component.parentForm.addControl).toHaveBeenCalled();
    });

    it('should fetch options and content packs', () => {
      component.parentForm = fbGroup;
      spyOn(component.parentForm, 'addControl');
      component.productType = 'internet';
      component.epc = 'INTF0200';
      jest
        .spyOn(
          component as unknown as {
            showOptionsAndContentpack: OptionsContentpackComponent['showOptionsAndContentpack'];
          },
          'showOptionsAndContentpack'
        )
        .mockReturnValue(true);
      component.ngOnInit();
      expect(component.parentForm.addControl).toHaveBeenCalled();
    });
  });

  describe('ngOnDestroy', function () {
    it('should remove controls', () => {
      component.parentForm = fbGroup;
      spyOn(component.parentForm, 'removeControl');
      component.ngOnDestroy();
      expect(component.parentForm.removeControl).toHaveBeenCalled();
    });
  });

  describe('isDisabled', function () {
    it('should true if content pack is mutually exclusive to selected content pack', () => {
      const contentpackProductInfo = {
        productId: 'TVPK0015',
      } as OmapiProduct;
      component.mutuallyExclusiveContentPacks = ['TVPK0018', 'TVPK0015'];
      const actual = component.isDisabled(contentpackProductInfo);
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
      jest.spyOn(
        component as unknown as {
          removeMutuallyExclusiveContentPacks: OptionsContentpackComponent['removeMutuallyExclusiveContentPacks'];
        },
        'removeMutuallyExclusiveContentPacks'
      );
      const actual = component.isChecked(contentPack);
      expect(component.selectedAddOns).toEqual([]);
      expect(component['removeMutuallyExclusiveContentPacks']).toHaveBeenCalled();
      expect(actual).toEqual(false);
    });
  });

  describe('onContentpackSelection', () => {
    it('should push the selected content pack to selectedAddOns when toggle checked is true', () => {
      const product = new OmapiProduct();
      product.productId = 'TVPK0018';
      product.productType = 'OPTION';
      const event = {
        target: {
          checked: true,
        },
      } as unknown as Event;
      const selectedAddOn = [
        {
          id: 'IOPT0005',
          type: 'OPTION',
        },
        {
          id: 'TVPK0018',
          type: 'OPTION',
        },
      ] as SelectedAddOnInterface[];
      component.selectedAddOns = [
        {
          id: 'IOPT0005',
          type: 'OPTION',
        },
      ] as SelectedAddOnInterface[];

      component.onContentpackSelection(product, event);
      expect(component.selectedAddOns).toEqual(selectedAddOn);
    });

    it('should remove the content pack from selectedAddOns when toggle checked is false', () => {
      const product = new OmapiProduct();
      product.productId = 'TVPK0018';
      product.productType = 'OPTION';
      const event = {
        target: {
          checked: false,
        },
      } as unknown as Event;
      component.selectedAddOns = [
        {
          id: 'TVPK0018',
          type: 'OPTION',
        },
      ] as SelectedAddOnInterface[];

      component.onContentpackSelection(product, event);
      expect(component.selectedAddOns).toEqual([]);
    });
  });

  describe('onOptionSelection', () => {
    it('should push the selected option to selectedAddOns when toggle checked is true', () => {
      const option = {
        id: 'IOPT0005',
        type: 'OPTION',
      } as ProductOptionsContentpacks;
      const event = {
        target: {
          checked: true,
        },
      } as unknown as Event;
      const selectedAddOn = [
        {
          id: 'TVPK0018',
          type: 'OPTION',
        },
        {
          id: 'IOPT0005',
          type: 'OPTION',
        },
      ] as SelectedAddOnInterface[];
      component.selectedAddOns = [
        {
          id: 'TVPK0018',
          type: 'OPTION',
        },
      ] as SelectedAddOnInterface[];
      component.onOptionSelection(option, event);
      expect(component.selectedAddOns).toEqual(selectedAddOn);
    });

    it('should not push the selected option to selectedAddOns if option is already present', () => {
      const option = {
        id: 'IOPT0005',
        type: 'OPTION',
      } as ProductOptionsContentpacks;
      const event = {
        target: {
          checked: true,
        },
      } as unknown as Event;
      const selectedAddOn = [
        {
          id: 'IOPT0005',
          type: 'OPTION',
        },
      ] as SelectedAddOnInterface[];
      component.selectedAddOns = [
        {
          id: 'IOPT0005',
          type: 'OPTION',
        },
      ] as SelectedAddOnInterface[];
      component.onOptionSelection(option, event);
      expect(component.selectedAddOns).toEqual(selectedAddOn);
    });

    it('should remove the content pack from selectedAddOns when toggle checked is false', () => {
      const option = {
        id: 'IOPT0005',
        type: 'OPTION',
      } as ProductOptionsContentpacks;
      const event = {
        target: {
          checked: false,
        },
      } as unknown as Event;
      component.selectedAddOns = [
        {
          id: 'IOPT0005',
          type: 'OPTION',
        },
      ] as SelectedAddOnInterface[];
      component.onOptionSelection(option, event);
      expect(component.selectedAddOns).toEqual([]);
    });
  });

  describe('showOptionsAndContentpack', function () {
    it('should true if epc is present in options', () => {
      component.productType = 'bundle';
      component.epc = 'TWOP0010';
      component.allOptionsAndContentpack = {
        bundle: {
          TWOP0010: {
            option: [
              {
                id: 'IOPT0005',
              },
            ] as ProductOptionsContentpacks[],
            contentPack: [
              {
                id: 'TVPK0005',
              },
            ] as ProductOptionsContentpacks[],
          },
        },
      } as OptionContentPackType;
      const actual = component['showOptionsAndContentpack']();
      expect(actual).toEqual(true);
    });
  });

  describe('getOptionsAndContentpacks', function () {
    it('should set options and content pack', () => {
      component.productType = 'bundle';
      component.epc = 'TWOP0010';
      component.allOptionsAndContentpack = {
        bundle: {
          TWOP0010: {
            option: [
              {
                id: 'IOPT0005',
              },
            ] as ProductOptionsContentpacks[],
            contentPack: [
              {
                id: 'TVPK0005',
              },
            ] as ProductOptionsContentpacks[],
          },
        },
      } as OptionContentPackType;

      component['getOptionsAndContentpacks']();
      expect(component.options.length).toBe(1);
    });

    it('should not set content pack product details if content pack is not present', () => {
      component.productType = 'bundle';
      component.epc = 'TWOP0010';
      component.allOptionsAndContentpack = {
        bundle: {
          TWOP0010: {
            option: [
              {
                id: 'IOPT0005',
              },
            ] as ProductOptionsContentpacks[],
            contentPack: [] as ProductOptionsContentpacks[],
          },
        },
      } as OptionContentPackType;
      component['getOptionsAndContentpacks']();
      expect(component.options.length).toBe(1);
    });
  });

  describe('getContentPackDetails', function () {
    it('should set content pack product details', () => {
      component.contentpacks = [
        {
          id: 'TVPK0005',
        },
      ] as ProductOptionsContentpacks[];
      const productInfo = {
        productType: 'OPTION',
      } as OmapiProduct;
      spyOn(omapiProductService, 'getProductById').mockReturnValue(of(productInfo));
      component['getContentPackDetails']();

      expect(component.contentpacks[0].productInfo?.productType).toEqual('OPTION');
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

      component['setMutuallyExclusiveContentPack'](selectedContentPack, isChecked);
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

  afterEach(() => {
    cleanStylesFromDom();
  });
});
