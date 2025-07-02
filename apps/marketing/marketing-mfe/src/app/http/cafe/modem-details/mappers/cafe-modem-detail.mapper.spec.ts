import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { RawModemDetailInterface } from '../interfaces/raw-modem-details.interface';
import { CafeModemDetailMapper } from './cafe-modem-detail.mapper';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CafeModemDetailModel } from '../models/cafe-modem-detail.model';

const modemDetailInterface: RawModemDetailInterface = require('../../../../../../../../../fixtures/http/cafe/modem-details/modem-detail.json');

describe('CafeModemDetailMapper', () => {
  let modemDetailMapper: CafeModemDetailMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    modemDetailMapper = TestBed.inject(CafeModemDetailMapper);
  });

  describe('toModel', function () {
    it('should return an empty modemDetail model when data is undefined', function () {
      const actual = modemDetailMapper.toModel(undefined);

      expect(actual).toEqual(expect.any(CafeModemDetailModel));
    });

    it('should return a valid modemDetail model', function () {
      const actual = modemDetailMapper.toModel(modemDetailInterface);

      expect(actual.macAddress).toEqual('5C:35:3B:4B:42:DF');
      expect(actual.modemType).toEqual('DOC 3 WIRELESS');
      expect(actual.hardwareType).toEqual('unknown');
      expect(actual.cableRouterName).toEqual('CAP70DEND01');
      expect(actual.internetLineIdentifier).toEqual(undefined);
      expect(actual.installationAddress.street).toEqual('Hamsesteenweg');
      expect(actual.installationAddress.postalCode).toEqual('9200');
      expect(actual.installationAddress.municipality).toEqual('Dendermonde');
      expect(actual.installationAddress.country).toEqual('België');
      expect(actual.installationAddress.subHouseNumber).toEqual('A');
      expect(actual.installationAddress.houseNumber).toEqual('23');
      expect(actual.installationAddress.addressId).toEqual('8aa7yy008f-8w1jd90hst');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
