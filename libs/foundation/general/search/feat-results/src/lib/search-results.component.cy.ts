import { SearchResultsComponent } from './search-results.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EffectsModule } from '@ngrx/effects';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { defaultState, SearchFacadeService } from '@general/data-access-search';

describe(SearchResultsComponent.name, () => {
  it('renders', () => {
    cy.mount(SearchResultsComponent, {
      imports: [
        HttpClientTestingModule,
        EffectsModule.forRoot([]),
        StoreModule.forRoot({}),
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [
        SearchFacadeService,
        {
          provide: 'Window',
          useValue: window,
        },
        provideMockStore({ initialState: { searchFeature: defaultState } }),
      ],
      componentProperties: {
        searchResultsCollections:
          '[{"value":"telenet_residential_nl", "text": "Particulieren"}, {"value":"telenet_smele_nl", "text": "Bedrijven"},  {"value":"telenet_soho_nl", "text": "Zelfstandigen"}]',
        searchResultsFacets: '[subject,category,type]',
      },
    });
  });
});
