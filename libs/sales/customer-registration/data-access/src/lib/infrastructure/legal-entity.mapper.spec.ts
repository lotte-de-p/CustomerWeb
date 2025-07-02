import { LegalEnityRawInterface } from '../entities/interfaces/legal-entity.interface';
import { LegalEntityMapper } from './legal-entity.mapper';
import { TestBed } from '@angular/core/testing';

describe('LegalEntityMapper', () => {
  let mapper: LegalEntityMapper;
  const legalEntityDetails: LegalEnityRawInterface = {
    domain: 'BusinessCustomerAccount',
    property: 'legalForm',
    values: [
      {
        id: '9153105706113181979',
        name: 'ANDERE',
      },
      {
        id: '9153105706113181980',
        name: 'APRV RP',
      },
      {
        id: '9153105706113181983',
        name: 'AUTOGEMB',
      },
    ],
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LegalEntityMapper],
    });
    mapper = TestBed.inject(LegalEntityMapper);
  });

  describe('toModel', () => {
    it('should return data as LegalEnityRawInterface if the httpStatus is present and below 400', () => {
      const result = mapper.toModel(legalEntityDetails, 200);

      expect(result).toEqual(legalEntityDetails);
    });
    it('should throw an error if the httpStatus is present and above 400', () => {
      const error = () => {
        mapper.toModel(legalEntityDetails, 405);
      };

      expect(error).toThrow(new Error());
    });
    it('should return data as LegalEnityRawInterface if the httpStatus is not present', () => {
      const result = mapper.toModel(legalEntityDetails);

      expect(result).toEqual(legalEntityDetails);
    });
  });
});
