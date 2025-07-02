import { TestBed } from '@angular/core/testing';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { MockProvider } from 'ng-mocks';
import { of, take } from 'rxjs';
import { MobileBarringsService } from './mobile-barrings.service';
import { MobileBarrings } from '../entities/mobile-barrings.interface';

describe('mobile barrings service', () => {
  let service: MobileBarringsService;
  let ocapiService: OcapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MobileBarringsService, MockProvider(OcapiService), { provide: 'Window', useValue: {} }],
    });
    service = TestBed.inject(MobileBarringsService);
    ocapiService = TestBed.inject(OcapiService);
  });
  it('should call be', () => {
    const httpResponse: MobileBarrings = {
      productName: 'BASE 9',
      updatable: true,
      productStatus: 'ACTIVE',
      barringGroups: [
        {
          code: 'pay-by-mobile',
          barringSettings: [
            {
              id: '9149454316765665203',
              code: 'pay-by-mobile',
              isBarred: true,
              isSetByFraudManager: false,
            },
          ],
        },
        {
          code: 'roaming',
          barringSettings: [
            {
              id: '9149841377513787259',
              code: 'all-incoming-and-outgoing-while-roaming',
              isBarred: false,
              mutualExclusiveBarringIds: ['9145816944513694044', '9145816944513694015', '9147961129713633603'],
              isSetByFraudManager: false,
            },
            {
              id: '9145816944513694044',
              code: 'incoming-calls-while-roaming',
              isBarred: false,
              mutualExclusiveBarringIds: ['9149841377513787259', '9145817036413694137'],
              isSetByFraudManager: false,
            },
            {
              id: '9145816944513694015',
              code: 'outgoing-calls-while-roaming',
              isBarred: false,
              mutualExclusiveBarringIds: ['9147986090113628517', '9145817036413694123', '9149841377513787259'],
              isSetByFraudManager: false,
            },
            {
              id: '9147961129713633603',
              code: 'roaming-data',
              isBarred: false,
              mutualExclusiveBarringIds: ['9145817118313694255', '9149841377513787259'],
              isSetByFraudManager: false,
            },
            {
              id: '9169852212013719970',
              code: 'roaming-data-guard',
              isBarred: false,
              isSetByFraudManager: false,
            },
          ],
        },
        {
          code: 'premium-voice',
          barringSettings: [
            {
              id: '9148574133765183805',
              code: 'all-premium-rate-numbers',
              isBarred: false,
              mutualExclusiveBarringIds: [
                '9145817036413694123',
                '9148574133765183807',
                '9148574133765183808',
                '9148574133765183809',
              ],
              isSetByFraudManager: false,
            },
            {
              id: '9148574133765183807',
              code: 'premium-rate-erotic-services',
              isBarred: false,
              mutualExclusiveBarringIds: ['9145817036413694123', '9148574133765183805'],
              isSetByFraudManager: false,
            },
            {
              id: '9148574133765183808',
              code: 'premium-rate-services-for-games-etc',
              isBarred: false,
              mutualExclusiveBarringIds: ['9145817036413694123', '9148574133765183805'],
              isSetByFraudManager: false,
            },
            {
              id: '9148574133765183809',
              code: 'premium-rate-television-games',
              isBarred: false,
              mutualExclusiveBarringIds: ['9145817036413694123', '9148574133765183805'],
              isSetByFraudManager: false,
            },
          ],
        },
        {
          code: 'general',
          barringSettings: [
            {
              id: '9149714240165296390',
              code: 'all-incoming-and-outgoing',
              isBarred: true,
              isSetByFraudManager: false,
            },
            {
              id: '9145817036413694137',
              code: 'incoming-calls',
              isBarred: true,
              mutualExclusiveBarringIds: ['9145816944513694044'],
              isSetByFraudManager: false,
            },
            {
              id: '9145817036413694123',
              code: 'outgoing-calls',
              isBarred: true,
              mutualExclusiveBarringIds: [
                '9148574133765183805',
                '9148574133765183807',
                '9148574133765183808',
                '9147986090113628517',
                '9145816944513694015',
                '9148574133765183809',
              ],
              isSetByFraudManager: false,
            },
            {
              id: '9145817118313694306',
              code: 'incoming-texts',
              isBarred: true,
              isSetByFraudManager: false,
            },
            {
              id: '9145817118313694305',
              code: 'outgoing-texts',
              isBarred: false,
              mutualExclusiveBarringIds: [
                '9149714240065296387',
                '9149714240065296388',
                '9149714239965296385',
                '9149714240065296386',
              ],
              isSetByFraudManager: false,
            },
            {
              id: '9145817118313694255',
              code: 'mobile-data',
              isBarred: false,
              mutualExclusiveBarringIds: ['9147961129713633603'],
              isSetByFraudManager: false,
            },
            {
              id: '9147986090113628517',
              code: 'international-calls-from-belgium',
              isBarred: false,
              mutualExclusiveBarringIds: ['9145817036413694123', '9145816944513694015'],
              isSetByFraudManager: false,
            },
          ],
        },
        {
          code: 'premium-sms',
          barringSettings: [
            {
              id: '9149714239965296385',
              code: 'texts-for-games-etc',
              isBarred: false,
              mutualExclusiveBarringIds: ['9145817118313694305'],
              isSetByFraudManager: false,
            },
            {
              id: '9149714240065296386',
              code: 'texts-for-erotic-services-18',
              isBarred: false,
              mutualExclusiveBarringIds: ['9145817118313694305'],
              isSetByFraudManager: false,
            },
            {
              id: '9149714240065296387',
              code: 'texts-for-making-payments-for-de-lijn-etc',
              isBarred: false,
              mutualExclusiveBarringIds: ['9145817118313694305'],
              isSetByFraudManager: false,
            },
            {
              id: '9149714240065296388',
              code: 'texts-for-free-services',
              isBarred: false,
              mutualExclusiveBarringIds: ['9145817118313694305'],
              isSetByFraudManager: false,
            },
          ],
        },
      ],
    };
    jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(httpResponse));

    const result$ = service.getMobileBarrings('0499887766');

    result$.pipe(take(1)).subscribe((value) => {
      expect(value).toEqual(httpResponse);
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        new OcapiCallConfig('mobile-barrings', '/public/api/mobile-barrings-service/v1/mobile-barrings/0499887766')
      );
    });
  });

  it('should call be', () => {
    const httpResponse: MobileBarrings = {
      productName: 'BASE 9',
      updatable: true,
      productStatus: 'ACTIVE',
      barringGroups: [
        {
          code: 'roaming',
          barringSettings: [
            {
              id: '9149841377513787259',
              code: 'all-incoming-and-outgoing-while-roaming',
              isBarred: false,
              mutualExclusiveBarringIds: ['9145816944513694044', '9145816944513694015', '9147961129713633603'],
              isSetByFraudManager: false,
            },
            {
              id: '9145816944513694044',
              code: 'incoming-calls-while-roaming',
              isBarred: false,
              mutualExclusiveBarringIds: ['9149841377513787259', '9145817036413694137'],
              isSetByFraudManager: false,
            },
            {
              id: '9145816944513694015',
              code: 'outgoing-calls-while-roaming',
              isBarred: false,
              mutualExclusiveBarringIds: ['9147986090113628517', '9145817036413694123', '9149841377513787259'],
              isSetByFraudManager: false,
            },
            {
              id: '9147961129713633603',
              code: 'roaming-data',
              isBarred: false,
              mutualExclusiveBarringIds: ['9145817118313694255', '9149841377513787259'],
              isSetByFraudManager: false,
            },
            {
              id: '9169852212013719970',
              code: 'roaming-data-guard',
              isBarred: false,
              isSetByFraudManager: false,
            },
          ],
        },
      ],
    };
    jest.spyOn(ocapiService, 'doPatch').mockReturnValue(of(httpResponse));
    const payload = { updateBarringSettings: [{ id: '11', isBarred: true }] };

    const result$ = service.updateMobileBarrings(payload, '0499887766');

    result$.pipe(take(1)).subscribe((value) => {
      expect(value).toEqual(httpResponse);
      expect(ocapiService.doPatch).toHaveBeenCalledWith(
        new OcapiCallConfig(
          'mobile-barrings',
          '/public/api/mobile-barrings-service/v1/mobile-barrings/0499887766',
          undefined,
          payload
        )
      );
    });
  });
});
