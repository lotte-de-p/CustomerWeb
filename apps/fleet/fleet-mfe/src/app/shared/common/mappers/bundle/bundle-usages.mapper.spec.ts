import { TestBed } from '@angular/core/testing';
import { OmapiProduct, OmapiProductMapper } from '@telenet/ng-lib-omapi';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { RawBundleUsages, RawGroupBundleUsage } from '../../interfaces/bundle/raw-bundle-usages.model';
import { BundleUsagesMapper } from './bundle-usages.mapper';
import { GroupBundleUsage } from '../../interfaces/bundle/group-bundle-usage.model';
import { BundleUsages } from '../../interfaces/bundle/bundle-usages.model';
import { jest, expect } from '@jest/globals';

describe('BundleUsagesMapper', () => {
  let bundleUsagesMapper: BundleUsagesMapper;
  let omapiProductMapper: OmapiProductMapper;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmapiProductMapper, { provide: 'Window', useValue: {} }],
    });
    bundleUsagesMapper = TestBed.inject(BundleUsagesMapper);
    omapiProductMapper = TestBed.inject(OmapiProductMapper);
  });

  const mockRawBundleUsages = {
    lastUpdated: '12.12.2022',
    groupBundle: [
      {
        name: 'name test',
        specurl: 'specurl test',
        startUnits: '100',
        remainingUnits: '50',
        usedUnits: '50',
        usedPercentage: 50,
        unitType: 'GB',
        rawOmapi: {},
      } as RawGroupBundleUsage,
    ] as RawGroupBundleUsage[],
  } as RawBundleUsages;

  describe('toModel', () => {
    it('should map the raw data to bundle usages model', () => {
      jest.spyOn(omapiProductMapper, 'toModel').mockReturnValue({} as OmapiProduct);
      const mockBundleUsages = {
        lastUpdated: '12.12.2022',
        groupBundleUsages: [
          {
            name: 'name test',
            specurl: 'specurl test',
            startUnits: '100',
            remainingUnits: '50',
            usedUnits: '50',
            usedPercentage: 50,
            unitType: 'GB',
            productInfo: {},
          } as GroupBundleUsage,
        ] as GroupBundleUsage[],
      } as BundleUsages;

      const result = bundleUsagesMapper.toModel(mockRawBundleUsages);

      expect(omapiProductMapper.toModel).toHaveBeenCalled();
      expect(result).toEqual(mockBundleUsages);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
