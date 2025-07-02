import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { SummaryFacade } from './summary.facade';
import { of } from 'rxjs';
import { UrlService } from '@telenet/ng-lib-page';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { setSummaryIngenicoForm, setSummaryIngenicoFormReady } from '../+state/summary.actions';

describe('SummaryFacade', () => {
  let facade: SummaryFacade;
  let store$: MockStore;
  let urlService: UrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore(), { provide: 'Window', useValue: {} }],
    });

    urlService = TestBed.inject(UrlService);
    facade = TestBed.inject(SummaryFacade);
    store$ = TestBed.inject(MockStore);
    jest.spyOn(store$, 'dispatch');
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('setIngenicoFormReady', () => {
    it('should call store with ingenicoFormready action', () => {
      facade.setIngenicoFormReady(true);
      expect(store$.dispatch).toHaveBeenCalledWith(setSummaryIngenicoFormReady({ ingenicoFormReady: true }));
    });
  });

  describe('setIngenicoFormReady', () => {
    it('should call store with ingenicoFormready action', () => {
      const ingenicoForm = {
        ACCEPTURL: '',
        ALIAS: '',
        ALIASOPERATION: '',
        ALIASUSAGE: '',
        AMOUNT: '',
        BRAND: '',
        CANCELURL: '',
        CN: '',
        CURRENCY: '',
        DECLINEURL: '',
        DEVICE: '',
        EMAIL: '',
        EXCEPTIONURL: '',
        LANGUAGE: '',
        ORDERID: '',
        OWNERADDRESS: '',
        OWNERCTY: '',
        OWNERTELNO: '',
        OWNERTOWN: '',
        OWNERZIP: '',
        PARAMPLUS: '',
        PARAMVAR: '',
        PM: '',
        PMLISTTYPE: '',
        PSPID: '',
        SECRET: '',
        SHASIGN: '',
        TP: '',
      };
      facade.setIngenicoForm(ingenicoForm);
      expect(store$.dispatch).toHaveBeenCalledWith(setSummaryIngenicoForm({ ingenicoForm: ingenicoForm }));
    });
  });

  describe('showTermsAndConditions', () => {
    it('should call urlService to open the stored url in new tab', fakeAsync(() => {
      const urlServiceSpy = jest.spyOn(urlService, 'openNewTab').mockImplementation(() => true);
      facade.termsAndConditionsUrl$ = of('/test/url');
      facade.showTermsAndConditions().subscribe();
      tick();
      expect(urlServiceSpy).toHaveBeenCalledWith('/test/url');
    }));
    it('should throw error if no url provided', fakeAsync(() => {
      facade.termsAndConditionsUrl$ = of(undefined);
      expect(() => {
        facade.showTermsAndConditions().subscribe();
        tick();
      }).toThrowError('No Terms and Conditions URL provided');
    }));
  });
});
