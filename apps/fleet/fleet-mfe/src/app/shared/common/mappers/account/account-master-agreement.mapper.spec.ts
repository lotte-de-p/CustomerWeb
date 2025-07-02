import { TestBed } from '@angular/core/testing';
import { OmapiProduct, OmapiProductMapper } from '@telenet/ng-lib-omapi';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { AccountMasterAgreementMapper } from './account-master-agreement.mapper';
import {
  RawAccountMasterAgreementInterface,
  RawBundle,
} from '../../interfaces/account/raw-account-bundle-agreement.interface';
import { AccountMasterAgreementInterface, Bundle } from '../../interfaces/account/account-bundle-agreement.interface';

describe('AccountMasterAgreementMapper', () => {
  let accountMasterAgreementMapper: AccountMasterAgreementMapper;
  let omapiProductMapper: OmapiProductMapper;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmapiProductMapper, { provide: 'Window', useValue: {} }],
    });
    accountMasterAgreementMapper = TestBed.inject(AccountMasterAgreementMapper);
    omapiProductMapper = TestBed.inject(OmapiProductMapper);
  });

  const mockRawAccountMasterAgreementInterface = {
    activeMSA: [
      {
        bundles: [
          {
            activePlan: true,
            externalProductCode: '1234',
            name: 'test',
            specurl: 'test specurl',
            rawOmapi: {},
          } as RawBundle,
        ] as RawBundle[],
      },
    ],
  } as RawAccountMasterAgreementInterface;

  describe('toModel', () => {
    it('should map the raw data to account master agreement model', () => {
      jest.spyOn(omapiProductMapper, 'toModel').mockReturnValue({} as OmapiProduct);
      const expectedResult = {
        activeMSA: [
          {
            bundles: [
              {
                activePlan: true,
                externalProductCode: '1234',
                name: 'test',
                productInfo: {},
              } as Bundle,
            ] as Bundle[],
          },
        ],
      } as AccountMasterAgreementInterface;

      const result = accountMasterAgreementMapper.toModel(mockRawAccountMasterAgreementInterface);

      expect(omapiProductMapper.toModel).toHaveBeenCalled();
      expect(result).toEqual(expectedResult);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
