import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LanguageEnum } from '@telenet/ng-lib-page';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { SimDetailsMapper } from './sim-details.mapper';
import { expect } from '@jest/globals';
import { RawSimDetails } from '../../interfaces/raw-sim-details.interface';
import { SimDetailsModel } from '../../models/sim-details.model';

describe('SimDetailsMapper', () => {
  let simDetailsMapper: SimDetailsMapper;
  const setLang = (type: string) => {
    return {
      document: {
        documentElement: {
          lang: type,
        },
      },
    };
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    TestBed.overrideProvider('Window', {
      useValue: setLang(LanguageEnum.NL),
    });
    simDetailsMapper = TestBed.inject(SimDetailsMapper);
  });
  describe('toModel', () => {
    it('should return an empty array if data is an empty array', () => {
      const rawSimDetails: RawSimDetails[] = [];
      const simDetailsModel: SimDetailsModel[] = [];
      const model = simDetailsMapper.toModel(rawSimDetails);
      expect(model).toEqual(simDetailsModel);
    });
    it('should map response to model', () => {
      const sim = '8932030003205612876';
      const puk = '09049463';
      const status = 'Active';
      const simType = 'E_SIM';
      const rawSimDetails: RawSimDetails[] = [
        {
          sim: sim,
          puk: puk,
          status: status,
          simType: simType,
        },
      ];
      const result = simDetailsMapper.toModel(rawSimDetails);
      expect(result.length).toBe(1);
      expect(result[0].sim).toBe(sim);
      expect(result[0].puk).toBe(puk);
      expect(result[0].status).toBe(status);
      expect(result[0].simType).toBe(simType);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
