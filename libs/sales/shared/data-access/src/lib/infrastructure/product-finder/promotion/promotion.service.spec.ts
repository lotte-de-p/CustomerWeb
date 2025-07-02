import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { PromotionMapper } from './promotion.mapper';
import { PromotionService } from './promotion.service';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { Observable, of } from 'rxjs';
import { Promotion } from '../../../entities/product-finder/promotion/promotion.interface';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PromotionService', () => {
  let promotionService: PromotionService;
  let promotionMapper: PromotionMapper;
  let ocapiService: OcapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    promotionService = TestBed.inject(PromotionService);
    promotionMapper = TestBed.inject(PromotionMapper);
    ocapiService = TestBed.inject(OcapiService);
  });

  describe('getPromotions', () => {
    it('should call ocapi', fakeAsync(() => {
      const expected: Promotion[] = [
        {
          description: 'description',
        },
      ];

      const doGetPromotionsSpy = jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(expected));

      const result$: Observable<Promotion[]> = promotionService.getPromotions();

      result$.subscribe((actual: Promotion[]) => {
        expect(actual).toEqual(expected);
        expect(doGetPromotionsSpy).toHaveBeenCalledWith(
          new OcapiCallConfig(
            'product-finder',
            '/public/?p=promotions',
            promotionMapper,
            undefined,
            undefined,
            undefined,
            undefined,
            true
          )
        );
      });
      tick();
    }));
  });
});
