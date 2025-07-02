const saveAsMock = jest.fn();

import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule } from '@ngx-translate/core';
import { HardwareDiscountComponent } from './hardware-discount.component';
import { HardwareDiscountFacade, HardwareDiscount } from '@discount/data-access';
import * as udl from 'udl';

jest.mock('file-saver', () => ({ saveAs: saveAsMock }));

describe('HardwareDiscountComponent', () => {
  let component: HardwareDiscountComponent;
  let fixture: ComponentFixture<HardwareDiscountComponent>;
  let facade: HardwareDiscountFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HardwareDiscountComponent,
        TranslateModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot({}),
        HttpClientTestingModule,
      ],
      providers: [
        {
          provide: 'Window',
          useValue: {
            document: {
              documentElement: {
                lang: 'en',
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HardwareDiscountComponent);
    component = fixture.componentInstance;
    facade = TestBed.inject(HardwareDiscountFacade);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('initAfterLoggedIn', () => {
    it('should load discount overview details', () => {
      const discount = {
        availableSlots: 5,
        totalSlots: 5,
        creditCheck: 'OK',
        usedDiscounts: [],
      } as HardwareDiscount;
      jest.spyOn(facade, 'loadHardwareDiscount');
      component.initAfterLoggedIn();
      component.selectHardwareDiscountOverview$.subscribe((discountOverview) => {
        expect(facade.loadHardwareDiscount).toHaveBeenCalledWith({ discount });
        expect(component.creditCheck).toEqual(discountOverview.creditCheck);
        expect(component.usedDiscounts).toEqual(discountOverview.usedDiscounts);
      });
    });
  });

  describe('sendAnalyticsEvent', () => {
    it('should send the analytics event without productId', fakeAsync(() => {
      const dataLayerEvent = {
        event: {
          eventName: 'use discount clicked',
          eventType: 'click',
        },
      };
      jest.spyOn(facade, 'sendDatalayerEvent');
      component.sendAnalyticsEvent(dataLayerEvent);
      expect(facade.sendDatalayerEvent).toHaveBeenCalledWith(dataLayerEvent.event, {});
    }));

    it('should send the analytics event with productId', fakeAsync(() => {
      const dataLayerEvent = {
        event: {
          eventName: 'use discount clicked',
          eventType: 'click',
        },
        productId: '233112',
      };
      const productInfo = new udl.Product();
      productInfo.setProductID(dataLayerEvent.productId);
      const item = new udl.Item();
      item.setProductInfo(productInfo);
      jest.spyOn(facade, 'sendDatalayerEvent');
      component.sendAnalyticsEvent(dataLayerEvent);
      expect(facade.sendDatalayerEvent).toHaveBeenCalled();
    }));
  });
});
