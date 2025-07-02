/* eslint-disable sonarjs/no-duplicate-string */
import { HardwarePageComponent } from './hardware-page.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {
  defaultState,
  HardwarePlanService,
  Product,
  SearchFacadeService,
  SearchResultItem,
} from '@general/data-access-search';
import { of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

type Locale = 'nl' | 'fr' | 'en';

describe(HardwarePageComponent.name, () => {
  it('renders', () => {
    mountWithParameters();
  });

  it('shows price after cashback in cashback label (nl)', () => {
    mountWithParameters('nl');

    cy.getElement('badge').contains(' €129 na €50 cashback ');
  });

  it('shows price after cashback in cashback label (en)', () => {
    mountWithParameters('en');

    cy.getElement('badge').contains(' €129 na €50 cashback ');
  });

  it('shows price after cashback in cashback label (fr)', () => {
    mountWithParameters('fr');

    cy.getElement('badge').contains(' €129 na €50 cashback ');
  });

  const mountWithParameters = (locale: Locale = 'nl') => {
    cy.mount(HardwarePageComponent, {
      providers: [
        {
          provide: HardwarePlanService,
          useValue: {
            getHardwarePlan: () => of(''),
          },
        },
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
        TgTranslateTestingModule.forRoot({
          language: locale,
        }),
      ],
      componentProperties: {
        searchResultItem: {
          product: {
            id: '3300500',
            brand: 'Motorola',
            color: ['#808080'],
            image:
              'https://735280384762-pim-prod-akeneo.s3.eu-central-1.amazonaws.com/2/b/d/e/2bde1dfd57e44b28c2b9a1f6ed1d174b5a5133c2_G73_BLU_FB.png',
            plan: '',
            originalPrice: 299.0,
            discountedPrice: 179.0,
            discountedPriceAfterCashback: 129.0,
            tags: ['cp_label|na €50 cashback'],
          } as Product,
        } as SearchResultItem,
        detailsPagePath: '',
      },
    });
  };
});
