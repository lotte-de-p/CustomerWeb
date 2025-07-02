import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { SearchInputComponent } from './search-input.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { expect } from '@jest/globals';
import { defaultState, SearchFacadeService, SearchTypes } from '@general/data-access-search';
import { of } from 'rxjs';
import { UrlService } from '@telenet/ng-lib-page';
import { FormControl, FormGroup } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;
  let facadeService: SearchFacadeService;
  let urlService: UrlService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SearchInputComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        EffectsModule.forRoot([]),
        StoreModule.forRoot({}),
      ],
      providers: [
        SearchFacadeService,
        HttpClient,
        HttpHandler,
        provideMockStore({ initialState: { searchFeature: defaultState } }),
        { provide: 'Window', useValue: window },
        UrlService,
      ],
    }).compileComponents();

    jest.spyOn(console, 'info').mockImplementation(jest.fn);

    facadeService = TestBed.inject(SearchFacadeService);
    urlService = TestBed.inject(UrlService);
    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      jest.spyOn(facadeService, 'searchSuggestions');
      jest.spyOn(component.queryFormControl, 'setValue');
    });

    it('should check the query params and set everything correct when there is a q param', () => {
      jest.spyOn(urlService, 'getRequestParameters').mockReturnValue({ q: 'query' });

      component.ngOnInit();

      expect(urlService.getRequestParameters).toBeCalled();
      expect(component.queryFormControl.setValue).toBeCalled();
    });

    it('should check the query params and do nothing when no query', () => {
      jest.spyOn(urlService, 'getRequestParameters').mockReturnValue({ someKey: 'someParam' });

      component.ngOnInit();

      expect(urlService.getRequestParameters).toBeCalled();
      expect(facadeService.searchSuggestions).not.toBeCalled();
    });
  });

  describe('onValueChanged', () => {
    it('should be able to update the search query', () => {
      const setSearchQuerySpy = jest.spyOn(facadeService, 'searchSuggestions');

      component.onValueChanged('query');

      expect(setSearchQuerySpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('clear', () => {
    it('should call the searchFacade clear function', () => {
      jest.spyOn(facadeService, 'clearHeader');

      component.clear();

      expect(facadeService.clearHeader).toBeCalled();
    });

    it('should empty the query field if clearInput is true', () => {
      const querySpy = jest.spyOn(component.queryFormControl, 'setValue');
      const clearHeaderSpy = jest.spyOn(facadeService, 'clearHeader');
      const focusSpy = jest.spyOn(component.searchInputElement.nativeElement, 'focus');

      component.clear(false, true);

      expect(clearHeaderSpy).toBeCalled();
      expect(querySpy).toBeCalledWith('');
      expect(focusSpy).toBeCalled();
    });

    it('should set header expanded to false if closeHeader is true', () => {
      const clearHeaderSpy = jest.spyOn(facadeService, 'clearHeader');
      const setHeaderExpandedSpy = jest.spyOn(facadeService, 'setHeaderExpanded');

      component.clear(true, false);

      expect(clearHeaderSpy).toBeCalled();
      expect(setHeaderExpandedSpy).toBeCalledWith(false);
    });
  });

  describe('redirectOrUpdateSearchResultsPage', () => {
    beforeEach(() => {
      jest.spyOn(urlService, 'redirectTo');
      jest.spyOn(facadeService, 'getResultsComponentFound').mockReturnValue(of(false));
    });

    it('should redirect to search results page when there is a query', fakeAsync(() => {
      const form = new FormGroup({
        query: new FormControl('modem'),
      });
      jest.spyOn(component.searchFormGroup, 'get').mockReturnValue(form.get('query'));
      jest.spyOn(facadeService, 'goToResultsPage');
      tick();

      component.redirectOrUpdateSearchResultsPage('searchResultsPageUrl');

      expect(facadeService.goToResultsPage).toBeCalledWith('searchResultsPageUrl');
    }));

    it('should do nothing when there is no query', fakeAsync(() => {
      component.redirectOrUpdateSearchResultsPage('searchResultsPageUrl');
      tick();

      expect(urlService.redirectTo).not.toBeCalled();
    }));

    it('should not redirect when a results component is found', fakeAsync(() => {
      const form = new FormGroup({
        query: new FormControl('modem'),
      });
      const goToResultsPageSpy = jest.spyOn(facadeService, 'goToResultsPage');
      jest.spyOn(component.searchFormGroup, 'get').mockReturnValue(form.get('query'));
      jest.spyOn(facadeService, 'goToResultsPage');
      jest.spyOn(facadeService, 'getResultsComponentFound').mockReturnValue(of(true));

      component.redirectOrUpdateSearchResultsPage(
        'http://localhost:4206/results?q=samsung&collection=telenet_residential_nl&page=1'
      );
      tick();

      expect(goToResultsPageSpy).not.toBeCalled();
    }));

    it('should update the state directly when a results component is found', fakeAsync(() => {
      const form = new FormGroup({
        query: new FormControl('modem'),
      });
      jest.spyOn(component.searchFormGroup, 'get').mockReturnValue(form.get('query'));
      jest.spyOn(facadeService, 'getResultsComponentFound').mockReturnValue(of(true));
      const clearFacetsSpy = jest.spyOn(facadeService, 'clearFacets');
      component.redirectOrUpdateSearchResultsPage(
        'http://localhost:4206/results?q=samsung&collection=telenet_residential_nl&page=1'
      );
      tick();

      expect(clearFacetsSpy).toBeCalled();
    }));
  });

  describe('setExpanded', () => {
    it('should add a class to the body when expanded', fakeAsync(() => {
      jest.spyOn(facadeService, 'getHeaderExpanded').mockReturnValue(of(true));
      component.ngOnInit();
      tick(250);

      const bodyElement = document.querySelector('body');
      if (!bodyElement) {
        fail();
      }

      expect(bodyElement.classList).toContain('overflow--hidden');

      // Now test for removal
      jest.spyOn(facadeService, 'getHeaderExpanded').mockReturnValue(of(false));
      component.ngOnInit();
      tick(250);

      expect(bodyElement.classList).not.toContain('overflow--hidden');
    }));

    it('should trigger set of component name on expand', () => {
      const setActiveComponentSpy = jest.spyOn(facadeService, 'setLastUsedComponent');

      component.setExpanded(true);

      expect(setActiveComponentSpy).toHaveBeenCalledWith(SearchTypes.HEADER_SEARCH);
    });

    it('should trigger reset of component name on unexpand', () => {
      const setActiveComponentSpy = jest.spyOn(facadeService, 'setLastUsedComponent');

      component.setExpanded(false);

      expect(setActiveComponentSpy).toHaveBeenCalledWith('');
    });
  });

  describe('onKeydownHandler', () => {
    it('should set isSearchExpanded to false when hitting escape', () => {
      const mockEvent = new KeyboardEvent('keydown', { key: 'Escape' });

      component.onKeydownHandler(mockEvent);

      expect(component.isSearchExpanded).toBeFalsy();
    });
  });

  describe('searchOrOpenHeader', () => {
    it('should set header to expanded if header is not expanded', () => {
      const form = new FormGroup({
        query: new FormControl('modem'),
      });
      jest.spyOn(component.searchFormGroup, 'get').mockReturnValue(form.get('query'));
      const setHeaderExpandedSpy = jest.spyOn(facadeService, 'setHeaderExpanded');

      component.isSearchExpanded = false;
      component.searchOrOpenHeader();

      expect(setHeaderExpandedSpy).toBeCalledWith(true);
    });

    it('should set header to minimized and redirect if header is expanded', () => {
      const form = new FormGroup({
        query: new FormControl('modem'),
      });
      jest.spyOn(component.searchFormGroup, 'get').mockReturnValue(form.get('query'));
      const setHeaderExpandedSpy = jest.spyOn(facadeService, 'setHeaderExpanded');
      const redirectOrUpdateSearchResultsPageSpy = jest.spyOn(facadeService, 'redirectOrUpdateSearchResultsPage');

      component.isSearchExpanded = true;
      component.searchOrOpenHeader();

      expect(setHeaderExpandedSpy).toBeCalledWith(false);
      expect(redirectOrUpdateSearchResultsPageSpy).toBeCalled();
    });
  });
});
