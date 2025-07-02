import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { SuggestionComponent } from './suggestion.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { expect } from '@jest/globals';
import {
  ElasticSearchService,
  SearchApiServiceProvider,
  SearchFacadeService,
  SuggestionItem,
} from '@general/data-access-search';
import { of } from 'rxjs';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

describe('SuggestionComponent', () => {
  let component: SuggestionComponent;
  let fixture: ComponentFixture<SuggestionComponent>;
  let searchFacadeService: SearchFacadeService;
  let elasticSearchService: ElasticSearchService;
  let serviceProvider: SearchApiServiceProvider;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [EffectsModule.forRoot([]), StoreModule.forRoot({})],
      providers: [
        SearchApiServiceProvider,
        {
          provide: ElasticSearchService,
          useFactory: (http: HttpClient) => {
            return new ElasticSearchService(http, 'url');
          },
          deps: [HttpClient],
        },
        HttpClient,
        HttpHandler,
        provideMockStore({}),
        { provide: 'Window', useValue: window },
      ],
    }).compileComponents();

    jest.spyOn(console, 'info').mockImplementation(jest.fn);

    elasticSearchService = TestBed.inject(ElasticSearchService);
    serviceProvider = TestBed.inject(SearchApiServiceProvider);
    searchFacadeService = TestBed.inject(SearchFacadeService);

    jest.spyOn(serviceProvider, 'getService').mockReturnValue(elasticSearchService);

    fixture = TestBed.createComponent(SuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the searchFacade to get the url', (done) => {
    jest.spyOn(searchFacadeService, 'getSearchResultsPageUrl').mockReturnValue(of('url'));

    const actual$ = component.getSearchResultsPageUrl();

    actual$.subscribe((url) => {
      expect(searchFacadeService.getSearchResultsPageUrl).toBeCalled();
      expect(url).toBe('url');
      done();
    });
  });

  it('should call the searchFacade to select the suggestion', () => {
    jest.spyOn(searchFacadeService, 'selectSuggestion');
    const mockItem = {
      text: 'Test Item',
    } as SuggestionItem;
    component.item = mockItem;

    component.selectSuggestion();

    expect(searchFacadeService.selectSuggestion).toBeCalledWith(mockItem);
  });

  it('should not call the searchFacade to select the suggestion when no item is set', () => {
    jest.spyOn(searchFacadeService, 'selectSuggestion');
    component.item = undefined;
    component.selectSuggestion();

    expect(searchFacadeService.selectSuggestion).not.toBeCalled();
  });

  it('should create with no input item', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should create with an input item', () => {
    component.item = {
      text: 'Test Item',
    } as SuggestionItem;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should create with an invalid input item', () => {
    component.item = undefined;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should go to results page if no results component is found', fakeAsync(() => {
    const setQuerySpy = jest.spyOn(searchFacadeService, 'setQuery');
    const redirectOrUpdateSearchResultsPageSpy = jest.spyOn(searchFacadeService, 'redirectOrUpdateSearchResultsPage');
    const setHeaderExpandedSpy = jest.spyOn(searchFacadeService, 'setHeaderExpanded');
    jest.spyOn(searchFacadeService, 'getResultsComponentFound').mockReturnValue(of(false));

    component
      .goToResultsPage('http://localhost:4206/results?q=iphone&collection=telenet_residential_nl&page=1')
      .then(() => {
        expect(setQuerySpy).toBeCalled();
        expect(redirectOrUpdateSearchResultsPageSpy).toBeCalled();
        expect(setHeaderExpandedSpy).toBeCalled();
      });
    tick();
  }));

  it('should emit the clicked item if a results component is found', fakeAsync(() => {
    jest.spyOn(searchFacadeService, 'getResultsComponentFound').mockReturnValue(of(true));
    jest.spyOn(searchFacadeService, 'goToResultsPage');

    component.goToResultsPage('http://localhost:4206/results?q=iphone&collection=telenet_residential_nl&page=1');
    tick();

    expect(searchFacadeService.goToResultsPage).not.toBeCalled();
  }));
});
