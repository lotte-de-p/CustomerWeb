import { Builder, Log, LogFactory } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PegaService } from './pega.service';
import { NBARequestParameters } from '../models/nba-request-parameters';
import { of, throwError } from 'rxjs';
import { NBAList } from '../models/nba-list.model';
import { NBA } from '../models/nba.model';
import { LoginDetails, LoginService, OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { SellingArgument } from '../models/selling-argument.model';
import { SalesData, SalesDataOffer } from '../../../../sales/models/sales-data.model';
import { ConfigService } from '@telenet/ng-lib-config';
import { NBAListMapper } from '../mappers/nba-list.mapper';

const spyOn = jest.spyOn;
describe('PegaService', () => {
  let pegaService: PegaService,
    nbaRequestParameters: NBARequestParameters,
    ocapiService: OcapiService,
    loginService: LoginService,
    ocapiNBAListSuccess: NBAList,
    ocapiNBAListFail: NBAList,
    nbaListMapper: NBAListMapper,
    log: Log;

  beforeEach(() => {
    const log = {} as Log;
    log.logError = jest.fn();
    LogFactory.createLogger = jest.fn().mockReturnValue(log);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: 'Window',
          useValue: {
            ContextHub: {
              Constants: {
                PROP_ENABLE_PEGA_PERSONALIZATION: 'true',
              },
            },
          },
        },
        { provide: 'CONFIG_SERVICE', useClass: ConfigService },
      ],
      imports: [HttpClientTestingModule],
    });
    pegaService = TestBed.inject(PegaService);
    nbaRequestParameters = TestBed.inject(NBARequestParameters);
    ocapiService = TestBed.inject(OcapiService);
    loginService = TestBed.inject(LoginService);

    ocapiNBAListSuccess = Builder(NBAList)
      // @ts-ignore
      .actions([new NBA()])
      .customerNumber('cust123pega')
      .interactionId('did123pega')
      .channel('pega')
      .containerName('pega')
      .v('v123')
      .build();

    ocapiNBAListFail = Builder<NBAList>()
      .actions([new NBA()])
      .customerNumber('cust123pega')
      .interactionId('did123pega')
      .channel('pega')
      .containerName('pega')
      .v('v123')
      .build();
  });
  describe('getNBAList', () => {
    it('should return an nbaList from ocapi if request is empty', function () {
      spyOn(ocapiService, 'doGet').mockReturnValue(of(ocapiNBAListSuccess));

      pegaService.getNBAList().subscribe((actual) => {
        expect(actual).toBe(ocapiNBAListSuccess);
      });
    });
    it('should return an nbaList from ocapi if request is not successful', function () {
      spyOn(ocapiService, 'doGet').mockReturnValue(of(ocapiNBAListFail));
      const requestNBAList = Builder(NBAList)
        // @ts-ignore
        .actions([new NBA()])
        .customerNumber('cust123request')
        .interactionId('did123request')
        .channel('EM')
        .containerName('EM')
        .v('v123')
        .build();
      spyOn(nbaRequestParameters, 'toNBAList').mockReturnValue(of(requestNBAList));

      pegaService.getNBAList().subscribe((actual) => {
        expect(actual).toBe(ocapiNBAListFail);
        expect(requestNBAList.isSuccess).toBe(false);
      });
    });
    it('should return an nbaList from request if request is successful', function () {
      spyOn(ocapiService, 'doGet').mockReturnValue(of(ocapiNBAListSuccess));

      const nba = Builder<NBA>()
        .rank('1')
        .sdata(new SalesData())
        .group('Xsell')
        .issue('Sales')
        .name('SAMI_ONEUP')
        .treatment('SAMI_ONEUP_MKT')
        .campaignId('campaign-id')
        .sellingArguments([new SellingArgument('sa123', 1)])
        .build();

      nba.sdata.setOffers([{} as SalesDataOffer]);

      const requestNBAList = Builder<NBAList>()
        .actions([nba])
        .customerNumber('cust123request')
        .interactionId('did123request')
        .channel('EM')
        .containerName('EM')
        .v('v123')
        .build();
      spyOn(nbaRequestParameters, 'toNBAList').mockReturnValue(of(requestNBAList));

      pegaService.getNBAList().subscribe((actual) => {
        expect(actual).toBe(requestNBAList);
        expect(requestNBAList.isSuccess).toBe(true);
      });
    });
    it('should return an empty nbaList if nba from request is not successful and ocapi call fails', function () {
      spyOn(ocapiService, 'doGet').mockReturnValue(throwError(() => ({ status: 401 })));
      const requestNBAList = Builder(NBAList)
        // @ts-ignore
        .customerNumber('cust123request')
        .interactionId('did123request')
        .channel('EM')
        .containerName('EM')
        .v('v123')
        .build();
      spyOn(nbaRequestParameters, 'toNBAList').mockReturnValue(of(requestNBAList));

      pegaService.getNBAList().subscribe((actual) => {
        expect(actual).toEqual(new NBAList());
        expect(requestNBAList.isSuccess).toBe(false);
      });
    });
    it('should return an empty nbaList if nba from request is not successful and window obj dont have pega personalisation param', function () {
      spyOn(ocapiService, 'doGet').mockReturnValue(throwError(() => ({ status: 401 })));
      const requestNBAList = Builder(NBAList)
        // @ts-ignore
        .customerNumber('cust123request')
        .interactionId('did123request')
        .channel('EM')
        .containerName('EM')
        .v('v123')
        .build();
      spyOn(nbaRequestParameters, 'toNBAList').mockReturnValue(of(requestNBAList));

      pegaService.getNBAList().subscribe((actual) => {
        expect(actual).toEqual(new NBAList());
        expect(requestNBAList.isSuccess).toBe(false);
      });
      const result$ = pegaService.getNBAList();

      result$.subscribe(
        (result) => {
          expect(result).toEqual(new NBAList());
          expect(requestNBAList.isSuccess).toBe(false);
        },
        (error: Error) => {
          expect(error.toString()).toBe('Error while fetching NBA list from Pega.');
          expect(log.logError).toHaveBeenCalled();
        }
      );
    });
    it('should return an nbaList from ocapi if request is empty and window obj have pega personalisation param', function () {
      spyOn(ocapiService, 'doGet').mockReturnValue(of(ocapiNBAListSuccess));

      pegaService.getNBAList().subscribe((actual) => {
        expect(actual).toBe(ocapiNBAListSuccess);
      });
    });
    it('should return an empty nbaList if nba from request is not successful and window obj pega personalisation is false', function () {
      spyOn(ocapiService, 'doGet').mockReturnValue(throwError(() => ({ status: 401 })));
      const requestNBAList = Builder(NBAList)
        // @ts-ignore
        .customerNumber('cust123request')
        .interactionId('did123request')
        .channel('EM')
        .containerName('EM')
        .v('v123')
        .build();
      spyOn(nbaRequestParameters, 'toNBAList').mockReturnValue(of(requestNBAList));

      Object.defineProperty(window, 'ContextHub', {
        value: {
          Constants: {
            PROP_ENABLE_PEGA_PERSONALIZATION: 'false',
          },
        },
        writable: true,
      });

      pegaService.getNBAList().subscribe((actual) => {
        expect(actual).toEqual(new NBAList());
        expect(requestNBAList.isSuccess).toBe(false);
      });
    });

    it('should return an empty nbaList for unauthenticated users', function () {
      spyOn(nbaRequestParameters, 'toNBAList').mockReturnValue(of());
      spyOn(loginService, 'getLoginDetails').mockReturnValue(of());

      Object.defineProperty(window, 'ContextHub', {
        value: {
          Constants: {
            PROP_ENABLE_PEGA_PERSONALIZATION: 'true',
          },
        },
        writable: true,
      });

      pegaService.getNBAList().subscribe((actual) => {
        expect(actual).toEqual(new NBAList());
      });
    });

    it('should return an Observable of response from API for authenticated customer', () => {
      Object.defineProperty(window, 'ContextHub', {
        value: {
          Constants: {
            PROP_ENABLE_PEGA_PERSONALIZATION: 'true',
          },
        },
        writable: true,
      });
      const ocapiResponseNBAList = Builder(NBAList)
        // @ts-ignore
        .customerNumber('cust123request')
        .interactionId('did123request')
        .channel('EM')
        .containerName('EM')
        .v('v123')
        .build();
      spyOn(ocapiService, 'doGet').mockReturnValue(of(ocapiResponseNBAList));
      const loginDetails = {} as LoginDetails;
      loginDetails.isLoggedIn = jest.fn().mockReturnValue(true);
      spyOn(loginService, 'getLoginDetails').mockReturnValue(of(loginDetails));

      const result$ = pegaService.getNBAList();

      result$.subscribe((result) => {
        expect(result).toBeInstanceOf(NBAList);
        expect(ocapiService.doGet).toHaveBeenCalledWith(
          new OcapiCallConfig('nbaList', '/public/api/nba-service/v1/next-best-actions?channel=Web', nbaListMapper)
        );
      });
    });
  });
});
