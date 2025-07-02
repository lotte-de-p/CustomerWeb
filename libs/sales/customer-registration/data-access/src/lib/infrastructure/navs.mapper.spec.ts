import { NavsMapper } from './navs.mapper';
import { TestBed } from '@angular/core/testing';

describe('NavsMapper', () => {
  let mapper: NavsMapper;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavsMapper],
    });
    mapper = TestBed.inject(NavsMapper);
  });

  describe('toModel', () => {
    it('should return data as NavsInterface if the httpStatus is present and below 400', () => {
      const result = mapper.toModel({ navScore: '5', navsEncryptedData: 'data' }, 200);

      expect(result).toEqual({ navScore: '5', navsEncryptedData: 'data' });
    });
    it('should throw an error if the httpStatus is present and above 400', () => {
      const error = () => {
        mapper.toModel({ navScore: '5', navsEncryptedData: 'data' }, 405);
      };

      expect(error).toThrow(new Error());
    });
    it('should return data as NavsInterface if the httpStatus is not present', () => {
      const result = mapper.toModel({ navScore: '80', navsEncryptedData: 'otherData' });

      expect(result).toEqual({ navScore: '80', navsEncryptedData: 'otherData' });
    });
  });
});
