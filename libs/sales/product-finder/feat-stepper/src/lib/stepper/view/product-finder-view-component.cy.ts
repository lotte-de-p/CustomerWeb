import { ProductFinderViewComponent } from './product-finder-view-component';
import { ProductFinderStep, ProductFinderStepperFacade } from '@sales/product-finder/data-access';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

describe('ProductFinderViewComponent', () => {
  it('should render', () => {
    cy.mount(ProductFinderViewComponent, {
      providers: [MockStore, provideMockStore({ initialState: {} })],
      componentProperties: {
        productFinderSteps: [],
        productFinderStepperFacade: {
          currentStep$: of({} as ProductFinderStep),
          currentStepKey$: of(''),
          steps$: of({} as ProductFinderStep[]),
        } as ProductFinderStepperFacade,
      },
    });
  });
});
