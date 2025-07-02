import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BillingAccountMapper } from './billing-account.mapper';
import { expect } from '@jest/globals';

//TODO:Test if this is correct
const mockSuccessResponse = require('../../../../../../../../../../fixtures/http/netcracker/billing/rawBillingAccountsData.json');
describe('BillingAccountMapper', () => {
  let billingAccountMapper: BillingAccountMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });

    billingAccountMapper = TestBed.inject(BillingAccountMapper);
  });

  describe('toModel', () => {
    it('should correctly map the response', () => {
      const mappedBillingAccounts = billingAccountMapper.toModel(mockSuccessResponse);

      expect(mappedBillingAccounts[0].id).toBe('9155674120813369086');
      expect(mappedBillingAccounts[0].accountNumber).toBe('999977610');
      expect(mappedBillingAccounts[0].status).toBe('ACTIVE');
      expect(mappedBillingAccounts[0].defaultAccount).toBe(true);
      expect(mappedBillingAccounts[0].doccleCode).toBe('37518');
      expect(mappedBillingAccounts[0].customerCategoryType).toBe('BUSINESS');
      expect(mappedBillingAccounts[0].treatments).toEqual([]);

      expect(mappedBillingAccounts[0]?.paymentInfo?.method).toBe('MANUAL');

      expect(mappedBillingAccounts[0].collectionsInfo?.ogmCode).toBe('');
      expect(mappedBillingAccounts[0].collectionsInfo?.paymentPlan).toBe(false);
      expect(mappedBillingAccounts[0].collectionsInfo?.status).toBe(false);

      expect(mappedBillingAccounts[0].dispatchMethod?.current).toBe('DIGITAL');
      expect(mappedBillingAccounts[0].dispatchMethod?.communicationMethod).toBe('EMAIL_PHONE_NUMBER');

      expect(mappedBillingAccounts[0].billingAddress?.addressId).toBe('9150308807013313912');
      expect(mappedBillingAccounts[0].billingAddress?.street).toBe('Elektriciteitstraat');
      expect(mappedBillingAccounts[0].billingAddress?.municipality).toBe('Mechelen');
      expect(mappedBillingAccounts[0].billingAddress?.country).toBe('België');
      expect(mappedBillingAccounts[0].billingAddress?.houseNumber).toBe('6');
      expect(mappedBillingAccounts[0].billingAddress?.postalCode).toBe('2800');

      expect(mappedBillingAccounts[0].contactInfo?.firstName).toBe('harshit');
      expect(mappedBillingAccounts[0].contactInfo?.lastName).toBe('sri');

      expect(mappedBillingAccounts[0].email?.id).toBe('9155674124813368985');
      expect(mappedBillingAccounts[0].email?.value).toBe('test12@tester.com');

      expect(mappedBillingAccounts[0].mobile?.id).toBe('9155674123813368985');
      expect(mappedBillingAccounts[0].mobile?.value).toBe('0412345678');
      expect(mappedBillingAccounts[0].isEligibleForManualPayment).toBe(false);
      expect(mappedBillingAccounts[0].hasFailedDDPayment).toBe(false);

      expect(mappedBillingAccounts[1].id).toBe('9155674120813369080');
      expect(mappedBillingAccounts[1].isEligibleForManualPayment).toBe(true);
      expect(mappedBillingAccounts[1].hasFailedDDPayment).toBe(true);

      expect(mappedBillingAccounts[2].id).toBe('9155674120813369081');
      expect(mappedBillingAccounts[2].isEligibleForManualPayment).toBe(false);
      expect(mappedBillingAccounts[2].hasFailedDDPayment).toBe(true);

      expect(mappedBillingAccounts[3].id).toBe('9155674120813369082');
      expect(mappedBillingAccounts[3].isEligibleForManualPayment).toBe(true);
      expect(mappedBillingAccounts[3].hasFailedDDPayment).toBe(false);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
