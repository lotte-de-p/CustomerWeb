/* eslint-disable sonarjs/no-duplicate-string */
import { ContentPageComponent } from './content-page.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import { SearchFacadeService, defaultState } from '@general/data-access-search';

describe(ContentPageComponent.name, () => {
  it('renders', () => {
    cy.mount(ContentPageComponent, {
      providers: [
        SearchFacadeService,
        HttpClient,
        HttpHandler,
        provideMockStore({ initialState: { searchFeature: defaultState } }),
        { provide: 'Window', useValue: window },
      ],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      componentProperties: {
        displayUrl: '',
        category: '',
        name: '',
        content: '',
      },
    });
  });

  it('renders with content', () => {
    cy.mount(ContentPageComponent, {
      providers: [
        SearchFacadeService,
        HttpClient,
        HttpHandler,
        provideMockStore({ initialState: { searchFeature: defaultState } }),
        { provide: 'Window', useValue: window },
      ],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      componentProperties: {
        displayUrl: 'www.test.be/test',
        category: 'page',
        name: 'Test Page Title',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    });

    cy.getElement('keymatch-badge').should('not.exist');
    cy.getElement('badge').contains('page');
    cy.getElement('url').contains('www.test.be/test');
    cy.getElement('name').contains('Test Page Title');
    cy.getElement('content').contains('Lorem ipsum');
  });

  it('renders with keymatched content', () => {
    cy.mount(ContentPageComponent, {
      providers: [
        SearchFacadeService,
        HttpClient,
        HttpHandler,
        provideMockStore({ initialState: { searchFeature: defaultState } }),
        { provide: 'Window', useValue: window },
      ],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      componentProperties: {
        keyMatch: true,
        displayUrl: 'www.test.be/test',
        name: 'Test Page Title',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    });

    cy.getElement('keymatch-badge').should('exist');
    cy.getElement('url').contains('www.test.be/test');
    cy.getElement('name').contains('Test Page Title');
    cy.getElement('content').contains('Lorem ipsum');
  });
});
