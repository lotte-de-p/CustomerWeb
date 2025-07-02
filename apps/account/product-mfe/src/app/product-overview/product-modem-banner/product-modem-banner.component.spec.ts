import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductModemBannerComponent } from './product-modem-banner.component';
import { EventInfo } from 'udl';
import { UrlService } from '@telenet/ng-lib-page';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

describe('ProductModemBannerComponent', () => {
  let component: ProductModemBannerComponent;
  let fixture: ComponentFixture<ProductModemBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductModemBannerComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [UrlService, { provide: 'Window', useValue: { location: {} } }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductModemBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('redirectToSalesFlow', () => {
    const eventInfo = new EventInfo();
    component.componentInstanceID = 'test';
    component.changeTariffPlanUrl = 'changeTariffPlanUrl';
    jest.spyOn(component['dataLayerService'], 'createEventInfo').mockReturnValue(eventInfo);
    jest.spyOn(component['productOverviewService'], 'addEventToDataLayer');
    jest.spyOn(component['urlService'], 'redirectTo');

    component.redirectToSalesFlow('flow', 'locationId', 'action', 'source');

    expect(component['productOverviewService'].addEventToDataLayer).toHaveBeenCalledWith(eventInfo, 'test');
    expect(component['urlService'].redirectTo).toHaveBeenCalledWith(
      'changeTariffPlanUrl?flow=flow&installationLocationId=locationId&action=action&source=source'
    );
  });
});
