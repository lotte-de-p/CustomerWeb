import { of, throwError } from 'rxjs';
import { HardwareCheckoutFacade } from '../facades/hardware-checkout.facade';
import {
  customerAccountDetailsFactory,
  CustomerTypeEnum,
  defaultSdataSalesOfferFactory,
  OrderItemDeliveryChars,
  orderItemTestFactory,
  ruleFactory,
  SalesOrder,
  salesOrderFactory,
  SessionStorageConstants,
} from '@sales/hardware-checkout/data-access';
import { StrategyUtil } from './strategy.util';
import { HardwareCheckoutError } from '../classes/hardware-checkout-error.class';
import { SalesOrderUtil } from './sales-order.util';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { OrderItemWithMatchingDiscount } from '../interfaces/order-item-with-matching-discount.interface';
import { AddressUtil } from './address.util';
import { ReverseProxyService } from '../services/reverse-proxy.service';
import { ConfigService } from '@telenet/ng-lib-config';
import { PaymentService } from '../services/payment.service';
import { Injectable } from '@angular/core';
import { addressUnitTestfactory } from '@sales/shared/address/data-access';
import { DeliveryAddress, PersonalInfo } from '@sales/delivery/data-access';

@Injectable({ providedIn: 'root' })
export class MockHardwareCheckoutFacade {
  createSalesOrder = jest.fn();
  customerAccountDetails$ = of(customerAccountDetailsFactory.build());
  customerType$ = of(CustomerTypeEnum.RESIDENTIAL);
  salesOffer$ = of(defaultSdataSalesOfferFactory.build());
  setEtfOrderItems = jest.fn();
  setSalesOrderState = jest.fn();
  getAddressById = jest.fn();
  addDiscount = jest.fn();
  addOrderItem = jest.fn();
  setSummaryDeliveryAddress = jest.fn();
  deliveryPersonalInfo$ = jest.fn();
  deliveryAddress$ = jest.fn();
  updateDeliveryChars = jest.fn();
  setSummaryDeliveryPersonalInfo = jest.fn();
  setContractSummaryRequired = jest.fn();
  setContractSummaryUrl = jest.fn();
  setContractSummaryGenerationNotPossible = jest.fn();
  createHardwareTLO = jest.fn();
}

const errorMessage = 'Expected method to throw an error.';
const mockEmail = 'john.doe@example.com';

const HTTP_EXAMPLE = 'http://example.com';
const expectedMethodToThrowAnErrorButItDidNot = 'Expected method to throw an error, but it did not.';
describe('StrategyUtil', () => {
  let reverseProxyService!: {
    createSalesOrder: jest.Mock;
  };
  let paymentService!: {
    getPaymentObject: jest.Mock;
  };
  let configService: ConfigService;

  let hardwareCheckoutFacade: HardwareCheckoutFacade;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot({})],
      providers: [
        HardwareCheckoutFacade,
        provideMockStore({ initialState: {} }),
        { provide: 'Window', useValue: window },
        {
          provide: ReverseProxyService,
          useValue: reverseProxyService,
        },
        {
          provide: PaymentService,
          useValue: paymentService,
        },
        {
          provide: ConfigService,
          useValue: configService,
        },
        {
          provide: HardwareCheckoutFacade,
          useClass: MockHardwareCheckoutFacade,
        },
        // Add other providers as needed
      ],
    });

    hardwareCheckoutFacade = TestBed.inject(HardwareCheckoutFacade);
  });

  describe('setSummaryDeliveryAddressFromRetrievedSalesOrder', () => {
    it('should set the summary delivery address when all required address fields are present', (done) => {
      const salesOrder: SalesOrder = salesOrderFactory.build({ id: '1' }); // Mock SalesOrder object
      const deliveryAddress = {
        address: 'Elektriciteitstraat, h. 271, sub h. a, b. 1, 2800, Mechelen, België',
        box: '1',
        deliveryType: '9158239724013806199',
        houseNumber: '27',
        municipality: '9150757940513846006',
        postalCode: '9150757940913872712',
        street: '9150757942913017776',
        subHouseNumber: 'a',
      };

      const mockedPostalCodeResponse = addressUnitTestfactory.build({
        id: '9150757940913872712',
        name: 'Mocked Postal Code',
      });
      const mockedStreetResponse = addressUnitTestfactory.build({
        id: '9150757942913017776',
        name: 'Mocked Street',
      });

      jest.spyOn(SalesOrderUtil, 'getDeliveryChars').mockReturnValue(deliveryAddress);
      jest.spyOn(hardwareCheckoutFacade, 'getAddressById').mockImplementation((id: string) => {
        if (id === '9150757940913872712') {
          return of(mockedPostalCodeResponse);
        } else if (id === '9150757942913017776') {
          return of(mockedStreetResponse);
        }
        return throwError(() => new Error('Invalid ID'));
      });

      const result$ = StrategyUtil.setSummaryDeliveryAddressFromRetrievedSalesOrder(hardwareCheckoutFacade)(
        of(salesOrder)
      );

      result$.subscribe({
        next: (result) => {
          expect(result).toEqual(salesOrder);
          expect(hardwareCheckoutFacade.setSummaryDeliveryAddress).toHaveBeenCalledWith({
            addressUnit: mockedStreetResponse,
            country: AddressUtil.getAddressValue(mockedStreetResponse, 'Country'),
            box: '1',
            subHouseNumber: 'a',
            houseNumber: '27',
            municipality: AddressUtil.getAddressValue(mockedStreetResponse, 'Municipality'),
            postalCode: mockedPostalCodeResponse.name,
            street: mockedStreetResponse.name,
          });
          done();
        },
        error: done.fail,
      });
    });

    it('should throw an error when any required address fields are missing', (done) => {
      const salesOrder: SalesOrder = salesOrderFactory.build({ id: '1' }); // Mock SalesOrder object
      const deliveryAddress = {
        address: 'Elektriciteitstraat, h. 27, sub h. a, b. 1, 2800, Mechelen, België',
        box: '1',
        deliveryType: '9158239724013806199',
        houseNumber: '27',
        // Missing municipality, postalCode, and street
      };

      jest.spyOn(SalesOrderUtil, 'getDeliveryChars').mockReturnValue(deliveryAddress);

      const result$ = StrategyUtil.setSummaryDeliveryAddressFromRetrievedSalesOrder(hardwareCheckoutFacade)(
        of(salesOrder)
      );

      result$.subscribe({
        next: () => done.fail(errorMessage),
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          expect(error.message).toEqual('Incomplete delivery address');
          done();
        },
      });
    });

    it('should handle backend errors during the address lookup process', (done) => {
      const salesOrder: SalesOrder = salesOrderFactory.build({ id: '1' }); // Mock SalesOrder object
      const deliveryAddress = {
        address: 'Elektriciteitstraat, h. 27, sub h. a, b. 1, 2800, Mechelen, België',
        box: '1',
        deliveryType: '9158239724013806199',
        houseNumber: '27',
        municipality: '9150757940513846006',
        postalCode: '9150757940913872712',
        street: '9150757942913017776',
        subHouseNumber: 'a',
      };

      jest.spyOn(SalesOrderUtil, 'getDeliveryChars').mockReturnValue(deliveryAddress);
      jest
        .spyOn(hardwareCheckoutFacade, 'getAddressById')
        .mockReturnValue(throwError(() => new Error('Backend error')));

      const result$ = StrategyUtil.setSummaryDeliveryAddressFromRetrievedSalesOrder(hardwareCheckoutFacade)(
        of(salesOrder)
      );

      result$.subscribe({
        next: () => done.fail(errorMessage),
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          expect(error.message).toEqual('Backend error');
          done();
        },
      });
    });
  });

  describe('createHardwareItems', () => {
    it('should handle missing sales offer', (done) => {
      const salesOrder: SalesOrder = salesOrderFactory.build({ id: '1' }); // Mock SalesOrder object
      jest.spyOn(SalesOrderUtil, 'getHardwareOrderItem').mockReturnValue(
        orderItemTestFactory.build({
          id: 'hw1',
          orderItems: [],
        })
      );
      hardwareCheckoutFacade.salesOffer$ = of(undefined); // No sales offer available

      const result$ = StrategyUtil.createHardwareItems(hardwareCheckoutFacade)(of(salesOrder));

      result$.subscribe({
        next: () => done.fail(expectedMethodToThrowAnErrorButItDidNot),
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          expect(error.message).toEqual('Sales offer not found');
          done();
        },
      });
    });

    it('should handle errors during order item creation', (done) => {
      const salesOrder: SalesOrder = salesOrderFactory.build({ id: '1' }); // Mock SalesOrder object
      jest.spyOn(SalesOrderUtil, 'getHardwareOrderItem').mockReturnValue(
        orderItemTestFactory.build({
          id: 'hw1',
          orderItems: [],
        })
      );

      jest.spyOn(hardwareCheckoutFacade, 'addOrderItem').mockReturnValue(throwError(() => new Error('Failed')));
      const result$ = StrategyUtil.createHardwareItems(hardwareCheckoutFacade)(of(salesOrder));

      result$.subscribe({
        next: () => done.fail(expectedMethodToThrowAnErrorButItDidNot),
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          expect(error.message).toEqual('Failed');
          done();
        },
      });
    });

    it('should handle API errors during order TLO creation', (done) => {
      const salesOrder: SalesOrder = salesOrderFactory.build({ id: '1' }); // Mock SalesOrder object
      jest.spyOn(SalesOrderUtil, 'getHardwareOrderItem').mockImplementation(() => {
        throw new Error('fail');
      });

      jest
        .spyOn(hardwareCheckoutFacade, 'createHardwareTLO')
        .mockReturnValue(throwError(() => new Error('Failed url')));
      const result$ = StrategyUtil.createHardwareItems(hardwareCheckoutFacade)(of(salesOrder));

      result$.subscribe({
        next: () => done.fail(expectedMethodToThrowAnErrorButItDidNot),
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          expect(error.message).toEqual('HC-0004');
          done();
        },
      });
    });
  });

  describe('applyDiscountsRecursively', () => {
    it('should apply discounts recursively on matching discounts', (done) => {
      const salesOrder = salesOrderFactory.build();
      const rule = ruleFactory.build();
      const sdataSalesOffer = defaultSdataSalesOfferFactory.build();
      const offerWithDiscount = sdataSalesOffer.offers.find((offer) => offer.customerChosenDiscount);

      if (!offerWithDiscount || !offerWithDiscount.customerChosenDiscount) {
        done.fail('No offer with discount found');
        return;
      }

      const matchingDiscounts: OrderItemWithMatchingDiscount[] = [
        {
          orderItem: orderItemTestFactory.build(),
          customerChosenDiscount: offerWithDiscount.customerChosenDiscount,
        },
      ];

      jest.spyOn(SalesOrderUtil, 'getOrderItemDiscountRule').mockReturnValue(rule);
      jest.spyOn(hardwareCheckoutFacade, 'addDiscount').mockReturnValue(of(salesOrder));

      StrategyUtil.applyDiscountsRecursively(hardwareCheckoutFacade, matchingDiscounts, salesOrder).subscribe(
        (result) => {
          expect(result).toEqual(salesOrder);
          expect(hardwareCheckoutFacade.addDiscount).toHaveBeenCalledWith(salesOrder.id, rule.id);
          done();
        }
      );
    });

    it('should throw an error if no matching rule is found', () => {
      const salesOrder = salesOrderFactory.build();
      const sdataSalesOffer = defaultSdataSalesOfferFactory.build();
      const offerWithDiscount = sdataSalesOffer.offers.find((offer) => offer.customerChosenDiscount);

      if (!offerWithDiscount || !offerWithDiscount.customerChosenDiscount) {
        throw new Error('No offer with discount found');
      }

      const matchingDiscounts: OrderItemWithMatchingDiscount[] = [
        {
          orderItem: orderItemTestFactory.build(),
          customerChosenDiscount: offerWithDiscount.customerChosenDiscount,
        },
      ];

      jest.spyOn(SalesOrderUtil, 'getOrderItemDiscountRule').mockReturnValue(undefined);

      expect(() => {
        StrategyUtil.applyDiscountsRecursively(hardwareCheckoutFacade, matchingDiscounts, salesOrder).subscribe();
      }).toThrow(HardwareCheckoutError);
    });

    it('should return the current salesOrder if no items are passed', (done) => {
      const salesOrder = salesOrderFactory.build();
      const matchingDiscounts: OrderItemWithMatchingDiscount[] = [];

      StrategyUtil.applyDiscountsRecursively(hardwareCheckoutFacade, matchingDiscounts, salesOrder).subscribe(
        (result) => {
          expect(result).toEqual(salesOrder);
          done();
        }
      );
    });
  });

  describe('updateDeliveryChars', () => {
    const addressUnit = addressUnitTestfactory.build({ id: '9165656195913790999', type: 'Geographical Address' });

    const personalInfo: PersonalInfo = {
      firstname: 'John',
      lastname: 'Doe',
      mobile: '123456789',
      email: mockEmail,
    };

    const deliveryAddress: DeliveryAddress = {
      addressUnit: addressUnit,
      country: 'Country',
      box: 'Box 1',
      subHouseNumber: 'a',
      houseNumber: '27',
      municipality: 'Municipality',
      postalCode: 'Postal Code',
      street: 'Street',
    };

    it('should update delivery chars when personal info and delivery address are present for geographical address', (done) => {
      const salesOrder: SalesOrder = salesOrderFactory.build({ id: '1' });

      hardwareCheckoutFacade.deliveryPersonalInfo$ = of(personalInfo);
      hardwareCheckoutFacade.deliveryAddress$ = of(deliveryAddress);

      jest.spyOn(hardwareCheckoutFacade, 'updateDeliveryChars').mockReturnValue(of(salesOrder));
      jest.spyOn(SalesOrderUtil, 'getDeliveryOrderItem').mockReturnValue(orderItemTestFactory.build());

      StrategyUtil.updateDeliveryChars(hardwareCheckoutFacade)(of(salesOrder)).subscribe({
        next: (result) => {
          expect(result).toEqual(salesOrder);
          expect(hardwareCheckoutFacade.updateDeliveryChars).toHaveBeenCalledWith(
            salesOrder.id,
            expect.any(String),
            expect.objectContaining({
              'First Name': 'John',
              'Last Name': 'Doe',
              'Mobile Number': '123456789',
              'E-Mail': mockEmail,
              Country: '9145466696013668158',
              'Box Number': 'Box 1',
              'Sub-house Number': 'a',
              'House Number': '27',
              'Municipality/Sub-municipality': '9150757940513846006',
              'Postal Code': 'Postal Code',
              Street: '9165656195913790999',
            })
          );
          done();
        },
        error: done.fail,
      });
    });
    it('should update delivery chars when personal info and delivery address are present for street', (done) => {
      const salesOrder: SalesOrder = salesOrderFactory.build({ id: '1' });
      deliveryAddress.addressUnit = addressUnitTestfactory.build({ id: '9165656195913790999', type: 'Street' });

      hardwareCheckoutFacade.deliveryPersonalInfo$ = of(personalInfo);
      hardwareCheckoutFacade.deliveryAddress$ = of(deliveryAddress);

      jest.spyOn(hardwareCheckoutFacade, 'updateDeliveryChars').mockReturnValue(of(salesOrder));
      jest.spyOn(SalesOrderUtil, 'getDeliveryOrderItem').mockReturnValue(orderItemTestFactory.build());

      StrategyUtil.updateDeliveryChars(hardwareCheckoutFacade)(of(salesOrder)).subscribe({
        next: (result) => {
          expect(result).toEqual(salesOrder);
          expect(hardwareCheckoutFacade.updateDeliveryChars).toHaveBeenCalledWith(
            salesOrder.id,
            expect.any(String),
            expect.objectContaining({
              'First Name': 'John',
              'Last Name': 'Doe',
              'Mobile Number': '123456789',
              'E-Mail': mockEmail,
              Country: '9145466696013668158',
              'Box Number': 'Box 1',
              'Sub-house Number': 'a',
              'House Number': '27',
              'Municipality/Sub-municipality': '9150757940513846006',
              Street: '9165656195913790999',
            })
          );
          done();
        },
        error: done.fail,
      });
    });
  });

  describe('setSummaryDeliveryPersonalInfoFromRetrievedSalesOrder', () => {
    it('should set the summary delivery personal info when all required fields are present', (done) => {
      const salesOrder: SalesOrder = { id: '1' } as SalesOrder; // Mock SalesOrder object
      const deliveryChars: OrderItemDeliveryChars = {
        firstName: 'John',
        lastName: 'Doe',
        mobileNumber: '1234567890',
        email: mockEmail,
      };

      jest.spyOn(SalesOrderUtil, 'getDeliveryChars').mockReturnValue(deliveryChars);

      const result$ = StrategyUtil.setSummaryDeliveryPersonalInfoFromRetrievedSalesOrder(hardwareCheckoutFacade)(
        of(salesOrder)
      );

      result$.subscribe({
        next: (result) => {
          expect(result).toEqual(salesOrder);
          expect(hardwareCheckoutFacade.setSummaryDeliveryPersonalInfo).toHaveBeenCalledWith({
            firstname: 'John',
            lastname: 'Doe',
            mobile: '1234567890',
            email: mockEmail,
          });
          done();
        },
        error: done.fail,
      });
    });

    it('should not set summary delivery personal info if required fields are missing', (done) => {
      const salesOrder: SalesOrder = { id: '1' } as SalesOrder; // Mock SalesOrder object
      const deliveryChars: OrderItemDeliveryChars = {
        firstName: '',
        lastName: 'Doe',
        // Missing mobileNumber and email
      };

      jest.spyOn(SalesOrderUtil, 'getDeliveryChars').mockReturnValue(deliveryChars);

      const result$ = StrategyUtil.setSummaryDeliveryPersonalInfoFromRetrievedSalesOrder(hardwareCheckoutFacade)(
        of(salesOrder)
      );

      result$.subscribe({
        next: (result) => {
          expect(result).toEqual(salesOrder);
          expect(hardwareCheckoutFacade.setSummaryDeliveryPersonalInfo).not.toHaveBeenCalled();
          done();
        },
        error: done.fail,
      });
    });
  });

  describe('resetContractSummaryInfo', () => {
    it('should remove the contract summary URL from the session storage', (done) => {
      const salesOrder: SalesOrder = { id: '1' } as SalesOrder; // Mock SalesOrder object
      window.sessionStorage.setItem(SessionStorageConstants.CHECKOUT_CONTRACT_SUMMARY_URL, HTTP_EXAMPLE);
      StrategyUtil.resetContractSummaryInfo()(of(salesOrder)).subscribe({
        next: (result) => {
          expect(result).toEqual(salesOrder);
          expect(window.sessionStorage.getItem(SessionStorageConstants.CHECKOUT_CONTRACT_SUMMARY_URL)).toBeNull();
          done();
        },
        error: done.fail,
      });
    });
  });

  describe('loadContractSummaryInfo', () => {
    it('should set contract summary required and URL from session storage', (done) => {
      window.sessionStorage.setItem(SessionStorageConstants.CHECKOUT_CONTRACT_SUMMARY_REQUIRED, 'true');
      window.sessionStorage.setItem(SessionStorageConstants.CHECKOUT_CONTRACT_SUMMARY_URL, HTTP_EXAMPLE);

      const salesOrder: SalesOrder = { id: '1' } as SalesOrder;

      const result$ = StrategyUtil.loadContractSummaryInfo(hardwareCheckoutFacade)(of(salesOrder));

      result$.subscribe({
        next: (result) => {
          expect(result).toEqual(salesOrder);
          expect(hardwareCheckoutFacade.setContractSummaryRequired).toHaveBeenCalledWith(true);
          expect(hardwareCheckoutFacade.setContractSummaryUrl).toHaveBeenCalledWith(HTTP_EXAMPLE);
          expect(hardwareCheckoutFacade.setContractSummaryGenerationNotPossible).toHaveBeenCalled();
          done();
        },
        error: done.fail,
      });
    });

    it('should handle missing contract summary URL in session storage', (done) => {
      window.sessionStorage.setItem(SessionStorageConstants.CHECKOUT_CONTRACT_SUMMARY_REQUIRED, 'true');
      window.sessionStorage.removeItem(SessionStorageConstants.CHECKOUT_CONTRACT_SUMMARY_URL);

      const salesOrder: SalesOrder = { id: '1' } as SalesOrder;

      const result$ = StrategyUtil.loadContractSummaryInfo(hardwareCheckoutFacade)(of(salesOrder));

      result$.subscribe({
        next: (result) => {
          expect(result).toEqual(salesOrder);
          expect(hardwareCheckoutFacade.setContractSummaryRequired).toHaveBeenCalledWith(true);
          expect(hardwareCheckoutFacade.setContractSummaryUrl).not.toHaveBeenCalled();
          expect(hardwareCheckoutFacade.setContractSummaryGenerationNotPossible).toHaveBeenCalled();
          done();
        },
        error: done.fail,
      });
    });

    it('should handle empty contract summary URL in session storage', (done) => {
      window.sessionStorage.setItem(SessionStorageConstants.CHECKOUT_CONTRACT_SUMMARY_REQUIRED, 'true');
      window.sessionStorage.setItem(SessionStorageConstants.CHECKOUT_CONTRACT_SUMMARY_URL, '');

      const salesOrder: SalesOrder = { id: '1' } as SalesOrder;

      const result$ = StrategyUtil.loadContractSummaryInfo(hardwareCheckoutFacade)(of(salesOrder));

      result$.subscribe({
        next: (result) => {
          expect(result).toEqual(salesOrder);
          expect(hardwareCheckoutFacade.setContractSummaryRequired).toHaveBeenCalledWith(true);
          expect(hardwareCheckoutFacade.setContractSummaryUrl).not.toHaveBeenCalled();
          expect(hardwareCheckoutFacade.setContractSummaryGenerationNotPossible).toHaveBeenCalled();
          done();
        },
        error: done.fail,
      });
    });

    it('should handle contract summary not required in session storage', (done) => {
      window.sessionStorage.setItem(SessionStorageConstants.CHECKOUT_CONTRACT_SUMMARY_REQUIRED, 'false');
      window.sessionStorage.setItem(SessionStorageConstants.CHECKOUT_CONTRACT_SUMMARY_URL, HTTP_EXAMPLE);

      const salesOrder: SalesOrder = { id: '1' } as SalesOrder;

      const result$ = StrategyUtil.loadContractSummaryInfo(hardwareCheckoutFacade)(of(salesOrder));

      result$.subscribe({
        next: (result) => {
          expect(result).toEqual(salesOrder);
          expect(hardwareCheckoutFacade.setContractSummaryRequired).toHaveBeenCalledWith(false);
          expect(hardwareCheckoutFacade.setContractSummaryUrl).toHaveBeenCalledWith(HTTP_EXAMPLE);
          expect(hardwareCheckoutFacade.setContractSummaryGenerationNotPossible).toHaveBeenCalled();
          done();
        },
        error: done.fail,
      });
    });

    it('should handle missing contract summary required in session storage', (done) => {
      window.sessionStorage.removeItem(SessionStorageConstants.CHECKOUT_CONTRACT_SUMMARY_REQUIRED);
      window.sessionStorage.setItem(SessionStorageConstants.CHECKOUT_CONTRACT_SUMMARY_URL, HTTP_EXAMPLE);

      const salesOrder: SalesOrder = { id: '1' } as SalesOrder;

      const result$ = StrategyUtil.loadContractSummaryInfo(hardwareCheckoutFacade)(of(salesOrder));

      result$.subscribe({
        next: (result) => {
          expect(result).toEqual(salesOrder);
          expect(hardwareCheckoutFacade.setContractSummaryRequired).toHaveBeenCalledWith(false);
          expect(hardwareCheckoutFacade.setContractSummaryUrl).toHaveBeenCalledWith(HTTP_EXAMPLE);
          expect(hardwareCheckoutFacade.setContractSummaryGenerationNotPossible).toHaveBeenCalled();
          done();
        },
        error: done.fail,
      });
    });
  });
});
