import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsResponse, UpdatedProductsResponse } from '@mybase-dashboard/data-access';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { MyBaseDashboardManageProductsComponent } from './mybase-dashboard-manage-products.component';

describe('MyBaseDashboardManageProductsComponent', () => {
  let component: MyBaseDashboardManageProductsComponent;
  let fixture: ComponentFixture<MyBaseDashboardManageProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useValue: TranslateFakeLoader },
        }),
      ],
      providers: [TranslateService, { provide: 'Window', useValue: { location: {} } }],
    }).compileComponents();

    fixture = TestBed.createComponent(MyBaseDashboardManageProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should set the products when providing data to the component', () => {
    it('should set all product types (mobile, dtv and internet) when they are all present', () => {
      const inputData: ProductsResponse = {
        showCard: true,
        mobile: {
          pending: false,
          products: [{ productName: 'name' }],
        },
        dtv: {
          pending: false,
          products: [{ productName: 'name' }],
        },
        internet: {
          pending: false,
          products: [{ productName: 'name' }],
        },
      };
      const expected: Omit<UpdatedProductsResponse, 'showCard'> = {
        mobile: [{ productName: 'name' }],
        dtv: [{ productName: 'name' }],
        internet: [{ productName: 'name' }],
      };

      component.data = inputData;

      expect(component.products).toEqual(expected);
      expect(component.showCard).toEqual(true);
    });

    it('should only set the product types (mobile, dtv and internet) which contain values', () => {
      const inputData: ProductsResponse = {
        showCard: true,
        mobile: {
          pending: false,
          products: [{ productName: 'name' }],
        },
      };
      const expected: Partial<Omit<UpdatedProductsResponse, 'showCard'>> = {
        mobile: [{ productName: 'name' }],
      };

      component.data = inputData;

      expect(component.products).toEqual(expected);
      expect(component.showCard).toEqual(true);
    });
  });

  describe('should redirect to the appropriate manage products link when clicking on a card', () => {
    it('should redirect to the configured internet link', () => {
      component.manageProductsInternetLink = 'https://internet-link';
      jest.spyOn(component['urlService'], 'redirectTo');

      component.redirectTo('internet');

      expect(component['urlService'].redirectTo).toHaveBeenCalledWith('https://internet-link');
    });

    it('should redirect to the configured mobile link', () => {
      component.manageProductsMobileLink = 'https://mobile-link';
      jest.spyOn(component['urlService'], 'redirectTo');

      component.redirectTo('mobile');

      expect(component['urlService'].redirectTo).toHaveBeenCalledWith('https://mobile-link');
    });

    it('should redirect to the configured dtv link', () => {
      component.manageProductsDTVLink = 'https://dtv-link';
      jest.spyOn(component['urlService'], 'redirectTo');

      component.redirectTo('dtv');

      expect(component['urlService'].redirectTo).toHaveBeenCalledWith('https://dtv-link');
    });

    it('should not redirect when product type is unknown', () => {
      jest.spyOn(component['urlService'], 'redirectTo');

      component.redirectTo('xyz');

      expect(component['urlService'].redirectTo).toHaveBeenCalledWith('');
    });
  });
});
