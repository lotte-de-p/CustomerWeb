import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { CustomerProductHolding } from '../../models/customer-product-holding.model';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { CustomerProductHoldingMapper } from '../../mappers/customer-product-holding/customer-product-holding.mapper';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { expect, jest } from '@jest/globals';
import { ProductTypeMapper } from '../../mappers/products/product-type.mapper';
import { AccountMasterAgreementMapper } from '../../mappers/account/account-master-agreement.mapper';
import { ProductConstants } from '../../constants/products/product.constant';
import { of, throwError } from 'rxjs';
import { CustomerContactService } from '../contact/customer-contact.service';
import { FleetProfileMapper } from '../../mappers/profile/fleet-profile-mapper';
import { CreateProfileConstants } from '../../constants/profile/create-profile.constant';
const mockProductLines = require('./data/product-lines.json');
describe('ProductsService', () => {
  const defaultUrl = '/public/api/fleet-product-service/v1';
  const messageGroup = 'sales';
  const productHoldings$ = of(<CustomerProductHolding>{ splitBillProfile: { id: 'someId', name: 'someName' } });
  let productsService: ProductsService, customerContactService: CustomerContactService, ocapiService: OcapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OcapiService, CustomerProductHoldingMapper, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    ocapiService = TestBed.inject(OcapiService);
    productsService = TestBed.inject(ProductsService);
    customerContactService = TestBed.inject(CustomerContactService);
  });

  describe('getProductByIdentifier', () => {
    it('should get products by identifier', (done) => {
      const identifier = 'BOYO0020';
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(productHoldings$);
      productsService.getProductByIdentifier(messageGroup, identifier).subscribe({
        next: (response) => {
          expect(response?.splitBillProfile?.id).toBe('someId');
          expect(response?.splitBillProfile?.name).toBe('someName');
          expect(ocapiService.doGet).toHaveBeenCalledWith(
            expect.objectContaining({
              messageGroupName: messageGroup,
              endpoint: `${defaultUrl}/products/${identifier}`,
              mapper: expect.any(CustomerProductHoldingMapper),
            })
          );
          done();
        },
      });
    });

    it('should handle error', (done) => {
      const identifier = 'BOYO0020';
      const errorResponse = new Error('An error occurred');
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(throwError(() => errorResponse));

      productsService.getProductByIdentifier(messageGroup, identifier).subscribe({
        error: (error) => {
          expect(error).toBe(errorResponse);
          done();
        },
      });
    });
  });

  describe('getFilteredLines', () => {
    it('get Filtered Lines', (done) => {
      jest.spyOn(ocapiService, 'doPost').mockReturnValue(of(mockProductLines));
      productsService.getFilteredLines('line-overview', {}).subscribe({
        next: (value) => {
          // @ts-ignore
          expect(value.headers['content-range']).toEqual('1-200/*');
          // @ts-ignore
          expect(value.body.length).toBe(42);
          done();
        },
      });
    });
  });

  describe('getProductType', () => {
    it('should get the product type ', (done) => {
      const phoneNumber = '0477777777';
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of({}));

      productsService.getProductType(messageGroup, phoneNumber).subscribe({
        next: () => {
          expect(ocapiService.doGet).toHaveBeenCalledWith(
            expect.objectContaining({
              messageGroupName: messageGroup,
              endpoint: `/public/api/fleet-product-service/v1/products/${phoneNumber}${ProductConstants.PRODUCT_TYPE}`,
              mapper: expect.any(ProductTypeMapper),
            })
          );
          done();
        },
      });
    });
  });

  describe('getGroupBundles', () => {
    it('should get group bundles', (done) => {
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of({}));
      productsService.getGroupBundles(messageGroup, '1234').subscribe({
        next: () => {
          expect(ocapiService.doGet).toHaveBeenCalledWith(
            expect.objectContaining({
              messageGroupName: messageGroup,
              endpoint: `${defaultUrl}/groupbundles/1234`,
              mapper: expect.any(AccountMasterAgreementMapper),
            })
          );
          done();
        },
      });
    });
  });

  describe('validateFleetProfile', () => {
    it('should validate identifier', () => {
      const ocapiCalled = jest.spyOn(ocapiService, 'doGet').mockReturnValue(of({ success: true }));
      const mockMapper = new FleetProfileMapper();
      productsService
        .validateFleetProfileIdentifier('/end/point', CreateProfileConstants.MESSAGE_GROUP, mockMapper)
        .subscribe((data) => {
          expect(data.success).toBeTruthy();
          expect(ocapiCalled).toHaveBeenCalled();
        });
    });
  });
});
