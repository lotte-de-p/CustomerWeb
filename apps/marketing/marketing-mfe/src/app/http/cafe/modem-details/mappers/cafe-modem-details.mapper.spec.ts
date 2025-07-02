import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { RawModemDetailsInterface } from '../interfaces/raw-modem-details.interface';
import { CafeModemDetailsMapper } from './cafe-modem-details.mapper';
import { TestBed } from '@angular/core/testing';
import { CafeModemDetailMapper } from './cafe-modem-detail.mapper';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const modemDetailsInterface: RawModemDetailsInterface = require('../../../../../../../../../fixtures/http/cafe/modem-details/modem-details.json');

describe('CafeModemDetailsMapper', () => {
  let modemDetailsMapper: CafeModemDetailsMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CafeModemDetailMapper, CafeModemDetailsMapper, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    modemDetailsMapper = TestBed.inject(CafeModemDetailsMapper);
  });

  describe('toModel', function () {
    it('should return a valid modemDetails model', () => {
      const actual = modemDetailsMapper.toModel(modemDetailsInterface);

      expect(actual.modemDetails.length).toBe(2);

      expect(actual.modemDetails[0].macAddress).toEqual('8C:35:3B:4B:42:DF');
      expect(actual.modemDetails[0].modemType).toEqual('DOC 24*8 WIRELESS');
      expect(actual.modemDetails[0].hardwareType).toEqual('unknown');
      expect(actual.modemDetails[0].cableRouterName).toEqual('CAP90DOND02');
      expect(actual.modemDetails[0].internetLineIdentifier).toEqual('u580135');
      expect(actual.modemDetails[0].installationAddress.street).toEqual('Liersesteenweg');
      expect(actual.modemDetails[0].installationAddress.postalCode).toEqual('2800');
      expect(actual.modemDetails[0].installationAddress.municipality).toEqual('Mechelen');
      expect(actual.modemDetails[0].installationAddress.country).toEqual('België');
      expect(actual.modemDetails[0].installationAddress.houseNumber).toEqual('4');
      expect(actual.modemDetails[0].installationAddress.addressId).toEqual('6cc7yy007q-9w0jd90hst');

      expect(actual.modemDetails[1].macAddress).toEqual('5C:35:3B:4B:42:DF');
      expect(actual.modemDetails[1].modemType).toEqual('DOC 3 WIRELESS');
      expect(actual.modemDetails[1].hardwareType).toEqual('unknown');
      expect(actual.modemDetails[1].cableRouterName).toEqual('CAP70DEND01');
      expect(actual.modemDetails[1].internetLineIdentifier).toEqual(undefined);
      expect(actual.modemDetails[1].installationAddress.street).toEqual('Hamsesteenweg');
      expect(actual.modemDetails[1].installationAddress.postalCode).toEqual('9200');
      expect(actual.modemDetails[1].installationAddress.municipality).toEqual('Dendermonde');
      expect(actual.modemDetails[1].installationAddress.country).toEqual('België');
      expect(actual.modemDetails[1].installationAddress.subHouseNumber).toEqual('A');
      expect(actual.modemDetails[1].installationAddress.houseNumber).toEqual('23');
      expect(actual.modemDetails[1].installationAddress.addressId).toEqual('8aa7yy008f-8w1jd90hst');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
