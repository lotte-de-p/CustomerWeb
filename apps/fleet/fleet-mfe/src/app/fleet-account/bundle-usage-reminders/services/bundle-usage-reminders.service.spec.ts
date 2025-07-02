import { TestBed } from '@angular/core/testing';
import { DataLayerAttributes, DataLayerService } from '@telenet/ng-lib-datalayer';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Category } from 'udl';
import { BundleUsageRemindersService } from './bundle-usage-reminders.service';
import { BundleUsageRemindersComponent } from '../bundle-usage-reminders.component';
import { expect } from '@jest/globals';
import { BundleUsageRemindersConstants } from '../constants/bundle-usage-reminders.constants';
import { BillingService } from '../../../shared/common/services/billing/billing.service';

describe('BundleUsageRemindersService', () => {
  let bundleUsageRemindersService: BundleUsageRemindersService;
  let billingService: BillingService;
  let dataLayerService: DataLayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillingService, DataLayerService, { provide: 'Window', useValue: {} }],
      imports: [BundleUsageRemindersComponent, HttpClientTestingModule],
    });
    bundleUsageRemindersService = TestBed.inject(BundleUsageRemindersService);
    billingService = TestBed.inject(BillingService);
    dataLayerService = TestBed.inject(DataLayerService);
    jest.spyOn(dataLayerService, 'getCategory').mockReturnValue({} as Category);
  });

  describe('getAccountThreshold', () => {
    it('should call getAccountThreshold with account number and map the response to threshold interface', (done) => {
      jest.spyOn(billingService, 'getAccountThreshold').mockReturnValue(
        of({
          overConsumptionThreshold: {
            isEnabled: false,
            value: 75,
            inProgress: false,
          },
        })
      );

      bundleUsageRemindersService.getAccountThreshold('123').subscribe({
        next: (threshold) => {
          expect(billingService.getAccountThreshold).toHaveBeenCalledWith(
            BundleUsageRemindersConstants.MESSAGE_GROUP,
            '123'
          );
          expect(threshold.isEnabled).toBeFalsy();
          expect(threshold.value).toEqual(75);
          expect(threshold.inProgress).toBeFalsy();
          done();
        },
      });
    });

    it('should call getAccountThreshold with account number and map the response to threshold interface when value is the default value', (done) => {
      jest
        .spyOn(billingService, 'getAccountThreshold')
        .mockReturnValue(of({ overConsumptionThreshold: { isEnabled: true, value: 10000000000, inProgress: true } }));

      bundleUsageRemindersService.getAccountThreshold('123').subscribe({
        next: (threshold) => {
          expect(billingService.getAccountThreshold).toHaveBeenCalledWith(
            BundleUsageRemindersConstants.MESSAGE_GROUP,
            '123'
          );
          expect(threshold.isEnabled).toBeTruthy();
          expect(threshold.value).toEqual(undefined);
          expect(threshold.inProgress).toBeTruthy();
          done();
        },
      });
    });
  });

  describe('updateAccountThreshold', () => {
    it('should call updateAccountThreshold and add an amount changed event', (done) => {
      jest.spyOn(billingService, 'updateAccountThreshold').mockReturnValue(of({ status: 1 }));
      jest.spyOn(dataLayerService, 'sendEvent');
      const initialThreshold = { isEnabled: true, value: 75, inProgress: false };
      const expectedAttributes: DataLayerAttributes = {
        itemName: '150',
      };
      bundleUsageRemindersService.updateAccountThreshold('123', initialThreshold, true, 150, '').subscribe({
        next: () => {
          expect(billingService.updateAccountThreshold).toHaveBeenCalledWith(
            BundleUsageRemindersConstants.MESSAGE_GROUP,
            '123',
            {
              overConsumptionThreshold: {
                isEnabled: true,
                value: 150,
              },
            }
          );

          expect(dataLayerService.sendEvent).toHaveBeenCalledWith({
            eventInfo: expect.objectContaining({
              eventName: 'out of bundle threshold amount changed',
              type: 'click',
            }),
            attributes: expectedAttributes,
            category: expect.anything(),
          });
          done();
        },
      });
    });

    it('should call updateAccountThreshold without value and add a deactivated event when threshold is disabled', (done) => {
      jest.spyOn(billingService, 'updateAccountThreshold').mockReturnValue(of({ status: 1 }));
      jest.spyOn(dataLayerService, 'sendEvent');
      const initialThreshold = { isEnabled: true, value: 75, inProgress: false };
      bundleUsageRemindersService.updateAccountThreshold('123', initialThreshold, false, 150, '').subscribe({
        next: () => {
          expect(billingService.updateAccountThreshold).toHaveBeenCalledWith(
            BundleUsageRemindersConstants.MESSAGE_GROUP,
            '123',
            {
              overConsumptionThreshold: {
                isEnabled: false,
              },
            }
          );
          expect(dataLayerService.sendEvent).toHaveBeenCalledWith({
            eventInfo: expect.objectContaining({
              eventName: 'out of bundle threshold deactivated',
              type: 'click',
            }),
            attributes: {},
            category: expect.anything(),
          });
          done();
        },
      });
    });

    it('should call updateAccountThreshold and add an activated and amount changed event when threshold is enabled and changed', (done) => {
      jest.spyOn(billingService, 'updateAccountThreshold').mockReturnValue(of({ status: 1 }));
      jest.spyOn(dataLayerService, 'sendEvent');
      const initialThreshold = { isEnabled: false, value: 75, inProgress: false };
      const expectedAttributes: DataLayerAttributes = {
        itemName: '150',
      };
      bundleUsageRemindersService.updateAccountThreshold('123', initialThreshold, true, 150, '').subscribe({
        next: () => {
          expect(billingService.updateAccountThreshold).toHaveBeenCalledWith(
            BundleUsageRemindersConstants.MESSAGE_GROUP,
            '123',
            {
              overConsumptionThreshold: {
                isEnabled: true,
                value: 150,
              },
            }
          );
          expect(dataLayerService.sendEvent).toHaveBeenCalledWith({
            eventInfo: expect.objectContaining({
              eventName: 'out of bundle threshold activated',
              type: 'click',
            }),
            attributes: {},
            category: expect.anything(),
          });
          expect(dataLayerService.sendEvent).toHaveBeenCalledWith({
            eventInfo: expect.objectContaining({
              eventName: 'out of bundle threshold amount changed',
              type: 'click',
            }),
            attributes: expectedAttributes,
            category: expect.anything(),
          });
          done();
        },
      });
    });
  });
});
