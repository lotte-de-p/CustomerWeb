import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { CustomerContactService } from './customer-contact.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CookieService } from 'ngx-cookie-service';
import { of } from 'rxjs';
import { ContactDetailsMapper } from '../mapper/contact-details.mapper';

const mockContactDetails = require('../../../data/contact-details.json');

describe('CustomerContactService', () => {
  let ocapiService: OcapiService, customerContactService: CustomerContactService, messageGroupName: string;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OcapiService,
        CustomerContactService,
        ContactDetailsMapper,
        CookieService,
        { provide: 'Window', useValue: {} },
      ],
      imports: [HttpClientTestingModule],
    });
    customerContactService = TestBed.inject(CustomerContactService);
    ocapiService = TestBed.inject(OcapiService);
    messageGroupName = 'address-checker';
  });

  describe('getContacts', () => {
    it('should call the ocapi service with the given message group name, correct end point and mapper', () => {
      const url = '/public/api/customer-service/v2/contactdetails';
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(mockContactDetails));
      customerContactService
        .getContacts(messageGroupName)
        .subscribe((response) => expect(response.class).toBe(mockContactDetails));
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        new OcapiCallConfig(messageGroupName, url, new ContactDetailsMapper())
      );
    });
  });
});
