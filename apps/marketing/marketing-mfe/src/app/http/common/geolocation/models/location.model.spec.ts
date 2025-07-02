import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Location } from './location.model';
import { LocationMapper } from '../mappers/location.mapper';

describe('LocationModel', () => {
  let locationMapper: LocationMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    locationMapper = TestBed.inject(LocationMapper);
  });

  describe('toModel', () => {
    let location: Location;
    beforeEach(() => {
      const mockData = {
        postalCode: '2800',
        location: 'Mechelen',
      };
      location = locationMapper.toModel(mockData);
    });

    it('should MAP the location data', () => {
      expect(location.toString()).toBe('2800 - Mechelen');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
