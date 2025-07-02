import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchHeaderComponent } from './search-header.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { defaultState, SearchFacadeService } from '@general/data-access-search';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

describe('SearchHeaderComponent', () => {
  let searchFacadeService: SearchFacadeService;
  let component: SearchHeaderComponent;
  let fixture: ComponentFixture<SearchHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SearchHeaderComponent,
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
    fixture = TestBed.createComponent(SearchHeaderComponent);
    component = fixture.componentInstance;

    component.searchResultsPage = 'page';
    component.searchResultsCollection = '{"value":"telenet_residential_nl", "text":"Particulieren"}';
    component.brand = 'telenet';
    component.language = 'nl';
    component.includeHardwareResults = 'true';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should take a collections and a resultspage parameter', () => {
    jest.spyOn(searchFacadeService, 'setInputParameters');

    component.ngOnInit();

    expect(searchFacadeService.setInputParameters).toHaveBeenCalledWith(
      'telenet_residential_nl',
      'page',
      'telenet',
      'nl'
    );
  });

  it('should call searchFacadeService.postClick if searchResultId exists', () => {
    jest.spyOn(searchFacadeService, 'postClick');
    window.sessionStorage.setItem('searchResultId', 'id');

    component.ngOnInit();

    expect(searchFacadeService.postClick).toHaveBeenCalledWith('id', 'telenet', 'nl');
  });
});
