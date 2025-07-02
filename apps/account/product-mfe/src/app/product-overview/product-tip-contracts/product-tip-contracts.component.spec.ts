import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTipContractsComponent } from './product-tip-contracts.component';
import { TIPContractInterface } from '../interfaces/tip-contract.interface';
import { EventInfo } from 'udl';
import { OmapiProduct } from '@telenet/ng-lib-omapi';

describe('ProductTipContractsComponent', () => {
  let component: ProductTipContractsComponent;
  let fixture: ComponentFixture<ProductTipContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTipContractsComponent],
      providers: [{ provide: 'Window', useValue: { location: {} } }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductTipContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('addProductViewEventToDataLayer', () => {
    it('should toggle visibility and add events', () => {
      const tipContract = {
        showDetails: false,
      } as TIPContractInterface;
      const eventInfo = new EventInfo();
      const returnGetViewed = [
        {
          productInfo: {
            productType: 'INTERNET',
            productID: 'INTF0200',
          },
        },
      ];
      const attributes = { product: returnGetViewed };
      component.componentInstanceID = 'test';

      jest.spyOn(component['dataLayerService'], 'createEventInfo').mockReturnValue(eventInfo);
      jest.spyOn(component, 'getViewedProducts').mockReturnValue(returnGetViewed);
      jest.spyOn(component['productOverviewService'], 'addEventToDataLayer');

      component.addProductViewEventToDataLayer(tipContract);

      expect(component['productOverviewService'].addEventToDataLayer).toHaveBeenCalledWith(
        eventInfo,
        'test',
        attributes
      );
      expect(tipContract.showDetails).toBe(true);
    });
  });

  describe('getViewedProducts', () => {
    it('should return product', () => {
      const tipContract = {
        showDetails: false,
        productInfo: {
          productType: 'INTERNET',
          externalProductCode: 'INTF0200',
        } as OmapiProduct,
      } as TIPContractInterface;

      const returnGetViewed = [
        {
          productInfo: {
            productType: 'INTERNET',
            productID: 'INTF0200',
          },
        },
      ];

      const returnValue = component.getViewedProducts(tipContract.productInfo);

      expect(returnValue).toEqual(returnGetViewed);
    });
    it('should return empty array', () => {
      const tipContract = {} as TIPContractInterface;

      const returnValue = component.getViewedProducts(tipContract.productInfo);

      expect(returnValue).toEqual([]);
    });
  });
});
