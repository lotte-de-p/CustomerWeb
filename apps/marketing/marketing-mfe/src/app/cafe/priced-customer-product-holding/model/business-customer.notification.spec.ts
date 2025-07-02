import { Injector } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { PricedCphState } from '../state/priced-cph.state';
import { NotificationTypeEnum } from './notification.model';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { BusinessCustomerNotification } from './business-customer.notification';
import { of } from 'rxjs';
import { CafeContactDetailsService } from '../../../http/cafe/contact-details/services/cafe-contact-details.service';
import { CafeContactDetails } from '../../../http/cafe/contact-details/models/cafe-contact-details.model';

describe('BusinessCustomerNotification', function () {
  let notification: BusinessCustomerNotification;
  let injector: Injector;
  let cafeContactDetailsService: CafeContactDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler, { provide: 'Window', useValue: {} }],
      imports: [NgxsModule.forRoot([PricedCphState])],
    });

    notification = new BusinessCustomerNotification();
    injector = TestBed.inject(Injector);
    cafeContactDetailsService = TestBed.inject(CafeContactDetailsService);
  });

  it('should have correct label and type', () => {
    expect(notification.type).toEqual(NotificationTypeEnum.ERROR);
    expect(notification.labelKey).toEqual('business-customer');
  });

  describe('shouldShow', () => {
    beforeEach(() => {
      injector.get = jest.fn().mockReturnValue(cafeContactDetailsService);
    });

    it('should return false if data is undefined', () => {
      cafeContactDetailsService.getContactDetails = jest.fn().mockReturnValue(of(undefined));

      notification.shouldShow(injector).subscribe((shouldShow: boolean) => {
        expect(shouldShow).toBeFalsy();
      });
    });
    it('should return false if empty contactdetails', () => {
      const contactDetails = new CafeContactDetails();
      cafeContactDetailsService.getContactDetails = jest.fn().mockReturnValue(of(contactDetails));

      notification.shouldShow(injector).subscribe((shouldShow: boolean) => {
        expect(shouldShow).toBeFalsy();
      });
    });
    it('should return false if customer is not organization', () => {
      const organization = new CafeContactDetails();
      organization.type = 0;
      cafeContactDetailsService.getContactDetails = jest.fn().mockReturnValue(of(organization));
      injector.get = jest.fn().mockReturnValue(cafeContactDetailsService);

      notification.shouldShow(injector).subscribe((shouldShow: boolean) => {
        expect(shouldShow).toBeFalsy();
      });
    });
    it('should return true if customer is organization', () => {
      const organization = new CafeContactDetails();
      organization.type = 1;
      cafeContactDetailsService.getContactDetails = jest.fn().mockReturnValue(of(organization));

      notification.shouldShow(injector).subscribe((shouldShow: boolean) => {
        expect(shouldShow).toBeTruthy();
      });
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
