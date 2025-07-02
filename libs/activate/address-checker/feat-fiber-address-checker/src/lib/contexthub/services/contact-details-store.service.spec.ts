import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgZone } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { of } from 'rxjs';
import { ContactDetailsStoreService } from './contact-details-store.service';
import { ContactDetails, ContactDetailsMapper, CustomerContactService } from '../../contexthub/index';
import { ContexthubConstants } from '@telenet/ng-lib-page';

const mockContactDetails = require('../../../data/contact-details.json');

describe('ContactDetailsStoreService', () => {
  let contactDetailsStoreService: ContactDetailsStoreService;
  let customerContactService: CustomerContactService;
  let contactDetailsMapper: ContactDetailsMapper;
  let ngZone: NgZone;
  let dataLayerService: DataLayerService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerContactService, DataLayerService, { provide: 'Window', useValue: window }],
      declarations: [],
      imports: [HttpClientTestingModule],
    });
    ngZone = TestBed.inject(NgZone);
    customerContactService = TestBed.inject(CustomerContactService);
    contactDetailsMapper = TestBed.inject(ContactDetailsMapper);
    dataLayerService = TestBed.inject(DataLayerService);
    contactDetailsStoreService = new ContactDetailsStoreService(
      ngZone,
      window,
      customerContactService,
      dataLayerService
    );
  });

  describe('onLoadData', () => {
    it('should call create the store', () => {
      const contactDetails = contactDetailsMapper.toModel(mockContactDetails);
      jest.spyOn(customerContactService, 'getContacts').mockReturnValue(of(contactDetails));
      contactDetailsStoreService.onLoadData().subscribe((actual: ContactDetails) => {
        expect(actual).toEqual(contactDetails);
        expect(customerContactService.getContacts).toHaveBeenCalledWith(
          ContexthubConstants.MESSAGE_GROUP_CONTACT_DETAILS
        );
      });
    });
  });
});
