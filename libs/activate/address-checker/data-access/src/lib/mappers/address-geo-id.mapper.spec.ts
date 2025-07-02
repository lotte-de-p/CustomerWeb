import { TestBed } from '@angular/core/testing';
import { AddressGeoIdMapper } from './address-geo-id.mapper';
import { RawAddressGeoIdInterface } from '../interfaces/raw-address-geo-id.interface';

describe('AddressGeoIdMapper', () => {
  let addressGeoIdMapper: AddressGeoIdMapper;
  const GEO_ID = '1234';
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressGeoIdMapper, { provide: 'Window', useValue: {} }],
    });
    addressGeoIdMapper = TestBed.inject(AddressGeoIdMapper);
  });

  describe('toModel', () => {
    it('should map address geo id', () => {
      const rawAddressGeoId: RawAddressGeoIdInterface = { geoId: GEO_ID } as RawAddressGeoIdInterface;

      const geoId: string = addressGeoIdMapper.toModel(rawAddressGeoId);

      expect(geoId).toEqual(GEO_ID);
    });
  });
});
