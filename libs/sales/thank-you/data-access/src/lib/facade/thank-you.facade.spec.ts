import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ThankYouFacade } from './thank-you.facade';
import { UrlService } from '@telenet/ng-lib-page';
import { redirectUrl } from '../+state/thank-you.selectors';

describe('ThankYouFacade', () => {
  let facade: ThankYouFacade;
  let store$: MockStore;
  let urlService: UrlService;
  let redirectToSpy: jest.SpyInstance<void, [url: string]>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore(),
        {
          provide: 'Window',
          useValue: window,
        },
      ],
    });

    urlService = TestBed.inject(UrlService);
    facade = TestBed.inject(ThankYouFacade);
    store$ = TestBed.inject(MockStore);
    urlService.redirectTo = jest.fn();
    redirectToSpy = jest.spyOn(urlService, 'redirectTo');
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('redirect', () => {
    it('should redirect to default URL if not in state', fakeAsync(() => {
      store$.overrideSelector(redirectUrl, undefined);
      facade.redirect().subscribe();
      tick();
      expect(redirectToSpy).toHaveBeenCalledWith('telenet.be');
    }));
    it('should redirect to URL in state', fakeAsync(() => {
      store$.overrideSelector(redirectUrl, '/test');
      facade.redirect().subscribe();
      tick();
      expect(redirectToSpy).toHaveBeenCalledWith('/test');
    }));
  });
});
