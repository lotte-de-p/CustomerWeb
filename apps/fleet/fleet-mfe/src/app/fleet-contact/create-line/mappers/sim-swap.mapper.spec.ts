import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LanguageEnum } from '@telenet/ng-lib-page';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { expect } from '@jest/globals';
import { SimSwapMapper } from './sim-swap.mapper';
import { SimDetailsModel } from '../../../shared/common/models/sim-details.model';
import { RawSimDetails } from '../../../shared/common/interfaces/raw-sim-details.interface';

describe('SimSwapMapper', () => {
  let simSwapMapper: SimSwapMapper;
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
    simSwapMapper = TestBed.inject(SimSwapMapper);
  });
  describe('toModel', () => {
    it('should return an empty array if data is an empty array', () => {
      const simDetailsModel = {} as SimDetailsModel;
      const model = simSwapMapper.toModel(undefined);
      expect(model).toEqual(simDetailsModel);
    });

    it('should map response to model', () => {
      const sim = '8932030003205612876';
      const puk = '09049463';
      const status = 'Active';
      const rawSimDetails: RawSimDetails = {
        sim: sim,
        puk: puk,
        status: status,
      };
      const result = simSwapMapper.toModel(rawSimDetails);
      expect(result.sim).toBe(sim);
      expect(result.puk).toBe(puk);
      expect(result.status).toBe(status);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
