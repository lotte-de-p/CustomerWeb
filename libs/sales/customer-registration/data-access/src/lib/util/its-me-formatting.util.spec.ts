import { ItsMeResponseInterface } from './../infrastructure/its-me.interface';
import { ItsMeFormattingUtil } from './its-me-formatting.util';

describe('ItsMeFormattingUtil', () => {
  const input: ItsMeResponseInterface = {
    cardIDNumber: 'JUX849128603',
    rrn: '12345678901',
    firstName: 'saint-john',
    lastName: 'doe',
    birthLocation: 'new york',
    gender: '',
    birthday: '',
    nationality: '',
    email: '',
    emailVerified: false,
    phoneNumber: '',
    customerAddress: {
      street: 'Main Street (Old Town)',
      postalCode: '1000',
      municipality: 'Brussels',
    },
  };
  const expectedOutput: ItsMeResponseInterface = {
    cardIDNumber: 'JUX-8491286-03',
    rrn: '12.34.56-789.01',
    firstName: 'Saint-John',
    lastName: 'Doe',
    birthLocation: 'New York',
    gender: '',
    birthday: '',
    nationality: '',
    email: '',
    emailVerified: false,
    phoneNumber: '',
    customerAddress: {
      street: 'Main Street ',
      postalCode: '1000',
      municipality: 'Brussels',
    },
  };

  describe('transformBelgianEID', () => {
    it('should format a valid Belgian EID', () => {
      expect(ItsMeFormattingUtil['transformBelgianEID'](input.cardIDNumber)).toEqual(expectedOutput.cardIDNumber);
    });

    it('should throw an error for an invalid Belgian EID', () => {
      const input = 'INVALIDEID';
      expect(() => ItsMeFormattingUtil['transformBelgianEID'](input)).toThrow('Its me eid response is not valid.');
    });
  });

  describe('transformNRN', () => {
    it('should format a valid NRN', () => {
      expect(ItsMeFormattingUtil['transformNRN'](input.rrn)).toEqual(expectedOutput.rrn);
    });

    it('should throw an error for an invalid NRN', () => {
      const input = 'INVALIDNRN';
      expect(() => ItsMeFormattingUtil['transformNRN'](input)).toThrow('Its me nrn response is not valid.');
    });
  });

  describe('formatFirstLetterCapital', () => {
    it('should capitalize the first letter of each part of the input', () => {
      expect(ItsMeFormattingUtil['formatFirstLetterCapital'](input.firstName)).toEqual(expectedOutput.firstName);
    });

    it('should capitalize the first letter of each hyphenated part of the input', () => {
      expect(ItsMeFormattingUtil['formatFirstLetterCapital'](input.birthLocation)).toEqual(
        expectedOutput.birthLocation
      );
    });
  });

  describe('formatItsMeResponse', () => {
    it('should format an ItsMeResponseInterface object correctly', () => {
      expect(ItsMeFormattingUtil.formatItsMeResponse(input)).toEqual(expectedOutput);
    });

    it('should handle missing customerAddress correctly', () => {
      const input: ItsMeResponseInterface = {
        cardIDNumber: 'JUX849128603',
        rrn: '12345678901',
        firstName: 'saint-john',
        lastName: 'doe',
        birthLocation: 'new york',
        gender: '',
        birthday: '',
        nationality: '',
        email: '',
        emailVerified: false,
        phoneNumber: '',
        customerAddress: undefined,
      };
      expectedOutput.customerAddress = undefined;
      expect(ItsMeFormattingUtil.formatItsMeResponse(input)).toEqual(expectedOutput);
    });
  });
});
