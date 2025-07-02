import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContactDetails } from '../../models/contact/contact-details.model';
import { LineContactDetailsMapper } from './line-contact-details.mapper';
import { expect } from '@jest/globals';

const mockResponse = require('../../../../../../../../../fixtures/http/fleet/contacts/contact-details.json');
describe('LineContactDetailsMapper', () => {
  let lineContactDetailsMapper: LineContactDetailsMapper;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LineContactDetailsMapper],
      imports: [HttpClientTestingModule],
    });
    lineContactDetailsMapper = TestBed.inject(LineContactDetailsMapper);
  });

  describe('toModel', () => {
    let contactDetails: ContactDetails;
    beforeEach(() => {
      contactDetails = lineContactDetailsMapper.toModel(mockResponse.contactdetails);
    });

    it('should correctly map the response', () => {
      const individual = contactDetails.individual;
      const email = contactDetails.contactInfo.emails[0];

      expect(individual.epithet).toBe('Mr.');
      expect(individual.firstName).toBe('hello');
      expect(individual.lastName).toBe('world');
      expect(contactDetails.birthDate).toBe('1988-02-26');
      expect(contactDetails.language).toBe('NL');
      expect(email.id).toBe('9154387551713052832');
      expect(email.value).toBe('test@user.com');
      expect(contactDetails.contactInfo.phones).toEqual([]);
    });
  });
  afterEach(() => {
    cleanStylesFromDom();
  });
});
