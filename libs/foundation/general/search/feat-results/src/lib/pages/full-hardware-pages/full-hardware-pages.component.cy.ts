import { FullHardwarePagesComponent } from './full-hardware-pages.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import { defaultState } from '@general/data-access-search';

describe(FullHardwarePagesComponent.name, () => {
  it('renders', () => {
    cy.mount(FullHardwarePagesComponent, {
      providers: [
        HttpClient,
        HttpHandler,
        provideMockStore({ initialState: { searchFeature: defaultState } }),
        { provide: 'Window', useValue: window },
      ],
      componentProperties: {
        hits: [],
        detailsPagePath: '',
      },
    });
  });
});
