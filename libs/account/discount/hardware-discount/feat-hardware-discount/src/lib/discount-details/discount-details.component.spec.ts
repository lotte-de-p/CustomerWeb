const saveAsMock = jest.fn();

import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MockProvider } from 'ng-mocks';
import { TranslateModule } from '@ngx-translate/core';
import { DiscountDetailsComponent } from './discount-details.component';
import { UrlService } from '@telenet/ng-lib-page';
import { Depreciations, HardwareDiscountService, HardwareInvoice, UsedDiscounts } from '@discount/data-access';
import { PricePipe } from '@telenet/ng-lib-form';
import { DatePipe } from '@angular/common';
import { of, throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { HardwareDiscountDownloadErrorDialogComponent } from '../hardware-discount-download-error-dialog/hardware-discount-download-error-dialog.component';

jest.mock('file-saver', () => ({ saveAs: saveAsMock }));

describe('DiscountOverviewComponent', () => {
  let component: DiscountDetailsComponent;
  let fixture: ComponentFixture<DiscountDetailsComponent>;
  let urlService: UrlService;
  let dialog: MatDialog;
  let hardwareDiscountService: HardwareDiscountService;

  const discountDetails = {
    device: {},
    deliveryOrder: {
      expectedDeliveryDate: '2024-09-23T12:05:05+02:00',
      tracking: {
        number: '686868',
        url: 'tracking.com',
      },
    },
    originalPrice: 399,
    discountedPrice: 299,
    invoice: {
      billingAccountNumber: '6579123',
      documentReferenceNumber: '245900090524',
    },
    contract: {},
    depreciations: [] as Depreciations[],
  } as UsedDiscounts;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DiscountDetailsComponent,
        TranslateModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot({}),
        HttpClientTestingModule,
        PricePipe,
        DatePipe,
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
        MockProvider(UrlService),
        MockProvider(HardwareDiscountService),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscountDetailsComponent);
    component = fixture.componentInstance;
    component.data = discountDetails;
    component.isLast = false;
    urlService = TestBed.inject(UrlService);
    dialog = TestBed.inject(MatDialog);
    hardwareDiscountService = TestBed.inject(HardwareDiscountService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('downloadInvoices', () => {
    it('should download the pdf when invoice is available', fakeAsync(() => {
      jest.spyOn(component.analyticsData, 'emit');
      const blob = new Blob();
      jest.spyOn(hardwareDiscountService, 'getHardwareInvoice').mockReturnValue(of(blob));
      const event = {
        eventName: 'see hardware invoice clicked',
        eventType: 'click',
      };
      component.downloadInvoices();
      tick(500);
      expect(saveAsMock).toHaveBeenCalledWith(blob, '245900090524.pdf');
      expect(component.analyticsData.emit).toHaveBeenCalledWith({ event });
      expect(component.loading).toBeFalsy();
    }));

    it('should open error dialog if invoice is not present in the response', fakeAsync(() => {
      saveAsMock.mockReset();
      jest.spyOn(hardwareDiscountService, 'getHardwareInvoice').mockReturnValue(throwError(() => 'error'));
      jest.spyOn(dialog, 'open');

      component.downloadInvoices();
      tick(500);
      expect(saveAsMock).not.toHaveBeenCalled();
      expect(component.loading).toBeFalsy();
    }));

    it('should open dialog component when there is no invoice available', fakeAsync(() => {
      saveAsMock.mockReset();
      jest.spyOn(dialog, 'open');
      component.data.invoice = {} as HardwareInvoice;
      component.downloadInvoices();
      tick(500);
      expect(dialog.open).toHaveBeenCalledWith(HardwareDiscountDownloadErrorDialogComponent);
    }));
  });

  describe('showRemainingDiscount', () => {
    it('should set showDiscount as TRUE when it is FALSE and also set the corresponding discount text and icon', () => {
      component.showDiscount = false;
      component.showRemainingDiscount();
      expect(component.showDiscount).toBeTruthy();
      expect(component.discountButtonText).toEqual('ng.hardware-discount.hide-remaining-discount-btn');
      expect(component.chevronIcon).toEqual('chevron-up');
    });

    it('should set showDiscount as FALSE when it is TRUE and also set the corresponding discount text and icon', () => {
      component.showDiscount = true;
      component.showRemainingDiscount();
      expect(component.showDiscount).toBeFalsy();
      expect(component.discountButtonText).toEqual('ng.hardware-discount.show-remaining-discount-btn');
      expect(component.chevronIcon).toEqual('chevron-down');
    });
  });

  describe('redirectToTrackingUrl', () => {
    it('should navigate to the url specified', () => {
      jest.spyOn(urlService, 'openNewTab');

      component.redirectToTrackingUrl();
      expect(urlService.openNewTab).toHaveBeenCalledWith('tracking.com');
    });
  });
});
