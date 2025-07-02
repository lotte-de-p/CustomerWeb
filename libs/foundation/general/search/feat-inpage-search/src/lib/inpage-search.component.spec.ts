import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { defaultState, SearchFacadeService } from '@general/data-access-search';
import { expect, jest } from '@jest/globals';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { InpageSearchComponent } from './inpage-search.component';

describe('InpageSearchComponent', () => {
  let searchFacadeService: SearchFacadeService;
  let component: InpageSearchComponent;
  let fixture: ComponentFixture<InpageSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        InpageSearchComponent,
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
        { provide: 'Window', useValue: { location: { href: '' } } },
      ],
    }).compileComponents();

    jest.spyOn(console, 'info').mockImplementation(jest.fn);

    searchFacadeService = TestBed.inject(SearchFacadeService);
    fixture = TestBed.createComponent(InpageSearchComponent);
    component = fixture.componentInstance;

    component.searchResultsPage = 'page';
    component.searchCollection = '{"value":"telenet_residential_nl", "text":"Particulieren"}';
    component.includeHardwareResults = 'true';
    component.brand = 'brand';
    component.language = 'language';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should take a collections and a resultspage parameter', () => {
    jest.spyOn(searchFacadeService, 'initInPage');

    component.ngOnInit();

    expect(searchFacadeService.initInPage).toHaveBeenCalledWith('telenet_residential_nl', 'page');
  });

  it('should not set input parameters if brand and language have been set', () => {
    jest.spyOn(searchFacadeService, 'setInputParameters');

    searchFacadeService.setInputParameters('telenet_residential_nl', 'page', 'brand-facade', 'language-facade');

    component.ngOnInit();

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

    expect(searchFacadeService.setInputParameters).toHaveBeenCalledWith(
      'telenet_residential_nl',
      'page',
      'brand',
      'language'
    );
  });
});
