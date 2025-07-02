import { PreferenceComponent } from './preference.component';
import {
  PreferenceFacade,
  ProductFinderNgrxModule,
  ProductFinderStepperFacade,
} from '@sales/product-finder/data-access';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { HttpClientModule } from '@angular/common/http';

describe('PreferenceComponent', () => {
  it('should render', () => {
    cy.mount(PreferenceComponent, {
      providers: [PreferenceFacade, ProductFinderStepperFacade, { provide: 'Window', useValue: window }],
      imports: [
        StoreModule.forRoot(),
        EffectsModule.forRoot(),
        ProductFinderNgrxModule,
        TgTranslateTestingModule.forRoot(),
        HttpClientModule,
      ],
    });
  });
});
