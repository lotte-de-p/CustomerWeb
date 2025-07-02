import { ToDescriptionsPipe } from './to-descriptions.pipe';
import { BillingAccount, DisplayPhoneNumberService } from '@billing/invoice-overview/data-access';
import { TestBed } from '@angular/core/testing';

describe('ToDescriptionsPipe', () => {
  let pipe: ToDescriptionsPipe;
  let billingAccount: BillingAccount;
  let phoneNumberFormatService: DisplayPhoneNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayPhoneNumberService, ToDescriptionsPipe],
    });
    phoneNumberFormatService = TestBed.inject(DisplayPhoneNumberService);
    pipe = TestBed.inject(ToDescriptionsPipe);
    billingAccount = {
      billingAddress: {
        street: 'Street',
        floor: 'Floor',
        houseNumber: 'HouseNumber',
        subHouseNumber: 'SubHouseNumber',
        boxNumber: 'BoxNumber',
        postalCode: 'PostalCode',
        municipality: 'Municipality',
      },
      mobilePhoneNumber: '0467713972',
      email: 'Email',
    } as BillingAccount;
    jest.spyOn(phoneNumberFormatService, 'formatPhoneNumber').mockReturnValue('0467 71 39 72');
  });

  it('should return the correct status description array for a given BillingAccount and method', () => {
    const method = 'PAPER';
    const result = pipe.transform(billingAccount, method);

    expect(result).toEqual([
      {
        caption: 'ng.billing-overview.lbl.current-delivery-method-paper',
        value: 'Street, Floor, HouseNumber, SubHouseNumber, BoxNumber, PostalCode, Municipality',
      },
    ]);
  });

  it('should return multiple descriptions in array for a given BillingAccount and method as email and sms', () => {
    const method = 'EMAIL_SMS';
    const result = pipe.transform(billingAccount, method);
    expect(result).toEqual([
      {
        caption: 'ng.billing-overview.lbl.current-delivery-method-email',
        value: 'Email',
      },
      {
        caption: 'ng.billing-overview.lbl.current-delivery-method-sms',
        value: '0467 71 39 72',
      },
    ]);
  });

  it('should return the correct status description array for a given BillingAccount and no value if method is doccle', () => {
    const method = 'DOCCLE';
    const result = pipe.transform(billingAccount, method);
    expect(result).toEqual([
      {
        caption: 'ng.billing-overview.lbl.current-delivery-method-doccle',
      },
    ]);
  });
});
