import { TestBed } from '@angular/core/testing';

import { CustomerContactService } from './customer-contact.service';
import { expect, jest } from '@jest/globals';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContactDetailsMapper } from '../../mappers/contact/contact-details-mapper';
import { LineContactDetailsListMapper } from '../../mappers/contact/line-contact-details-list.mapper';
import { LineContactDetailsMapper } from '../../mappers/contact/line-contact-details.mapper';
import { PostRequestSuccessMapper } from '../../mappers/post-request-success-mapper';
import { of } from 'rxjs';
import { ProductContactDescriptionInterface } from '../../../../fleet-profile/line-identification-details/interfaces/product-contact-description.interface';
import { CustomerProductHoldingMapper } from '../../mappers/customer-product-holding/customer-product-holding.mapper';

describe('CustomerContactService', () => {
  const productIdentifier = 'DTV00123';
  const defaultUrl = '/public/api/fleet-product-service/v1';
  let service: CustomerContactService, ocapiService: OcapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OcapiService,
        ContactDetailsMapper,
        LineContactDetailsListMapper,
        LineContactDetailsMapper,
        PostRequestSuccessMapper,
        { provide: 'Window', useValue: {} },
      ],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CustomerContactService);
    ocapiService = TestBed.inject(OcapiService);
  });

  describe('updateCustomerContact', () => {
    it('should update customer contact description', () => {
      jest.spyOn(ocapiService, 'doPut').mockReturnValue(of({ status: 200 }));
      const requestParameters = {
        messageGroup: 'line-identification-service',
        postData: {
          referenceInformation: 'description',
          customerContactId: '0955628359',
        } as ProductContactDescriptionInterface,
      };

      service
        .updateCustomerContact(requestParameters.messageGroup, productIdentifier, requestParameters.postData)
        .subscribe((result) => expect(result).toBeDefined());

      expect(ocapiService.doPut).toHaveBeenCalledWith(
        expect.objectContaining({
          messageGroupName: requestParameters.messageGroup,
          endpoint: `${defaultUrl}/products/${productIdentifier}`,
          mapper: expect.any(PostRequestSuccessMapper),
        })
      );
    });
  });
});
