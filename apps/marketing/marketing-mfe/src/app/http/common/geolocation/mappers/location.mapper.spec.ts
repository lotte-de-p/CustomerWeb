import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { LocationMapper } from './location.mapper';

describe('LocationMapper', () => {
  let locationMapper: LocationMapper;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
      imports: [],
    });
    locationMapper = TestBed.inject(LocationMapper);
  });

  describe('toModel', function () {
    it('should return Location', () => {
      const mockData = {
        postalCode: '2800',
        location: 'mechelen',
      };
      const location = locationMapper.toModel(mockData);
      expect(location.postalCode).toBe('2800');
      expect(location.location).toBe('mechelen');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
