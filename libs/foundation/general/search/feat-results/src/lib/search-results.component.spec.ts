import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchResultsComponent } from './search-results.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { expect } from '@jest/globals';
import { defaultState, SearchFacadeService } from '@general/data-access-search';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { provideMockStore } from '@ngrx/store/testing';
import { UrlService } from '@telenet/ng-lib-page';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let searchFacadeService: SearchFacadeService;
  let urlService: UrlService;
  let fixture: ComponentFixture<SearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SearchResultsComponent,
        EffectsModule.forRoot({}),
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        StoreModule.forRoot({}),
      ],
      providers: [
        HttpClient,
        HttpHandler,
        provideMockStore({ initialState: { searchFeature: defaultState } }),
        { provide: 'Window', useValue: window },
      ],
    }).compileComponents();

    jest.spyOn(console, 'info').mockImplementation(jest.fn);
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    component.searchResultsCollections =
      '[{"value":"telenet_residential_nl", "text": "Particulieren"}, {"value":"telenet_smele_nl", "text": "Bedrijven"}, {"value":"telenet_soho_nl", "text": "Zelfstandigen"}]';
    component.searchResultsFacets = '[subject,category,type]';
    component.includeHardwareResults = 'true';
    component.brand = 'brand';
    component.language = 'language';
    searchFacadeService = TestBed.inject(SearchFacadeService);
    urlService = TestBed.inject(UrlService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleFiltersOverlay', () => {
    it('should toggle the filter overlay status', function () {
      component.filtersOverlayActive = false;
      component.toggleFiltersOverlay();
      expect(component.filtersOverlayActive).toBeTruthy();
      component.toggleFiltersOverlay();
      expect(component.filtersOverlayActive).toBeFalsy();
    });
  });

  describe('ngOnInit', () => {
    it('should not set input parameters if already have been set', () => {
      jest.spyOn(searchFacadeService, 'setInputParameters');

      searchFacadeService.setInputParameters('telenet_residential_nl', 'page', 'brand-facade', 'language-facade');

      component.ngOnInit();

      expect(searchFacadeService.setInputParameters).toHaveBeenCalledTimes(1);
      expect(searchFacadeService.setInputParameters).toHaveBeenCalledWith(
        'telenet_residential_nl',
        'page',
        'brand-facade',
        'language-facade'
      );
    });

    it('should set input parameters if no brand and language have been set', () => {
      jest.spyOn(searchFacadeService, 'setInputParameters');

      component.ngOnInit();

      expect(searchFacadeService.setInputParameters).toHaveBeenCalledTimes(1);
      expect(searchFacadeService.setInputParameters).toHaveBeenCalledWith('', '', 'brand', 'language');
    });

    it('should call initial search of facadeservice', function () {
      jest.spyOn(searchFacadeService, 'initialSearch');

      component.ngOnInit();

      expect(searchFacadeService.initialSearch).toHaveBeenCalledWith(
        [
          { value: 'telenet_residential_nl', text: 'Particulieren' },
          { value: 'telenet_smele_nl', text: 'Bedrijven' },
          { value: 'telenet_soho_nl', text: 'Zelfstandigen' },
        ],
        ['subject', 'category', 'type'],
        true
      );
    });

    it('should add url params to the seach facade', function () {
      jest
        .spyOn(urlService, 'getRequestParameters')
        .mockReturnValue({ q: 'test', collection: 'telenet_residential_nl', page: '5' });

      jest.spyOn(searchFacadeService, 'setQuery');
      jest.spyOn(searchFacadeService, 'setCollection');
      jest.spyOn(searchFacadeService, 'setPage');

      component.ngOnInit();

      expect(searchFacadeService.setQuery).toHaveBeenCalledWith('test');
      expect(searchFacadeService.setCollection).toHaveBeenCalledWith('telenet_residential_nl');
      expect(searchFacadeService.setPage).toHaveBeenCalledWith(5);
    });

    it('should add url params to the seach facade from an available language', function () {
      jest
        .spyOn(urlService, 'getRequestParameters')
        .mockReturnValue({ q: 'test', collection: 'telenet_residential_fr', page: '5' });

      jest.spyOn(searchFacadeService, 'setQuery');
      jest.spyOn(searchFacadeService, 'setCollection');
      jest.spyOn(searchFacadeService, 'setPage');

      component.ngOnInit();

      expect(searchFacadeService.setQuery).toHaveBeenCalledWith('test');
      expect(searchFacadeService.setCollection).toHaveBeenCalledWith('telenet_residential_nl');
      expect(searchFacadeService.setPage).toHaveBeenCalledWith(5);
    });

    it('should remove url params from url if the collection is not found', function () {
      jest
        .spyOn(urlService, 'getRequestParameters')
        .mockReturnValue({ q: 'test', collection: 'telenet_random_fr', page: '5' });

      jest.spyOn(searchFacadeService, 'setQuery');
      jest.spyOn(searchFacadeService, 'setCollection');
      jest.spyOn(searchFacadeService, 'setPage');
      jest.spyOn(urlService, 'removeURLParameters');

      component.ngOnInit();

      expect(searchFacadeService.setQuery).toHaveBeenCalledWith('test');
      expect(searchFacadeService.setPage).toHaveBeenCalledWith(5);
      expect(urlService.removeURLParameters).toHaveBeenCalledWith(['collection']);
      expect(searchFacadeService.setCollection).not.toBeCalled();
    });

    it('should not set the url params when they are not present', function () {
      jest.spyOn(urlService, 'getRequestParameters').mockReturnValue({});

      jest.spyOn(searchFacadeService, 'setQuery');
      jest.spyOn(searchFacadeService, 'setCollection');
      jest.spyOn(searchFacadeService, 'setPage');

      component.ngOnInit();

      expect(searchFacadeService.setQuery).not.toBeCalled();
      expect(searchFacadeService.setCollection).not.toBeCalled();
      expect(searchFacadeService.setPage).not.toBeCalled();
    });

    it('should set results component found to true in the state', function () {
      jest.spyOn(urlService, 'getRequestParameters').mockReturnValue({});

      jest.spyOn(searchFacadeService, 'setResultsComponentFound');

      component.ngOnInit();

      expect(searchFacadeService.setResultsComponentFound).toBeCalled();
    });
  });

  describe('facadeService', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should call selectFacet of facadeService', function () {
      jest.spyOn(searchFacadeService, 'selectFacet');

      component.facetChanged(0, 0);

      expect(searchFacadeService.selectFacet).toHaveBeenCalledWith(0, 0, true);
    });

    it('should call clearFacets of facadeService', function () {
      jest.spyOn(searchFacadeService, 'clearFacets');

      component.facetsCleared();

      expect(searchFacadeService.clearFacets).toHaveBeenCalledWith(true);
    });

    it('should call selectCollection of facadeService', function () {
      jest.spyOn(searchFacadeService, 'selectCollection');

      component.collectionChanged(0);

      expect(searchFacadeService.selectCollection).toHaveBeenCalledWith(0, true);
    });
  });
});
