import { TestBed } from '@angular/core/testing';
import { ContactInfoFacade } from './contact-info.facade';
import { contactInfoTestfactory } from '../interfaces/contact-info.testfactory';
import { ContactInfo } from '../interfaces/contact-info.interface';

describe('ContactInfoFacade', () => {
  let facade: ContactInfoFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactInfoFacade],
    });

    facade = TestBed.inject(ContactInfoFacade);
  });

  it('should return a valid customer account', (done) => {
    const mockInfo: ContactInfo = contactInfoTestfactory.build();

    facade.getContactInfo().subscribe((contactInfo: ContactInfo) => {
      expect(contactInfo).toEqual(mockInfo);
      done();
    });
  });
});
