import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFinderComponent } from './product-finder.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { ProductFinderConfigFacade } from '@sales/product-finder/data-access';

describe('ProductFinderComponent', () => {
  let component: ProductFinderComponent;
  let fixture: ComponentFixture<ProductFinderComponent>;
  let productFinderConfigFacade: ProductFinderConfigFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(), EffectsModule.forRoot(), TgTranslateTestingModule.forRoot(), HttpClientModule],
    }).compileComponents();

    productFinderConfigFacade = TestBed.inject(ProductFinderConfigFacade);
    jest.spyOn(productFinderConfigFacade, 'updateEnableLoader');
    jest.spyOn(productFinderConfigFacade, 'updateEnableLoaderMask');
    jest.spyOn(productFinderConfigFacade, 'updateSalesCheckoutUrl');
    jest.spyOn(productFinderConfigFacade, 'updateHumanCheckoutUrl');
    jest.spyOn(productFinderConfigFacade, 'updateOneConfiguratorUrl');
    jest.spyOn(productFinderConfigFacade, 'updateProductsDetailsUrl');

    fixture = TestBed.createComponent(ProductFinderComponent);
    component = fixture.componentInstance;
    component.enableLoader = true;
    component.enableMask = true;
    component.salesCheckoutUrl = 'url';
    component.humanCheckoutUrl = 'url';
    component.oneConfiguratorUrl = 'url';
    component.productsDetailsUrl = 'url';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(productFinderConfigFacade.updateEnableLoader).toHaveBeenCalledWith(true);
    expect(productFinderConfigFacade.updateEnableLoaderMask).toHaveBeenCalledWith(true);
    expect(productFinderConfigFacade.updateSalesCheckoutUrl).toHaveBeenCalledWith('url');
    expect(productFinderConfigFacade.updateHumanCheckoutUrl).toHaveBeenCalledWith('url');
    expect(productFinderConfigFacade.updateOneConfiguratorUrl).toHaveBeenCalledWith('url');
    expect(productFinderConfigFacade.updateProductsDetailsUrl).toHaveBeenCalledWith('url');
  });
});
