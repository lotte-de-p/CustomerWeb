import { PhoneNumberPipe } from './phone-number.pipe';
import { TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

describe('PhoneNumberPipe', () => {
  let phoneNumberPipe: PhoneNumberPipe;
  const LOCAL_PHONE_NUMBER = '0412 34 56 78';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhoneNumberPipe, { provide: 'Window', useValue: {} }],
    });

    phoneNumberPipe = TestBed.inject(PhoneNumberPipe);
  });

  describe('transform', () => {
    it('should return transformed phone number for national phone number', () => {
      const actual = phoneNumberPipe.transform('0412345678');
      expect(actual).toBe(LOCAL_PHONE_NUMBER);
    });
  });
});
