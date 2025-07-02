import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { BillingService } from './billing.service';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BillingAccountMapper } from './mappers/billing-account.mapper';
import { of } from 'rxjs';
import { jest, expect } from '@jest/globals';
import { AccountThresholdInterface } from './interfaces/account-threshold.interface';

describe('BillingService', () => {
  const defaultUrl = '/public/api/fleet-billing-service',
    messageGroup = 'sales';
  let billingService: BillingService, ocapiService: OcapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OcapiService, BillingAccountMapper, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    ocapiService = TestBed.inject(OcapiService);
    billingService = TestBed.inject(BillingService);
  });

  describe('updateAccountThreshold', () => {
    it('should get account threshold', () => {
      jest.spyOn(ocapiService, 'doPut').mockReturnValue(of({}));

      billingService.updateAccountThreshold(messageGroup, '1234', {} as AccountThresholdInterface);

      expect(ocapiService.doPut).toHaveBeenCalledWith(
        expect.objectContaining({
          messageGroupName: messageGroup,
          endpoint: `${defaultUrl}/v1/accounts/1234`,
          data: {} as AccountThresholdInterface,
        })
      );
    });
  });

  describe('getAccountThreshold', () => {
    it('should get account threshold', () => {
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of({}));

      billingService.getAccountThreshold(messageGroup, '1234');

      expect(ocapiService.doGet).toHaveBeenCalledWith(
        expect.objectContaining({
          messageGroupName: messageGroup,
          endpoint: `${defaultUrl}/v2/accounts/1234`,
        })
      );
    });
  });

  describe('getAccounts', () => {
    it('should get billing accounts', () => {
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of({}));
      billingService.getAccounts(messageGroup).subscribe((response) => {
        expect(billingService.accounts).toEqual(response);
      });
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        expect.objectContaining({
          messageGroupName: messageGroup,
          endpoint: `${defaultUrl}/v2/accounts`,
          mapper: expect.any(BillingAccountMapper),
        })
      );
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
